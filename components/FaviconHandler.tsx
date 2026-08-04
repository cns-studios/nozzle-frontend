"use client";

import { useEffect } from "react";

function setFavicon() {
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.querySelectorAll('link[rel="icon"]').forEach((link) => {
    link.setAttribute("href", dark ? "/logoWhite.png" : "/logoBlack.png");
  });
}

function FaviconHandler() {
  useEffect(() => {
    setFavicon();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setFavicon);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setFavicon);
    };
  }, []);

  return null;
}

export default FaviconHandler;