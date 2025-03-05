import Image from "next/image";

export default function HeaderCart() {
  return (
    <div className="flex gap-1 items-center">
      <Image
        src="/bag-icon-inactive.svg"
        alt="Inactive Cart Icon"
        width={24}
        height={24}
      />
      <div className="font-light">0</div>
    </div>
  );
}
