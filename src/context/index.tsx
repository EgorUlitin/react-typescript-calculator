import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ICalcState {
  number: number | string;
  result: number;
  operand: string;
  numSetHandler: (number: number | string) => () => void;
  resetHandler: () => () => void;
  operandSetHandler: (operand: string) => () => void;
  resultHandler: () => void;
};

type operandsFunctionTypes = {
  [key: string]: (num1: number, num2: number) => number;
};

const operandsFunctionType: operandsFunctionTypes = {
  '+': (num1: number, num2: number) => num1 + num2,
  '-': (num1: number, num2: number) => num1 - num2,
  '×': (num1: number, num2: number) => num1 * num2,
  '÷': (num1: number, num2: number) => num1 / num2,
};

const StateContext = createContext({} as ICalcState);

const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    number: '',
    result: 0,
    operand: '',
  });

  const numSetHandler = (number: number | string) => () => setState({ ...state, number: `${state.number}${number}` });
  
  const resetHandler = () => () => setState({
    number: '',
    result: 0,
    operand: '',
  });

  const resultHandler = () => {
    if ((state.number === '' && state.operand === '') || state.operand === '') return;
    if (state.number === '') return;

    setState({ result: operandsFunctionType[state.operand](state.result, Number(state.number)), operand: state.operand, number: '' });
  };

  const operandSetHandler = (operand: string) => () => {
    if (state.number === '' && state.result === 0) return;

    if ((operand === '×' || operand === '÷') && state.number === '') {
      setState({ ...state, operand });
      return;
    };
    
    resultHandler();

    const newResult = state.result === 0 ? Number(state.number) : operandsFunctionType[operand](state.result, Number(state.number));

    setState({ operand, result: newResult, number: '' });
  };

  return (
    <StateContext.Provider value={{
      result: state.result,
      number: state.number,
      operand: state.operand,
      numSetHandler,
      resetHandler,
      operandSetHandler,
      resultHandler,
    }}>
      {children}
    </StateContext.Provider>
  )
};

export const useCalc = () => useContext(StateContext);

export default StateProvider;