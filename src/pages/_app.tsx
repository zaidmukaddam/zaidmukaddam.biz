// components
import Cursor from '~/components/common/cursor';
import Preloader from '~/components/common/preloader';
import useRouterControl from '~/hooks/use-router-control';
import { consoleMessage } from '~/utils';
// types
import type { AppProps } from 'next/app';

import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useRouterControl();
  consoleMessage();

  return (
    <>
      <Preloader />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
