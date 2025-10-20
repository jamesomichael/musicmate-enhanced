import React from 'react';

import ItemCard from '@/components/shared/ItemCard';

const ArtistCard = ({
	id,
	imageUrl,
	name,
}: {
	id: string;
	imageUrl?: string;
	name: string;
}) => {
	return (
		<ItemCard
			type="artist"
			href={`/artist/${id}`}
			imageUrl={imageUrl}
			name={name}
		>
			<span>Artist</span>
		</ItemCard>
	);
};

export default ArtistCard;
