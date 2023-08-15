import { NextResponse } from "next/server";

// 30 minutes from now
// const expires = new Date(Date.now() + 30 * 60 * 1000);
const expires = new Date(1692138435694);

export const GET = () => {
  const isExpired = Date.now() > expires.getTime();
  return NextResponse.json({
    start_time: Date.now(),
    expires: expires.getTime(),
    isExpired,
  });
};
