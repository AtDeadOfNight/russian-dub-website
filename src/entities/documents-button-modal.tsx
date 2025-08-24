import { Modal } from '@/shared/ui/modal';

export function DocumentsButtonModal() {
	return (
		<Modal title="Документы" width={600} id="documents">
			<ul className="text-xl">
				<li>
					<a
						href="https://disk.yandex.ru/d/ddwPwrJiq-8htw"
						target="_blank"
						rel="nofollow noreferrer"
						className="w-fit"
					>
						Таблицы по озвучиванию
					</a>
				</li>
				<li>
					<a href="https://kupigolos.ru/order/4k-8S67wJ6BaP" className="w-fit">
						Заказ на озвучку Джимми (Андрей Вальц) у студии kupigolos.ru
					</a>
				</li>
				<li>
					<a
						href="/check-jimmy.pdf"
						download="Чек на покупку озвучки у Андрея Вальца"
						className="flex gap-1 items-center w-fit"
					>
						<DownloadIcon /> Скачать чек на покупку озвучки у Андрея Вальца
					</a>
				</li>
				<li>
					<a href="https://kupigolos.ru/orders/26095" className="w-fit">
						Заказ на покупку озвучки у Д. Боуза и других персонажей
					</a>
				</li>
				<li>
					<a
						href="/check-bose-and-others.pdf"
						download="Чек на покупку озвучки у Д. Боуза и других персонажей"
						className="flex gap-1 items-center w-fit"
					>
						<DownloadIcon /> Скачать чек на покупку озвучки у Д. Боуза и других
						персонажей
					</a>
				</li>
			</ul>
		</Modal>
	);
}

const DownloadIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="14"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M5 20h14q.425 0 .713.288T20 21t-.288.713T19 22H5q-.425 0-.712-.288T4 21t.288-.712T5 20m7-2.625q-.225 0-.437-.1t-.363-.3l-4.95-6.35q-.375-.5-.1-1.062T7.05 9H9V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v6h1.95q.625 0 .9.563t-.1 1.062l-4.95 6.35q-.15.2-.363.3t-.437.1"
		/>
	</svg>
);
