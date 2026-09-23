import type { Metadata } from 'next';
import TimelineContent from './timeline-content';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Career timeline for Kurt Robin Antonio — from a Laravel backend role in 2021 to leading e-commerce rebuilds for Australian and US businesses today.',
};

export default function TimelinePage() {
  return <TimelineContent />;
}
