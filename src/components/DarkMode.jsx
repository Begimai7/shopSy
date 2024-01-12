import { useEffect, useState } from "react";

export const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <span
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`absolute right-0 top-[-12px] z-10 cursor-pointer drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1) transition-all duration-200 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      >
        L
      </span>
      <span
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`absolute right-0 top-[-12px] z-10  cursor-pointer drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1) transition-all duration-200 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        D
      </span>
    </div>
  );
};
