import { useEffect, useState } from "react";
import { useSearch } from "@/app/context/search";
import { useRouter } from "next/navigation";

export default function Input() {
  const router = useRouter();
  const { search } = useSearch();
  const [text, setText] = useState(search ?? "");

  useEffect(() => {
    setText(search ?? "");
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/?search=${encodeURIComponent(text)}`);
    }, 300);

    return () => clearTimeout(timer);
  }, [text, router]);

  return (
    <div className="flex justify-between items-center gap-1 w-full">
      <input
        type="text"
        className="placeholder-[#aaaaaa] font-light outline-none flex-1"
        placeholder="Search for a smartphone..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <div onClick={() => setText("")} className="cursor-pointer">
          x
        </div>
      )}
    </div>
  );
}
