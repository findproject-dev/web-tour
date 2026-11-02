import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function Icon({ name, className }: { name: string, className?: string }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
