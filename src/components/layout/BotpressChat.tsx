"use client";

import Script from "next/script";

export default function BotpressChat() {
  return (
    <>
      <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
      <Script src="https://files.bpcontent.cloud/2026/04/17/07/20260417070731-YNKESP6K.js" strategy="afterInteractive" />
    </>
  );
}
