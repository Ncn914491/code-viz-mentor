
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BrainCog, Code, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface ProblemInputProps {
  onSubmit: (problem: string, language: string) => void;
  isLoading: boolean;
}

const languageOptions = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" }
];

export function ProblemInput({ onSubmit, isLoading }: ProblemInputProps) {
  const [problem, setProblem] = useState("");
  const [language, setLanguage] = useState("python");
  
  const handleSubmit = () => {
    if (!problem.trim()) {
      toast.error("Please enter a problem description");
      return;
    }
    
    onSubmit(problem, language);
  };
  
  const handleReset = () => {
    setProblem("");
  };
  
  const exampleProblems = [
    "Write an algorithm to find the maximum subarray sum in an array of integers",
    "Implement a function to detect if a linked list has a cycle",
    "Create a binary search tree and implement search, insert, and delete operations",
    "Write a solution for the 'Two Sum' problem - find two numbers in an array that add up to a target"
  ];
  
  const handleExampleSelect = (example: string) => {
    setProblem(example);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="problem" className="text-sm font-medium">
          Enter your DSA problem
        </label>
        <div className="relative">
          <Textarea
            id="problem"
            placeholder="Describe your problem or algorithm question..."
            className="min-h-[150px] resize-none"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
          {isLoading && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <div className="flex items-center gap-2 animate-pulse">
                <BrainCog className="h-5 w-5 text-primary animate-pulse-slow" />
                <span>Processing...</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {exampleProblems.map((example, index) => (
          <button
            key={index}
            onClick={() => handleExampleSelect(example)}
            className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80"
          >
            Example #{index + 1}
          </button>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-1 sm:w-1/3">
          <label htmlFor="language" className="text-sm font-medium">
            Preferred Language
          </label>
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value)}
          >
            <SelectTrigger id="language">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-2 sm:ml-auto sm:self-end">
          <Button
            variant="outline"
            onClick={handleReset}
            disabled={isLoading}
            className="gap-1"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset</span>
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="gap-1"
          >
            <Code className="h-4 w-4" />
            <span>Submit</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
