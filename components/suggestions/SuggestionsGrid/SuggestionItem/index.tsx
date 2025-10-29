import React from 'react';
import Link from 'next/link';

const SuggestionItem = ({
	id,
	imageUrl,
	name,
}: {
	id: string;
	imageUrl?: string;
	name: string;
}) => {
	return (
		<Link
			href={`/album/${id}`}
			className="shadow-xl transition-all duration-200 grid grid-cols-[auto_1fr] gap-1.5 rounded h-[3.5rem] xl:h-[4.5rem] bg-neutral-600/40 hover:bg-neutral-500/60"
		>
			<div
				className="h-full aspect-square bg-cover bg-center rounded-l"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="flex justify-start items-center p-2 overflow-hidden">
				<span className="font-bold text-white font-funnel line-clamp-1 xl:line-clamp-2">
					{name}
				</span>
			</div>
		</Link>
	);
};

export default SuggestionItem;
