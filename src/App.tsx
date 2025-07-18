
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GradeSelection from "./pages/GradeSelection";
import SubjectSelection from "./pages/SubjectSelection";
import ChaptersPage from "./pages/ChaptersPage";
import QuizPage from "./pages/QuizPage";
import QuizInterface from "./components/QuizInterface";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/grades" element={<GradeSelection />} />
          <Route path="/subjects/:grade" element={<SubjectSelection />} />
          <Route path="/chapters/:grade/:subject" element={<ChaptersPage />} />
          <Route path="/quiz/:grade/:subject/:chapter" element={<QuizPage />} />
          <Route path="/quiz-interface" element={<QuizInterface />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
