'use client';

import { useCallback } from 'react';

const RESUME_URL = '/Giang_Anh_Vu_Resume.pdf';

async function openResumeInNewTab() {
  try {
    const res = await fetch(RESUME_URL);
    if (!res.ok) throw new Error('Failed to fetch');
    const blob = await res.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const url = URL.createObjectURL(pdfBlob);
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (win) setTimeout(() => URL.revokeObjectURL(url), 10000);
  } catch {
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  }
}

export function ResumeLink({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      openResumeInNewTab();
      onClick?.();
    },
    [onClick]
  );

  return (
    <a href={RESUME_URL} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
