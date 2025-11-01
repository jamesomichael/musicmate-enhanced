import TracklistItem from '.';

import { trackMock } from '@/mocks/tracks';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type {
	SpotifyAlbum,
	SpotifyArtist,
	SpotifyTrack,
} from '@/types/spotify';
import type { PlayerState } from '@/types/player';

type Story = StoryObj<typeof TracklistItem>;

const meta: Meta<typeof TracklistItem> = {
	title: 'Tracklist/TracklistItem',
	component: TracklistItem,
	args: {
		id: 'test-id',
		number: 1,
		name: trackMock.name,
		duration: trackMock.duration_ms,
		isExplicit: trackMock.explicit,
		contextUri: 'test-context-uri',
		gridConfig: 'md:grid md:grid-cols-[1.75rem_1.5fr_5rem] gap-5',
	},
	parameters: {
		layout: 'centered',
		nextjs: {
			appDirectory: true,
			router: {
				basePath: '/',
			},
		},
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

export const WithAlbum: Story = {
	args: {
		album: trackMock.album as unknown as SpotifyAlbum,
		showAlbumArt: true,
		gridConfig: 'md:grid md:grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5',
	},
};

export const WithArtists: Story = {
	args: {
		album: trackMock.album as unknown as SpotifyAlbum,
		showAlbumArt: true,
		gridConfig: 'md:grid md:grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5',
		artists: trackMock.artists as unknown as SpotifyArtist[],
	},
};

export const WithExplicitBadge: Story = {
	args: {
		album: trackMock.album as unknown as SpotifyAlbum,
		showAlbumArt: true,
		gridConfig: 'md:grid md:grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5',
		artists: trackMock.artists as unknown as SpotifyArtist[],
		isExplicit: true,
	},
};

export const WithinPlaylist: Story = {
	args: {
		album: trackMock.album as unknown as SpotifyAlbum,
		showAlbumArt: true,
		gridConfig: 'md:grid md:grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5',
		artists: trackMock.artists as unknown as SpotifyArtist[],
		addedAt: '2025-10-01 00:00:00',
	},
};

export const NowPlaying: Story = {
	args: {
		album: trackMock.album as unknown as SpotifyAlbum,
		showAlbumArt: true,
		gridConfig: 'md:grid md:grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5',
		artists: trackMock.artists as unknown as SpotifyArtist[],
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						deviceId: 'test-device',
						isReady: true,
						isLoading: false,
						playbackState: {
							device: {
								id: 'test-device',
								is_active: true,
								volume_percent: 80,
							},
							is_playing: true,
							progress_ms: 0,
							timestamp: Date.now(),
							item: {
								...trackMock,
								id: 'test-id',
								uri: 'test-context-uri',
							} as unknown as SpotifyTrack,
							context: {
								uri: 'test-context-uri',
							},
						},
					} as unknown as PlayerState,
				}}
			>
				<Story />
			</StoreProvider>
		),
	],
};

export const Paused: Story = {
	args: {
		album: trackMock.album as unknown as SpotifyAlbum,
		showAlbumArt: true,
		gridConfig: 'md:grid md:grid-cols-[1.75rem_1.5fr_1fr_1fr_5rem] gap-5',
		artists: trackMock.artists as unknown as SpotifyArtist[],
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					player: {
						deviceId: 'test-device',
						isReady: true,
						isLoading: false,
						playbackState: {
							device: {
								id: 'test-device',
								is_active: true,
								volume_percent: 80,
							},
							is_playing: false,
							progress_ms: 0,
							timestamp: Date.now(),
							item: {
								...trackMock,
								id: 'test-id',
								uri: 'test-context-uri',
							} as unknown as SpotifyTrack,
							context: {
								uri: 'test-context-uri',
							},
						},
					} as unknown as PlayerState,
				}}
			>
				<Story />
			</StoreProvider>
		),
	],
};
