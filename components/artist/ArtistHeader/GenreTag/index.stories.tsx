import GenreTag from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof GenreTag>;

const meta: Meta<typeof GenreTag> = {
	title: 'Artist/ArtistHeader/GenreTag',
	component: GenreTag,
	args: {
		genre: 'pop punk',
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
