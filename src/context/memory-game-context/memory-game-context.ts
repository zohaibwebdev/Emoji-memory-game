import { createContext, useContext } from 'react'
import { defaulValues, GameContextValue } from './interface'

const GameContext = createContext<GameContextValue>(defaulValues)
export const GameContextProvider = GameContext.Provider
export const useGameContext = () => useContext(GameContext)
