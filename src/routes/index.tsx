import { createFileRoute } from "@tanstack/react-router";
import { Builder } from "../builder/Builder";

export const Route = createFileRoute("/")({
  component: Builder,
});
