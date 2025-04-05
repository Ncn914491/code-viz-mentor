
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CodeBlock } from "@/components/CodeBlock";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">DSA Solver Documentation</h1>
        
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Getting Started</h2>
            <p>
              DSA Solver is a tool that helps you understand and solve data structure and algorithm problems.
              It uses AI to generate solutions, provide explanations, and create visualizations.
            </p>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">How to use:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Enter your problem description in the text area</li>
                <li>Select your preferred programming language</li>
                <li>Click "Submit" to generate a solution</li>
                <li>Explore the code, explanations, and visualizations</li>
                <li>Ask follow-up questions to deepen your understanding</li>
              </ol>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Code Generation</h3>
                <p className="text-sm text-muted-foreground">
                  Get clean, well-structured code solutions for your DSA problems in Python, JavaScript, Java, or C++.
                </p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Explanations</h3>
                <p className="text-sm text-muted-foreground">
                  Receive detailed explanations of the algorithm, including time and space complexity analysis.
                </p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Visualizations</h3>
                <p className="text-sm text-muted-foreground">
                  See algorithms in action with interactive visualizations of arrays, linked lists, and other data structures.
                </p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Q&A</h3>
                <p className="text-sm text-muted-foreground">
                  Ask follow-up questions about the solution to deepen your understanding of the concepts.
                </p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Language Support</h3>
                <p className="text-sm text-muted-foreground">
                  Switch between Python, JavaScript, Java, and C++ to see solutions in your preferred language.
                </p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Toggle between light and dark themes based on your preference.
                </p>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Example Usage</h2>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Sample Problem: Maximum Subarray Sum</h3>
              
              <p className="mb-4">
                <strong>Problem:</strong> Write an algorithm to find the maximum subarray sum in an array of integers.
              </p>
              
              <h4 className="font-medium mb-2">Generated Solution:</h4>
              <div className="mb-4">
                <CodeBlock 
                  code={`def max_subarray_sum(arr):
    if not arr:
        return 0
        
    current_max = arr[0]
    global_max = arr[0]
    
    for i in range(1, len(arr)):
        current_max = max(arr[i], current_max + arr[i])
        global_max = max(global_max, current_max)
        
    return global_max`} 
                  language="python" 
                />
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Supported Algorithms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Sorting Algorithms</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bubble Sort</li>
                  <li>Insertion Sort</li>
                  <li>Selection Sort</li>
                  <li>Merge Sort</li>
                  <li>Quick Sort</li>
                  <li>Heap Sort</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Search Algorithms</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Linear Search</li>
                  <li>Binary Search</li>
                  <li>Depth-First Search (DFS)</li>
                  <li>Breadth-First Search (BFS)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Data Structures</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Arrays</li>
                  <li>Linked Lists</li>
                  <li>Stacks</li>
                  <li>Queues</li>
                  <li>Trees</li>
                  <li>Graphs</li>
                  <li>Hash Tables</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Advanced Topics</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Dynamic Programming</li>
                  <li>Greedy Algorithms</li>
                  <li>Backtracking</li>
                  <li>Divide and Conquer</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
