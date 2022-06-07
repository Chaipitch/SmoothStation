import {useState,useRef} from 'react'
import {FaPlay, FaChevronLeft,FaChevronRight,FaPause} from 'react-icons/fa'
import Card from './shared/Card'
function Player({currentSong, isPlaying, setIsPlaying}) {
    const [songInfo,setSongInfo] = useState({
        currentTime: null,
        duration: null,
    })

    const audioRef = useRef(null)

    const playSongHandler = () => {
        setIsPlaying(!isPlaying)
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const getTime = (time) => {
        return(
            Math.floor(time/60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }


    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime:current, duration})
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
        
    }
    
    
  return (
    <Card>
        <div className='flex flex-col items-center space-y-4 relative'>
            {/* //song control */}
            <div className='flex space-x-4 items-center'>
                <p className='text-black hover:cursor-default'>{getTime(songInfo.currentTime)}</p>
                <input 
                type="range" 
                min={0} max={songInfo.duration}
                onChange={dragHandler} 
                value={songInfo.currentTime ?? 0} 
                className ="range range-xs range-accent w-60 sm:w-80 md:w-96"/>
                <p className='text-black hover:cursor-default'>{getTime(songInfo.duration)}</p>
            </div>
            {/* Player Control */}
            <div className='flex space-x-8' >
                <FaChevronLeft className='hover:cursor-pointer hover:text-red-400 hover:scale-[120%] transition'/>
                <button onClick={playSongHandler} className='hover:text-red-400 hover:scale-[120%] transition'>
                    {!isPlaying ? <FaPlay/>:<FaPause/>}
                </button>
                <FaChevronRight className='hover:cursor-pointer hover:text-red-400 hover:scale-[120%] transition'/>
            </div>
            <div className='absolute top-5 right-10 md:right-16 flex space-x-2 items-center justify-center'>
                <p>VOL</p>
            <input 
                type="range" 
                min={0} max={100}
                className ="range range-xs range-accent w-12 md:mr-14"/>
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    </Card>
  )
}

export default Player