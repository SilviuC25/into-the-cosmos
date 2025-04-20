'use client';

import { useState } from 'react';
import timelineData from '../data/timeline.json';
import TimelineEvent from '../components/TimelineEvent';

export default function TimelinePage() {
  const [index, setIndex] = useState(0);
  const currentEvent = timelineData[index];

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goNext = () => {
    if (index < timelineData.length - 1) setIndex(index + 1);
  };

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-950">Milestones of Space Exploration</h1>
      <TimelineEvent
        event={currentEvent}
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={index > 0}
        hasNext={index < timelineData.length - 1}
      />
    </main>
  );
}
