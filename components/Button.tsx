import { ButtonHTMLAttributes } from 'react';

export default function Button({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 bg-garnet text-white rounded hover:bg-garnet/80 ${className}`}
      {...props}
    />
  );
}
