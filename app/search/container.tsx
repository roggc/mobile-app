"use client";

import InputContainer from "./input/container";
import Results from "./results";
import { useSearch } from "@/app/context/search";
import { useEffect } from "react";

type Props = {
  search?: string;
  numberOfResults: number;
};

export default function Container({ search, numberOfResults }: Props) {
  const { setSearch } = useSearch();

  useEffect(() => {
    setSearch(search);
  }, []);

  return (
    <div className="flex flex-col gap-3 px-4 py-3">
      <InputContainer />
      <Results numberOfResults={numberOfResults} />
    </div>
  );
}
