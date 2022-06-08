import {useState} from 'react'
import Library from './components/Library';
import Player from "./components/Player"
import Song from "./components/Song"
import data from './util'
import {MusicAppProvider} from './context/MusicAppContext'

function App() { 

  return (
    <>
      <MusicAppProvider>
        <h1 className="text-3xl font-bold text-center cursor-default py-10 text-black-400">
          Smooth Station
        </h1>
        <Song/>
        <Player/>
        <Library/>
      </MusicAppProvider>
    </>
  )
}

export default App
