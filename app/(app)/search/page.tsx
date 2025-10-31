import React from 'react';
import Link from 'next/link';

import { BiSolidCategory } from 'react-icons/bi';
import { IoWarning } from 'react-icons/io5';

import CategoriesGrid from '@/components/categories/CategoriesGrid';
import SearchBar from '@/components/search/SearchBar';

const Browse = () => {
	return (
		<div className="h-full grid grid-rows-[auto_1fr] gap-4">
			<div className="px-4 lg:px-8 pt-4 lg:pt-8 flex flex-col gap-2">
				<div className="flex justify-start items-center py-1 gap-2 lg:gap-2 text-white">
					<BiSolidCategory className="w-6 h-6 lg:w-8 lg:h-8" />
					<span className="font-funnel text-lg lg:text-2xl font-bold">
						Browse all
					</span>
				</div>
				<div className="lg:hidden h-11">
					<SearchBar />
				</div>
				<div className="pt-3 lg:pt-0 flex gap-1.5 justify-start items-center">
					<IoWarning className="hidden md:block w-5 h-5 text-amber-400" />
					<span className="font-funnel text-xs md:text-sm text-spotify-green">
						Unfortunately, categories are no longer supported. For
						more information, please&nbsp;
						<Link
							href="https://developer.spotify.com/blog/2024-11-27-changes-to-the-web-api"
							target="_blank"
							className="underline hover:text-neutral-200"
						>
							click here
						</Link>
						.
					</span>
				</div>
			</div>
			<CategoriesGrid />
		</div>
	);
};

export default Browse;
