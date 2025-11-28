import { toast, Slide } from 'react-toastify';

export const showToast = (text: string) => {
	toast.info(text, {
		hideProgressBar: true,
		position: 'bottom-center',
		closeButton: false,
		transition: Slide,
	});
};
