// app/layout.js

import '../styles/globals.css'; // Import Tailwind CSS globally

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
