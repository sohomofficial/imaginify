import Footer from "@/components/shared/footer";
import MobileNav from "@/components/shared/mobile-nav";
import Sidebar from "@/components/shared/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">
          {children}
          <Footer />
        </div>
      </div>
      <Toaster />
    </main>
  );
}
