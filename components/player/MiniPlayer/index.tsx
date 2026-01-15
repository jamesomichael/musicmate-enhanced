import React from 'react';

import { FaVolumeHigh } from 'react-icons/fa6';
import { IoIosPlay, IoIosPause } from 'react-icons/io';

import FadeInSlide from '@/components/shared/FadeInSlide';

import usePlayerControls from '@/hooks/player/usePlayerControls';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';
import { isUserPremium } from '@/redux/slices/userSlice';

import type { SpotifyArtist } from '@/types/spotify';

const MiniPlayer = () => {
	const { isExternal, item, device } = useAppSelector(getNowPlaying);
	const userHasPremium = useAppSelector(isUserPremium);
	const { isPlaying, pause, resume } = usePlayerControls();

	const handleResume = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
		resume();
	};

	const handlePause = (e: React.MouseEvent<SVGElement>) => {
		e.stopPropagation();
		pause();
	};

	return (
		<div className="relative p-2 h-14 rounded-md bg-black grid grid-cols-[1fr_2.5rem] overflow-hidden">
			<>
				<div
					className="absolute inset-0 bg-cover bg-center blur-3xl scale-125"
					style={{
						backgroundImage: `url(${item.album?.images?.[0]?.url})`,
					}}
				></div>
				<div className="absolute inset-0 bg-white/10"></div>
			</>
			<div className="relative flex gap-2 truncate">
				<div
					className="bg-cover bg-center h-full aspect-square rounded"
					style={{
						backgroundImage: `url(${item.album?.images?.[0]?.url})`,
					}}
				></div>
				<div className="w-full flex flex-col gap-0.5 justify-center truncate">
					<FadeInSlide
						key={item.id}
						className="leading-5 font-funnel text-white font-medium text-sm truncate"
					>
						{item.name}
					</FadeInSlide>
					<div className="truncate flex overflow-hidden">
						{isExternal ? (
							<div className="flex items-center gap-1.5 text-spotify-green truncate">
								<FaVolumeHigh className="h-3 w-3" />
								<span className="text-xs font-funnel truncate">
									{device.name}
								</span>
							</div>
						) : (
							<span className="font-funnel text-neutral-400 text-xs truncate">
								{item.artists
									.map((artist: SpotifyArtist) => artist.name)
									.join(', ')}
							</span>
						)}
					</div>
				</div>
			</div>
			<div className="relative flex mr-1 justify-end items-center">
				{isPlaying ? (
					<IoIosPause
						onClick={handlePause}
						className={`h-7 w-7 text-white active:scale-95 ${
							!userHasPremium
								? 'opacity-25 pointer-events-none cursor-not-allowed'
								: ''
						}`}
					/>
				) : (
					<IoIosPlay
						onClick={handleResume}
						className={`h-7 w-7 text-white active:scale-95 ${
							!userHasPremium
								? 'opacity-25 pointer-events-none cursor-not-allowed'
								: ''
						}`}
					/>
				)}
			</div>
		</div>
	);
};

export default MiniPlayer;
