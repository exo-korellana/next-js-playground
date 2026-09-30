import BackButton from "@/components/BackButton";
import { ROUTES } from "@/config/routes.config";
import BestPractices from "./_components/BestPractices";
import ComponentTestExample from "./_components/ComponentTestExample";
import RunTests from "./_components/RunTests";
import Setup from "./_components/Setup";
import UnitTestExample from "./_components/UnitTestExample";
import WhatIsVitest from "./_components/WhatIsVitest";
import WhyVitest from "./_components/WhyVitest";

export default function TestPage() {
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.home.self.path} />
      <h1 className="text-2xl font-semibold underline">Testing Page</h1>

      <WhatIsVitest />
      <WhyVitest />
      <Setup />
      <UnitTestExample />
      <ComponentTestExample />
      <RunTests />
      <BestPractices />
    </div>
  );
}
