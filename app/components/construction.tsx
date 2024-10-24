import React from "react";
import Button from "./button";

export default function Construction() {
  return (
    <div className="items-center w-full">
      <p className="text-center pt-36 text-2xl">
        This part is still under construction. I am working as fast as I can,
        but you know, even coffee has it&apos;s limits.
        <br />
        <br />
        Feel free to browser through my resume meanwhile.
        <br />
        <br />
        <Button
          buttonText="Resume"
          className={"inline text-nowrap w-fit !border-4 !px-7 py-2 !text-3xl"}
          url="https://aniruddha-website-static.s3.ap-south-1.amazonaws.com/Aniruddha+Chatterjee.pdf"
          openUrlInNewTab
        />
      </p>
    </div>
  );
}
