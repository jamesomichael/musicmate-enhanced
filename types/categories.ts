interface Icon {
	height: number;
	url: string;
	width: number;
}

export interface Category {
	href: string;
	id: string;
	icons: Icon[];
	name: string;
}

export interface CategoriesState {
	isLoading: boolean;
	hasFetched: boolean;
	categories: Category[];
}
