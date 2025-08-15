'use client';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch('/api/contact', { method: 'POST' });
    setSent(true);
  }
  return (
    <div>
      <SectionHeader title="Contact" />
      {sent ? (
        <p>Thanks for contacting us.</p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4 max-w-md">
          <Input name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <TextArea name="message" placeholder="Message" rows={5} required />
          <Button type="submit">Send</Button>
        </form>
      )}
    </div>
  );
}
