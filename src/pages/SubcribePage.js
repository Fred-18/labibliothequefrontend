import React, { useState } from "react";
import Image from "next/image";
import bglogin from "../../public/bglogin.jpg";
import axios from "axios";

const ConnectionPage = () => {
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAddress("");
    setAge("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword;
    setTelephone("");

    const datas = {
      headers: {
        "Content-Type": "application/json",
      },
      address: address,
      age: age,
      firstname: firstName,
      lastname: lastName,
      mail: email,
      password: password,
      telephone: telephone,
      role: 0,
    };
    console.log(datas);
    axios
      .post("http://localhost:8080/users", datas)
      .then((reponse) => {
        console.log(reponse);
        successMessage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const successMessage = () => {
    alert("Vous êtes inscrit avec succcès bienvenue");
  };

  return (
    <main className="h-screen flex items-center justify-center flex-col gap-6">
      <Image
        className="h-full absolute z-[-1] blur-sm brightness-50 "
        src={bglogin}
        alt="bg"
      />
      <h1 className="text-4xl text-white font-bold underline">Inscription</h1>
      <form className=" flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          className="myInput"
          type="text"
          required
          placeholder="Adresse"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="myInput"
          type="number"
          required
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="myInput"
          type="text"
          required
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="myInput"
          type="text"
          required
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="myInput"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="myInput"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="myInput"
          type="tel"
          placeholder="Télephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <button className="myButton flex" type="submit" onSubmit={handleSubmit}>
          Envoyer
        </button>
      </form>
    </main>
  );
};
export default ConnectionPage;
