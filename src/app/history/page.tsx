'use client';

import { Pagination } from '@nextui-org/pagination';
import { useEffect, useState } from 'react';
import Channels from '../components/Channels';
import DeleteAllChannelsButton from '../components/History/DeleteAllChannelsButton';
import { useStore } from '../hooks/useStore';

export default function History() {
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
	}, [channelsCount, currentPage, channelsTotal]);

	return (
		<>
			<h2 className='font-semibold'>Channel History</h2>
			<p className='mb-4'>
				The Channels you search for are saved offline in your browser automatically.
				You can see all of them here to manage them better.
			</p>

			{channelsCount > 0 && (
				<>
					<DeleteAllChannelsButton className='mb-3' />

					<Channels
						pageNumber={currentPage}
						pageSize={channelsLimit}
						className='mb-2'
					/>

					<Pagination
						page={currentPage}
						total={channelsTotal}
						onChange={setCurrentPage}
					/>
				</>
			)}
		</>
	);
}
