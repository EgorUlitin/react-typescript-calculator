import { Operand } from "./Operand";

const operandScheme = [ 'AC', '÷', '×', '+', '-'];

export const OperandsGroups = () => {
  return <div className="containerOperands">
    {operandScheme.map((operand, i) => <Operand key={i} value={operand} />)}
  </div>
};