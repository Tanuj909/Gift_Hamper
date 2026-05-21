import Navbar from "@/shared/components/navigation/Navbar";
import WhatsAppButton from "@/shared/components/ui/WhatsAppButton";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton />
    </>
  );
};

export default MainLayout;