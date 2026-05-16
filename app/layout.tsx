import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor Tax Deadline Tracker — Never miss quarterly tax payments again",
  description: "Track income, expenses, and automatically calculate quarterly tax payments with deadline reminders for independent contractors and freelancers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b9506f27-fb44-4dbf-b923-1584137d3885"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
