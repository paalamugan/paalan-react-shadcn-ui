import type React from 'react';

export interface TabOption {
  label: React.ReactNode;
  value: string;
  content?: React.ReactNode;
  triggerClassName?: string;
  contentClassName?: string;
}
