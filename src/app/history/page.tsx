import Channels from '../components/Channels';

export default function History() {
	return (
		<>
			<h2 className='font-semibold'>Channel History</h2>
			<p className='mb-4'>
				The Channels you search for are saved offline in your browser automatically.
				You can see all of them here to manage them better.
			</p>

			<Channels />
		</>
	);
}
