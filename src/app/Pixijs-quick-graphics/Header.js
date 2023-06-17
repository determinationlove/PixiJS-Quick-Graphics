import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex w-full h-full items-start justify-end">
            <a href="">
                <Image
                    src="/github-mark.svg"
                    width={50}
                    height={50}
                    className="mx-5"
                />
            </a>
        </div>
    );
}
