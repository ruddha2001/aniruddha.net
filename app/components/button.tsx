"use client";
import React from "react";

type ButtonProps = {
  buttonText: string;
  className?: string;
  onClick?: () => void;
  url?: string;
  openUrlInNewTab?: boolean;
  scrollIntoView?: string;
};

export default function Button({
  buttonText,
  className,
  onClick,
  url,
  openUrlInNewTab = true,
  scrollIntoView,
}: ButtonProps) {
  return (
    <button
      className={`${className} border-4 border-secondary px-2 text-secondary`}
      onClick={() =>
        url
          ? window.open(url, openUrlInNewTab ? "_blank" : "_self")
          : scrollIntoView
          ? document.getElementById(scrollIntoView)?.scrollIntoView()
          : onClick && onClick()
      }
    >
      {buttonText}
    </button>
  );
}
