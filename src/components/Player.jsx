import {useContext, useEffect} from 'react'
import {FaPlay, FaChevronLeft,FaChevronRight,FaPause,FaVolumeUp} from 'react-icons/fa'
import Card from './shared/Card'
import MusicAppContext from '../context/MusicAppContext'


function Player() {
    const {
        currentSong, 
        isPlaying, 
        playSongHandler,
        getTime,
        timeUpdateHandler,
        dragHandler,
        currentTime,
        duration,
        audioRef,
        volHandler,
        currentVol,
        volRange,
        skipTrackHandler,
        songs,
        setSongs,
        playAudio
    } = useContext(MusicAppContext)

    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id){
                return {
                    ...song, active: true
                }
            }else{
                return{
                    ...song, active: false
                }
            }
        })
        setSongs(newSongs)
        playAudio()
    },[currentSong])

  return (
    <Card>
        <div className='flex flex-col items-center space-y-4 relative'>
            {/* //song control */}
            <div className='flex space-x-4 items-center'>
                <p className='text-black hover:cursor-default'>{getTime(currentTime)}</p>
                <input 
                type="range" 
                min={0} max={duration}
                onChange={dragHandler} 
                value={currentTime ?? 0} 
                className ="range range-xs range-accent w-60 sm:w-80 md:w-96"/>
                <p className='text-black hover:cursor-default'>{getTime(duration)}</p>
            </div>
            {/* Player Control */}
            <div className='flex space-x-8' >
                <FaChevronLeft onClick={() => skipTrackHandler('skip-back')} className='hover:cursor-pointer hover:text-red-400 hover:scale-[120%] transition'/>
                <button onClick={playSongHandler} className='hover:text-red-400 hover:scale-[120%] transition'>
                    {!isPlaying ? <FaPlay/>:<FaPause/>}
                </button>
                <FaChevronRight onClick={() => skipTrackHandler('skip-forward')} className='hover:cursor-pointer hover:text-red-400 hover:scale-[120%] transition'/>
            </div>
            <div className='absolute top-6 right-1 md:right-20 flex space-x-2 items-center justify-center'>
                <p><FaVolumeUp/></p>
            <input 
                type="range" 
                min={0} max={volRange}
                value={currentVol ?? 100}
                onChange={volHandler}
                className ="range range-xs range-accent w-20 md:w-20 md:mr-14"/>
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    </Card>
  )
}

export default Player