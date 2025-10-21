import Discography from '.';

import { discographyMock } from '@/mocks/discography';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { ArtistDiscography } from '@/types/artists';

type Story = StoryObj<typeof Discography>;

const meta: Meta<typeof Discography> = {
	title: 'Artist/Discography',
	component: Discography,
	args: {
		data: discographyMock as unknown as ArtistDiscography,
		artistId: 'test-id',
		isExpandable: true,
	},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="p-8">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};

export const WithCustomDefaultTab: Story = {
	args: {
		defaultTab: 'singles',
	},
};

export const WithTitle: Story = {
	args: {
		title: 'Arctic Monkeys',
	},
};
