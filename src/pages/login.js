import React from "react";
import bglogin from "../../public/bglogin.jpg";
import Image from "next/image";

const login = () => {
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-6">
      <Image
        className="h-full absolute z-[-1] blur-sm brightness-50 "
        src={bglogin}
        alt="bg"
      />
      <h1 className="text-4xl text-white font-bold underline">Login</h1>
      <input className="myInput" type="text" placeholder="Email" />
      <input className="myInput" type="password" placeholder="password" />
    </main>
  );
};

export default login;
