import React from 'react'
import { useGameContext } from '@/context/memory-game-context/memory-game-context'

const ScoreBoard: React.FC = () => {
    const { state } = useGameContext()
    const { score, flips, time } = state

    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-4">
                <div className="relative inline-block">
                    <p className="text-black bg-white pl-[60px] py-[10px] pr-4 text-[18px] font-medium rounded-3xl">
                        Score: {score}
                    </p>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3">
                        <span className="text-2xl">🎖️</span>
                    </div>
                </div>
                <div className="relative inline-block">
                    <p className="text-black bg-white pl-[60px] py-[10px] pr-4 text-[18px] font-medium rounded-3xl">
                        Flips: {flips}
                    </p>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3">
                        <span className="text-2xl">🐬</span>
                    </div>
                </div>
                <div className="relative inline-block">
                    <p className="text-black bg-white pl-[60px] py-[10px] pr-4 text-[18px] font-medium rounded-3xl">
                        Time: {time}
                    </p>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3">
                        <span className="text-2xl">⏰</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard
