import React from 'react'
import FlipCard from '../flip-card/flip-card.component'
import { useGameContext } from '@/context/memory-game-context/memory-game-context'

const Cards: React.FC = () => {
    const { state } = useGameContext()
    console.log('state cards', state.cards)
    return (
        <div className="grid grid-cols-5 gap-3 my-10 px-10">
            {state.cards.map((card) => (
                <FlipCard key={card.id} card={card} />
            ))}
        </div>
    )
}

export default Cards
