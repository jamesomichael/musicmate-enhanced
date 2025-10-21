import AlbumMetadata from '.';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof AlbumMetadata>;

const meta: Meta<typeof AlbumMetadata> = {
	title: 'Album/AlbumMetadata',
	component: AlbumMetadata,
	args: {
		releaseDate: '2025-10-01',
		releaseDatePrecision: 'day',
		copyrightNotices: [
			{
				type: 'C',
				text: 'James Michael, 2025',
			},
			{
				type: 'P',
				text: 'James Michael, 2025',
			},
		],
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
