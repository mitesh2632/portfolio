import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Mitesh Makwana - Software Developer",
  description:
    "This is the portfolio of Mitesh Makwana. a seasoned Front End Developer with 1.5 years of hands-on experience crafting and enhancing web applications. Proficient in HTML, CSS, and JavaScript, I specialize in leveraging cutting-edge frameworks like Vue JS, Angular JS, Next.js, Nest JS and libraries like React and also create mobile Applications in React-native to create seamless user experiences. With a keen eye for detail and a passion for clean, efficient code, I strive to deliver innovative solutions that exceed expectations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
