import { renderComponent } from "./runtime/runtime";
import { SAMPLE_DATA } from "./runtime/sample-data";

export function Host() {
  return renderComponent(SAMPLE_DATA);
}
