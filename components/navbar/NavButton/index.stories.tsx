import NavButton from '.';

import mockRouter from 'next-router-mock';

import { GoHomeFill, GoHome } from 'react-icons/go';

import StoreProvider from '@/redux/StoreProvider';

import type { Meta, StoryObj } from '@storybook/nextjs';

type Story = StoryObj<typeof NavButton>;

const meta: Meta<typeof NavButton> = {
	title: 'Navbar/NavButton',
	component: NavButton,
	args: {
		href: '/test',
		title: 'Home',
		ActiveIcon: GoHomeFill,
		InactiveIcon: GoHome,
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<StoreProvider>
				<div className="h-12">
					<Story />
				</div>
			</StoreProvider>
		),
	],
};

export default meta;

export const Default: Story = {
	render: (args) => {
		return <NavButton {...args} />;
	},
};

export const Active: Story = {
	args: {
		href: '/active',
	},
	render: (args) => {
		mockRouter.setCurrentUrl('/active');
		return <NavButton {...args} />;
	},
};
