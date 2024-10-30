import React from 'react'
import { Modal } from '@/shared/ui/modal'

export function DocumentsButton() {
  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <>
      <button className='border-2 border-indigo-600 rounded-full px-6 py-2 text-white no-text-shadow hover:text-indigo-400 transition-colors flex items-center gap-3 text-lg w-fit' onClick={() => setModalVisible(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m17.3 20.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l.9.9v-3.175q0-.425.288-.712t.712-.288t.713.288t.287.712V17.2l.9-.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-2.6 2.6q-.3.3-.7.3t-.7-.3M15 24q-.425 0-.712-.288T14 23t.288-.712T15 22h6q.425 0 .713.288T22 23t-.288.713T21 24zm-9-4q-.825 0-1.412-.587T4 18V4q0-.825.588-1.412T6 2h6.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762v1.2q0 .425-.288.712t-.712.288h-4q-.825 0-1.412.588T12 13.025V19q0 .425-.288.713T11 20zm7.5-11H17l-5-5l5 5l-5-5v3.5q0 .625.438 1.063T13.5 9" /></svg>
        Скачать счета-фактуры и документы
      </button>
      <Modal 
        title='Документы'
        show={modalVisible} 
        onClose={() => setModalVisible(false)}
        width={600}
      >
        <ul className='text-xl'>
          <li><a href="https://disk.yandex.ru/d/ddwPwrJiq-8htw" target='_blank' rel='nofollow noreferrer' className='w-fit'>
            Таблицы по озвучиванию
          </a></li>
          <li><a href="https://kupigolos.ru/order/4k-8S67wJ6BaP" className='w-fit'>
            Заказ на озвучку Джимми (Андрей Вальц) у студии kupigolos.ru
          </a></li>
          <li><a href="/check-jimmy.pdf" download='Чек на покупку озвучки у Андрея Вальца' className='flex gap-1 items-center w-fit'>
            <DownloadIcon /> Скачать чек на покупку озвучки у Андрея Вальца
          </a></li>
          <li><a href="https://kupigolos.ru/orders/26095" className='w-fit'>
            Заказ на покупку озвучки у Д. Боуза и других персонажей
          </a></li>
          <li><a href="/check-bose-and-others.pdf" download='Чек на покупку озвучки у Д. Боуза и других персонажей' className='flex gap-1 items-center w-fit'>
            <DownloadIcon /> Скачать чек на покупку озвучки у Д. Боуза и других персонажей
          </a></li>
        </ul>
      </Modal>
    </>
  )
}

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20h14q.425 0 .713.288T20 21t-.288.713T19 22H5q-.425 0-.712-.288T4 21t.288-.712T5 20m7-2.625q-.225 0-.437-.1t-.363-.3l-4.95-6.35q-.375-.5-.1-1.062T7.05 9H9V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v6h1.95q.625 0 .9.563t-.1 1.062l-4.95 6.35q-.15.2-.363.3t-.437.1" /></svg>
)