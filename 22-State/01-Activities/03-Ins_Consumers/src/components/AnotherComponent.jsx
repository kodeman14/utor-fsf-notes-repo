// Import our custom hook.
import { useTheme } from "../utils/ThemeContext";

export default function AnotherComponent() {
  const { darkTheme } = useTheme();

  const themeStyles = {
    background: darkTheme
      ? "-webkit-linear-gradient(top left, #150C17, #535353)"
      : "-webkit-linear-gradient(bottom, #FFFFFF, #EDBAAB)",
    borderRadius: "30px",
    color: darkTheme ? "#FAFAFA" : "#363537",
  };

  return (
    <>
      <div style={themeStyles}>
        <h1>Also applies here</h1>
      </div>
    </>
  );
}
