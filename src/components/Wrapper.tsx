import { ReactFragment, useEffect, useRef } from 'react';
import { useCalc } from '../context';
import { operandScheme } from './OperandsGroup';

const referenceOperands = [' ', '/', '*', '+', '-'];

export const Wrapper = ({ children }: { children: ReactFragment }) => {
  const { numSetHandler, resultHandler, operandSetHandler, resetHandler, deleteLastNum } = useCalc();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  });

  const keyHandler = (e: any) => {
    if(/^\d+$/.test(e.key)) return numSetHandler(e.key)();
    
    if(e.key === 'Enter') return resultHandler();

    const index = referenceOperands.indexOf(e.key);

    if(operandScheme[index] === 'AC') return resetHandler()();

    if(index >= 0) return operandSetHandler(operandScheme[index])();

    if(e.key === 'Backspace') return deleteLastNum();
  };

  return <div className="container" ref={ref} tabIndex={-1} onKeyDown={(e) => keyHandler(e)}>
    {children}
    </div>
};