import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Home Layout
      <div>
        {children}
      </div>
    </div>
  );
}
