"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeLanguageControls() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = stored === "dark" || stored === "light" ? stored : preferred;
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  function updateTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="site-controls">
      <div className="control-group" aria-label="Theme options">
        <button className="control-button icon-button" type="button" aria-pressed={theme === "light"} aria-label="Light mode" title="Light mode" onClick={() => updateTheme("light")}>
          <span aria-hidden="true">L</span>
        </button>
        <button className="control-button icon-button" type="button" aria-pressed={theme === "dark"} aria-label="Dark mode" title="Dark mode" onClick={() => updateTheme("dark")}>
          <span aria-hidden="true">D</span>
        </button>
      </div>
      <div className="control-group" aria-label="Language options">
        <Link className="control-button" href="/" hrefLang="es-DO">
          ES
        </Link>
        <Link className="control-button" href="/en/" hrefLang="en">
          EN
        </Link>
      </div>
    </div>
  );
}
