import React from 'react'
import Card from './shared/Card'
import {FaPlay} from 'react-icons/fa'

function SongItem({ song, setCurrentSong, id}) {
    const songSelectHandler = () => {
        setCurrentSong(song)
    }


  return (
    <Card>
        <div className='flex items-center'>
            <img className='w-1/5 shadow-sm px-4' src={song.cover} alt="#" />
            <div>
                <h3 className='font-bold px-4'>{song.name}</h3>
                <h3 className=' px-4 text-sm'>{song.artist}</h3>
            </div>
            <button onClick={songSelectHandler} className='ml-auto mr-4 hover:cursor-pointer hover:text-red-400 hover:scale-[120%] transition'><FaPlay/></button>
        </div>
    </Card>
  )
}

export default SongItem