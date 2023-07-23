import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <>
      <Image alt="logo" height={100} width={156} src="/whitworth.svg" />
    </>
  );
}
export default Logo;
