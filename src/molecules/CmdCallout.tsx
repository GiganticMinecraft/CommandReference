import { Callout } from 'nextra-theme-docs';
import React from 'react';

export const NoteCallout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Callout type="info" emoji="📣">
      {children}
    </Callout>
  );
};

export const WarningCallout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Callout type="warning" emoji="⚠️">
      {children}
    </Callout>
  );
};

export const ErrorCallout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Callout type="error" emoji="❌">
      {children}
    </Callout>
  );
};

export const HintCallout = ({ children }: { children: React.ReactNode }) => {
  return <Callout emoji="💡">{children}</Callout>;
};
