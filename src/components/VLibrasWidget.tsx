'use client';

import { VLibrasCustomWindow, VLibrasProps } from '@/types/vlibras';
import Script from 'next/script';

const vlibrasProps: VLibrasProps = {
  div: { vw: 'true', className: 'enabled' },
  accessButton: { 'vw-access-button': 'true', className: 'active' },
  pluginWrapper: { 'vw-plugin-wrapper': 'true' },
};

function isVLibrasCustomWindow(window: Window): window is VLibrasCustomWindow {
  return (window as VLibrasCustomWindow).VLibras !== undefined;
}

export function VLibrasWidget() {
  function createVLibrasWindow() {
    if (isVLibrasCustomWindow(window))
      new window.VLibras.Widget('https://vlibras.gov.br/app');
  }

  return (
    <>
      <div {...vlibrasProps.div}>
        <div {...vlibrasProps.accessButton}></div>
        <div {...vlibrasProps.pluginWrapper}>
          <div className='vw-plugin-top-wrapper'></div>
        </div>
      </div>

      <Script
        async
        onReady={createVLibrasWindow}
        strategy='afterInteractive'
        src='https://vlibras.gov.br/app/vlibras-plugin.js'
      />
    </>
  );
}
