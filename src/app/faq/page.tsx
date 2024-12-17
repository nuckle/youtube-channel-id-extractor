'use client';

export default function Faq() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <section className="mb-6">
                <h3 className="font-semibold">What is a YouTube Channel ID?</h3>
                <p>A YouTube Channel ID is a unique identifier for a YouTube channel. It's used in various YouTube APIs and can be helpful for developers and content creators.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="font-semibold">How do I use this tool?</h3>
                <p>Simply paste the URL of a YouTube channel into the input field on the home page and click the search button. The tool will extract and display the channel ID for you.</p>
            </section>

            <section className="mb-6">
                <h3 className="font-semibold">Supported URL formats</h3>
                <p>This tool supports the following URL formats</p>
                <ul>
                    <li>https://www.youtube.com/channel/channel_id</li>
                    <li>https://www.youtube.com/user/username</li>
                    <li>https://www.youtube.com/@channel_handle</li>
                    <li>https://www.youtube.com/c/custom_url</li>
                </ul>
                <p>Also the tool supports links from Wayback Machine</p>
                <li>https://web.archive.org/web/20221218220114/https://www.youtube.com/@channel_handle</li>
            </section>
        </>
    )
}
