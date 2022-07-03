import { createContext, useState } from "react";

type ThemeType = "light" | "dark";
interface ThemeProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const Theme = createContext<ThemeProps>({} as ThemeProps);

export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <div className={`${theme === "dark" ? "dark" : ""} `}>{children}</div>
    </Theme.Provider>
  );
}
