'use client';

import Script from 'next/script';

export function VLibrasWidget() {
  function createVLibrasWindow() {
    new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
  }

  return (
    <>
      {/* @ts-expect-error */}
      <div vw='true' className='enabled'>
        <div vw-access-button='true' className='active'></div>
        <div vw-plugin-wrapper='true'>
          <div className='vw-plugin-top-wrapper'></div>
        </div>
      </div>

      <Script
        onLoad={createVLibrasWindow}
        src='https://vlibras.gov.br/app/vlibras-plugin.js'
      />
    </>
  );
}
