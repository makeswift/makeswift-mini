import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/iframe")({
  component: Iframe,
});

function Iframe() {
  return <div className="p-2">Hello from Iframe!</div>;
}
