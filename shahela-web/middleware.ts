import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // request.ip সরাসরি টাইপ এরর দিলে হেডার থেকে বের করা ভালো
  const forwarded = request.headers.get('x-forwarded-for');
  
  // যদি একাধিক আইপি থাকে (প্রক্সির কারণে), প্রথমটি নেওয়া হয়
  const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';

  console.log(`--- New Visitor ---`);
  console.log(`IP: ${ip}`);
  console.log(`Path: ${request.nextUrl.pathname}`);

  return NextResponse.next();
}

// শুধু পেজগুলোর জন্য রান হবে (Static assets ইগনোর করবে)
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
