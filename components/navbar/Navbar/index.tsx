'use client';
import React from 'react';

import Navigation from '../Navigation';
import Search from '../Search';
import NavButton from '../NavButton';
import AccountIcon from '../AccountIcon';

import { GoHomeFill, GoHome } from 'react-icons/go';
import { BiSolidCategory, BiCategory } from 'react-icons/bi';

const Navbar = () => {
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
				<Search />
				<NavButton
					href="/browse"
					title="Browse"
					ActiveIcon={BiSolidCategory}
					InactiveIcon={BiCategory}
					iconSize={22}
				/>
			</div>
			<div className="h-full flex justify-end items-center">
				<AccountIcon />
			</div>
		</div>
	);
};

export default Navbar;
