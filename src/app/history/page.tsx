'use client';

import ChannelInfo from '../components/ChannelInfo/ChannelInfo';
import { useStore } from '../hooks/useStore';

export default function History() {
	const { getAllChannels } = useStore();

	return (
		<>
			<h2 className='font-semibold'>Channel History</h2>
			<p className='mb-4'>
				The Channels you search for are saved offline in your browser automatically.
				You can see all of them here to manage them better.
			</p>

			<ul>
				{getAllChannels === undefined ? (
					<li>Loading...</li>
				) : (
					<>
						{getAllChannels?.map((channel, i) => (
							<li key={i} className='mb-3'>
								<ChannelInfo
									id={channel.id}
									channelId={channel.channelId}
									name={channel.name}
								/>
							</li>
						))}
					</>
				)}
			</ul>
		</>
	);
}
