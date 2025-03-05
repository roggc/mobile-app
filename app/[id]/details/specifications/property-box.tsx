type Props = {
  isFirst?: boolean;
  label: string;
  value: string;
};

export default function PropertyBox({ isFirst = false, label, value }: Props) {
  return (
    <div
      className={`py-4 ${
        isFirst ? "border-t-[0.5px]" : ""
      } border-b-[0.5px] grid grid-cols-2`}
    >
      <span className="text-xs font-light">{label.toUpperCase()}</span>
      <span className="text-xs font-light">{value}</span>
    </div>
  );
}
