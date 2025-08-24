import { DownloadButton } from '@/features/download-button';

export function Hero() {
	return (
		<div
			className="flex flex-col items-center justify-center w-full h-screen gap-2
				min-h-96 relative"
		>
			<div
				className="absolute top-0 pointer-events-none w-full h-full select-none
					overflow-clip bg-black"
			>
				<img
					src="/hotel.webp"
					alt=""
					className="absolute w-full h-full z-10 object-cover top-0 left-0
						select-none animation-bg-hero bg-black"
					draggable={false}
					loading="lazy"
				/>
				<img
					src="/hotel-compressed.webp"
					alt=""
					className="absolute w-full h-full object-cover top-0 left-0
						select-none animation-bg-hero bg-black"
					draggable={false}
					loading="eager"
				/>
			</div>
			<div className="absolute z-20">
				<h1 className="flex flex-col text-4xl sm:text-6xl text-center">
					Русскоязычная озвучка{' '}
					<span
						className="bg-gradient-to-t from-red-600 to-transparent bg-clip-text
							text-[rgba(255,0,0,0.2)] bg-blood-splatter"
					>
						At Dead of Night
					</span>
				</h1>
				<DownloadButton />
			</div>
		</div>
	);
}
