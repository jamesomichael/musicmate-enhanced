'use client';
import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const Search = () => {
	const [query, setQuery] = useState('');
	// const router = useRouter();

	return (
		<form onSubmit={() => {}} className="h-full relative group">
			<label
				htmlFor="search"
				className="absolute inset-y-0 left-0 flex items-center pl-2.5 md:pl-3 text-neutral-400 group-focus-within:text-white group-hover:text-white group-hover:cursor-pointer"
			>
				<HiMiniMagnifyingGlass size={25} />
			</label>
			<input
				id="search"
				placeholder="What do you want to play?"
				className="text-white transition-all duration-200 rounded-full bg-neutral-800 h-full w-10 focus:w-56 md:focus:w-96 md:w-96 pl-11 font-funnel text-xs md:text-sm font-medium placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent group-hover:bg-neutral-700"
				type="text"
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
};

export default Search;
