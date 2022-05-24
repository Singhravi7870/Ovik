import { NextRequest, NextResponse } from 'next/server'

const excludededPrefixes = ['/favicon', '/api']

export default function middleware(req: NextRequest, res: NextResponse, next: any) {
  // console.log(req.nextUrl);
  // auth code here.....
}
