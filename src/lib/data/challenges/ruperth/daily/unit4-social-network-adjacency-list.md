---
title: "Social Network Graph with Adjacency List"
description: "Represent a simplified social network as a graph using adjacency lists and implement basic operations."
difficulty: "Intermediate"
unit: "DISCRETE MATHEMATICS"
day: 4
week: 1
month: 1
technologies: ["Python", "Graph Theory"]
learningOutcomes:
    - "Model graphs using adjacency list representation"
    - "Implement graph traversal (BFS and DFS)"
    - "Analyze simple social network properties (degrees, connected components)"
estimatedTime: "2 hours"
requirements:
    - "Python 3.x"
    - "Basic understanding of classes and dictionaries"
deliverables:
    - "Python file social_network.py containing the SocialNetwork class and all required methods"
    - "A demonstration script that builds a sample network and performs analysis"
resources:
  - name: "Graph Theory – Khan Academy"
    url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs"
  - name: "Adjacency List – Brilliant"
    url: "https://brilliant.org/wiki/adjacency-list/"
  - name: "Python Patterns – Implementing Graphs"
    url: "https://www.python.org/doc/essays/graphs/"
  - name: "NetworkX Documentation (for reference)"
    url: "https://networkx.org/documentation/stable/tutorial.html"
  - name: "Social Network Analysis – Wikipedia"
    url: "https://en.wikipedia.org/wiki/Social_network_analysis"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# Social Network Graph with Adjacency List

## Overview

Graphs are a fundamental data structure in computer science, used to model relationships in social networks, web pages, transportation systems, and more. Implementing a graph from scratch using adjacency lists builds a deep understanding of how graph algorithms work and prepares you for advanced topics like network analysis and recommendation systems.

## Objective

Create a Python class `SocialNetwork` that represents a graph using an adjacency list. Implement methods to add and remove users and friendships, traverse the network, and compute basic metrics.

## Prerequisites

- Python classes and dictionaries
- Basic recursion or stack/queue usage

## Instructions

### Part 1: Core Data Structure

- Define a class `SocialNetwork` with an attribute `network` (dictionary) where keys are user IDs and values are sets of neighbor IDs.
- Implement methods:
    - `add_user(user_id)`
    - `remove_user(user_id)`
    - `add_friendship(user1, user2)`
    - `remove_friendship(user1, user2)`
    - `get_friends(user_id)` (returns a set of friends)
- Ensure friendships are undirected (adding adds both directions).

### Part 2: Traversal and Analysis

- Implement:
    - `bfs(start_user)` – returns a list of users visited in breadth‑first order.
    - `dfs(start_user)` – returns a list of users visited in depth‑first order.
    - `shortest_path(user1, user2)` – returns the shortest path as a list of users, or `None` if no path exists.
    - `connected_components()` – returns a list of sets, each containing the users in one connected component.
    - `degree_centrality(user_id)` – returns the degree of the user.

### Part 3: Build a Sample Network

- Create a demonstration script that:
    - Initializes a `SocialNetwork` object.
    - Adds at least 8 users with meaningful names.
    - Adds friendships to mimic a small social network (some isolated, some clustered).
    - Prints the adjacency list.
    - Runs BFS and DFS from one user.
    - Finds the shortest path between two specific users.
    - Lists all connected components.
    - Prints degree centrality for each user.

## Deliverables

1. `social_network.py` containing the `SocialNetwork` class and all required methods.
2. A demonstration script (or `if __name__ == "__main__":` block) that executes the sample network.
3. Output showing adjacency list, traversals, shortest path, connected components, and degree centrality.

## Evaluation Criteria

| Criteria         | Weight | Description                                              |
|------------------|--------|----------------------------------------------------------|
| Correctness      | 40%    | All graph operations work as expected (add/remove, bidirectional edges). |
| Traversal        | 25%    | BFS and DFS produce correct orders; shortest path is accurate. |
| Analysis Methods | 25%    | Connected components and centrality are correctly computed. |
| Code Structure   | 10%    | Clean, well‑commented code with appropriate use of data structures. |

## Tips & Common Mistakes

- Use `set` for neighbor storage to avoid duplicate entries and for O(1) membership tests.
- When removing a user, also remove that user from all other users' friend sets.
- In `shortest_path`, use BFS and store parent pointers to reconstruct the path.
- Handle edge cases: removing a non‑existent user/friendship, requesting friends of a non‑existent user.

## Bonus Challenges (Optional)

1. Implement a recommendation system: `recommend_friends(user_id)` that suggests friends of friends not already connected.
2. Visualize the network using matplotlib and networkx.

## Submission

Commit `social_network.py` to `unit4/day4/` and provide the link. If you attempt the bonus, include `visualization.py` as a separate file.
