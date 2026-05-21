import React, { useState, useEffect } from "react";
import MainLayout from "@/app/layouts/MainLayout";
import HomePage from "@/features/home/pages/HomePage";
import AboutPage from "@/features/about/pages/AboutPage";
import CategoriesPage from "@/features/categories/pages/CategoriesPage";
import CustomHamperPage from "@/features/custom-hamper/pages/CustomHamperPage";
import GalleryPage from "@/features/gallery/pages/GalleryPage";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    // SPA routing logic intercepting local anchor clicks
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        const path = target.getAttribute("href");
        // SPA navigation only if it's a page link and not an in-page hash anchor
        if (path && path.startsWith("/") && !path.includes("#")) {
          e.preventDefault();
          window.history.pushState({}, "", path);
          setCurrentPath(path);
          window.scrollTo(0, 0);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case "/about":
        return <AboutPage />;
      case "/categories":
        return <CategoriesPage />;
      case "/custom-hampers":
        return <CustomHamperPage />;
      case "/gallery":
        return <GalleryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <MainLayout>
      {renderPage()}
    </MainLayout>
  );
}

export default App;
