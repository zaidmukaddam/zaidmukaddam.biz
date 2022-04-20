// packages
import NextHead from 'next/head';
import { useRouter } from "next/router";
import { NextSeo, DefaultSeo } from 'next-seo';
// internals
import config from '~data/config';
import { isBrowser } from '~/utils/dom';

export interface IHtmlHead {
  title?: string;
  description?: string;
  image?: string;
  publishedTime?: string;
  tags?: string[];
}

export default function HtmlHead({
  title,
  description,
  image,
  publishedTime,
  tags,
}: IHtmlHead) {
  title = title || config.title;
  image = image || config.defaultImage;
  description = description || config.descritpion;

  const currentLocation = isBrowser ? window.location.href : null;
  const isArticle = currentLocation?.includes(config.blog.path);
  const router = useRouter();
  const canonicalUrl = (config.siteUrl + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];

  return (
    <>
      <NextHead>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#171923' />
        <link rel="dns-prefect" href="/images/blog/banner.jpg" />

        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.webmanifest' />

        <link
          rel='apple-touch-icon'
          href='images/apple-touch-icon.png'
          sizes='76x76'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R5V71Z464S"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R5V71Z464S');`
        }} />
      </NextHead>

      <DefaultSeo
        title={title}
        titleTemplate={config.titleTemplate}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: isArticle ? 'article' : 'website',
          locale: config.siteLocale,
          title,
          description,
          site_name: config.siteName,
          images: [
            {
              url: `${config.siteUrl}${image}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          article: {
            publishedTime,
            tags,
          },
        }}
        twitter={{
          handle: '@zaidmukaddam',
          site: '@zaidmukaddam',
          cardType: 'summary_large_image'
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            property: 'keywords',
            content: config.keywords.join(','),
          }
        ]}
      />
    </>
  );
}
