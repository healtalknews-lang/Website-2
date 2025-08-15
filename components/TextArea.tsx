import { TextareaHTMLAttributes } from 'react';

export default function TextArea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`border border-charcoal p-2 rounded w-full ${className}`} {...props} />;
}
