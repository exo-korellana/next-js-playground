import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes.config";
import Link from "next/link";
import BestPractices from "./_components/BestPractices";
import CreateStore from "./_components/CreateStore";
import UseInComponent from "./_components/UseInComponent";
import WhatIsZustand from "./_components/WhatIsZustand";
import WhenToUseEach from "./_components/WhenToUseEach";
import WhyNotContext from "./_components/WhyNotContext";

export default function ZustandPage() {
  return (
    <div className="w-full gap-4 flex flex-col mx-auto max-w-3xl">
      <BackButton href={ROUTES.home.self.path} />
      <h1 className="text-2xl font-semibold underline">Zustand Page</h1>

      <WhatIsZustand />
      <WhyNotContext />
      <CreateStore />
      <UseInComponent />
      <BestPractices />
      <WhenToUseEach />

      <hr className="w-full" />

      <h2 className="text-xl font-semibold">Ejemplos</h2>
      <div className="flex flex-col gap-2">
        <Button asChild>
          <Link href={ROUTES.zustand.example1.self.path}>Contador</Link>
        </Button>
      </div>
    </div>
  );
}
