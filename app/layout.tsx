import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
        <header className="w-[560px] p-4 bg-white rounded-md">
          <nav className="flex justify-between">
            <div className="flex gap-4">
              <div>
                <Image
                  src="/navbar/home.png"
                  alt="home"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src="/navbar/about.png"
                  alt="home"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src="/navbar/projects.png"
                  alt="home"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src="/navbar/products.png"
                  alt="home"
                  width={25}
                  height={25}
                />
              </div>
            </div>
            <div>
              <div className="bg-black w-[92.16pxz] flex gap-2 rounded-full">
                <span className="text-white border-2 border-white rounded-full">+</span>
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
