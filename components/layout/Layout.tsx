import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import WhatsAppButton from "./whatsapp";

export default function Layout() {
 return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <header className="sticky top-0 z-50 w-full">
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}
