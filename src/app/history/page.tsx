'use client';

import Channels from '../components/Channels';
import { useState } from 'react';
import { useEffect } from 'react';
import { useStore } from '../hooks/useStore';
import { Pagination } from '@nextui-org/pagination';

export default function History(props: {
	searchParams?: Promise<{ query?: string; page?: string }>;
}) {
	const [currentPage, setCurrentPage] = useState(1);

	const { countAllChannels } = useStore();
	const channelsCount = countAllChannels || 0;
	const channelsLimit = 5;
	const channelsTotal =
		channelsCount < channelsLimit ? 1 : Math.ceil(channelsCount / channelsLimit);

	useEffect(() => {
		if (currentPage > channelsTotal) {
			setCurrentPage(channelsTotal);
		}
	}, [channelsCount]);

	return (
		<>
			<h2 className='font-semibold'>Channel History</h2>
			<p className='mb-4'>
				The Channels you search for are saved offline in your browser automatically.
				You can see all of them here to manage them better.
			</p>
			<Channels pageNumber={currentPage} pageSize={channelsLimit} className='mb-2' />
			{channelsCount > 0 && (
				<Pagination
					page={currentPage}
					total={channelsTotal}
					onChange={setCurrentPage}
				/>
			)}
		</>
	);
}
