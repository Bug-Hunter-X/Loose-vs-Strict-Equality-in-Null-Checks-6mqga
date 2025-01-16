# Loose vs. Strict Equality in JavaScript Null Checks

This repository demonstrates a common JavaScript error related to the difference between loose equality (`==`) and strict equality (`===`) when checking for `null` values.  Using loose equality can lead to unexpected behavior and bugs.

## The Problem
The `bug.js` file contains two functions, `foo` and `bar`. Both aim to handle `null` values as input, but they differ in how they perform the null check.  `foo` uses strict equality (`===`), while `bar` uses loose equality (`==`). The difference is subtle but significant.  Loose equality (`==`) performs type coercion before comparison, meaning it attempts to convert values to compatible types before checking for equality, which leads to unexpected behavior when comparing numbers and null.

## The Solution
The `bugSolution.js` file shows the corrected code using strict equality (`===`).  Strict equality is preferred when checking for null values, because it provides more predictable and reliable results. This prevents any unexpected behavior and type coercion that may lead to bugs.

## How to Use
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to observe the different outputs.

## Lesson Learned
Always use strict equality (`===`) when checking for `null` values in JavaScript to avoid unexpected behavior and maintain code clarity. This practice leads to more robust and reliable code.