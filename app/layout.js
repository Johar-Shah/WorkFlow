import ProjectComp from "./Dashborad/components/card";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
      <script src="https://cdn.tailwindcss.com"></script>
    </html>
  );
}
