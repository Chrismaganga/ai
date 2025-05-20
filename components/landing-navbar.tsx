"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  const handleSignUp = () => {
    router.push('/sign-up');
  };

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image
            fill
            alt="Logo"
            src="/logo.png"
            sizes="(max-width: 768px) 32px, 32px"
          />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          NEXT-AI
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        {!isSignedIn && (
          <>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              variant="premium"
              className="rounded-full"
              onClick={handleSignUp}
            >
              Get Started
            </Button>
          </>
        )}
        {isSignedIn && (
          <Link href="/dashboard">
            <Button variant="premium" className="rounded-full">
              Dashboard
            </Button>
          </Link>
        )}
      </div>
    </nav>
  )
}