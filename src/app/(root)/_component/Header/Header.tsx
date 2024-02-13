import Link from "next/link";
import HeaderMenus from "./components/HeaderMenus";
import HeaderNav from "./components/HeaderNav";

function Header() {
  return (
    <header className="px-5 h-16 flex items-center shadow drop-shadow sticky top-0 bg-white z-20">
      <Link href="/" className="font-bold text-2xl ml-3">
        발랑
      </Link>

      <HeaderNav />

      <HeaderMenus />
    </header>
  );
}

export default Header;
