import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#111827]">
        {/* Navbar */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 px-6 py-4">
            <Outlet />
        </main>

        {/* Footer */}
        <Footer />
    </div>
  )
}
