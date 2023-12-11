import React from "react";
import Link from "next/link";

export const Navbar = () => {

    return (
        <>
            <nav className="bg-white text-black">
                <h1 className="text-center lg:text-start">The library</h1>
                <ul className="flex justify-between">
                    <li className="collapse md:visible lg:visible hover:text-red-500"><Link href='Accueil'>Home</Link></li>
                    <li className="collapse md:visible lg:visible hover:text-red-500"><Link href='LoginPage'>Login</Link></li>
                    <li className="collapse md:visible lg:visible hover:text-red-500"><Link href='SubscribePage'>Inscription</Link></li>
                    <button className=" md:collapse lg:collapse flex justify-start ">click</button>
                </ul>

            </nav>
        </>
    );
};
