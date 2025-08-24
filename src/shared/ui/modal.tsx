import React from 'react';

export function Modal({
	id,
	title,
	children,
	width,
	height = 'auto'
}: React.PropsWithChildren<{
	id: string;
	title: string;
	width?: number;
	height?: number | 'auto';
}>) {
	return (
		<dialog
			className={`no-text-shadow dialog fixed left-0 top-0 h-full w-full
				items-center justify-center bg-black/75 flex z-[100]`}
			id={id}
		>
			<a
				href="#close"
				className="top-0 left-0 w-full h-full absolute cursor-default"
				id="close"
			></a>
			<div
				className={`flex max-h-[90vh] flex-col overflow-auto rounded-3xl
					bg-white text-black shadow-lg lg:h-[var(--default-height)] relative
					z-[1]`}
				style={
					{
						'--default-height': height === 'auto' ? 'auto' : height + 'px',
						width: width ?? 380
					} as React.CSSProperties
				}
			>
				<div
					className={'sticky top-0 flex items-start justify-between bg-white'}
				>
					<h2 className="m-0 p-12 pb-4 text-4xl font-bold">{title}</h2>
					<a
						className="p-8 text-black hover:text-black"
						href="#close"
						aria-label="Закрыть"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
							></path>
						</svg>
					</a>
				</div>
				<div className="flex max-w-full flex-col gap-2 p-12 pt-4">
					{children}
				</div>
			</div>
		</dialog>
	);
}
