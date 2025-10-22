import PlaylistCard from '.';

import { playlistMock } from '@/mocks/playlists';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof PlaylistCard>;

const meta: Meta<typeof PlaylistCard> = {
	title: 'Playlist/PlaylistCard',
	component: PlaylistCard,
	args: {
		id: 'test-id',
		imageUrl: playlistMock.images[0].url,
		name: playlistMock.name,
		owner: playlistMock.owner.display_name,
	},
	parameters: {
		layout: 'centered',
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
