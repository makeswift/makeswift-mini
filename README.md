# Makeswift Coding Assignment - Makeswift Mini

## Overview

Makeswift is a visual page builder that allows users to create and edit websites without writing code. In this assignment, you will build **Makeswift Mini**, a simplified version of Makeswift.

![Makeswift Mini](/makeswift-mini.jpg)

Makeswift Mini consists of two main components: the **builder** and the **host**. The builder renders the host as an iframe and allows users to edit the page visually. The host is the actual page that users will see when they publish their work on live sites.

To get a sense of what Makeswift is, please check out the real [Makeswift](https://makeswift.com/).

## Getting Started

1. Clone the repository (do not fork):

   ```bash
   git clone <repository-url>
   cd makeswift-mini
   ```

2. Prerequisites:

   - Node.js 22 or higher
   - pnpm 10 or higher

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Assignment

1. **Communication System**: Create a communication system between the builder and the host using `postMessage` API. Design the system so that it'll work even if the host is rendered on a different domain.
2. **Overlay**: Create an overlay in the builder that allows users to hover over elements and select them visually.
3. **Property Editor**: When an element is selected, display its properties in the sidebar and allow users to edit them. Any updates should be reflected in the host in real-time.
4. **NOTES.md**: Update the `NOTES.md` file with any notes, design decisions, testing plan, or trade-offs you made during the implementation. If you haven't finished the assignment, please explain what you would have done with more time.

- Focus on updating the code in the `src/builder` and `src/host` directories.
- You can use any library that can help you implement the features.

## Timeframe and Evaluation Criteria

We expect this assignment to take about 3-4 hours. **The timeframe is intentionally tight** - we don't expect candidates to finish everything perfectly. Focus on demonstrating your approach to the core challenges and document what you would do with more time.

You're encouraged to use any tools that help you be productive during the take-home assignment, including AI coding assistants like Claude Code. However, please note that in a follow-up interview, we will evaluate your ability to reason through and explain your solution without these tools, so make sure you understand your implementation thoroughly.

We expect to be able to run your submission, so please ensure your code is functional.

This assignment is purposefully open-ended. We will evaluate your submission holistically. The goal is to see how you approach complex problems, architect solutions, and communicate your design decisions.

## Questions?

If you have any questions about the assignment, please don't hesitate to reach out to us. Have fun!
