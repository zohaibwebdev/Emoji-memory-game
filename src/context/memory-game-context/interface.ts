export interface Card {
    emoji: string
    id: number
}
export interface IGameContext {
    cards: Card[]
    flippedCards: Card[]
    matchedCards: Card[]
    score: number
    flips: number
    time: number
    gameStarted: boolean
}

export interface GameContextValue {
    state: IGameContext
    startGame: (cards: Card[]) => void
    flipCard: (card: Card) => void
    setTime: (time: number) => void
    resetGame: () => void
}

export const defaulValues: GameContextValue = {
    state: {
        cards: [],
        flippedCards: [],
        matchedCards: [],
        score: 0,
        flips: 0,
        time: 0,
        gameStarted: false,
    },
    startGame: function (): void {
        throw new Error('Function not implemented.')
    },
    flipCard: function (): void {
        throw new Error('Function not implemented.')
    },
    setTime: function (): void {
        throw new Error('Function not implemented.')
    },
    resetGame: function (): void {
        throw new Error('Function not implemented.')
    },
}
