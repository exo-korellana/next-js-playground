import CodeBlock from "@/components/CodeBlock";

export default function Setup() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">1. Instalación y configuración</h2>
      <p>Dependencias de desarrollo necesarias:</p>
      <CodeBlock
        title="Terminal"
        code={`pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event`}
      />

      <p>
        Configuración en <code>vitest.config.ts</code> (raíz del proyecto),
        reutilizando el alias <code>@/*</code> definido en{" "}
        <code>tsconfig.json</code>:
      </p>
      <CodeBlock
        title="vitest.config.ts"
        code={`import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});`}
      />

      <p>
        Archivo de setup <code>vitest.setup.ts</code>, para tener matchers como{" "}
        <code>toBeInTheDocument()</code>:
      </p>
      <CodeBlock
        title="vitest.setup.ts"
        code={`import "@testing-library/jest-dom/vitest";`}
      />

      <p>
        Scripts en <code>package.json</code>:
      </p>
      <CodeBlock
        title="package.json"
        code={`"test": "vitest",
"test:run": "vitest run"`}
      />
    </section>
  );
}
