import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { fetchCategories } from '@/redux/slices/categoriesSlice';

export default function useCategories() {
	const dispatch = useDispatch<AppDispatch>();
	const { isLoading, hasFetched, categories } = useSelector(
		(state: RootState) => state.categories
	);

	useEffect(() => {
		if (!hasFetched && !isLoading) {
			dispatch(fetchCategories());
		}
	}, [dispatch, hasFetched, isLoading]);

	return { isLoading, categories };
}
