
import { useState, useEffect } from "react";

interface Node {
  value: number;
  next: number | null;
}

interface LinkedListVisualizationProps {
  data: Array<{ value: number, next: number | null }>;
}

export function LinkedListVisualization({ data }: LinkedListVisualizationProps) {
  const [nodes, setNodes] = useState<Node[]>([...data]);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  useEffect(() => {
    setNodes([...data]);
  }, [data]);

  const traverseList = async () => {
    let currentIndex = 0; // Start at head
    
    while (currentIndex !== null) {
      setHighlightIndex(currentIndex);
      await new Promise(r => setTimeout(r, 500));
      
      const currentNode = nodes[currentIndex];
      currentIndex = currentNode.next !== null ? currentNode.next : null;
    }
    
    setHighlightIndex(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-6 p-4 visualization-container min-h-[120px] items-center justify-center">
        {nodes.map((node, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`array-element w-12 h-12 rounded-full ${
                highlightIndex === index ? "highlighted" : ""
              }`}
            >
              {node.value}
            </div>
            {node.next !== null && (
              <div className="w-8 h-1 bg-border mx-1">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-border ml-7 -mt-[5px]"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2">
        <button 
          onClick={traverseList}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Traverse List
        </button>
      </div>
    </div>
  );
}
