import colorTheme from "../atoms/colorModeAtom";
import { useRecoilState } from "recoil";

function Message({ sent }) {
  const [colorMode, setColorMode] = useRecoilState(colorTheme);

  return (
    <div
      className={`flex items-center  ${sent ? "justify-end" : "justify-start"}`}
    >
      <h1
        className={`${
          colorMode ? "bg-white text-gray-800" : "bg-[#423F3E] text-[#EEEEEE]"
        }  px-10 py-1 rounded-full text-2xl font-medium`}
      >
        Test
      </h1>
    </div>
  );
}

export default Message;
