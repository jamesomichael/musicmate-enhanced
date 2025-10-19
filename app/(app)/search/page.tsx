import React from 'react';
import Link from 'next/link';

import { BiSolidCategory } from 'react-icons/bi';
import { IoWarning } from 'react-icons/io5';

import CategoriesGrid from '@/components/categories/CategoriesGrid';

const Browse = () => {
	return (
		<div className="h-full grid grid-rows-[auto_1fr] gap-4">
			<div className="px-8 pt-8 flex flex-col gap-2">
				<div className="flex justify-start items-center gap-1.5 lg:gap-2 text-white">
					<BiSolidCategory className="w-6 h-6 lg:w-8 lg:h-8" />
					<span className="font-funnel md:text-lg lg:text-2xl font-bold">
						Browse all
					</span>
				</div>
				<div className="flex justify-start items-center">
					<IoWarning size={22} className="text-amber-400" />
					<span className="font-funnel text-sm text-spotify-green">
						&nbsp;Unfortunately, this page is no longer supported.
						For more information, please&nbsp;
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
