'use client';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import type { Metadata } from 'next';

const FORM_ENDPOINT = 'https://formspree.io/f/mwkqedya';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!FORM_ENDPOINT) {
    return (
      <div>
        <SectionHeader title="Contact" />
        <p>
          Please contact us at{' '}
          <a href="mailto:info@updent.com" className="text-garnet underline">
            info@updent.com
          </a>
          .
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      <SectionHeader title="Contact" />
      {status === 'success' ? (
        <p>Thanks for contacting us.</p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4 max-w-md">
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <Input name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <TextArea name="message" placeholder="Message" rows={5} required />
          <Button type="submit">Send</Button>
          {status === 'error' && (
            <p className="text-red-600">Something went wrong. Please try again later.</p>
          )}
        </form>
      )}
    </div>
  );
}
