import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] text-[#111827] overflow-hidden">
      {/* Navbar */}
      <Header />

      {/* Page Content */}
      <main className="flex-1 pt-6 overflow-y-auto">
        <Outlet />
        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
