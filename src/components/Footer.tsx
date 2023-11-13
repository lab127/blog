import DarkModeBtn from "./DarkModeBtn";

export default function Footer() {
  return (
    <div className="max-w-3xl lg:max-w-5xl mx-auto px-7 mt-14">
      <div className="flex justify-end">
        <DarkModeBtn />
      </div>
    </div>
  );
}
