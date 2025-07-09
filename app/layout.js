import Navigation from "@/components/navigation";

function HomeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vishal Rathod</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default HomeLayout;
