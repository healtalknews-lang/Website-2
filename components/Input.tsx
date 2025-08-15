import { InputHTMLAttributes } from 'react';

export default function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`border border-charcoal p-2 rounded w-full ${className}`} {...props} />;
}
