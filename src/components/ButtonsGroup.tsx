import { Button } from "./Button";

const mainScheme = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  ['.', 0, '='],
];

export const ButtonsGroup = () => {
  return <div className="btnContainer">{mainScheme.map((row, i) => {
    return <div key={`${i+2}`} className="row">
      {row.map((btn, i) => <Button key={`${i+3}`} value={btn} />)}
    </div>
  })}</div>
};