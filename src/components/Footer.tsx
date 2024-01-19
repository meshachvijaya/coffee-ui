import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-14 p-4 lg:p-20 xl:p40 text-green-900 flex items-center justify-between">
      <Link href="/" className="font-semibold">J-Coffee</Link>
      <p>All Rights Reserved</p>
    </div>
  );
};

export default Footer;
