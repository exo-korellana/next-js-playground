import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const ralewayHeading = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Next.js 16 - Playground",
  description: "Playground for experimenting with Next.js 16",
  icons: {
    icon: "/next-16.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        ralewayHeading.variable,
      )}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <main className="min-h-full flex flex-col flex-1 items-center justify-center gap-4 p-4">
          <NuqsAdapter>
            {children}
            <Toaster closeButton={true} />
          </NuqsAdapter>
        </main>
      </body>
    </html>
  );
}
