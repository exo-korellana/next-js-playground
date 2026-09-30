"use client";

import { useCounterStore } from "@/app/zustand/_stores/counter.store";

export default function CounterData() {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="flex flex-1 items-center justify-center">
      <span className="text-lg font-semibold border rounded-md w-full items-center justify-center flex">
        {count}
      </span>
    </div>
  );
}
