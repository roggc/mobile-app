"use client";

import { useRouter } from "next/navigation";

type Props = { isHorizontal?: boolean };

export default function Back({ isHorizontal = false }: Props) {
  const router = useRouter();

  return (
    <>
      <div
        className="px-4 py-3"
        onClick={() => (isHorizontal ? router.push("/") : router.back())}
      >
        <div className="inline-flex gap-1">
          <span className="text-xs font-light">{"<"}</span>
          <span className="text-xs font-light">{"BACK"}</span>
        </div>
      </div>
    </>
  );
}
