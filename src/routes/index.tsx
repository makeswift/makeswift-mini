import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bold underline">
      <h3>Hello from Builder!</h3>

      <iframe src="/iframe" />
    </div>
  );
}
