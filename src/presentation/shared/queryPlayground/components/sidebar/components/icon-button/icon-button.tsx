import type { ReactNode } from 'react';
import { iconButtonStyles as styled } from './icon-button.styles';

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button type="button" className={styled.iconButton} onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
}

export { IconButton };
