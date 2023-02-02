import { useCalc } from "../context";

export const  Button = ({ value }: { value: number | string }) => {
  const { numSetHandler, resultHandler } = useCalc();

  const isDot = value === '.' ? 'dotBtn' : '';
  const isResultBtn = value === '=' ? 'resultBtn' : '';
  
  const handlerFunction = isResultBtn ? resultHandler : numSetHandler(value);

  return <div onClick={handlerFunction} className={`btn ${isDot}`}>
          <div className={`number ${isResultBtn}`}>{value}</div>
        </div>
}