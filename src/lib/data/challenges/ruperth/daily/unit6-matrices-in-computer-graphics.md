---
title: "Matrices in Computer Graphics"
description: "Concise explanation, with diagrams or code examples, illustrating how matrices are used for transformations (translation, rotation, scaling) in 2D and 3D graphics."
difficulty: "Intermediate"
unit: "COMPUTING MATHEMATICS"
day: 6
week: 1
month: 1
technologies: ["Linear Algebra", "Computer Graphics"]
learningOutcomes:
    - Explain the role of transformation matrices in 2D/3D graphics
    - Construct translation, rotation, and scaling matrices
    - Compose multiple transformations via matrix multiplication
    - Connect homogeneous coordinates to the graphics pipeline
estimatedTime: "2 hours"
requirements:
    - Basic linear algebra (matrix multiplication)
    - Interest in computer graphics or game development
deliverables:
    - Markdown/PDF document with explanations, diagrams, and optional code snippets
resources:
  - name: "3D Graphics: Transformation Matrices – Scratchapixel"
    url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/perspective-and-orthographic-projection-matrix"
  - name: "Homogeneous Coordinates – Wikipedia"
    url: "https://en.wikipedia.org/wiki/Homogeneous_coordinates"
  - name: "OpenGL Transformation – LearnOpenGL"
    url: "https://learnopengl.com/Getting-started/Transformations"
  - name: "Interactive 2D Matrix Transformations"
    url: "https://www.mathsisfun.com/algebra/matrix-transform.html"
  - name: "Essence of Linear Algebra – Chapter on Matrices (3Blue1Brown)"
    url: "https://www.3blue1brown.com/lessons/linear-transformations"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-14"
unlockDate: "2026-02-14"
---

# Matrices in Computer Graphics

## Overview

Computer graphics relies on matrices to transform objects from their local model space to their final position on the screen. These transformations—such as translation, rotation, and scaling—are fundamental to rendering both 2D and 3D scenes, making matrices a core tool in graphics programming.

## Objective

Produce a self-contained explanation (at least 800 words) covering the use of matrices for linear transformations in graphics, including translation, rotation, scaling, and their composition, with diagrams and code examples.

## Prerequisites

- Understanding of matrix multiplication (non-commutative)
- (Optional) Familiarity with graphics APIs (OpenGL, WebGL, etc.)

## Instructions

### Part 1: Core Concepts

- Explain what a linear transformation is and why matrices represent them.
- Discuss the limitation of 2x2 matrices (cannot represent translation).
- Introduce homogeneous coordinates (3x3 for 2D, 4x4 for 3D) to unify translation with other transformations.

### Part 2: Transformation Matrices

- Provide explicit forms for 2D (3x3) and 3D (4x4) matrices:
    - Translation
    - Scaling (uniform and non-uniform)
    - Rotation (2D and 3D: x, y, z axes)
    - Shear (optional)
- Include diagrams showing effects on a unit square or cube.

### Part 3: Composition and Pipeline

- Demonstrate that applying transformation B after A corresponds to the matrix product B * A (column vector convention).
- Give a concrete example: scale a triangle by 2, rotate by 45°, then translate to (10,20). Compute the combined matrix and show transformed coordinates.
- Briefly describe the model-view-projection pipeline in 3D graphics.

## Deliverables

1. Markdown or PDF document named `matrices_in_graphics.md` (or `.pdf`)
2. At least three original diagrams (hand-drawn or digital)
3. (Optional) Code snippet (e.g., Python with NumPy) applying transformations and plotting results

## Evaluation Criteria

| Criteria                  | Weight | Description                                   |
|---------------------------|--------|-----------------------------------------------|
| Accuracy of Matrices      | 35%    | All matrices are correctly written/explained  |
| Clarity of Explanation    | 30%    | Concepts are logical and accessible           |
| Use of Homogeneous Coords | 15%    | Clear justification for their necessity       |
| Composition Example       | 10%    | Correct multiplication order and result       |
| Diagrams                  | 10%    | Visuals are neat, accurate, and referenced    |

## Tips & Common Mistakes

- In column-vector convention, the transformation matrix is on the left: v' = M * v.
- Translation is not linear in Euclidean space, but becomes linear in homogeneous space.
- Rotation matrices are orthogonal; their inverse is their transpose.
- Order matters: scale then rotate ≠ rotate then scale.
- Avoid placing translation in the wrong row/column of the 4x4 matrix.

## Bonus Challenges (Optional)

1. Implement a simple 2D transformation sandbox using pygame or matplotlib.
2. Explain the perspective projection matrix and its role in depth.
3. Derive the rotation matrix from a rotation by angle θ.

## Submission

Upload your document to `unit6/day6/matrices_in_graphics.md` (or `.pdf`). If you include code, place it in the same folder. Submit the commit URL.
