import CollectionTracklist from '.';

import { playlistTracksMock } from '@/mocks/playlists';
import { trackResultsMock } from '@/mocks/search';
import { albumMock, albumTracksMock } from '@/mocks/albums';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type {
	SpotifyAlbum,
	SpotifyPlaylistItem,
	SpotifyTrack,
} from '@/types/spotify';

type Story = StoryObj<typeof CollectionTracklist>;

const meta: Meta<typeof CollectionTracklist> = {
	title: 'Collection/CollectionTracklist',
	component: CollectionTracklist,
	args: {
		type: 'playlist',
		tracks: playlistTracksMock.items as unknown as SpotifyPlaylistItem[],
		contextUri: 'test-context-uri',
	},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<Story />
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};

export const Playlist: Story = {};

export const Album: Story = {
	args: {
		type: 'album',
		album: albumMock as unknown as SpotifyAlbum,
		tracks: albumTracksMock.items as unknown as SpotifyTrack[],
	},
};

export const SearchResults: Story = {
	args: {
		type: 'results',
		tracks: trackResultsMock.tracks.items as unknown as SpotifyTrack[],
	},
};
