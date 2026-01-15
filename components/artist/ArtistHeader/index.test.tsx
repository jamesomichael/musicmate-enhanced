import { render, screen } from '@testing-library/react';

import ArtistHeader from '.';

import useFollowArtist from '@/hooks/artist/useFollowArtist';

import StoreProvider from '@/redux/StoreProvider';

jest.mock('@/hooks/artist/useFollowArtist');

describe('ArtistHeader', () => {
	const baseMockData = {
		id: 'test-artist-id',
		imageUrl: 'test-image-url',
		name: 'Test Artist',
		followers: 123456,
		contextUri: 'test-context-uri',
		genres: [],
	};

	beforeEach(() => {
		(useFollowArtist as jest.Mock).mockReturnValue({
			isFollowed: false,
			follow: jest.fn(),
			unfollow: jest.fn(),
		});
	});

	it('renders the artist name', () => {
		render(
			<StoreProvider>
				<ArtistHeader {...baseMockData} />
			</StoreProvider>
		);

		expect(screen.getByText(baseMockData.name)).toBeInTheDocument();
	});

	it('renders the formatted follower count', () => {
		render(
			<StoreProvider>
				<ArtistHeader {...baseMockData} />
			</StoreProvider>
		);

		expect(
			screen.getByText(
				`${baseMockData.followers.toLocaleString()} followers`
			)
		).toBeInTheDocument();
	});

	it('renders artist genres when provided', () => {
		const mockData = {
			...baseMockData,
			genres: ['indie rock', 'alternative'],
		};

		render(
			<StoreProvider>
				<ArtistHeader {...mockData} />
			</StoreProvider>
		);

		expect(screen.getByText(mockData.genres[0])).toBeInTheDocument();
		expect(screen.getByText(mockData.genres[1])).toBeInTheDocument();
	});

	it('shows "Following" when the user follows the artist', () => {
		(useFollowArtist as jest.Mock).mockReturnValue({
			isFollowed: true,
			follow: jest.fn(),
			unfollow: jest.fn(),
		});

		render(
			<StoreProvider>
				<ArtistHeader {...baseMockData} />
			</StoreProvider>
		);

		expect(screen.getByText('Following')).toBeInTheDocument();
	});

	it('shows "Follow" when the user does not follow the artist', () => {
		(useFollowArtist as jest.Mock).mockReturnValue({
			isFollowed: false,
			follow: jest.fn(),
			unfollow: jest.fn(),
		});

		render(
			<StoreProvider>
				<ArtistHeader {...baseMockData} />
			</StoreProvider>
		);

		expect(screen.getByText('Follow')).toBeInTheDocument();
	});
});
