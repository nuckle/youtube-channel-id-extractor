import { useActionState } from 'react';
import { fetchChannelAction } from '../../server/actions/action';
import ChannelInfo from '../ChannelInfo';
import ErrorMessage from '../ErrorMessage';
import ExtractorInput from './ExtractorInput';

const initialState = {
	message: '',
	data: null,
	errors: undefined,
};

export default function Extractor() {
	const [state, formAction, isPending] = useActionState(
		fetchChannelAction,
		initialState,
	);

	return (
		<>
			<form action={formAction}>
				<ExtractorInput isPending={isPending} />

				{state && (
					<div className='mt-5'>
						{!isPending &&
							((state.errors && state.errors.length > 0) ||
								state.errors === undefined) &&
							state.message && <ErrorMessage text={state.message} />}
						{state.data &&
							state.data.id &&
							state.data.name &&
							state.data.channelUrl &&
							state.data.rssUrl && (
								<ChannelInfo
									name={state.data.name}
									id={state.data.id}
									channelUrl={state.data.channelUrl}
									rssUrl={state.data.rssUrl}
								/>
							)}
					</div>
				)}
			</form>
		</>
	);
}
