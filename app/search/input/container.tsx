import Input from "./input";

export default function Container() {
  return (
    <div className="flex flex-col gap-2">
      <Input />
      <div className="w-full border-b"></div>
    </div>
  );
}
