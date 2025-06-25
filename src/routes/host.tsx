import { createFileRoute } from "@tanstack/react-router";
import { Host } from "../host/Host";

export const Route = createFileRoute("/host")({
  component: Host,
});
