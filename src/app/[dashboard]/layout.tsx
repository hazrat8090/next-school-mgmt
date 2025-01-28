import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import EventCalendar from "@/components/EventCalendar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sultan High School",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex justify-center items-center gap-2 mt-2">
          <Image src="/logo.png" width={30} height={30} alt="logo" />
          <span>school mgmt</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT  */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
