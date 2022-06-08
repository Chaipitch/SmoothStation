import {createContext,useState} from 'react'
import data from '../util'

const MusicAppContext = createContext()

export const MusicAppProvider = ({children}) => {
    const [songs, setSongs] = useState(data());
    const [isPlaying,setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(songs[0])


    return <MusicAppContext.Provider value={{
        songs,
        setCurrentSong,
        currentSong,
        isPlaying,
        setIsPlaying
    }}>
        {children}
    </MusicAppContext.Provider>
}

export default MusicAppContext;