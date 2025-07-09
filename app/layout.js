import { Navigation } from "@/components/navigation";

function HomeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default HomeLayout;
