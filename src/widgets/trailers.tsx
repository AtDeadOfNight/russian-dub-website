export function Trailers() {
  return (
    <section className='w-full lg:h-[600px] flex flex-col gap-4 items-center justify-center px-9 py-16'>
      <h1 className='text-6xl'>Трейлеры</h1>
      <div className='flex flex-col lg:flex-row items-center gap-4 w-full justify-center flex-1'>
        <Trailer src='/DubReleaseTrailer.mp4' name='Трейлер русификатора' thumbnail="/DubReleaseTrailer.webp" />
        <Trailer src='/TrailerFinal.mp4' name='Трейлер игры на русском языке' thumbnail="/TrailerFinal.jpg" />
      </div>
    </section>
  )
}

function Trailer({ src, name, thumbnail }: {
  src: string
  name: string
  thumbnail: string
}) {
  return (
    <div className='flex items-center flex-col gap-2 flex-1 w-full lg:w-auto h-full'>
      <div className='aspect-[560/315] w-full'>
        <video src={src} title={name} className='w-full h-full' controls poster={thumbnail} ></video>
      </div>
      <span className='text-lg'>{name}</span>
    </div>
  )
}