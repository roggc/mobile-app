type Props = {
  numberOfResults: number;
};

export default function Results({ numberOfResults }: Props) {
  return <div className="font-light">{numberOfResults} RESULTS</div>;
}
