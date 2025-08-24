import React from 'react'
import cx from 'classnames'

export function Person({ name, avatar, aka, role, wide = false, link, audio }: {
  name: string
  avatar: string
  aka?: string
  role: string
  wide?: boolean
  audio?: string[]
  link?: string
}) {
  const [audioIndex, setAudioIndex] = React.useState(0)
  const [audioPlayerVisible, setAudioPlayerVisible] = React.useState(false)
  const [audioPlayerBecameVisibleAt, setAudioPlayerBecameVisibleAt] = React.useState<null | number>(null)
  const [audioPlayerPlaying, setAudioPlayerPlaying] = React.useState(false)
  const audioPlayerRef = React.useRef<HTMLAudioElement>(null)
  
  const avatarComponent = (
    <img src={avatar} className='w-24 h-24 rounded-full bg-neutral-900' alt={name} loading="lazy" />
  )

  const nextAudio = () => {
    if (audio === undefined) return
    const newAudioIndex = ((audioIndex ?? 0) + 1) % audio.length
    setAudioIndex(newAudioIndex)
  }

  return (
    <div className={cx('flex flex-col items-center text-center', {
      'w-32': !wide
    })}>
      {audio ? (
        <button 
          onClick={() => {
            if (!audioPlayerRef.current) return
            if(audioPlayerPlaying) {
              audioPlayerRef.current.pause()
              audioPlayerRef.current.src = ''
              setAudioPlayerPlaying(false)
              nextAudio()
            } else if(audioPlayerBecameVisibleAt && Date.now() - audioPlayerBecameVisibleAt > 50) {
              audioPlayerRef.current.src = audio[audioIndex]
              audioPlayerRef.current.addEventListener('canplaythrough', () => {
                audioPlayerRef.current?.play()
                setAudioPlayerPlaying(true)
              })
              setAudioPlayerPlaying(true)
            }
          }} 
          className='my-1 relative rounded-full'
          onMouseEnter={() => {
            setAudioPlayerVisible(true)
            setAudioPlayerBecameVisibleAt(Date.now())
          }}
          onMouseLeave={() => setAudioPlayerVisible(false)}
          onFocus={() => {
            setAudioPlayerVisible(true)
            setAudioPlayerBecameVisibleAt(Date.now())
          }}
          onBlur={() => setAudioPlayerVisible(false)}
        >
          <audio
            ref={audioPlayerRef}
            onEnded={() => {
              setAudioPlayerPlaying(false)
              nextAudio()
            }}
          />
          <div className={cx('absolute top-0 left-0 bg-[rgba(50,50,50,0.25)] transition-opacity w-full h-full flex items-center justify-center rounded-full', {
            'opacity-1': audioPlayerVisible,
            'opacity-0': !audioPlayerVisible
          })}>
            {audioPlayerPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
            <span className='absolute bottom-2 font-medium tabular-nums'>{audioIndex % audio.length + 1}/{audio.length}</span>
          </div>
          {avatarComponent}
        </button>
      ) : (
          <a href={link} target='_blank' rel='nofollow noreferrer' className='rounded-full block my-1'>
          {avatarComponent}
        </a>
      )}
      <h3 className='text-xl whitespace-pre-wrap leading-tight my-1'>{name}</h3>
      {aka && (<span className='text-sm leading-tight'>aka {aka}</span>)}
      <span className='text-lg font-medium leading-[1.0] my-2'>{role}</span>
    </div>
  )
}

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712" /></svg>
)

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16 19q-.825 0-1.412-.587T14 17V7q0-.825.588-1.412T16 5t1.413.588T18 7v10q0 .825-.587 1.413T16 19m-8 0q-.825 0-1.412-.587T6 17V7q0-.825.588-1.412T8 5t1.413.588T10 7v10q0 .825-.587 1.413T8 19" /></svg>
)