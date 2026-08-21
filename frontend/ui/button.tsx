import React from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'red';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', href, className, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-consult-blue text-white shadow-md hover:opacity-90 ',
            red: 'bg-axc-red text-white shadow-md  font-semibold',
            outline: 'border-2 border-consult-blue text-consult-blue hover:bg-consult-blue hover:text-white',
            ghost: 'text-consult-blue hover:bg-consult-blue/10',
        };

        const sizes = {
            sm: 'px-4 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-8 py-3 text-lg',
        };

        const baseStyles = 'inline-flex items-center justify-center   rounded-lg no-underline font-manrope transition-all duration-200 ease-in-out cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

        const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            return (
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            );
        }

        return (
            <button
                ref={ref}
                className={combinedClassName}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
