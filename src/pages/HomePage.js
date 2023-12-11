import React from "react";
import bglogin from "../../public/bglogin.jpg";
import Image from "next/image";
import colors from "tailwindcss/colors";
import { Navbar } from "@/components/Navbar";

const HomePage = () => {
  return (
    <>
      <main className="h-screen flex justify-center">
        <Image
          className="h-full absolute z-[-1] blur-sm brightness-50 "
          src={bglogin}
          alt="bg"
        />
      </main>
    </>
  );
};

export default HomePage;
