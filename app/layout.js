import ProjectComp from "./Dashborad/Components/card";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
      <script src="https://cdn.tailwindcss.com"></script>
      {/* <script src="https://unpkg.com/react/umd/react.production.min.js"></script> */}
    </html>
  );
}
