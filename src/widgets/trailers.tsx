export function Trailers() {
  return (
    <section className='w-full lg:h-[600px] flex flex-col gap-4 items-center justify-center px-9 py-16'>
      <h1 className='text-6xl'>Трейлеры</h1>
      <div className='flex flex-col lg:flex-row items-center gap-4 w-full justify-center flex-1'>
        <Trailer src='https://www.youtube-nocookie.com/embed/ngAwfr-9yds' name='Трейлер русификатора' />
        <Trailer src='https://www.youtube-nocookie.com/embed/8U-FA3hmkV0' name='Трейлер игры на русском' />
      </div>
    </section>
  )
}

function Trailer({ src, name }: {
  src: string
  name: string
}) {
  return (
    <div className='flex items-center flex-col gap-2 flex-1 w-full lg:w-auto h-full'>
      <div className='aspect-[560/315] w-full'>
        <iframe src={src} title={name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='w-full h-full'></iframe>
      </div>
      <span className='text-lg'>{name}</span>
    </div>
  )
}