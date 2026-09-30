import { Card } from "@/components/ui/card";
import { PagesNav } from "@/components/PagesNav";

export default function Home() {
  return (
    <div className="w-full gap-4 flex flex-col">
      <div className="flex flex-col gap-2 items-center w-full">
        <h1 className="text-xl font-semibold">Next.js 16 Playground</h1>
        <p className="text-gray-500/60">Experiments, examples and tests</p>
      </div>

      <Card className="mx-auto w-full max-w-lg items-center p-2">
        <PagesNav />
      </Card>
    </div>
  );
}
