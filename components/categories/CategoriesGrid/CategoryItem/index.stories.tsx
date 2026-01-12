import CategoryItem from '.';

import { categoriesMock } from '@/mocks/categories';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof CategoryItem>;

const meta: Meta<typeof CategoryItem> = {
	title: 'Categories/CategoryItem',
	component: CategoryItem,
	args: {
		imageUrl: categoriesMock[0].icons[0].url,
		name: categoriesMock[0].name,
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
