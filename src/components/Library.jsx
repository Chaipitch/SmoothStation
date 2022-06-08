import {useRef, useContext} from 'react'
import SongItem from './SongItem'
import {useDraggable} from 'react-use-draggable-scroll'
import MusicAppContext from '../context/MusicAppContext'


function Library() {
    const ref = useRef()
    const {events} = useDraggable(ref);
    const {songs} = useContext(MusicAppContext)

  return (
    <div className='mb-20 mt-16'>
        <h2 className='mx-10 font-bold text-3xl text-black py-6 border-t-2 md:max-w-xl md:mx-auto'>Library</h2>
        <div className=' bg-gray-800 h-[512px] my-2 mx-4 rounded-xl overflow-y-scroll shadow-xl md:max-w-3xl md:mx-auto' {...events} ref={ref}>
            <div className='grid grid-cols-1  gap-0'>
                {songs.map(song => (
                    <SongItem  key={song.id} id={song.id} song={song}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Library