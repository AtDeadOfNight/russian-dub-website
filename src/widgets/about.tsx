export function About() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto sm:h-[700px] gap-2 bg-about p-6 sm:py-0 sm:px-16 1370px:px-32'>
      <div className='flex gap-0 1180px:gap-20 w-full items-start h-fit 1370px:h-[400px]'>
        <span className='w-[0px] 1180px:w-[400px] shrink-0' />
        <div className='flex-1 flex flex-col gap-3 justify-between min-w-0 text-xl lg:text-2xl lg:leading-tight text-shadow'>
          <h2 className='text-4xl'>О русификации At Dead of Night</h2>
          <p>
            Игра At Dead of Night была выпущена в 2020 году с русским переводом от команды TDoT. В переводе обнаружилось много ошибок,
            машинный перевод и недостаточное внимание к деталям. Мы решили исправить это и создали свой бесплатный неофициальный русификатор с русской озвучкой, 
            исходники которого есть на <a href="https://github.com/AtDeadOfNight/russian-dub-release" target='_blank' rel='nofollow noreferrer'>GitHub</a>.
          </p>
          <p>
            В озвучке с 2022 года приняли участие как фанаты игры, так и профессиональные актеры дубляжа. Все финансирование озвучки было собрано из личных средств.
            Ниже вы можете найти все документы и чеки, подтверждающие покупки. Процесс создания дубляжа публиковался в Telegram-канале <a href="https://t.me/adonru" target='_blank'>t.me/adonru</a>
          </p>
          <p>
            Кроме дубляжа и перевода, автор русификатора также перевел все надписи в видео-туториале в игре, многие надписи в прологе и некоторые надписи внутри самой игры.
            Для этого потребовалось сделать реверс инженеринг кода At Dead of Night, в результате которого появились такие сайд проекты 
            как <a href="https://github.com/AtDeadOfNight/cheats" target='_blank' rel='nofollow noreferrer'>читы на игру</a> и моды.
          </p>
        </div>
      </div>
    </div>
  )
}