import {createContext,useState, useRef} from 'react'
import data from '../util'

const MusicAppContext = createContext()

export const MusicAppProvider = ({children}) => {
    const [songs, setSongs] = useState(data());
    const [isPlaying,setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(songs[0])

    // PLAYER CONTROL
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

    // Volume Ctrl
    const [volumeInfo, setVolumeInfo] = useState({
        currentVol: null,
        volRange: null
    })

    const volHandler = (e) => {
        audioRef.current.volume = e.target.value / 100;
        setVolumeInfo({...volumeInfo, currentVol: e.target.value})
    }

    //SkipCtrl
    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
            
        }
        if(direction === 'skip-back'){
            if((currentIndex - 1) % songs.length === -1){
                return setCurrentSong(songs[songs.length - 1])
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
    }

    //Play When selected or skipped
    const playAudio = () => {
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play(); 
                })
            }
        }
    }

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
          await setCurrentSong(songs[(currentIndex + 1) % songs.length])
          if(isPlaying) audioRef.current.play()
    }

    
    

    
    return <MusicAppContext.Provider value={{
        songs,
        setSongs,
        setCurrentSong,
        currentSong,
        isPlaying,
        setIsPlaying,
        playSongHandler,
        getTime,
        timeUpdateHandler,
        dragHandler,
        songInfo,
        setSongInfo,
        audioRef,
        currentTime: songInfo.currentTime,
        duration: songInfo.duration,
        volHandler,
        volumeInfo,
        currentVol:volumeInfo.currentVol,
        volRange: volumeInfo.volRange,
        skipTrackHandler,
        playAudio,
        songEndHandler
    }}>
        {children}
    </MusicAppContext.Provider>
}

export default MusicAppContext;