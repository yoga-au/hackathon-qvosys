import React, { createContext, useState } from "react";

type TPSCtxState = {
  tps: number;
  setSelectedTPS: React.Dispatch<React.SetStateAction<number>>;
};

const CtxDefaultVal: TPSCtxState = {
  tps: 1,
  setSelectedTPS: () => {},
};

export const TPSContext = createContext<TPSCtxState>(CtxDefaultVal);

const TPSProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTPS, setSelectedTPS] = useState<number>(CtxDefaultVal.tps);

  return (
    <TPSContext.Provider value={{ tps: selectedTPS, setSelectedTPS }}>
      {children}
    </TPSContext.Provider>
  );
};

export default TPSProvider;
