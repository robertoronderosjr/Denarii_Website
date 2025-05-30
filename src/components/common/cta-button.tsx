import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CtaButton({ href, children, className, variant = "default", size = "lg", ...props }: CtaButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn('transition-transform hover:scale-105', className)} {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
