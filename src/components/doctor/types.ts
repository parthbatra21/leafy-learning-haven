// src/components/doctor/types.ts
import { ReactNode } from 'react';

export interface MedicalNodeProps {
  title: string;
  icon: ReactNode;
  progress?: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  type: string;
}

export interface MedicalProgressProps {
  progress: number;
  type: string;
} 