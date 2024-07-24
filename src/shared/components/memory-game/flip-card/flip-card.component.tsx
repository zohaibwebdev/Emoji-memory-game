import React, { FC, useState } from 'react'
import { FlipCardProps } from './flip-card.types'

const FlipCard: FC<FlipCardProps> = ({ emoji, uniqueValue }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="w-[180px] h-[180px] perspective" onClick={handleFlip}>
            <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
            >
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-slate-600 to-slate-800 rounded-md"></div>
                <div className="absolute w-full h-full backface-hidden bg-blue-400 rounded-md rotate-y-180 flex items-center justify-center">
                    <span className="text-black text-xl font-bold">
                        {emoji} {uniqueValue}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
