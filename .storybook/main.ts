import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	staticDirs: ['../public'],
	webpackFinal: async (config) => {
		if (config.output) {
			config.output.publicPath = '/musicmate-enhanced/';
		}
		return config;
	},
};
export default config;
