"use client";
import Image from "next/image";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <div className={"p-5" + " " + className}>
      <Image
        alt="logo"
        height={66}
        width={300}
        src="/whitworth.svg"
        priority={true}
      />
    </div>
  );
}
export default Logo;
