import React, { useState } from "react";
import bglogin from "../../public/bglogin.jpg";
import Image from "next/image";
import axios from "axios";
//import { Navbar } from "@/components/Navbar";
//import { Header } from "@/components/Header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail(true);
    setPassword(true);
    setError(null);

    const datas = {
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
      password: password,
    };
    console.log(datas);
    axios
      .post("http://localhost:8080/token", datas)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="h-screen flex items-center justify-center flex-col gap-6">
      <Image
        className="h-full absolute z-[-1] blur-sm brightness-50 "
        src={bglogin}
        alt="bg"
      />
      {/* <h1 className="text-4xl text-end text-black font-bold font-poppins underline">
        Login
      </h1> */}
      <form
        onSubmit={handleSubmit}
        className=" p-10 rounded  flex flex-col gap-6 bg-slate-800"
      >
        {" "}
        {/* Ajout du formulaire avec gestionnaire de soumission */}
        <input
          className="myInput"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="myInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="myButton" type="submit" onSubmit={handleSubmit}>
          Envoyer
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
