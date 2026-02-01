import Footer from "@/components/Footer";
import NavigationBar from "@/components/navigation/Navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />

      <main className="flex-1 pt-32">{children}</main>
      <Footer />
    </div>
  );
}
