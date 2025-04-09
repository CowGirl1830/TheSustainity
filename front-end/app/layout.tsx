export const metadata = {
    title: 'Sustainability Dashboard',
    description: 'A dashboard to visualize sustainability data',
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  