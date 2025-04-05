
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast("Code copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  // A simple syntax highlighter
  const highlightCode = (code: string, language: string) => {
    // This is a basic implementation
    // In a real app, you might want to use a library like Prism or highlight.js
    const keywords = ["function", "const", "let", "var", "return", "if", "else", "for", "while", "class", "import", "export"];
    const types = ["string", "number", "boolean", "null", "undefined"];
    
    let highlightedCode = code;
    
    // Highlight keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, `<span class="text-blue-500 dark:text-blue-400">${keyword}</span>`);
    });
    
    // Highlight types
    types.forEach(type => {
      const regex = new RegExp(`\\b${type}\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, `<span class="text-green-500 dark:text-green-400">${type}</span>`);
    });
    
    // Highlight strings
    highlightedCode = highlightedCode.replace(
      /(["'`])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="text-yellow-500 dark:text-yellow-300">$&</span>'
    );
    
    // Highlight comments
    highlightedCode = highlightedCode.replace(
      /(\/\/.*|\/\*[\s\S]*?\*\/)/g,
      '<span class="text-gray-500 dark:text-gray-400">$1</span>'
    );
    
    return highlightedCode;
  };

  return (
    <div className="relative group">
      <div className="absolute right-4 top-3 z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={copyToClipboard}
          className="h-8 w-8 opacity-70 group-hover:opacity-100"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-t-md">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-xs text-muted-foreground">
          {language}
        </div>
      </div>
      <pre className="code-block overflow-auto text-sm">
        <code 
          dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }} 
          className="block p-0"
        />
      </pre>
    </div>
  );
}
