import CategoriesGrid from '.';

import { categoriesMock } from '@/mocks/categories';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof CategoriesGrid>;

const meta: Meta<typeof CategoriesGrid> = {
	title: 'Categories/CategoriesGrid',
	component: CategoriesGrid,
	args: {},
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<StoreProvider
				preloadedState={{
					categories: {
						isLoading: false,
						hasFetched: true,
						categories: categoriesMock,
					},
				}}
			>
				<div className="py-4 lg:py-8 w-screen">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};
export default meta;

export const Default: Story = {};
