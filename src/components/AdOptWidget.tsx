import Script from 'next/script';

const websiteCode = 'aceffea2-7314-4962-9f9b-c572858279fe';

export const adOptWidgetMetadata = {
  'adopt-website-id': websiteCode,
};

// spell-checker:disable
export function AdOptWidget() {
  return (
    <Script
      src={`//tag.goadopt.io/injector.js?website_code=${websiteCode}`}
      className='adopt-injector'
      async
    />
  );
}
