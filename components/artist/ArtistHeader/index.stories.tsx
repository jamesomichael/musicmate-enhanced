import ArtistHeader from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof ArtistHeader>;

const meta: Meta<typeof ArtistHeader> = {
	title: 'Artist/ArtistHeader',
	component: ArtistHeader,
	args: {
		id: 'test-id',
		imageUrl:
			'https://i.scdn.co/image/ab6761610000e5ebb10c34546a4ca2d7faeb8865',
		name: 'Paramore',
		followers: 9766703,
		contextUri: 'test-context-uri',
		genres: ['pop punk', 'emo'],
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

export const NoImage: Story = { args: { imageUrl: undefined } };
