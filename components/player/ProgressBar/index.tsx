import React, { useState } from 'react';

import SeekBar from '@/components/player/SeekBar';

const ProgressBar = () => {
	const [position, setPosition] = useState(60);

	const handleSeek = (value: number) => {
		setPosition(value);
	};

	return (
		<div className="flex justify-center items-center gap-2 w-full">
			<span className="font-funnel text-xs text-neutral-300">
				1:00
				{/* {dayjs.duration(progress, 'milliseconds').format('m:ss')} */}
			</span>
			<SeekBar duration={180} position={position} onSeek={handleSeek} />
			<span className="font-funnel text-xs text-neutral-300">
				3:00
				{/* {dayjs.duration(progress, 'milliseconds').format('m:ss')} */}
			</span>
		</div>
	);
};

export default ProgressBar;
