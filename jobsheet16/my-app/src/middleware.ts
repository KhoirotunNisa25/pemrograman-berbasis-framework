import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

// const protectedPaths: string[] = ["/profile", "/produk", "/about", "/admin"];

const baseMiddleware = (request: NextRequest) => {
  // const simpleMiddleware = (_req: NextRequest) => NextResponse.next();
  // return withAuth(simpleMiddleware, protectedPaths)(request, {} as any);
  return NextResponse.next();
};

export default withAuth(baseMiddleware, ["/profile", "/admin", "/produk", "/editor"]);