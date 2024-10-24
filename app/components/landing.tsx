import React from "react";
import Image from "next/image";
import Button from "./button";

export default function Landing() {
  return (
    <div className="bg-primary min-w-full min-h-screen" id="landing">
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-1/2 pt-2 md:pt-32">
          <Image
            src={"waves.svg"}
            width={650}
            height={100}
            alt="waves"
            className="hidden md:inline-block"
          />
          <p className="text-5xl md:text-7xl italic tracking-wider leading-relaxed pt-2 md:pt-10 pr-14 md:pr-36 text-center md:text-right">
            &ldquo;Where is my <br />
            <span className="font-bold">coffeeeee???&rdquo;</span>
          </p>
          <Image
            src={"waves.svg"}
            width={300}
            height={100}
            alt="waves"
            className="md:hidden"
          />
        </div>
        <div className="basis-full md:basis-1/2">
          <p className="text-2xl tracking-wide text-center pt-10 md:pt-80 leading-relaxed px-5 md:px-36">
            Hey! Didn&apos;t see you there!
            <br />
            <br />
            Sorry for shouting.
            <br />I am a <span className="font-bold">developer</span> you know.
            And I am pretty efficient in turning coffee into code.
            <br />
            <br />
            This is our first meeting I guess? We should not be strangers any
            longer!
            <br />
            Let me give you a tour of what I do!
            <br />
            <br />
            <Button
              buttonText="Start Tour"
              className={
                "inline text-nowrap w-fit bg-white !border-8 py-1 !px-4"
              }
              scrollIntoView="about-me"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
