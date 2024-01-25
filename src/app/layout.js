import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderApp from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300', '400', '500', '600', '700', '800', '900'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col w-full justify-between">
          <HeaderApp />
            <main className="flex- min-h-[500px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
