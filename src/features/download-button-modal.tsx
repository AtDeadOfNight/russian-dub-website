import { Modal } from '@/shared/ui/modal';
import { version } from '@/shared/version';
import InstructionsSteam1 from '@/assets/download-instructions/steam1.jpg';
import InstructionsSteam2 from '@/assets/download-instructions/steam2.jpg';
import download from '@/assets/download-instructions/download.gif';
import extract from '@/assets/download-instructions/extract.jpg';
import extractAll from '@/assets/download-instructions/extract-all.jpg';

// const downloadLink = `https://github.com/AtDeadOfNight/russian-dub-release/releases/download/${version}/at-dead-of-night-russian-${version}.zip`
const downloadLink = `/at-dead-of-night-russian-${version}.zip`;

export function DownloadButtonModal() {
	return (
		<Modal title="Как установить?" width={700} id="download">
			<ol className="list-decimal pb-2 ps-4 text-2xl">
				<li>
					<a href={downloadLink} target="_blank" rel="nofollow noreferrer">
						Нажмите на эту ссылку
					</a>
					, чтобы скачать последнюю версию дубляжа
				</li>
				<li className="my-4">
					Найдите папку, в которой установлена игра At Dead of Night.
					<ol className="list-disc pl-4 text-xl leading-tight">
						<li className="my-2">
							Например, если вы купили игру в Steam, то откройте Библиотеку,
							нажмите правой кнопкой мыши по At Dead of Night, выберите пункт
							"Свойства", перейдите во вкладку "Установленные файлы" и нажмите
							кнопку "Обзор". Это должно дать вам понимание о том, где находятся
							файлы игры на вашем компьютере.
							<div className="my-4 flex w-full items-center">
								<img
									src={InstructionsSteam1}
									className={`aspect-[920/556] w-auto min-w-0 flex-[1654]
										rounded-lg`}
									loading="lazy"
								/>
								<span className="flex-[20px]"></span>
								<img
									src={InstructionsSteam2}
									className={`aspect-[2105/1522] w-auto min-w-0 flex-[1383]
										rounded-lg`}
									loading="lazy"
								/>
							</div>
						</li>
					</ol>
				</li>
				<li className="my-8 leading-[1.0]">
					Откройте папку, в которую вы скачали zip-архив
					<img src={download} className="my-2 rounded-lg" loading="lazy" />
				</li>
				<li className="my-8 leading-[1.0]">
					Нажмите правой кнопкой мыши на zip-архив и выберите пункт "Извлечь
					все"
					<img src={extractAll} className="my-2 rounded-lg" loading="lazy" />
				</li>
				<li className="my-8 leading-[1.0]">
					В поле для пути укажите папку, в которую установлена игра At Dead of
					Night, и нажмите "Извлечь"
					<img src={extract} className="my-2 rounded-lg" loading="lazy" />
					<span className="leading-[1.25] text-neutral-500">
						Обратите внимание, что это должна быть папка, в которой находится
						файл "AtDeadOfNight.exe"
					</span>
				</li>
			</ol>
			<span className="w-full text-center text-3xl font-medium">
				Теперь запустите игру и наслаждайтесь русскоязычной озвучкой!
			</span>
		</Modal>
	);
}
