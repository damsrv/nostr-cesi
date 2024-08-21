"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        // Récupérer l'URL de la page
        const currentUrl = window.location.pathname;
        // Définir la valeur de activeLink en fonction de l'URL de la page
        setActiveLink(currentUrl);
    }, [pathname]);

    let links = [
        {
            "/": "Movie of the day",
        },
        {
            "/movies": "Previous days",
        },
        {
            "/series": "Friends & Scores",
        },
    ];

    return (
        <div className="px-10 border-b border-accent ">
            <nav className="bg-background flex items-center justify-between gap-5 h-[60px]">
                <div className="flex gap-5 items-center flex-nowrap">
                    <Image src="/logo.svg" alt="Logo" width={150} height={40} />
                    <div className="flex items-center gap-5">
                        {links.map((link, index) => {
                            return (
                                <Link
                                    href={Object.keys(link)[0]}
                                    key={index}
                                    className={
                                        "menu-link " +
                                        (activeLink === Object.keys(link)[0]
                                            ? "active"
                                            : "")
                                    }
                                >
                                    {Object.values(link)[0]}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div>USER INFOS</div>
            </nav>
        </div>
    );
}

export default Navbar;
