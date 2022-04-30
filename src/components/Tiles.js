import React, { useState } from 'react'
import Tile from './Tile.js'

const Tiles = ({ word, row, submitted }) => {
    return (
        <div className="flex-center gap-4">
            {row.map((tile, index) => {
                return (<Tile key={index} value={tile} answer={(tile === word[index] && submitted) ? ' fully' : (word.includes(tile) && submitted) ? ' partially' : (submitted) ? ' none' : ''} />)
            })}
        </div>
    )
}

export default Tiles