import React from "react";

import "./globals.css";

import { Header } from "./components/Header/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
                <link rel="stylesheet" as="style" href="https://fonts.googleapis.com/css2?display=swap&amp;family=Epilogue%3Awght%40400%3B500%3B700%3B900&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900" />
            </head>
            <body>
                <div className="layout-container flex h-full grow flex-col" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
                    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden">
                        <Header />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}