import { useCalc } from "../context";

export const Operand = ({ value }: { value: string }) => {
  const { resetHandler, operandSetHandler } = useCalc();
  const isAc = value === 'AC' ? 'clearBtn' : '';

  const handlerFunction = isAc ? resetHandler : operandSetHandler;

  return <div onClick={handlerFunction(value)} className={`operand ${isAc}`}>{value}</div>
};