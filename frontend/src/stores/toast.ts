import type { ReactNode } from 'react';
import create from 'zustand';

export type ErrorOptions = { message: ToastState['message']; type: ToastState['type'] };

type ToastType = 'error' | 'info' | 'success' | 'warning';

interface ToastState {
  isVisible: boolean;
  type: ToastType;
  message: ReactNode;
  open: (options: ErrorOptions) => void;
  close: () => void;
}

export const useToast = create<ToastState>((set) => ({
  isVisible: false,
  type: 'info',
  message: '',
  open: ({ message, type }) => set(() => ({ isVisible: true, message, type })),
  close: () => set(() => ({ isVisible: false, message: '' })),
}));
