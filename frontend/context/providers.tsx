'use client';

import { type ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { baseSepolia } from 'wagmi/chains';


export function Providers(props: { children: ReactNode }) {

    return (
        <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            chain={baseSepolia}
            config={{
                appearance: {
                    name: " Chronify ",
                    logo: '/favicon.ico',
                    mode: 'auto',
                    theme: 'default',
                },
                wallet: {
                    display: 'modal',
                },
            }}
            projectId={process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID}
        >
            {props.children}
        </OnchainKitProvider>
    );
}