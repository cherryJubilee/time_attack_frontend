"use client";

import { useAuth } from "@/context/auth.context";
import Link from "next/link";

function HeaderMenus() {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <div className="ml-auto flex items-center">
      {isLoggedIn ? (
        <>
          <Link href="/cart" className="text-sm text-black px-3 py-2 rounded ">
            장바구니
          </Link>
          <Link
            href="/log-out"
            className="text-sm text-black px-3 py-2 rounded "
          >
            로그아웃
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/sign-up"
            className="text-sm text-black px-3 py-2 rounded"
          >
            회원가입
          </Link>
          <button className="text-sm text-black px-3 py-2 rounded ">
            로그인하기
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;
