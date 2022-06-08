import {useRef, useContext} from 'react'
import SongItem from './SongItem'
import {useDraggable} from 'react-use-draggable-scroll'
import MusicAppContext from '../context/MusicAppContext'


function Library() {
    const ref = useRef()
    const {events} = useDraggable(ref);
    const {songs,setCurrentSong} = useContext(MusicAppContext)

  return (
    <div>
        <h2 className='mx-10 font-bold text-3xl text-black py-6 border-t-2'>Library</h2>
        <div className=' bg-gray-800 h-[512px] my-2 mx-20 rounded-3xl overflow-y-scroll' {...events} ref={ref}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
                {songs.map(song => (
                    <SongItem songs={songs} setCurrentSong={setCurrentSong} key={song.id} id={song.id} song={song}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Library