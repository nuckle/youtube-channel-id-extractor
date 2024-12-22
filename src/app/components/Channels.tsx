'use client';

import ChannelInfo from './ChannelInfo/ChannelInfo';
import { useStore } from '../hooks/useStore';

export default function Channels() {
	const { getAllChannels } = useStore();

	return (
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
	);
}
