'use client'
import React from 'react'
import Header from './header/header.component'
import ScoreBoard from './score-board/score-board.component'
import Cards from './cards/cards.component'
import GameContextContainer from '@/context/memory-game-context/memory-game-container'

const MemoryGame = () => {
    return (
        <GameContextContainer>
            <div className="min-h-[100vh] text-white flex flex-col bg-gradient-to-br from-purple-900 to-green-700">
                <Header />
                <ScoreBoard />
                <Cards />
            </div>
        </GameContextContainer>
    )
}

export default MemoryGame
