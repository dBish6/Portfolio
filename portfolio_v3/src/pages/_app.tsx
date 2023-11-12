/* Portfolio Version 3
 *
 * @App Creation Date: November 7th, 2023
 * @Last Updated: November 7th, 2023
 *
 * @Author David Bishop
 *
 * @Description .
 */

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import { ToastContextProvider } from "@contexts/ToastContext";

import Layout from "@components/partials/layouts/Layout";

import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // const DynamicComponent = dynamic(() => import('../components/'))

  return (
    <ToastContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastContextProvider>
  );
}
