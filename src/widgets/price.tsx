import { DocumentsButton } from '@/entities/documents-button'
import { DonateButton } from '@/entities/donate-button'
import { DubPriceChart } from '@/entities/dub-price-chart'

export function Price() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center w-full sm:h-[700px] sm:gap-20 p-8 sm:py-0 sm:px-16 1370px:px-32 relative'>
      <img src="/sea-view.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover select-none' draggable="false" />
      <DubPriceChart />
      <div className='flex-[3] flex flex-col gap-5 justify-between min-w-0 text-xl lg:text-2xl leading-tight text-shadow relative z-[1]'>
        <h2 className='text-4xl'>Сколько стоило сделать дубляж</h2>
        <p>
          Без учета оплаты работы по сведению и монтажу и гонораров актерам-волонтерам (фанатам игры), стоимость дубляжа составила <b>77 000 рублей (832$)</b>.
        </p>
        <p>
          Несмотря на высокую стоимость и финансирование, обеспеченное полностью из кармана одного фаната игры, неофициальная озвучка находится полностью в свободном доступе и вы можете скачать её по ссылке выше. Она также опубликована в общественное достояние (public domain) и может использоваться и модифицироваться любым человеком и любым образом без каких-либо ограничений и условий.
        </p>
        <div className='flex flex-col xl:flex-row gap-4 my-2 items-center'>
          <DonateButton />
          <DocumentsButton />
        </div>
      </div>
    </div>
  )
}