import { useCalc } from "../context";

const inputNormalize = (num: string) => new Intl.NumberFormat().format(Number(num.slice(0, 18)));
const outputNormalize = (num: string) => new Intl.NumberFormat().format(Number(num.slice(0, 8)));

export const Screen = () => {
  const { result, number, operand } = useCalc();

  return <div className="screen">
      <div className="result">
        <div className="number">{outputNormalize(result.toString())}</div>
      </div>
    <div className="calculation">
      <div>{result !== 0 && operand}</div>
      <div>{inputNormalize(number.toString())}</div>
    </div>
  </div>
};