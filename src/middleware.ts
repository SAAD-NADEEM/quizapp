// Middleware functions to handle user on protected routes
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Focus on isProtectedRoute
const isProtectedRoute = createRouteMatcher(["/quizzes"]);
const isPublicRoute = createRouteMatcher(["/", "/api/webhook(.*)", "/api/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
  if (isPublicRoute(req)) return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
