import React from "react";

type HeadingProps = {
  headingText: string;
  className: string;
};

export default function Heading({ headingText, className }: HeadingProps) {
  return (
    <div className="mt-5 md:mt-10">
      <div className={`bg-primary relative ${className}`}>
        <div className="absolute w-fit z-10 -top-5 md:-top-7 text-2xl md:text-5xl">
          {headingText}
        </div>
      </div>
    </div>
  );
}
