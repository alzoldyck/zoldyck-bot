import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al Zoldyck AI",
  description: "Al Zoldyck AI + Next.js 14 setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-between items-center h-[100dvh]`}
      >
        <div></div>
        {children}
        <footer>
          <p className="text-sm text-center py-4 px-3">
            Developed by{" "}
            <Link
              href={"#"}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ahmad Saefudin Al Bayani
            </Link>{" "}
            | &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </body>
    </html>
  );
}
