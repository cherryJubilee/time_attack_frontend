"use client";

import Link from "next/link";

function HeaderMenus() {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link
        href="/cart"
        className="bg-white text-sm text-black px-5 py-2 rounded font-semibold hover:bg-black/5 transition border border-black"
      >
        장바구니
      </Link>
      <button className="bg-black text-sm text-white px-5 py-2 rounded font-semibold hover:bg-black/70 transition">
        로그아웃
      </button>

      <Link
        href="/sign-up"
        className="bg-white text-sm text-black px-5 py-2 rounded font-semibold hover:bg-black/5 transition border border-black"
      >
        회원가입
      </Link>
      <button className="bg-black text-sm text-white px-5 py-2 rounded font-semibold hover:bg-black/70 transition">
        로그인
      </button>
    </div>
  );
}

export default HeaderMenus;
