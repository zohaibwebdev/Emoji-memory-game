import React from 'react'
import dataArray from '@/shared/data/data'
import FlipCard from '../flip-card/flip-card.component'
const Cards = () => {
    return (
        <div className="grid grid-cols-5 gap-3 mt-10 px-10">
            {dataArray.map((item) => (
                <FlipCard emoji={item.emoji} uniqueValue={item.uniqueValue} key={item.uniqueValue} />
            ))}
        </div>
    )
}

export default Cards
