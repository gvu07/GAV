'use client';

const RESUME_URL = '/Giang_Anh_Vu_Resume.pdf';
const RESUME_FILENAME = 'Giang_Anh_Vu_Resume.pdf';

export function ResumeLink({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={RESUME_URL}
      download={RESUME_FILENAME}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
