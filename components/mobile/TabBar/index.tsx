'use client';
import React from 'react';

import { GoHomeFill, GoHome } from 'react-icons/go';
import { LuLibrary } from 'react-icons/lu';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { FaRegCircleUser, FaCircleUser } from 'react-icons/fa6';

import TabButton from '../TabButton';

import { useAppSelector } from '@/redux/hooks';

const TabBar = () => {
	const user = useAppSelector((state) => state.user);

	return (
		<div className="h-full bg-gradient-to-b from-transparent to-black/50 grid grid-cols-4">
			<TabButton
				title="Home"
				href="/"
				InactiveIcon={GoHome}
				ActiveIcon={GoHomeFill}
			/>
			<TabButton
				title="Search"
				href="/search"
				InactiveIcon={HiMiniMagnifyingGlass}
				ActiveIcon={HiMiniMagnifyingGlass}
			/>
			<TabButton
				title="Your Library"
				href="/library"
				InactiveIcon={LuLibrary}
				ActiveIcon={LuLibrary}
			/>
			<TabButton
				title="Profile"
				href={`/user/${user.id}`}
				InactiveIcon={FaRegCircleUser}
				ActiveIcon={FaCircleUser}
			/>
		</div>
	);
};

export default TabBar;
