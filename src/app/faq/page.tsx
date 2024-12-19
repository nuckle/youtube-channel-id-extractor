'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import ListItem from '../components/faq/ListItem';

export default function Faq() {
	return (
		<div className='max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
			<h1 className='text-2xl sm:text-4xl font-bold text-center mb-8'>
				Frequently Asked Questions
			</h1>
			<Accordion>
				<AccordionItem
					key='1'
					aria-label='What is a YouTube Channel ID?'
					title='What is a YouTube Channel ID?'
				>
					<p>
						A YouTube Channel ID is a unique identifier for a
						YouTube channel. It&apos;s used in various YouTube APIs
						and can be helpful for developers and content creators.
					</p>
				</AccordionItem>

				<AccordionItem
					key='2'
					aria-label='How do I use this tool?'
					title='How do I use this tool?'
				>
					<p>
						Simply paste the URL of a YouTube channel into the input
						field on the home page and click the search button. The
						tool will extract and display the channel ID for you.
					</p>
				</AccordionItem>

				<AccordionItem
					key='3'
					aria-label='What URL formats are supported?'
					title='What URL formats are supported?'
				>
					<div>
						<p>This tool supports the following URL formats:</p>
						<ul className='list-disc pl-6 mt-2 space-y-1'>
							<ListItem>https://www.youtube.com/channel/channel_id</ListItem>
							<ListItem>https://www.youtube.com/user/username</ListItem>
							<ListItem>https://www.youtube.com/@channel_handle</ListItem>
							<ListItem>https://www.youtube.com/c/custom_url</ListItem>
							<ListItem>https://www.youtube.com/watch?v=video_url</ListItem>
							<ListItem>https://www.youtube.com/shorts/shorts_url</ListItem>
							<ListItem>https://www.youtube.com/playlist?list=playlist_url</ListItem>
						</ul>
						<p className='mt-2'>
							The tool also supports links from Wayback Machine:
						</p>
						<ul className='list-disc pl-6 mt-2'>
							<ListItem>
								https://web.archive.org/web/20211218220114/https://www.youtube.com/c/custom_url
							</ListItem>
						</ul>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
