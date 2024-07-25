interface Card {
    emoji: string
    id: number
}

export const generateCards = (): Card[] => {
    const cards: Card[] = [
        { emoji: '🍎', id: 1 },
        { emoji: '🍎', id: 2 },
        { emoji: '🍌', id: 3 },
        { emoji: '🍌', id: 4 },
        { emoji: '❤️', id: 5 },
        { emoji: '❤️', id: 6 },
        { emoji: '🐬', id: 7 },
        { emoji: '🐬', id: 8 },
        { emoji: '👌', id: 9 },
        { emoji: '👌', id: 10 },
    ]
    return cards
}

export const shuffleCards = (cards: Card[]): Card[] => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards
}
