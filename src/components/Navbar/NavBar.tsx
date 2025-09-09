import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import './index.css'
import { Link } from "react-router-dom";

interface Prop {
    isNotHome?: boolean;
}

function NavBar({ isNotHome }: Prop) {



    const handleMenu = () => {
        const menu: any = document.querySelector('.menu');
        menu.classList.toggle('show');
    }

    return (
        <header className={(!isNotHome ? 'navbar' : 'flex') + ` max-w-screen fixed z-2000 border-b border-[var(--current-bg-color-secondary)] bg-[var(--custom-black)]  w-full  items-center justify-center text-[var(--custom-white)] 
           md:p-4 lg:p-4 p-1`}>
            <div className="flex lg:w-3/6 md:w-5/6 w-full items-center  justify-between">
                <a href="#" className="lg:hidden md:hidden block w-[100px]">
                    <img src="logo_sf_hrz_white.png" alt="logo" className="w-[200px]" />
                </a>
                <nav className="space-x-4 hidden items-center md:flex lg:flex">
                    <a href="/#" >
                        <img src="logo_sf_hrz_white.png" alt="logo" className="w-[200px]" />
                    </a>
                    <a href="/#" className="hover:border-[var(--custom-white)] border-b-2  border-transparent cursor-pointer px-2 py-1 ">Home</a>
                    <a href="/#about" className="hover:border-[var(--custom-white)] border-b-2  border-transparent cursor-pointer px-2 py-1">Sobre</a>
                    <a href="/#services" className="hover:border-[var(--custom-white)] border-b-2  border-transparent cursor-pointer px-2 py-1">Serviços</a>
                    <a href="/#faq" className="hover:border-[var(--custom-white)] border-b-2  border-transparent cursor-pointer px-2 py-1">FAQ</a>
                    <a href="/#contact" className="hover:border-[var(--custom-white)] border-b-2  border-transparent cursor-pointer px-2 py-1">Contato</a>
                </nav>
                <div className="flex items-center justify-between space-x-4">
                    <Link to="/quote" className="md:hidden lg:block hidden cursor-pointer border-2 border-[var(--custom-white)] text-[var(--custom-white)] font-semibold hover:bg-[var(--custom-white)] hover:text-[var(--custom-black)] rounded-md px-2 ">Solicitar orçamento</Link>
                    <ThemeToggle></ThemeToggle>
                    <div className="menu-container block  md:hidden lg:hidden">
                        <button className="hamburger" onClick={handleMenu}>
                            ☰
                        </button>
                        <nav className="menu">
                            <a href="/#">Home</a>
                            <a href="/#about">Sobre</a>
                            <a href="/#services">Serviços</a>
                            <a href="/#faq">FAQ</a>
                            <a href="/#contact">Contato</a>
                        </nav>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default NavBar;

