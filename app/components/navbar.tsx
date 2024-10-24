import Image from "next/image";
import React from "react";
import Button from "./button";

export default function Navbar() {
  const menuItems = [
    { display: "About Me", anchor: "#about-me" },
    { display: "Experiences", anchor: "#about-me" },
    { display: "Projects", anchor: "#about-me" },
    { display: "Let's Talk", anchor: "#about-me" },
  ];
  return (
    <div className="flex min-w-full sticky top-0 bg-white items-center justify-between">
      <div className="py-2 md:py-1 pl-1 md:pl-5 w-full items-center flex">
        <a href="#">
          <Image src="/logo.svg" width={75} height={75} alt="AC" />
        </a>
        <a
          className="inline text-xl md:text-3xl pl-3 tracking-wider md:pb-2"
          href="#"
        >
          Aniruddha Chatterjee
        </a>
      </div>
      <div className="pr-3 text-xl hidden md:block">
        {menuItems.map((menuItem, index) => {
          return (
            <a
              key={`menuItem-${index}`}
              className="inline w-fit text-nowrap hover:underline hover:decoration-solid hover:cursor-pointer px-5"
              href={menuItem.anchor}
            >
              {menuItem.display}
            </a>
          );
        })}
      </div>
      <div className="pr-5 text-xl md:text-2xl">
        <Button
          buttonText="Resume"
          className={"inline text-nowrap w-fit"}
          url="https://aniruddha-website-static.s3.ap-south-1.amazonaws.com/Aniruddha+Chatterjee.pdf"
          openUrlInNewTab
        />
      </div>
    </div>
  );
}
