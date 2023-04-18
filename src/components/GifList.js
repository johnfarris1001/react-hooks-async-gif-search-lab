import React from 'react'

function GifList({ gifs }) {
    const gifsToDisplay = gifs.map(gif => {
        return <li key={gif.id}><img src={gif.images.original.url} /></li>
    })
    return (
        <ul className='list'>
            {gifsToDisplay}
        </ul>
    )
}

export default GifList