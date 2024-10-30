import React from 'react'
import { Modal } from '@/shared/ui/modal'
import { version } from '@/shared/version'
import InstructionsSteam1 from '@/assets/download-instructions/steam1.jpg'
import InstructionsSteam2 from '@/assets/download-instructions/steam2.jpg'
import download from '@/assets/download-instructions/download.gif'
import extract from '@/assets/download-instructions/extract.jpg'
import extractAll from '@/assets/download-instructions/extract-all.jpg'
import { Timer } from '@/features/timer'

// const downloadLink = `https://github.com/AtDeadOfNight/russian-dub-release/releases/download/${version}/at-dead-of-night-russian-${version}.zip`
const downloadLink = '/at-dead-of-night-russian-v1.0.0.zip'

export function DownloadButton() {
  const [dialogVisible, setDialogVisible] = React.useState(false)

  const handleDownload = () => {
    setDialogVisible(true)
  }

  const IS_RELEASED = false

  return (
    <>
      <div className='flex justify-center my-4 flex-col gap-2 items-center'>
        <button className='bg-red-700 rounded-full px-6 py-2 text-xl font-medium flex items-center gap-1 disabled:bg-transparent disabled:border-red-700 disabled:border-2 disabled:opacity-50' onClick={handleDownload} disabled={!IS_RELEASED}>
          <DownloadIcon /> Скачать версию {version}
        </button>
        {!IS_RELEASED && <span className='font-sans text-xs font-light'>Кнопка станет активной через <Timer deadline={1730381400000} /></span>}
      </div>
      <Modal
        show={dialogVisible} 
        onClose={() => setDialogVisible(false)} 
        title='Как установить?'
        width={700}
      >
        <ol className='list-decimal ps-4 text-2xl pb-2'>
          <li><a href={downloadLink} target='_blank' rel='nofollow noreferrer'>Нажмите на эту ссылку</a>, чтобы скачать последнюю версию дубляжа</li>
          <li className='my-4'>Найдите папку, в которой установлена игра At Dead of Night. 
            <ol className='list-disc pl-4 text-xl leading-tight'>
              <li className='my-2'>
                Например, если вы купили игру в Steam, то откройте Библиотеку, нажмите правой кнопкой мыши по At Dead of Night, выберите пункт "Свойства", перейдите во вкладку "Установленные файлы" и нажмите кнопку "Обзор". Это должно дать вам понимание о том, где находятся файлы игры на вашем компьютере.
                <div className='flex items-center w-full my-4'>
                  <img src={InstructionsSteam1} className='flex-[1654] min-w-0 w-auto aspect-[920/556] rounded-lg' />
                  <span className='flex-[20px]'></span>
                  <img src={InstructionsSteam2} className='flex-[1383] min-w-0 w-auto aspect-[2105/1522] rounded-lg' />
                </div>
              </li>
            </ol>
          </li>
          <li className='my-8 leading-[1.0]'>
            Откройте папку, в которую вы скачали zip-архив
            <img src={download} className='rounded-lg my-2' />
          </li>
          <li className='my-8 leading-[1.0]'>
            Нажмите правой кнопкой мыши на zip-архив и выберите пункт "Извлечь все"
            <img src={extractAll} className='rounded-lg my-2' />
          </li>
          <li className='my-8 leading-[1.0]'>
            В поле для пути укажите папку, в которую установлена игра At Dead of Night, и нажмите "Извлечь"
            <img src={extract} className='rounded-lg my-2' />
            <span className='text-neutral-500 leading-[1.25]'>Обратите внимание, что это должна быть папка, в которой находится файл "AtDeadOfNight.exe"</span>
          </li>
        </ol>
        <span className='text-3xl font-medium text-center w-full'>Теперь запустите игру и наслаждайтесь русской озвучкой!</span>
      </Modal>
    </>
  )
}

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" /></svg>
)