import React from 'react';
import { cookies } from 'next/headers';

import SearchResults from '@/components/search/SearchResults';

import { search } from '@/services/spotify';

const SearchResultsPage = async ({
	params,
}: {
	params: Promise<{ query: string }>;
}) => {
	const { query } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')!.value;

	const results = await search(query, {}, accessToken);

	return <SearchResults query={query} data={results} />;
};

export default SearchResultsPage;
