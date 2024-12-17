'use client';

import { Button } from "@nextui-org/button";
import Head from "next/head";

export default function Offline() {
    return (
        <>
            <Head>
                <title>Offline</title>
            </Head>
            <div className="p-6 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl mb-4">You are offline</h1>
                <p className="mb-6">
                    It looks like you&apos;re not connected to the internet. Please check your network and try again.
                </p>
                <Button 
                    onPress={() => location.reload()} 
                >
                    Retry Connection
                </Button>
            </div>
        </>
    );
}
