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

	const getAllChannels = useLiveQuery(async () => {
		return await db.channels.toArray();
	});

	return {
		addChannel,
		deleteChannel,
		getAllChannels,
	};
};
