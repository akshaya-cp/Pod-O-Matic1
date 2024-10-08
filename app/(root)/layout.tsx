import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import PodcastPlayer from "@/components/PodcastPlayer";
import RightSidebar from "@/components/RightSidebar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pod-O-Matic",
  description:
    "Create podcast seamlessly with the help of Generative AI and grow your fanbase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto w-full max-w-5xl flex flex-col max-sm:p-2">
            <div className="flex items-center justify-between h-16 md:hidden">
              <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14 ">
              <Toaster />
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>
      <PodcastPlayer />
    </div>
  );
}
