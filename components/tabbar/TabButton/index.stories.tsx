import TabButton from '.';

import mockRouter from 'next-router-mock';

import { GoHomeFill, GoHome } from 'react-icons/go';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof TabButton>;

const meta: Meta<typeof TabButton> = {
	title: 'TabBar/TabButton',
	component: TabButton,
	args: {
		href: '/',
		title: 'Home',
		ActiveIcon: GoHomeFill,
		InactiveIcon: GoHome,
	},
	globals: {
		viewport: { value: 'iphone14promax', isRotated: false },
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="w-full">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {};

export const Active: Story = {
	args: {
		href: '/active',
	},
	render: (args) => {
		mockRouter.setCurrentUrl('/active');
		return <TabButton {...args} />;
	},
};
