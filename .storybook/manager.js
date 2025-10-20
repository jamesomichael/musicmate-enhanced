import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
	theme: create({
		fontBase: '"Funnel Display", sans-serif',
		base: 'dark',
		brandTitle: 'musicmate',
		brandUrl: 'https://github.com/jamesomichael/musicmate-enhanced',
		brandImage:
			'https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/musicmate-pub/musicmate.png',
		brandTarget: '_blank',

		colorPrimary: '#121212',
		colorSecondary: '#1ed760',

		textColor: '#ffffff',
		textInverseColor: '#000000',

		appBg: '#121212',
		appContentBg: '#121212',
		appBorderColor: '#000000',
		appBorderRadius: 4,

		barTextColor: '#9E9E9E',
		barSelectedColor: '#1ed760',
		barHoverColor: '#585C6D',
		barBg: '#000000',
	}),
});
