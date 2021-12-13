import Link from "next/link";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className="green">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ricky">
              <a className="green">
                Click here for Ricky page
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="green">
                Blog
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
