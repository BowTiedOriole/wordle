import React, { useState } from 'react'
import Tiles from './Tiles.js'

const Board = ({ tiles, word, attempt }) => {
    return (
        <div className="flex-center flex-column gap-8 mb-12">
            {tiles.map((row, index) => {
                return (<Tiles key={index} row={row} word={word} submitted={attempt > index} />);
            })}
        </div>
    )
}

export default Board