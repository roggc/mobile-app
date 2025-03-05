import PropertyBox from "./property-box";
import { camelCaseToWords } from "@/app/utils/strings";

type Props = {
  pairs: {
    label: string;
    value: string;
  }[];
};

export default function List({ pairs }: Props) {
  return (
    <div>
      {pairs.map((pair, index) => {
        return (
          <PropertyBox
            key={index}
            label={camelCaseToWords(pair.label)}
            value={pair.value}
            isFirst={index === 0}
          />
        );
      })}
    </div>
  );
}
