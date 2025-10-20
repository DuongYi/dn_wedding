import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/module/home/pages/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
