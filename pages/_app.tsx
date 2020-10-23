import Link from "next/link";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className="green" href="/">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ricky">
              <a className="green" href="/right">
                Click here for Ricky page
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
