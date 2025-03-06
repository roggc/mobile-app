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
    <input
      type="text"
      className="w-full placeholder-[#aaaaaa] font-light outline-none"
      placeholder="Search for a smartphone..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
