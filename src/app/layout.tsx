// src/app/layout.js
import '../styles/globals.css'; // Assure-toi que le chemin est correct

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
