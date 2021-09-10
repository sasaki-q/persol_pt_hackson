import App from "next/app";
import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import 'react-toastify/dist/ReactToastify.min.css';
import '../node_modules/react-toastify/dist/ReactToastify.min.css';
import { RecoilRoot } from "recoil";
import { parseCookies } from "nookies";

export default class MyApp extends App {
  render() {
    /** @ts-ignore */
    const { Component, pageProps, ctx } = this.props;

    const initializeState = ({ set }) => {
      const cookie = parseCookies(ctx);
      if (cookie?.user) {
        const user = JSON.parse(cookie.user);
        if (user) {
          set({ key: "UserState" }, user);
        }
      }
    };

    return (
        <RecoilRoot initializeState={initializeState}>
          <Component {...pageProps} />
        </RecoilRoot>
    );
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
}
