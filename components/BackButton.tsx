import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

type BackButtonProps = {
  href: string;
  label?: string;
};

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button asChild>
      <Link href={href}>{label ?? 'Volver'}</Link>
    </Button>
  );
}
