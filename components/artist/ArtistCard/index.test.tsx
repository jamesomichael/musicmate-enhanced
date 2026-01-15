import { render, screen } from '@testing-library/react';

import ArtistCard from '.';

import StoreProvider from '@/redux/StoreProvider';

describe('ArtistCard', () => {
	it('renders the card with artist name and link', () => {
		const mockArtist = {
			id: 'test-artist-id',
			imageUrl: 'test-image-url',
			name: 'Test Artist',
		};

		render(
			<StoreProvider>
				<ArtistCard {...mockArtist} />
			</StoreProvider>
		);

		const element = screen.getByText(mockArtist.name);
		expect(element).toBeInTheDocument();
		expect(element.closest('a')).toHaveAttribute(
			'href',
			`/artist/${mockArtist.id}`
		);
	});
});
