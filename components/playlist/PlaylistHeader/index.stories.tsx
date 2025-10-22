import PlaylistHeader from '.';

import { playlistMock } from '@/mocks/playlists';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof PlaylistHeader>;

const meta: Meta<typeof PlaylistHeader> = {
	title: 'Playlist/PlaylistHeader',
	component: PlaylistHeader,
	args: {
		imageUrl: playlistMock.images[0].url,
		name: playlistMock.name,
		contextUri: 'test-context-uri',
		description: playlistMock.description,
		owner: {
			id: playlistMock.owner.id,
			displayName: playlistMock.owner.display_name,
		},
		totalFollowers: playlistMock.followers.total,
		totalTracks: playlistMock.tracks.total,
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

export const NoImage: Story = {
	args: {
		imageUrl: undefined,
	},
};

export const WithDescription: Story = {
	args: {
		description: "anyway, here's wonderwall... madferit!",
	},
};

export const LikedSongs: Story = {
	args: {
		isLikedSongs: true,
		name: 'Liked Songs',
		imageUrl: '/liked-songs-300.jpg',
		totalFollowers: undefined,
		totalTracks: 2731,
		owner: {
			id: 'test-user-id',
			displayName: 'James Michael',
		},
	},
};
