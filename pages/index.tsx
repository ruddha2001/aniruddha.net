import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Index() {
  return (
    <>
      <Head>
        <title>Aniruddha Chatterjee - Software Developer</title>
      </Head>
      <img
        src="/logo.png"
        alt="Picture of the author"
        className="block mx-auto w-32 my-10"
      />
      <p className="mx-auto text-3xl md:text-5xl font-bold text-center">
        Aniruddha Chatterjee
      </p>
      <p className="w-full md:w-1/2 px-5 mx-auto text-xl text-center mt-5">
        Hello! I see that you have found my portfolio. This one is still under
        construction, but you can definitely check my LinkedIn and GitHub
        profiles to get a basic idea about me.
      </p>
      <p
        className="text-center text-xl mt-20 cursor-pointer"
        title="Aniruddha on GitHub"
        onClick={() => {
          window.open("https://github.com/ruddha2001");
        }}
      >
        <FontAwesomeIcon icon={faGithub} /> ruddha2001
      </p>
      <p
        className="text-center text-xl mt-5 cursor-pointer"
        title="Aniruddha on LinkedIn"
        onClick={() => {
          window.open("https://www.linkedin.com/in/ruddha2001");
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} /> ruddha2001
      </p>
      <br />
      <br />
      <button
        className="block mx-auto bg-primary px-4 py-2 rounded"
        onClick={() => {
          window.open("/Aniruddha%20Chatterjee%20Resume.pdf");
        }}
      >
        Download Resume
      </button>
    </>
  );
}
