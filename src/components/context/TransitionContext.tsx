import { createContext, useContext, useState, type ReactNode } from "react";

interface TransitionContextType {
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
  clickX: number;
  setClickX: (value: number) => void;
  clickY: number;
  setClickY: (value: number) => void;
  transitionColor: string;
  setTransitionColor: (color: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = (): TransitionContextType => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}

export const TransitionProvider = ({ children }: { children: ReactNode }) => {

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [transitionColor, setTransitionColor] = useState<string>("");
  const [clickX, setClickX] = useState<number>(0);
  const [clickY, setClickY] = useState<number>(0);

  return (
    <TransitionContext.Provider
      value={{
        isAnimating,
        setIsAnimating,
        clickX,
        clickY,
        setClickX,
        setClickY,
        transitionColor,
        setTransitionColor
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};