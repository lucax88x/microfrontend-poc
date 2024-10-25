import '@poc/ui/base';
import './index.css';

import { Topbar } from '@poc/react-1/components/Topbar';
import { state } from '@shared/shared';

console.log(state);

import { lazy, Suspense, useCallback, useEffect, useState } from 'react';

const UiButton = lazy(
    // @ts-ignore
    async () => import('@poc/ui/react/button'),
);
    
const UiIcon = lazy(
    // @ts-ignore
    async () => import('@poc/ui/react/icon'),
);

const React1ListDocs = lazy(
    // @ts-ignore
    async () => import('@poc/react-1/components/list-docs'),
);

const React1Chart = lazy(
    // @ts-ignore
    async () => import('@poc/react-1/components/line'),
);

const React1Topbar = lazy(
    async () => import('@poc/react-1/components/topbar'),
) as typeof Topbar;

const React1DrawerChat =
    // @ts-ignore
    lazy(async () => import('@poc/react-1/components/drawer-chat'));

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenChat, setIsOpenChat] = useState(false);
    const [question, setQuestion] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const handleAskChat = (e: CustomEvent) => {
            setIsOpenChat(true);
            setQuestion(<p>question {e.detail.url}</p>);
        };

        document.addEventListener('ask-chat', handleAskChat);

        return () => {
            document.removeEventListener('ask-chat', handleAskChat);
        };
    }, []);

    const emit = useCallback(() => {
        setIsLoading(true);

        setTimeout(() => {
            const event = new CustomEvent('doc-send', {
                bubbles: true,
                composed: true,
                detail: {
                    id: Math.random().toString(),
                    label: 'chart',
                    url: 'https://morth.nic.in/sites/default/files/dd12-13_0.pdf',
                },
            });

            document.body.dispatchEvent(event);

            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <>
            <Suspense fallback={<my-spinner />}>
                <React1Topbar />
            </Suspense>
            <div className="flex justify-center p-4">
                <div className="container flex flex-col gap-2 md:flex-row">
                    <UiButton>
                        <UiIcon slot="prefix" icon="upload"></UiIcon>
                        <label slot="label">test</label>
                    </UiButton>
                    <Suspense fallback={<my-spinner />}>
                        <my-card
                            title="documents"
                            class="flex-1"
                            headerColor="#facc15"
                            borderColor="#facc15"
                        >
                            <React1ListDocs />
                        </my-card>
                    </Suspense>
                    <Suspense fallback={<my-spinner />}>
                        <React1DrawerChat
                            isOpen={isOpenChat}
                            question={question}
                            onClose={() => setIsOpenChat(false)}
                        />
                    </Suspense>
                    <Suspense fallback={<my-spinner />}>
                        <my-card
                            title="charts"
                            class="flex-1"
                            headerColor="#ca8a04"
                            borderColor="#ca8a04"
                        >
                            <div className="flex flex-col gap-2">
                                <React1Chart />

                                <div className="flex gap-2">
                                    <my-button
                                        onClick={emit}
                                        loading={isLoading ? true : undefined}
                                    >
                                        <my-icon
                                            slot="prefix"
                                            icon="upload"
                                        ></my-icon>
                                        <slot slot="label">import</slot>
                                    </my-button>

                                    <my-button
                                        onClick={() => setIsOpenChat(true)}
                                    >
                                        <my-icon
                                            slot="prefix"
                                            icon="chat"
                                        ></my-icon>
                                        <slot slot="label">ask me</slot>
                                    </my-button>
                                </div>
                            </div>
                        </my-card>
                    </Suspense>
                </div>
            </div>
        </>
    );
}
