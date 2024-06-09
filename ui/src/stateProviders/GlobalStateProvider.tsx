import { createContext, useCallback, useContext,useState } from 'react';
import { GlobalState } from '../types/GlobalState';

const GlobalStateContext = createContext<any | null>(null);
const GlobalDispatchContext = createContext<(newState:Partial<GlobalState>) => void>(() => {});

export const GlobalStateProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {

  const initialGlobalState:GlobalState = {
    modalOpen:false,
    modalContent:null
  }

  const [gameState, setGameState] = useState<GlobalState>(initialGlobalState)
  const updateGlobalState = useCallback((newGameState:Partial<GlobalState>) => {
    setGameState( (prevState) => {
        return {...prevState, ...newGameState}
    })
  },[])

  return (
    <GlobalStateContext.Provider value={gameState}>
      <GlobalDispatchContext.Provider value={updateGlobalState}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState():GlobalState {
  return useContext(GlobalStateContext);
}

export function useGlobalDispatch():React.Dispatch<Partial<GlobalState>>{
  return useContext(GlobalDispatchContext);
}