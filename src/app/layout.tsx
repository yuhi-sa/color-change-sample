import {
  Center,
  ColorSchemeScript,
  Container,
  MantineProvider,
  Title,
} from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Change Sample",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Container style={{ width: "100%", maxWidth: "100%" }}>
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
