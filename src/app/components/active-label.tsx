import React from 'react';
import css from './active-label.module.css';

interface ActiveLabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}
