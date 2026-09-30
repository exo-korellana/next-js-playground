import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes.config";
import { flattenRoutes } from "@/lib/routes.lib";

const STRUCTURAL_TYPES = ["group", "page", "sub-section", "home"];

export function PagesNav() {
  const pageLinks = flattenRoutes(ROUTES).filter(
    ({ type }) => !STRUCTURAL_TYPES.includes(type),
  );

  return (
    <nav className="flex flex-col gap-2 w-full p-1.5">
      {pageLinks.map(({ name, fullName, path, icon: Icon }) => (
        <Button key={path} className="w-full items-center gap-1" asChild>
          <Link href={path}>
            {Icon && <Icon className="size-4" />}
            <span>{fullName || name}</span>
          </Link>
        </Button>
      ))}
    </nav>
  );
}
