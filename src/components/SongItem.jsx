import {useContext} from 'react'
import Cardsm from './shared/Cardsm'
import {FaPlay} from 'react-icons/fa'
import MusicAppContext from '../context/MusicAppContext'

function SongItem({ song}) {
    const {setCurrentSong} = useContext(MusicAppContext)

    const songSelectHandler = () => {
        setCurrentSong(song)
    }


  return (
    <Cardsm>
        <div className='flex items-center'>
            <img className='w-1/5 shadow-sm px-4' src={song.cover} alt="#" />
            <div>
                <h3 className='font-bold px-4'>{song.name}</h3>
                <h3 className=' px-4 text-sm'>{song.artist}</h3>
            </div>
            <button onClick={songSelectHandler} className='ml-auto mr-4 hover:cursor-pointer hover:text-red-400 hover:scale-[120%] transition'><FaPlay/></button>
        </div>
    </Cardsm>
  )
}

export default SongItem