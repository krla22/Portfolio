import type { Metadata } from 'next';
import TimelineContent from './timeline-content';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    "Where I've worked, from my first Laravel job in 2021 to the e-commerce rebuilds I lead today.",
};

export default function TimelinePage() {
  return <TimelineContent />;
}
