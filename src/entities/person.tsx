import React from 'react';
import cx from 'classnames';

export function Person({
	name,
	avatar,
	aka,
	role,
	wide = false,
	link,
	audio
}: {
	name: string;
	avatar: string;
	aka?: string;
	role: string;
	wide?: boolean;
	audio?: string[];
	link?: string;
}) {
	const audioPlayerRef = React.useRef<HTMLAudioElement>(null);

	const avatarComponent = (
		<img
			src={avatar}
			className="w-24 h-24 rounded-full bg-neutral-900"
			alt={name}
			loading="lazy"
		/>
	);

	return (
		<div
			className={cx('flex flex-col items-center text-center', {
				'w-32': !wide
			})}
		>
			{/* <div
				className={cx(
					`absolute top-0 left-0 bg-[rgba(50,50,50,0.25)] transition-opacity
					w-full h-full flex items-center justify-center rounded-full`
				)}
			>
				<span className="absolute bottom-2 font-medium tabular-nums"></span>
			</div> */}
			{link ? (
				<a
					href={link}
					target="_blank"
					rel="nofollow noreferrer"
					className="rounded-full block my-1"
				>
					{avatarComponent}
				</a>
			) : (
				avatarComponent
			)}
			{audio?.map((src, i) => (
				<audio
					controls
					src={src}
					ref={audioPlayerRef}
					className="max-w-20 mt-3 p-0 rounded-none small-player"
					key={i}
				/>
			))}
			<h3 className="text-xl whitespace-pre-wrap leading-tight mb-1 mt-2">
				{name}
			</h3>
			{aka && <span className="text-sm leading-tight">aka {aka}</span>}
			<span className="text-lg font-medium leading-[1.0] my-2">{role}</span>
		</div>
	);
}
