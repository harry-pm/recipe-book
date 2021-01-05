import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">
                Home
              </a>
              <a href="/about">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <p>By Harry</p>
      </footer>
    </>
  );
}