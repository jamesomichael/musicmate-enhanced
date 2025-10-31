'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = () => {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!query.trim()) {
			return;
		}
		router.push(`/search/${query}`);
	};

	return (
		<form
			onSubmit={handleSearch}
			className="h-full w-full lg:w-96 relative group"
		>
			<label
				htmlFor="search"
				className="absolute inset-y-0 left-0 flex items-center pl-2.5 md:pl-3 text-spotify-black lg:text-neutral-400 lg:group-focus-within:text-white lg:group-hover:text-white group-hover:cursor-pointer"
			>
				<HiMiniMagnifyingGlass size={25} />
			</label>
			<input
				id="search"
				placeholder="What do you want to play?"
				className="text-black lg:text-white transition-all duration-200 rounded-md lg:rounded-full bg-white lg:bg-neutral-800 h-full w-full lg:focus:w-96 lg:w-96 pl-11 font-funnel text-xs md:text-sm font-medium placeholder-spotify-black lg:placeholder-neutral-400 focus:outline-none focus:ring-2 lg:focus:ring-white focus:border-transparent lg:group-hover:bg-neutral-700"
				type="text"
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
};

export default SearchBar;
