import ArtistCard from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof ArtistCard>;

const meta: Meta<typeof ArtistCard> = {
	title: 'Artist/ArtistCard',
	component: ArtistCard,
	args: {
		id: 'test-id',
		imageUrl:
			'https://i.scdn.co/image/ab6761610000e5ebb10c34546a4ca2d7faeb8865',
		name: 'Paramore',
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="w-60 h-fit">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};

export const NoImage: Story = { args: { imageUrl: undefined } };
