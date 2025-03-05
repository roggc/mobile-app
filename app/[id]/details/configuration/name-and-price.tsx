import { useConfigurationContext } from "./configuration";

type Props = {
  name: string;
};

export default function NameAndPrice({ name }: Props) {
  const { price } = useConfigurationContext();
  return (
    <div className="inline-flex flex-col gap-[11px]">
      <span className="text-xl font-light">{name.toUpperCase()}</span>
      <span className="text-sm font-light">From {price} EUR</span>
    </div>
  );
}
