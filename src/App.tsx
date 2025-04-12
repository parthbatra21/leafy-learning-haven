import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DoctorPortal from "./pages/DoctorPortal";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/CreateAccount";
import SelectInterests from "./pages/SelectInterests";
import LoadingExperience from "./pages/LoadingExperience";
import ScientistPortal from "./pages/ScientistPortal";

const App = () => {
  // Create a new QueryClient instance inside the component
  // This ensures it's created in the React component lifecycle
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Career Guidance Platform Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/select-interests" element={<SelectInterests />} />
            <Route path="/loading-experience" element={<LoadingExperience />} />
            <Route path="/scientist-portal" element={<ScientistPortal />} />
            {/* Original Application Routes */}
            <Route path="/original-app" element={<Index />} />
            <Route path="/doctor-portal" element={<DoctorPortal />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
