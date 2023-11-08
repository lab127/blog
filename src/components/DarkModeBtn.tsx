import { FaMoon, FaSun } from "react-icons/fa";

type Props = {
  onClick: () => void;
  isDarkMode: boolean;
};

export default function DarkModeBtn({ onClick, isDarkMode }: Props) {
  return (
    <button onClick={onClick} type="submit">
      {isDarkMode ? <FaSun size="20" /> : <FaMoon size="20" />}
    </button>
  );
}
