import { Header } from "./components/Header";

export function Builder() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1 border-t border-gray-200">
        <section className="flex-1 p-6 bg-gray-100">
          <iframe
            src="/host"
            title="Preview"
            className="w-full h-full bg-white border border-gray-300 rounded-lg"
          />
        </section>

        <aside className="w-72 border-l border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sidebar</h2>

          <p className="text-sm text-gray-600">
            Add controls, settings, or other content here.
          </p>
        </aside>
      </main>
    </div>
  );
}
