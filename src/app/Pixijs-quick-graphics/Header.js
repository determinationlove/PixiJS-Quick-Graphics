import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex w-full h-50 items-start justify-end m-5 absolute pointer-events-auto">
            <a
                href="https://github.com/determinationlove/PixiJS-Quick-Graphics"
                target="_blank"
            >
                <Image
                    src="/PixiJS-Quick-Graphics/github-mark-white.svg"
                    width={50}
                    height={50}
                    className="mx-5  transition duration-200 hover:scale-125"
                />
            </a>
        </div>
    );
}
