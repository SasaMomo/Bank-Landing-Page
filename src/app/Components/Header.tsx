"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { UserIcon, Bars3Icon } from "@heroicons/react/16/solid";
import { Search } from "./Search";

export default function Header() {
  const [ToggleMenu, setToggleMenu] = useState(false);

  const handlerMenu = () => {
    setToggleMenu(!ToggleMenu);
  };
  return (
    <header className="bg-pri-red w-full mx-auto">
      <div className="flex gap-2 container mx-auto h-[88px] justify-around md:justify-between">
        <div className="flex items-center mx-4">
          <Image
            className="bg-white rounded-[50%] min-h-20 min-w-20"
            src="https://i.imgur.com/lrtfT4q.png"
            alt="Banco S logo"
            width={80}
            height={80}
          />
        </div>
        <nav className="md:flex flex-wrap hidden gap-6 items-center md:w-full ">
          <Link href="/" className="font-bold">
            Para Você
          </Link>
          <Link href="/" className="font-bold">
            Para Empresas
          </Link>
          <Link href="/" className="font-bold">
            Serviços
          </Link>
          <Link href="/" className="font-bold">
            Ajuda
          </Link>
        </nav>
        <Search />
        <div className="flex md:flex-row flex-col p-2 h-[88px] md:w-auto w-full md:bg-pri-green">
          <div className="self-end flex items-center my-auto md:my-0 h-full">
            <UserIcon className="w-6 h-6 ml-1" />
            <button className="self-center font-bold mr-[7px] ml-1">
              Login
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center cursor-pointer">
          <button onClick={handlerMenu} className="">
            <Bars3Icon className="w-12 h-12 p-2 m-2 mr-4 bg-pri-green rounded-[10%]" />
          </button>
        </div>
        <div
          className={
            ToggleMenu
              ? "fixed left-2 top-[88px] w-[75vw] sm:w-[80vw] md:hidden h-[80vh] bg-pri-mold p-10 ease-in duration-500 z-50 rounded-xl"
              : "fixed left-0 top-0 w-[-100%]"
          }
        ></div>
      </div>
    </header>
  );
}
