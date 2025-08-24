import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import cx from 'classnames';

const data01 = [
	{
		name: 'Озвучка Джимми (2023)',
		value: 27000,
		label: 'Джимми 2023',
		fill: '#a31c17'
	},
	{
		name: 'Доозвучка Джимми (2024)',
		value: 7000,
		label: 'Джимми 2024',
		fill: '#a31c17'
	},
	{
		name: 'Озвучка Доктора Боуза',
		value: 20000,
		label: 'Д. Боуз',
		fill: '#2052a8'
	},
	{ name: 'Озвучка Харви', value: 10000, label: 'Харви', fill: '#ed8021' },
	{
		name: 'Озвучка второстепенных персонажей',
		value: 13000,
		label: 'Остальные'
	}
];

export function DubPriceChart() {
	const [showFallback, setShowFallback] = React.useState(true);

	React.useEffect(() => {
		setShowFallback(false);
	}, []);

	return (
		<div
			className="sm:flex-[2] w-full h-[400px] sm:w-auto sm:h-full relative
				z-[1]"
		>
			<img
				src="/chart.webp"
				alt="График"
				className={cx(
					`top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute w-[80%]
					aspect-square`,
					{ hidden: !showFallback }
				)}
			/>
			{!showFallback && (
				<ResponsiveContainer width={'100%'} height={'100%'}>
					<PieChart width={200} height={200}>
						<Pie
							dataKey="value"
							isAnimationActive={false}
							data={data01}
							cx="50%"
							cy="50%"
							label={({
								cx,
								cy,
								midAngle,
								innerRadius,
								outerRadius,
								label
							}) => {
								const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
								const x = cx + radius * Math.cos(-midAngle! * RADIAN);
								const y = cy + radius * Math.sin(-midAngle! * RADIAN);

								return (
									<text
										x={x}
										y={y}
										fill="white"
										fontSize={20}
										fontWeight={500}
										textAnchor={x > cx ? 'middle' : 'middle'}
										dominantBaseline="central"
										pointerEvents="none"
									>
										{label}
									</text>
								);
							}}
							labelLine={false}
						/>
						<Tooltip
							formatter={(value) =>
								Intl.NumberFormat('ru-RU', {
									style: 'currency',
									maximumFractionDigits: 0,
									currency: 'RUB',
									currencySign: 'standard',
									currencyDisplay: 'symbol'
								}).format(value as number)
							}
						/>
					</PieChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

const RADIAN = Math.PI / 180;
