# Algorithms Implemented in TypeScript

This repository contains implementations of a variety of fundamental algorithms, covering topics such as searching, sorting, dynamic programming, and more. Each algorithm is implemented in TypeScript and is organized into separate folders based on the algorithm type.

## Table of Contents
- 01 Knapsack Problem
- Activity Selection Problem
- Basics
- Breadth/Depth First Search
- Characters Frequencies
- Graph Algorithms
- Huffman Coding
- Knapsack Problem
- Longest Common Subsequence
- Prim's Minimum Spanning Tree
- Searching Algorithms
- Segregate Positive and Negative Numbers
- Sorting Algorithms
- Stagecoach Problem

## How to Use

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mohamedlasheen92/Algorithms.git
   cd Algorithms
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run an algorithm:**

   Use the `index.ts` file to call and run different algorithms. Here’s an example of how you can use the `Graph` class from the `Graph Algorithms` folder:

   ```typescript
   import Graph from "./Graph Algorithms/Graph";

   const graph = new Graph(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);

   graph.addEdgesWithWeights(0, [1, 2, 3], [2, 4, 3]);
   graph.addEdgesWithWeights(1, [4, 5, 6], [7, 4, 6]);
   graph.addEdgesWithWeights(2, [4, 5, 6], [3, 2, 4]);
   graph.addEdgesWithWeights(3, [4, 5, 6], [4, 1, 5]);

   graph.addEdgesWithWeights(4, [7, 8], [1, 4]);
   graph.addEdgesWithWeights(5, [7, 8], [6, 3]);
   graph.addEdgesWithWeights(6, [7, 8], [3, 3]);

   graph.addEdgesWithWeights(7, [9], [3]);
   graph.addEdgesWithWeights(8, [9], [4]);

   graph.dijkstra();
   ```

   To run the `index.ts` file, use:

   ```bash
   ts-node index.ts
   ```

## Folder Structure

The repository is organized into directories based on the type of algorithms. Each folder contains TypeScript files that implement the corresponding algorithms.

## Prerequisites

- **Node.js** (v14 or higher)
- **TypeScript** (v4.0 or higher)
- **ts-node** (for running TypeScript files directly)

To install TypeScript and ts-node globally:

```bash
npm install -g typescript ts-node
```
