import { version } from '@/shared/version';

export function DownloadButton() {
	return (
		<div className="my-4 flex flex-col items-center justify-center gap-2">
			<a
				className={`flex items-center gap-1 rounded-full bg-red-700 px-6 py-2
					text-xl font-medium text-white hover:text-white disabled:border-2
					disabled:border-red-700 disabled:bg-transparent disabled:opacity-50`}
				href="#download"
			>
				<DownloadIcon /> Скачать версию {version}
			</a>
		</div>
	);
}

const DownloadIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
		/>
	</svg>
);
