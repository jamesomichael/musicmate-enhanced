'use client';
import React from 'react';

import Navigation from '../Navigation';
import SearchBar from '../../search/SearchBar';
import NavButton from '../NavButton';
import AccountIcon from '../AccountIcon';

import { GoHomeFill, GoHome } from 'react-icons/go';
import { BiSolidCategory, BiCategory } from 'react-icons/bi';
import { FaSpotify } from 'react-icons/fa6';

import { useAppSelector } from '@/redux/hooks';
import { isUserPremium } from '@/redux/slices/userSlice';

const Navbar = () => {
	const userHasPremium = useAppSelector(isUserPremium);
	return (
		<div className="px-2 py-1.5 h-full grid grid-cols-[1fr_2fr_1fr] items-center">
			<div>
				<Navigation />
			</div>
			<div className="h-full flex gap-1.5 justify-center items-center">
				<NavButton
					href="/"
					title="Home"
					ActiveIcon={GoHomeFill}
					InactiveIcon={GoHome}
					iconSize={22}
				/>
				<SearchBar />
				<NavButton
					href="/search"
					title="Browse"
					ActiveIcon={BiSolidCategory}
					InactiveIcon={BiCategory}
					iconSize={22}
				/>
			</div>
			<div className="h-full flex gap-2 justify-end items-center">
				{!userHasPremium && (
					<div className="flex justify-center items-center gap-1.5 bg-[#C0C0C0] text-neutral-950 py-2 px-3.5 rounded-full">
						<FaSpotify className="h-5 w-5" />
						<span className="capitalize font-funnel font-medium text-sm">
							Spotify Free
						</span>
					</div>
				)}
				<AccountIcon />
			</div>
		</div>
	);
};

export default Navbar;
