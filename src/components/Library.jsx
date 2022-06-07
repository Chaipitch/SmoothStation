import {useRef} from 'react'
import SongItem from './SongItem'
import {useDraggable} from 'react-use-draggable-scroll'


function Library({songs, setCurrentSong}) {
    const ref = useRef()
    const {events} = useDraggable(ref);

  return (
    <div>
        <h2 className='mx-10 font-bold text-3xl text-black py-6 border-t-2'>Library</h2>
        <div className=' bg-gray-800 h-[512px] my-2 mx-14 rounded-3xl overflow-y-scroll' {...events} ref={ref}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                {songs.map(song => (
                    <SongItem songs={songs} setCurrentSong={setCurrentSong} key={song.id} id={song.id} song={song}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Library