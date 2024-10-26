import React from "react";
import Heading from "./heading";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="bg-white min-w-full min-h-screen text-black" id="about-me">
      <div className="flex flex-col md:flex-row pt-28">
        <div className="basis-full md:basis-3/5 pl-5 md:pl-20">
          <p className="text-2xl md:text-5xl tracking-wider pl-1">
            I&apos;m Aniruddha Chatterjee,
          </p>
          <Heading
            headingText="a Software Developer"
            className="w-3/4 md:w-3/5 h-4 md:h-8 tracking-widest pl-1"
          />
          <p className="text-lg md:text-xl md:leading-relaxed mt-5 md:mt-10 pr-1 md:pr-0">
            I am a software engineer currently working at Sabre and pursuing my
            MSc. in Computer Science from the University of Texas at Austin
            (remote). I see myself as an ardent coder who focuses on what is
            happening and how can I improve it instead of just delivering end
            results.
            <br />
            <br />
            When I am not in front of my laptop, I read books and cook full
            course meals. I make pretty bad jokes but my cold coffee is a 10/10.
            I also spend my free time contributing back to the world of open
            source, either with my side projects or helping starting developers
            out.
          </p>
          <p className="text-xl md:text-4xl mt-10">My Field of Work</p>
          <ul className="text-base md:text-xl mt-2 md:mt-5 leading-relaxed md:leading-loose list-inside">
            <li>
              Frontend development using{" "}
              <span className="font-bold">Next.js</span>,{" "}
              <span className="font-bold">Tailwind</span> and{" "}
              <span className="font-bold">TypeScript</span>.
            </li>
            <li>
              Backend development using{" "}
              <span className="font-bold">Node.js</span> and{" "}
              <span className="font-bold">Typescript</span> along with{" "}
              <span className="font-bold">Java</span> using{" "}
              <span className="font-bold">Spring Boot</span>.
            </li>
            <li>
              Cloud computing, serverless architecture and more using{" "}
              <span className="font-bold">Amazon Web Services (AWS)</span>.
            </li>
            <li>
              Researching ways to bridge{" "}
              <span className="font-bold">graph databases</span> and{" "}
              <span className="font-bold">machine learning</span> to deliver
              intelligent analytics.
            </li>
          </ul>
        </div>
        <div className="basis-full md:basis-2/5 relative pb-40">
          <p className="text-aboutMeLarge absolute text-gray-100 -top-52 hidden md:block">
            Hi
          </p>
          <div className="relative w-44 h-60 md:w-72 md:h-96 -right-40 md:left-32 top-10 md:top-40">
            <Image src="/ruddha.jpg" fill alt="" className="absolute z-10" />
            <div className="bg-primary relative w-52 h-12 md:w-80 md:h-20 text-right float-right top-56 md:top-aboutMeExtra">
              <div className="absolute w-fit z-10 top-5 md:top-9 md:text-2xl text-right pl-24 md:pl-40">
                This is me &#128075;&#127997;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
