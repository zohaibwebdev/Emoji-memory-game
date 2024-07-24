'use client'
import React from 'react'
import Header from './header/header.component'
import ScoreBoard from './score-board/score-board.component'
import Cards from './cards/cards.component'

const MemoryGame = () => {
    return (
        <div className="min-h-[100vh] text-white flex flex-col  bg-gradient-to-br from-purple-900 to-green-700">
            <Header />
            <ScoreBoard />
            <Cards />
        </div>
    )
}

export default MemoryGame
