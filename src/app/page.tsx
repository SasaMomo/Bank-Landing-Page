"use client";
import Image from "next/image";
import Header from "./Components/Header";
import Band from "./Components/Band";
import AppBanner from "./Components/AppBanner";
import Footer from "./Components/Footer";

export default function Home() {
  const slides = [
    "https://i.imgur.com/GxBkwRv.png",
    "https://i.imgur.com/sbonfdX.png",
    "https://i.imgur.com/mDTGCpx.png",
    "https://i.imgur.com/c5ZS1v2.png",
  ];
  return (
    <>
      <Header />
      <Band slides={slides} />
      <AppBanner />
      <main className="flex gap-4 flex-col items-center justify-between bg-pri-mold pt-4">
        <h2 className="font-bold text-3xl">Cartões Para Você:</h2>
        <p className="text-2xl text-center px-10">
          Cada plano tem um cartão diferente que se adapta as suas necessidades!
        </p>
        <Image
          src="https://i.imgur.com/UusgYcX.png"
          alt="Apple Store icon"
          width={720}
          height={461}
          className="bg-dar-green/0 border-0 rounded-lg hover:bg-white hover:border-dar-green active:animate-bounce"
        />
      </main>
      <Footer />
    </>
  );
}
