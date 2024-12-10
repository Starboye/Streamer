import React from 'react';
import { Content } from '../types/content';
import { ContentCard } from './ContentCard';
import { LoadingSpinner } from './LoadingSpinner';
import { EmptyState } from './EmptyState';

interface ContentGridProps {
  contents: Content[];
  isLoading: boolean;
}

export const ContentGrid: React.FC<ContentGridProps> = ({ contents, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (contents.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contents.map((content) => (
        <ContentCard key={content.id} content={content} />
      ))}
    </div>
  );
};