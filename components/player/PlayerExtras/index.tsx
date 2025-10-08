import React from 'react';

import { FaHeadphones } from 'react-icons/fa6';
import { HiOutlineQueueList } from 'react-icons/hi2';

import VolumeControl from '../VolumeControl';

const PlayerExtras = () => {
	return (
		<div className="flex justify-end items-center gap-5 pr-1">
			<div title="Queue">
				<HiOutlineQueueList
					className="transition-all duration-200 cursor-pointer text-neutral-300 hover:scale-105 hover:text-white"
					size={21}
				/>
			</div>
			<div title="Connect to a device">
				<FaHeadphones
					className="transition-all duration-200 cursor-pointer text-neutral-300 hover:scale-105 hover:text-white"
					size={17}
				/>
			</div>
			<VolumeControl />
		</div>
	);
};

export default PlayerExtras;
