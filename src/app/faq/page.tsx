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
        </>
    )
}
