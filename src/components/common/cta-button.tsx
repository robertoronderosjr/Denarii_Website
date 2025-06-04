import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function CtaButton({ href, children, className, variant = "default", size = "lg", target, rel, ...props }: CtaButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn('transition-transform hover:scale-105', className)} {...props}>
      <Link href={href} target={target} rel={rel}>
        {children}
      </Link>
    </Button>
  );
}
