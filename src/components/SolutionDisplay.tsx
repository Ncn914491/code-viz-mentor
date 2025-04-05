
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { ArrayVisualization } from "@/components/ArrayVisualization";
import { LinkedListVisualization } from "@/components/LinkedListVisualization";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from "@/components/ui/resizable";
import { MessageCircle, PuzzlePiece } from "lucide-react";

interface SolutionDisplayProps {
  code: string;
  language: string;
  explanation: string;
}

export function SolutionDisplay({ 
  code = "", 
  language = "python",
  explanation = ""
}: SolutionDisplayProps) {
  const [activeTab, setActiveTab] = useState("code");
  const [question, setQuestion] = useState("");
  
  // Example array for visualization
  const arrayData = [4, 2, 7, 1, 9, 5, 3];
  
  // Example linked list for visualization
  const linkedListData = [
    { value: 1, next: 1 },
    { value: 2, next: 2 },
    { value: 3, next: 3 },
    { value: 4, next: 4 },
    { value: 5, next: null }
  ];

  return (
    <div className="flex flex-col gap-4">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[400px] rounded-lg border"
      >
        <ResizablePanel defaultSize={70} className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="code">Code Solution</TabsTrigger>
              <TabsTrigger value="explanation">Explanation</TabsTrigger>
              <TabsTrigger value="visualization">Visualization</TabsTrigger>
              <TabsTrigger value="questions">Ask Questions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="code" className="mt-4">
              {code ? (
                <CodeBlock code={code} language={language} />
              ) : (
                <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                  <p className="text-muted-foreground">Submit a problem to see the solution</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="explanation" className="mt-4">
              {explanation ? (
                <div className="prose dark:prose-invert max-w-full">
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: explanation
                        .replace(/\n/g, '<br>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                  <p className="text-muted-foreground">Submit a problem to see the explanation</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="visualization" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Array Visualization</h3>
                  <ArrayVisualization data={arrayData} algorithm="bubble-sort" />
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Linked List Visualization</h3>
                  <LinkedListVisualization data={linkedListData} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="questions" className="mt-4">
              <div className="flex flex-col gap-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Ask about the solution</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask a question about time complexity, approach, etc."
                      className="flex-1 border rounded-md p-2"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>Ask</span>
                    </button>
                  </div>
                  
                  <div className="mt-4 text-muted-foreground text-sm">
                    <p>Example questions:</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>What is the time complexity of this solution?</li>
                      <li>How can we optimize this further?</li>
                      <li>Why is this approach better than using a hash map?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Similar problems</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                      <PuzzlePiece className="h-4 w-4 mt-1 text-primary" />
                      <div>
                        <h4 className="font-medium">Two Sum Variation</h4>
                        <p className="text-sm text-muted-foreground">Find three numbers that add up to a given target</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                      <PuzzlePiece className="h-4 w-4 mt-1 text-primary" />
                      <div>
                        <h4 className="font-medium">Kadane's Algorithm</h4>
                        <p className="text-sm text-muted-foreground">Find the maximum subarray sum using dynamic programming</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
