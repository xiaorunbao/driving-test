import StyleProviderLayout from './style-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head />
      <body>
        <StyleProviderLayout>{children}</StyleProviderLayout>
      </body>
    </html>
  );
}
