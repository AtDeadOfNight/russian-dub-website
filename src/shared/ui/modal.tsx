import React from 'react'
import cx from 'classnames'
import FocusTrap from 'focus-trap-react'
import { useHotkeys } from 'react-hotkeys-hook'

export function Modal({ title, show, onClose, children, width, height = 'auto' }: React.PropsWithChildren<{
  title: string
  show: boolean
  onClose: () => void
  width?: number
  height?: number | 'auto'
}>) {
  const [mounted, setMounted] = React.useState(false)
  const [visible, setVisible] = React.useState(false)
  useHotkeys('esc', () => onClose())

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  React.useEffect(() => {
    if (show) {
      setMounted(true)
      setTimeout(() => setVisible(true), 0)
      window.document.body.style.overflow = 'hidden'
    } else {
      setVisible(false)
      setTimeout(() => setMounted(false), 200)
      window.document.body.style.overflow = ''
    }
  }, [show])

  return mounted && (
    <FocusTrap active={show}>
      <div
        className={cx('fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.75)] z-[100] transition-opacity flex items-center justify-center no-text-shadow', {
          'opacity-1': visible,
          'pointer-events-none opacity-0': !visible,
        })}
        onClick={handleBgClick}
      >
        <div 
          className='bg-white text-black max-h-[90vh] overflow-auto lg:h-[var(--default-height)] rounded-3xl flex flex-col shadow-lg'
          style={{
            '--default-height': height === 'auto' ? 'auto' : (height + 'px'),
            width: width ?? 380
          } as React.CSSProperties}
        >
          <div className='flex justify-between items-start sticky top-0 bg-white'>
            <h2 className='text-4xl font-bold m-0 p-12 pb-4'>{title}</h2>
            <button className='p-8' onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path></svg>
            </button>
          </div>
          <div className='flex flex-col gap-2 max-w-full pt-4 p-12'>
            {children}
          </div>
        </div>
      </div>
    </FocusTrap>
  )
}