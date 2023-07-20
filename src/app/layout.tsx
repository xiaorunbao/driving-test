import StyleProviderLayout from './components/provider/style-provider';

import '../styles/globals.css';
import 'antd/dist/reset.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cn">
      <head />
      <body>
        <StyleProviderLayout>{children}</StyleProviderLayout>
      </body>
    </html>
  );
}
