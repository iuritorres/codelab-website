import Script from 'next/script';

// spell-checker:disable
export function JivoChatWidget() {
  return (
    <Script
      async
      strategy='afterInteractive'
      src='//code.jivosite.com/widget/qZIzMduzf9'
    />
  );
}
