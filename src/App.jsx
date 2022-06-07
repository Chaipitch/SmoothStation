import {useState} from 'react'
import Library from './components/Library';
import Player from "./components/Player"
import Song from "./components/Song"
import data from './util'

function App() { 
  const [songs, setSongs] = useState(data());
  const [isPlaying,setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <>
      <h1 className="text-3xl font-bold text-center cursor-default py-10 text-black-400">
        Smooth Station
      </h1>
      <Song currentSong={currentSong} isPlaying={isPlaying}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
    </>
  )
}

export default App
