# DAA Algorithm Lab

An interactive, browser based application built around one application topic from each unit in the supplied DAA project PDF.

## Run

Open `index.html` in a modern browser. No server, install, or build step is required. The app runs locally in the browser and uses no backend.

## Projects included

| Unit | Topic | What the app shows |
|---|---|---|
| I - Algorithm Analysis | Sorting complexity | Measured key comparisons for Merge Sort, Quick Sort, and Insertion Sort on the same input. |
| II - Greedy Algorithms | Job sequencing | Profit-first job ordering and placement into the latest available deadline slot. |
| III - Dynamic Programming | Traveling Salesperson | Held-Karp subset states, shortest route, and distance matrix inputs. |
| IV - Backtracking | N-Queens | A valid board, attacked cells, candidate checks, and backtracks. |
| V - Branch and Bound | 0/1 Knapsack | Value-density ordering, fractional upper bounds, explored nodes, and pruned branches. |

## How it works

Use the left navigation to open a unit project, change its inputs, and select the run button. Each project has an interactive result and an algorithm trace beside it. The short explanation and pseudocode below the results connect the visualization to the DAA concept.

- Sorting runs three implementations over copies of a shared generated array and counts comparisons.
- Job sequencing sorts jobs by profit and assigns each accepted job to the latest unoccupied slot at or before its deadline.
- TSP uses a bitmask to represent visited-city subsets and stores the best cost for each subset and endpoint.
- N-Queens places one queen per row, rejects conflicts, and recursively returns to earlier rows when a choice leads to a dead end.
- Knapsack explores include/exclude choices in decreasing value density. A fractional-knapsack bound lets it discard branches that cannot improve the best feasible value found so far.

## Notes

The sorting chart measures comparisons, not elapsed time; runtime varies by browser and machine. The exact TSP demonstration supports up to 12 cities because its state space grows exponentially. Job inputs use `id:deadline:profit`; knapsack items use `weight:value`.
