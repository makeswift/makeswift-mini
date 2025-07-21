# Makeswift Coding Assignment - Makeswift Mini

## Overview

Welcome to the Makeswift Mini project!

Makeswift is a visual page builder that empowers users to create and edit beautiful websites without writing code. In this assignment, you'll build **Makeswift Mini**, a simplified version of Makeswift that captures the essence of visual web building.

![Makeswift Mini](/makeswift-mini.jpg)

Makeswift Mini consists of two main components: the **builder** and the **host**. The builder renders the host as an iframe and allows users to edit the page visually. The host is the actual page that users will see when they publish their work on live sites.

To get a feel for what Makeswift is all about, we'd love for you to check out the real [Makeswift](https://makeswift.com/)!

## Getting Started

Ready to dive in? Let's get you up and running!

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

Here's what we'd love to see you build:

1. **Communication System**: Create a communication system between the builder and the host using `postMessage` API. Design the system so that it'll work even if the host is rendered on a different domain.
2. **Overlay**: Create an overlay in the builder that allows users to hover over elements and select them visually.
3. **Property Editor**: When an element is selected, display its properties in the sidebar and allow users to edit them. Any updates should be reflected in the host in real-time.

- The Box and Text components on the host should not contain any visual editing logic or have any knowledge of Makeswift Mini. This ensures that the host components are plug-and-play with any React component.
- **Think big picture!** Architect your system for extensibility so it can easily grow to support features like dynamic component registration, real-time collaboration, and whatever comes next. We’re eager to see how you design for the future!
- Feel free to use any library that can help you implement the features - we're all about efficiency!
- Share your journey! Update the `NOTES.md` file with any notes, design decisions, how you used LLMs including your prompting strategy, trade-offs you made during the implementation, or what you'd tackle next with more time.

## Timeframe and What We're Looking For

We expect this assignment to take about 3-4 hours. **Here's the thing - the timeframe is intentionally tight!**. We don't expect you to finish everything perfectly. Instead, we want to see how you approach the core challenges and understand your thought process.

Feel free to use any tools that help you be productive, including AI coding assistants like Claude Code. Just keep in mind that if selected for a follow-up interview, you'll need to discuss your solution and reasoning without these tools, so make sure you understand your implementation well.

This assignment is purposefully open-ended because we want to see your unique approach! We'll evaluate your submission holistically, focusing on how you tackle complex problems, architect solutions, and communicate your design decisions.

## Submission Guidelines

**Important**: Please do not host your submission publicly on GitHub or any other public platform. Follow the submission instructions provided to you separately to ensure your work remains private during the evaluation process.

## Questions?

Got questions? Please don't hesitate to reach out. Most importantly - have fun with this!
