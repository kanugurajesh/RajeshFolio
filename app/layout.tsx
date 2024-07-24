import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { BsPlusCircle } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajesh Portfolio",
  description: "Explore about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`inter.className bg-[#f0f0f0] flex flex-col gap-4 items-center justify-center my-4`}
      >
        <header className="w-[560px] h-[64px] bg-white rounded-xl flex items-center p-4">
          <nav className="flex w-full justify-between">
            <div className="flex gap-8 p-2 relative">
              <div className="w-[38px] h-[38px] bg-[#f0f0f0] absolute rounded-full opacity-70 top-[1px] left-[0.5px] "></div>
              <div className="z-10 relative">
                <div className="absolute text-[10px] text-white rounded-full bg-black px-[4px] py-[2px]">home</div>
                <Image
                  src="/navbar/home.png"
                  alt="home"
                  className="cursor-pointer"
                  width={22}
                  height={22}
                />
              </div>
              <div className="z-10">
                <Image
                  src="/navbar/about.png"
                  alt="about"
                  className="cursor-pointer"
                  width={23}
                  height={23}
                />
              </div>
              <div className="z-10">
                <Image
                  src="/navbar/projects.png"
                  alt="projects"
                  className="cursor-pointer"
                  width={23}
                  height={23}
                />
              </div>
              <div className="z-10">
                <Image
                  src="/navbar/products.png"
                  alt="products"
                  className="cursor-pointer"
                  width={25}
                  height={24}
                />
              </div>
            </div>
            <div>
              <div className="bg-black w-[92.16pxz] flex gap-2 rounded-lg box-border p-2 cursor-pointer items-center font-semibold">
                <BsPlusCircle className="text-white" />
                <span className="text-white font-semibold">Hire Me</span>
              </div>
            </div>
          </nav>
        </header>
        <div className="max-w-96">{children}</div>
      </body>
    </html>
  );
}
