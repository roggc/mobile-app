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
      if (text !== search) {
        router.push(`/?search=${encodeURIComponent(text)}`);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [text, search, router]);

  return (
    <input
      type="text"
      className="w-full placeholder-[#aaaaaa] font-light"
      placeholder="Search for a smartphone..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
