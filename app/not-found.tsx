import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { IconMoodPuzzled } from "@tabler/icons-react";

export default function NotFound() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-1">
            No encontrado <IconMoodPuzzled size="16" />
          </CardTitle>
          <CardDescription>
            No se ha podido encontrar el recurso solicitado.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    // </div>
  );
}
