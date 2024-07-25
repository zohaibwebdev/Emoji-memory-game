import React, { FC } from 'react'
import { useGameContext } from '@/context/memory-game-context/memory-game-context'
import { FlipCardProps } from './flip-card.types'

const FlipCard: FC<FlipCardProps> = ({ card }) => {
    const { state, flipCard } = useGameContext()
    const { flippedCards, matchedCards } = state

    const isFlipped = flippedCards.includes(card) || matchedCards.includes(card)

    const handleFlip = () => {
        if (!isFlipped && state.flippedCards.length < 2) {
            flipCard(card)
        }
    }

    return (
        <div className="w-[180px] h-[180px] perspective" onClick={handleFlip}>
            <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}
            >
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-red-500 to-green-600 rounded-md flex items-center justify-center">
                    <span className="text-black text-xl font-bold"></span>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-blue-400 rounded-md rotate-y-180 flex items-center justify-center">
                    <span className="text-black text-xl font-bold">{card.emoji}</span>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
