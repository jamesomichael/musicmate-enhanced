import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { CategoriesState } from '@/types/categories';

const initialState: CategoriesState = {
	isLoading: false,
	hasFetched: false,
	categories: [],
};

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const response = await axios.get('/api/categories');
		const data = response.data;
		return data;
	}
);

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
			state.hasFetched = true;
			state.isLoading = false;
		});
		builder.addCase(fetchCategories.rejected, (state) => {
			state.categories = [];
			state.hasFetched = true;
			state.isLoading = false;
		});
	},
});

export default categoriesSlice.reducer;
