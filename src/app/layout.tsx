import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Olivia — Gestión comercial",
  description: "Sistema de gestión de Casa Olivia. Demo conceptual de software a medida creada por Anduril Tech.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
