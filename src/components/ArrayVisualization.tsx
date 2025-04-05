
import { useState, useEffect } from "react";

interface ArrayVisualizationProps {
  data: number[];
  algorithm?: string;
  speed?: number;
}

export function ArrayVisualization({
  data,
  algorithm = "none",
  speed = 500
}: ArrayVisualizationProps) {
  const [array, setArray] = useState<number[]>([...data]);
  const [highlights, setHighlights] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    setArray([...data]);
  }, [data]);
  
  const runBubbleSort = async () => {
    if (isRunning) return;
    setIsRunning(true);
    
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setHighlights([j, j + 1]);
        await new Promise(r => setTimeout(r, speed));
        
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise(r => setTimeout(r, speed));
        }
      }
    }
    
    setHighlights([]);
    setIsRunning(false);
  };
  
  const runLinearSearch = async (target: number) => {
    if (isRunning) return;
    setIsRunning(true);
    
    for (let i = 0; i < array.length; i++) {
      setHighlights([i]);
      await new Promise(r => setTimeout(r, speed));
      
      if (array[i] === target) {
        // Found the target
        setHighlights([i]);
        setIsRunning(false);
        return true;
      }
    }
    
    setHighlights([]);
    setIsRunning(false);
    return false;
  };
  
  const runBinarySearch = async (target: number) => {
    if (isRunning) return;
    setIsRunning(true);
    
    let left = 0;
    let right = array.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      setHighlights([mid]);
      await new Promise(r => setTimeout(r, speed));
      
      if (array[mid] === target) {
        // Found the target
        setIsRunning(false);
        return true;
      }
      
      if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    setHighlights([]);
    setIsRunning(false);
    return false;
  };
  
  const runAlgorithm = () => {
    switch (algorithm) {
      case "bubble-sort":
        runBubbleSort();
        break;
      case "linear-search":
        runLinearSearch(5); // Example search for 5
        break;
      case "binary-search":
        runBinarySearch(5); // Example search for 5
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 p-4 visualization-container min-h-[120px] items-center justify-center">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-element w-10 h-10 ${
              highlights.includes(index) ? "highlighted" : ""
            }`}
          >
            {value}
          </div>
        ))}
      </div>
      
      {algorithm !== "none" && (
        <div className="flex justify-center gap-2">
          <button 
            onClick={runAlgorithm}
            disabled={isRunning}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
          >
            Visualize {algorithm.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
          <button 
            onClick={() => {
              setArray([...data]);
              setHighlights([]);
            }}
            disabled={isRunning}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md disabled:opacity-50"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
