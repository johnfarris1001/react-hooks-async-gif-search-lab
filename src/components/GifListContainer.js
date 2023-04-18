import React, { useState, useEffect } from 'react'

import GifList from './GifList'
import GifSearch from './GifSearch'

import { key } from '../keys'

function GifListContainer() {
    const [gifs, setGifs] = useState([])
    let query = 'dolphin'
    const urlStart = `https://api.giphy.com/v1/gifs/search?q=`
    const urlMiddle = '&api_key='
    const urlEnd = '&rating=g'


    useEffect(() => {
        fetch(`${urlStart}${query}${urlMiddle}${key}${urlEnd}`)
            .then(r => r.json())
            .then(data => setGifs([data.data[0], data.data[1], data.data[2]]))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        query = e.target.search.value
        fetch(`${urlStart}${query}${urlMiddle}${key}${urlEnd}`)
            .then(r => r.json())
            .then(data => setGifs([data.data[0], data.data[1], data.data[2]]))
    }

    return (
        <div>
            <GifList gifs={gifs} />
            <GifSearch handleSubmit={handleSubmit} />
        </div>
    )
}

export default GifListContainer