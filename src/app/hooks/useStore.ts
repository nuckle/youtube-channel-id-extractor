import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/schema';

export const useStore = () => {
	const addChannel = async (channelId: string, name: string) => {
		await db.channels.add({
			channelId,
			name,
		});
	};

	const deleteChannel = async (id: number) => {
		await db.channels.delete(id);
	};

	const getAllChannels = (pageNumber: number, pageSize: number) => {
		const offset = (pageNumber - 1) * pageSize;

		return useLiveQuery(
			() => db.channels.offset(offset).limit(pageSize).toArray(),
			[offset, pageSize],
		);
	};

	const countAllChannels = useLiveQuery(async () => {
		return await db.channels.count();
	});

	return {
		addChannel,
		countAllChannels,
		deleteChannel,
		getAllChannels,
	};
};
