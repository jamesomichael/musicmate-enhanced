import React from 'react';
import Link from 'next/link';

import { PiDevicesBold } from 'react-icons/pi';
import { FaChevronDown } from 'react-icons/fa6';

import ExplicitBadge from '@/components/tracklist/ExplicitBadge';
import PlayerControls from '@/components/player/PlayerControls';
import FadeInSlide from '@/components/shared/FadeInSlide';

import { useAppSelector } from '@/redux/hooks';
import { getNowPlaying } from '@/redux/slices/playerSlice';

import type { SpotifyArtist } from '@/types/spotify';

const MobilePlayer = ({ onClose }: { onClose: () => void }) => {
	const { isExternal, item, device } = useAppSelector(getNowPlaying);
	return (
		<div className="relative p-6 min-h-[100dvh] h-full bg-spotify-black grid grid-rows-[auto_1fr_auto] max-w-screen-lg">
			<>
				<div
					className="absolute inset-0 bg-cover bg-center blur-3xl scale-125"
					style={{
						backgroundImage: `url(${item.album?.images?.[0]?.url})`,
					}}
				></div>
				<div className="absolute inset-0 bg-black/60"></div>
			</>
			<div className="relative h-fit mb-4">
				<FaChevronDown
					onClick={onClose}
					className="text-white h-5 w-5"
				/>
			</div>
			<div className="relative flex justify-center items-center overflow-hidden">
				<div
					className="aspect-square w-full sm:w-96 rounded-md shadow-xl bg-center bg-cover"
					style={{
						backgroundImage: `url(${item.album?.images?.[0]?.url})`,
					}}
				></div>
			</div>
			<div className="relative pt-4 flex flex-col justify-end gap-4 overflow-hidden">
				<div className="flex flex-col gap-0.5">
					<FadeInSlide
						key={item.id}
						href={`/album/${item.album.id}`}
						onClick={onClose}
						className="line-clamp-3 leading-6 font-funnel font-medium text-white text-lg"
					>
						{item.name}
					</FadeInSlide>
					<div className="flex items-center overflow-hidden truncate">
						{item.explicit && <ExplicitBadge />}
						<Link
							href={`/artist/${item.artists[0].id}`}
							onClick={onClose}
							className="font-funnel text-neutral-400 text-sm truncate"
						>
							{item.artists
								.map((artist: SpotifyArtist) => artist.name)
								.join(', ')}
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<PlayerControls />
					<div
						className={`flex gap-2 items-center ${
							isExternal
								? 'text-spotify-green'
								: 'text-neutral-300'
						}`}
					>
						<PiDevicesBold className="h-5 w-5" />
						<span
							className={`font-funnel text-xs ${
								isExternal ? 'block' : 'hidden'
							}`}
						>
							{device.name}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobilePlayer;
