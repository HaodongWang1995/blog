import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      about layout
    <div>
      {children}
    </div>
    </div>
  );
}
