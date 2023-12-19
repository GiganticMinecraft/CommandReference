import Image from 'next/image';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';

import pkg from './package.json' assert { type: 'json' };

const themeConfig: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src={'/assets/server-icon.png'}
        alt={'ギガンティック☆整地鯖のロゴ'}
        width={50}
        height={50}
      />
      <span style={{ marginLeft: '.3em', fontWeight: 'bold' }}>
        ギガンティック☆整地鯖 コマンドリファレンス
      </span>
    </>
  ),
  docsRepositoryBase: `${pkg.repository.url}/edit/main/`,
  project: {
    link: pkg.repository.url
  },
  search: {
    placeholder: '検索'
  },
  editLink: {
    text: 'このページを編集する'
  },
  feedback: {
    content: 'フィードバックを送信する',
    useLink() {
      return `${pkg.repository.url}/issues/new`;
    }
  },
  footer: {
    text: <span>Copyright {new Date().getFullYear()} GiganticMinecraft</span>
  },
  head: (
    <>
      <meta property="og:title" content="GiganticMinecraft CommandRefarence" />
      <meta property="og:description" content={pkg.description} />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - OreOreBot2 Documents'
      };
    }
  }
};

export default themeConfig;
