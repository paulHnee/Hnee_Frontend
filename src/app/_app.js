import '../styles/globals.css'; // Adjust the import path as necessary
import RootLayout from '../components/layout'; // Adjust the import path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;