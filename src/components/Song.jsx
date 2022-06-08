import {useContext} from 'react'
import Card from './shared/Card'
import MusicAppContext from '../context/MusicAppContext'

function Song() {
  const {currentSong,isPlaying} = useContext(MusicAppContext)


  return (
    <Card>
        <div className=' flex flex-col items-center justify-center space-y-2 min-h-[50vh]'>
            <img className={!isPlaying ? 'w-[256px] rounded-full shadow-2xl mb-6':'w-[256px] rounded-full shadow-2xl mb-6 animate-spin-slow'} 
            src={currentSong.cover} 
            alt="#" />
            <h1 className='text-black-100 font-bold text-xl cursor-default'>{currentSong.name}</h1>
            <h1 className='text-black-300 text-sm uppercase cursor-default'>{currentSong.artist}</h1>
        </div>
    </Card>
  )
}

export default Song