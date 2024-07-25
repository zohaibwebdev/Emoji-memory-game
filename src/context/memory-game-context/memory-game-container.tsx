import React, { FC, useEffect, useState, useCallback, PropsWithChildren } from 'react'
import { GameContextProvider } from './memory-game-context'
import { defaulValues, Card } from './interface'
import { generateCards, shuffleCards } from '@/shared/data/emojiArray'

const GameContextContainer: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState(defaulValues.state)

    const startGame = useCallback((cards: Card[]) => {
        setState({
            cards,
            flippedCards: [],
            matchedCards: [],
            score: 0,
            flips: 0,
            time: 0,
            gameStarted: true,
        })
    }, [])

    const resetGame = useCallback(() => {
        const initialCards = shuffleCards(generateCards())
        startGame(initialCards)
    }, [startGame])

    useEffect(() => {
        resetGame()
    }, [resetGame])

    const flipCard = useCallback(
        (card: Card) => {
            if (state.flippedCards.length < 2 && !state.flippedCards.includes(card)) {
                setState((prevState) => {
                    const newFlippedCards = [...prevState.flippedCards, card]
                    const isMatch =
                        newFlippedCards.length === 2 && newFlippedCards[0].emoji === newFlippedCards[1].emoji

                    if (newFlippedCards.length === 2 && !isMatch) {
                        setTimeout(() => {
                            setState((prevState) => ({
                                ...prevState,
                                flippedCards: [],
                            }))
                        }, 1000)
                    }

                    return {
                        ...prevState,
                        flippedCards: newFlippedCards,
                        flips: prevState.flips + 1,
                        ...(isMatch
                            ? {
                                  matchedCards: [...prevState.matchedCards, ...newFlippedCards],
                                  score: prevState.score + 1,
                                  flippedCards: [],
                              }
                            : {}),
                    }
                })
            }
        },
        [state.flippedCards],
    )

    const setTime = useCallback((time: number) => {
        setState((prevState) => ({ ...prevState, time }))
    }, [])

    return (
        <GameContextProvider value={{ state, startGame, flipCard, setTime, resetGame }}>{children}</GameContextProvider>
    )
}

export default GameContextContainer
