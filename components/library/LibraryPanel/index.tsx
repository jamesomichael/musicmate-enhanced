import React from 'react';

import { LuSquareLibrary } from 'react-icons/lu';

import LibraryTabs from './LibraryTabs';

const LibraryPanel = () => {
	return (
		<div className="flex flex-col gap-4 p-3">
			<div className="flex items-center gap-2 text-neutral-300">
				<LuSquareLibrary size={25} />
				<span className="font-funnel text-lg font-bold">
					Your Library
				</span>
			</div>
			<LibraryTabs />
		</div>
	);
};

export default LibraryPanel;
