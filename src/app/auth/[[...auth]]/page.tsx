"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import * as SignUp from "@clerk/elements/sign-up";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { createClient } from "@sanity/client";
import { Loader } from "lucide-react";
import Hero from "./Hero";

interface ClerkUser {
  id: string;
  emailAddresses: { emailAddress: string }[];
  firstName: string;
}

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-05-03',
});

export default function AuthPage() {
  const router = useRouter();

  const createSanityUser = async (user: ClerkUser) => {
    try {
      await sanityClient.create({
        _type: "user",
        userId: user.id,
        userName: user.firstName,
        email: user.emailAddresses[0].emailAddress,
      })

      router.push("/");
    }
    catch (error) {
      console.error(error)
    }
  }

  return (



    <div className="bg-gradient-to-br max-w-[1080px] m-auto w-full flex md:flex-row flex-col items-center rounded-lg shadow-md md:px-5 from-[--background] to-[--card-bg]">

      <SignIn.Root>
        <Clerk.Loading>
          {
            (isGlobalLoading) => (
              <>
                <Hero />

                <SignIn.Step name="start">
                  <Card className="w-full sm:w-96 border-none shadow-none">
                    <CardHeader>
                      <CardTitle className="text-3xl md:text-4xl font-bold text-[--primary]">Welcome</CardTitle>
                      <CardDescription>Continue to your personalized learning experience</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <div id="clerk-captcha"></div>
                      <Clerk.Connection
                        name="google"
                        className="flex w-full rounded-md bg-[--primary] cursor-pointer text-sm font-medium text-[--card-bg] hover:bg-[--secondary] hover:text-[--card-bg]"
                        asChild
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          type="button"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                                <Loader />
                              ) : (
                                <>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 16"
                                    className="w-4"
                                    aria-hidden
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                                    />
                                  </svg>
                                  Continue with Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </CardContent>
                    <CardFooter>
                      <p className="text-center text-sm text-neutral-400">
                        By continuing, you agree to our Terms of Service
                      </p>
                    </CardFooter>
                  </Card>
                </SignIn.Step>
              </>
            )
          }
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}