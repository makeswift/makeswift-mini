import { Header } from "./components/Header";
import { NumberPanel } from "./components/NumberPanel";
import { TextPanel } from "./components/TextPanel";

export function Builder() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1 border-t border-gray-300">
        <section className="flex-1 p-6 bg-gray-100 border-r border-gray-300">
          <iframe
            src="/host"
            title="Preview"
            className="w-full h-full bg-white border border-gray-300 rounded-lg"
          />
        </section>

        <aside className="w-72 border-gray-300">
          <div className="bg-gray-100 p-3 border-b border-gray-300">
            <h2 className="text-md text-gray-500">Text</h2>
          </div>

          <div className="flex flex-col gap-3 p-3">
            <TextPanel label="Text" value="WHERE BRAND MEETS THE BROWSER" />
            <TextPanel label="Color" value="#ea39a6" />
            <NumberPanel label="Font size" value={48} />
            <NumberPanel label="Font weight" value={900} />
          </div>
        </aside>
      </main>
    </div>
  );
}
