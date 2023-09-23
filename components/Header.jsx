"use client";
import Image from 'next/image'
import NasaLogo from '@/public/logo.svg';
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="header">
                <nav className="container mx-auto max-w-7xl flex justify-between items-center p-4 relative bg-neutral-900 z-[10000] h-[80px]">
                    <Image src={NasaLogo} alt={"NASA"} height={40}/>
                    <a href="/" className="flex-1 text-xl font-semibold ml-1 hidden min-[325px]:block">Průzkumník Otevřených Dat NASA</a>
                    <a href="/" className="flex-1 text-xl font-semibold ml-1 hidden max-[325px]:block">PODN</a>

                    <div data-navbar="" className="hidden md:flex items-center flex-1 justify-end gap-x-6">
                        <a href="/map" className="font-semibold leading-6">Mapa asteroidů</a>
                        <a href="/astronomypictureofday" className="font-semibold leading-6">Astronomický snímek dne</a>
                        <a href="/earthpolychromaticimagingcamera" className="font-semibold leading-6">Polychromatická země</a>
                    </div>
                    <button onClick={() => setOpen(!open)} className={"block md:hidden"}><AiOutlineMenu className={"text-3xl"}/></button>
                </nav>
                <div className={`absolute w-screen h-screen bg-neutral-800 bottom-0 z-[9900] transition-[bottom] ease-in-out duration-500 ${open ? "bottom-0" : "bottom-full"}`}>
                    <ul className={"w-full relative h-full flex flex-col items-center justify-center gap-12 text-2xl"}>
                        <li><a href="/map" className="font-semibold leading-6">Mapa asteroidů</a></li>
                        <li><a href="/astronomypictureofday" className="font-semibold leading-6">Astronomický snímek dne</a></li>
                        <li><a href="/earthpolychromaticimagingcamera" className="font-semibold leading-6">Polychromatická země</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}