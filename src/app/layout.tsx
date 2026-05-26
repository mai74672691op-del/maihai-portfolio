import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MAI HAI — Digital Builder',
  description: 'Building quiet things with code. Portfolio of MAI HAI — AI, Design, Code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
