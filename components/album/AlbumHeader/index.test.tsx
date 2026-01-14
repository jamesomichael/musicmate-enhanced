import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

import AlbumHeader from '.';

import { albumMock } from '@/mocks/albums';

import StoreProvider from '@/redux/StoreProvider';

import type { SpotifyArtist } from '@/types/spotify';

describe('AlbumHeader', () => {
	it('renders the album name', () => {
		render(
			<StoreProvider>
				<AlbumHeader
					name={albumMock.name}
					type={'album'}
					contextUri={albumMock.uri}
					releaseDate={albumMock.release_date}
					totalTracks={albumMock.total_tracks}
					artists={albumMock.artists as SpotifyArtist[]}
				/>
			</StoreProvider>
		);
		expect(screen.getByText(albumMock.name)).toBeInTheDocument();
	});

	it('renders all artist names with links', () => {
		render(
			<StoreProvider>
				<AlbumHeader
					name={albumMock.name}
					type={'album'}
					contextUri={albumMock.uri}
					releaseDate={albumMock.release_date}
					totalTracks={albumMock.total_tracks}
					artists={albumMock.artists as SpotifyArtist[]}
				/>
			</StoreProvider>
		);

		const links = screen.getAllByRole('link');
		expect(links).toHaveLength(albumMock.artists.length);

		albumMock.artists.forEach((artist) => {
			const link = screen.getByText(artist.name);
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', `/artist/${artist.id}`);
		});
	});

	it('renders the release year', () => {
		render(
			<StoreProvider>
				<AlbumHeader
					name={albumMock.name}
					type={'album'}
					contextUri={albumMock.uri}
					releaseDate={albumMock.release_date}
					totalTracks={albumMock.total_tracks}
					artists={albumMock.artists as SpotifyArtist[]}
				/>
			</StoreProvider>
		);
		expect(
			screen.getByText(dayjs(albumMock.release_date).year())
		).toBeInTheDocument();
	});

	it('uses correct wording when there is only one track', () => {
		render(
			<StoreProvider>
				<AlbumHeader
					name={albumMock.name}
					type={'album'}
					contextUri={albumMock.uri}
					releaseDate={albumMock.release_date}
					totalTracks={1}
					artists={albumMock.artists as SpotifyArtist[]}
				/>
			</StoreProvider>
		);
		expect(screen.getByText('1 song')).toBeInTheDocument();
	});

	it('uses correct wording when there are multiple tracks', () => {
		render(
			<StoreProvider>
				<AlbumHeader
					name={albumMock.name}
					type={'album'}
					contextUri={albumMock.uri}
					releaseDate={albumMock.release_date}
					totalTracks={albumMock.total_tracks}
					artists={albumMock.artists as SpotifyArtist[]}
				/>
			</StoreProvider>
		);
		expect(
			screen.getByText(`${albumMock.total_tracks} songs`)
		).toBeInTheDocument();
	});
});
