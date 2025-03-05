import InputContainer from "./input/container";
import Results from "./results";

export default function Container() {
  return (
    <div className="flex flex-col gap-3 px-4 py-3">
      <InputContainer />
      <Results />
    </div>
  );
}
