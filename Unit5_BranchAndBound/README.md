# Unit V: 0/1 Knapsack with Branch and Bound

## Run
Start `node serve.js` at the repository root, then visit `http://127.0.0.1:8765/Unit5_BranchAndBound/`.

## Algorithm
Items are considered in descending value density. Include/exclude search tracks an incumbent and computes a fractional-knapsack upper bound to prune subtrees that cannot improve it.

## Prompt
See [Prompt.txt](Prompt.txt).

## Learning outcome
See how bounding makes exact search more efficient while preserving the optimal solution.
