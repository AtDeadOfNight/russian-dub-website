import howItsDone1 from '@/assets/process/1.jpg'
import howItsDone2 from '@/assets/process/2.jpg'
import howItsDone3 from '@/assets/process/3.jpg'
import howItsDone4 from '@/assets/process/4.jpg'
import howItsDone5 from '@/assets/process/5.jpg'
import howItsDone6 from '@/assets/process/6.jpg'
import howItsDone7 from '@/assets/process/7.jpg'
import howItsDone8 from '@/assets/process/8.jpg'
import howItsDone9 from '@/assets/process/9.jpg'
import howItsDone10 from '@/assets/process/10.jpg'
import howItsDone11 from '@/assets/process/11.jpg'
import howItsDone12 from '@/assets/process/12.jpg'
import howItsDone13 from '@/assets/process/13.jpg'
import howItsDoneVideo1 from '@/assets/process/adon-adding-effects-rack.mp4'
import howItsDoneVideo2 from '@/assets/process/adon-making-jimendappear.mp4'

const processImages = [
  { src: howItsDone1, ar: 1.602543720190779 },
  { src: howItsDone2, ar: 1.5403128760529483 },
  { src: howItsDone9, ar: 2.1440536013400333 },
  { src: howItsDone4, ar: 1.5403128760529483 },
  { src: howItsDone11, ar: 2.5548902195608783 },
  { src: howItsDone8, ar: 1.7630853994490359 },
  { src: howItsDone10, ar: 1.5403128760529483 },
  { src: howItsDone7, ar: 1.8523878437047756 },
  { src: howItsDone12, ar: 1.6976127320954908 },
  { src: howItsDone3, ar: 1.5403128760529483 },
  { src: howItsDone6, ar: 1.4883720930232558 },
  { src: howItsDone5, ar: 1.5403128760529483 },
  { src: howItsDone13, ar: 1.539714867617108 },
]

export function Process() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-8 lg:gap-4 p-4 xs:p-8 sm:p-16 1370px:p-32 bg-black'>
      <div className='flex flex-col-reverse lg:flex-row gap-12 w-full items-center lg:items-start'>
        <div className='flex-1 flex flex-col gap-3 justify-between min-w-0 text-xl lg:leading-tight text-shadow'>
          <h2 className='text-4xl'>Процесс создания с 2022 по 2024 год</h2>
          <ul className='list-disc ps-4 md:ps-0'>
            <li>Автоматический поиск транскрипта для каждого аудио-файла с речью в игре из субтитров</li>
            <li><a href="https://t.me/adonru/6" target="_blank" rel="nofollow noreferrer">Удаление надписей из видеоряда туториала, монтаж туториала с новыми надписями</a></li>
            <li><a href="https://t.me/adonru/26" target="_blank" rel="nofollow noreferrer">Сортировка фраз по персонажам, ручные правки, компиляция в таблицу для удобства</a></li>
            <li><a href="https://vk.com/wall-203662695_1112" target="_blank" rel="nofollow noreferrer">Кастинг актеров и актерш на каждую роль с привлечением сообщества игры (голосовали фанаты)</a></li>
            <li><a href="https://t.me/adonru/12" target="_blank" rel="nofollow noreferrer">Разработка скрипта, который накладывает русскоязычные надписи поверх Hotel.m4v внутри игры</a></li>
            <li><a href="https://t.me/adonru/31" target="_blank" rel="nofollow noreferrer">Плейтест после каждого этапа, правки, корпотливый подбор подходящих параметров реверба</a></li>
            <li>Сортировка аудиофайлов по персонажам, индивидуальная работа с каждым актером для записи</li>
            <li><a href="https://t.me/adonru/42" target="_blank" rel="nofollow noreferrer">Правки в CSS код игры для корректного отображения кириллического текста</a></li>
            <li><a href="https://t.me/adonru/43" target="_blank" rel="nofollow noreferrer">Поиск подходящих пресетов эффектов, работа в Adobe AU, AE, PP, PS</a></li>
            <li>Ручная обработка более сложных аудиофайлов с наложением множества эффектов</li>
            <li><a href="https://t.me/adonru/96" target="_blank" rel="nofollow noreferrer">Поиск оригинальных музыкальных композиций и эффектов, используемых в прологе</a></li>
            <li><a href="https://t.me/adonru/105" target="_blank" rel="nofollow noreferrer">Удаление надписей и речи из пролога, наложение новых надписей, речи и эффектов</a></li>
            <li><a href="https://t.me/adonru/204" target="_blank" rel="nofollow noreferrer">Кастинг и найм профессиональных актеров озвучки для озвучивания мужских персонажей</a></li>
          </ul>
        </div>
        <img src="/logo-ru.webp" className='max-h-[400px] aspect-square sm:h-[400px]' loading="lazy" />
      </div>
      <div className='sm:bg-neutral-900 sm:p-4 sm:pb-4 sm:rounded-xl h-auto sm:h-[232px] w-full'>
        <div className='w-full h-full overflow-auto scrollbar-gray pb-4'>
          <div className='flex flex-col sm:flex-row gap-2 h-fit w-fit sm:h-full sm:w-full'>
            {processImages.map(({ src, ar }, i) => (
              <a href={src} target='_blank' rel='noopener noreferrer' className='card-inset-shadow sm:w-auto shrink-0 rounded-lg overflow-clip w-fit h-full' key={i}>
                <img src={src} className='sm:h-full bg-neutral-400' style={{ aspectRatio: ar }} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row h-fit gap-5 sm:gap-10 w-full justify-between my-9'>
        <video className='h-auto flex-1 min-w-0 aspect-[1920/1246] rounded-xl' controls>
          <source src={howItsDoneVideo1} type="video/mp4" />
        </video>
        <video className='h-auto flex-1 min-w-0 aspect-[1920/1246] rounded-xl' controls>
          <source src={howItsDoneVideo2} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}