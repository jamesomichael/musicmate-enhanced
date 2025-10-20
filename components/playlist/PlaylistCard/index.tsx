import React from 'react';

import ItemCard from '@/components/shared/ItemCard';

const PlaylistCard = ({
	id,
	imageUrl,
	name,
	owner,
}: {
	id: string;
	imageUrl?: string;
	name: string;
	owner: string;
}) => {
	return (
		<ItemCard
			type="playlist"
			href={`/playlist/${id}`}
			imageUrl={imageUrl}
			name={name}
		>
			<span>By {owner}</span>
		</ItemCard>
	);
};

export default PlaylistCard;
