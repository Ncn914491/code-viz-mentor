
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProblemInput } from "@/components/ProblemInput";
import { SolutionDisplay } from "@/components/SolutionDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { generateSolution } from "@/services/gemini";
import { toast } from "sonner";
import { Brain, Code, FileCode } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [explanation, setExplanation] = useState("");

  const handleSubmitProblem = async (problem: string, lang: string) => {
    try {
      setIsLoading(true);
      setLanguage(lang);
      
      // Call the mock Gemini API
      const response = await generateSolution(problem, lang);
      
      setCode(response.code);
      setExplanation(response.explanation);
      toast.success("Solution generated successfully!");
    } catch (error) {
      console.error("Error generating solution:", error);
      toast.error("Failed to generate solution. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold">DSA Problem Solver</h1>
              <p className="text-lg text-muted-foreground mt-2">
                Solve data structure and algorithm problems with AI assistance
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                <Brain className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                <FileCode className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">4 Languages</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Visualizations</span>
              </div>
            </div>
          </div>
          
          <ResizablePanelGroup 
            direction="vertical" 
            className="min-h-[calc(100vh-16rem)]"
          >
            <ResizablePanel defaultSize={40} minSize={30}>
              <div className="border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Problem Input</h2>
                <ProblemInput onSubmit={handleSubmitProblem} isLoading={isLoading} />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60} minSize={40}>
              <div className="border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Solution</h2>
                <SolutionDisplay 
                  code={code} 
                  language={language} 
                  explanation={explanation}
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
