"use client";

import Link from "next/link";

function HeaderMenus() {
  return (
    <div className="ml-auto flex items-center">
      <Link href="/cart" className="text-sm text-black px-3 py-2 rounded ">
        장바구니
      </Link>
      <button className="text-sm text-black px-5 py-2 rounded">로그아웃</button>

      <Link href="/sign-up" className="text-sm text-black px-3 py-2 rounded">
        회원가입
      </Link>
      <button className="text-sm text-black px-3 py-2 rounded">로그인</button>
    </div>
  );
}

export default HeaderMenus;
