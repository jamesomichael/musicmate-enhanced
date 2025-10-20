import React from 'react';
import Link from 'next/link';

const TopResult = ({
	id,
	imageUrl,
	name,
	type,
}: {
	id: string;
	imageUrl: string;
	name: string;
	type: string;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<span className="font-funnel font-bold text-2xl text-white">
				Top result
			</span>
			<Link
				href={`/album/${id}`}
				className="h-64 grid grid-rows-2 gap-2 bg-neutral-900 hover:bg-neutral-800 rounded p-6"
			>
				{imageUrl && (
					<div
						className="h-full aspect-square rounded bg-cover bg-center shadow-xl"
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>
				)}
				<div className="truncate flex flex-col gap-2 justify-center">
					<span className="truncate font-funnel text-white font-bold text-3xl hover:underline">
						{name}
					</span>
					<div className="flex items-center text-sm font-funnel text-neutral-400">
						<span className="capitalize after:content-['•'] after:mx-1">
							{type}
						</span>
						{/* <Link
									href={`/artist/${topResult.artists[0].id}`}
									className="hover:underline text-white"
								>
									{topResult.artists[0].name}
								</Link> */}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default TopResult;
