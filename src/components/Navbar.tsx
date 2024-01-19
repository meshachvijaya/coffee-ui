import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  // temporary users
  const user = false;

  return (
    <div className="h-12 text-green-900 font-semibold p-4 flex items-center justify-between border-b-2 border-b-green-900 md:h-14 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Kontak</Link>
      </div>
      {/* Logo */}
      <div className="text-base flex-1 md:text-center">
        <Link href="/">J-Coffee</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute md:text-white lg:text-green-900 top-3 r-2 lg:static flex items-center gap-2 cursor-pointer">
          <span>0812 1212 1212</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon src="/cartblack.png" />
      </div>
    </div>
  );
};

export default Navbar;
