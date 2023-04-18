import React, { useState } from 'react'

function GifSearch({ handleSubmit }) {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form className='form' onSubmit={e => handleSubmit(e)}>
            <label htmlFor='search'>Enter a Search Term:</label>
            <input
                type='text'
                name='search'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <input type='submit' value='Find Gifs' />
        </form>
    )
}

export default GifSearch