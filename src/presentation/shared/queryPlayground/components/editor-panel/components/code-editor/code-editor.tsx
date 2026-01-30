'use client';

import { useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';

import { CodeEditorProps } from './code-editor.types';
import {
  filterSuggestions,
  getKeyAction,
  getNextActiveIndex,
  getSuggestionPool,
  getTokenAtCursor,
  shouldOpenSuggestions,
} from './code-editor.utils';

function CodeEditor({ value, suggestions, placeholder, rows = 8, onChange }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [cursor, setCursor] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const tokenInfo = useMemo(() => getTokenAtCursor(value, cursor), [value, cursor]);
  const normalizedToken = tokenInfo.token.trim().toLowerCase();

  const filteredSuggestions = useMemo(() => {
    if (!normalizedToken) {
      return [];
    }

    const pool = getSuggestionPool({
      tokenInfo,
      value,
      cursor,
      suggestions,
    });

    return filterSuggestions(pool, normalizedToken);
  }, [normalizedToken, suggestions, value, cursor, tokenInfo]);

  const showSuggestions = isOpen && filteredSuggestions.length > 0;

  const applySuggestion = (suggestion: string) => {
    const nextValue = value.slice(0, tokenInfo.start) + suggestion + value.slice(tokenInfo.end);
    onChange(nextValue);
    setIsOpen(false);

    requestAnimationFrame(() => {
      const nextCursor = tokenInfo.start + suggestion.length;
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(nextCursor, nextCursor);
        setCursor(nextCursor);
      }
    });
  };

  const handleChange = (nextValue: string, position: number | null | undefined) => {
    onChange(nextValue);
    handleSelect(position);
  };

  const handleSelect = (position: number | null | undefined) => {
    if (typeof position !== 'number') {
      return;
    }
    setCursor(position);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const action = getKeyAction(event.key, showSuggestions);
    if (action === 'none') {
      return;
    }

    event.preventDefault();

    if (action === 'apply') {
      applySuggestion(filteredSuggestions[activeIndex]);
      return;
    }

    if (action === 'close') {
      setIsOpen(false);
      return;
    }

    setActiveIndex((index) => getNextActiveIndex(index, filteredSuggestions.length, action));
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (['ArrowDown', 'ArrowUp', 'Tab', 'Enter', 'Escape'].includes(event.key)) {
      return;
    }

    handleSelect(event.currentTarget.selectionStart);
    if (shouldOpenSuggestions(normalizedToken, filteredSuggestions.length)) {
      setIsOpen(true);
      setActiveIndex(0);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(event) => handleChange(event.target.value, event.currentTarget.selectionStart)}
        onSelect={(event) => handleSelect(event.currentTarget.selectionStart)}
        onClick={(event) => handleSelect(event.currentTarget.selectionStart)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        className={cn(
          'w-full resize-none rounded-xl border border-[var(--border-1)] bg-[var(--surface-2)] p-6 text-sm leading-6 text-[var(--text-primary)] outline-none',
          'font-mono tracking-[0.01em]',
          'shadow-[inset_0_0_0_1px_var(--border-2)]',
          'focus:border-[var(--border-1)] focus-visible:ring-2 focus-visible:ring-[var(--border-2)]',
        )}
      />
      {showSuggestions ? (
        <div className="absolute left-4 right-4 top-full z-10 mt-2 rounded-xl border border-[var(--border-1)] bg-[var(--surface-2)] shadow-[0_20px_40px_rgba(4,6,30,0.45)]">
          <ul className="max-h-56 overflow-auto py-2">
            {filteredSuggestions.map((item, index) => (
              <li key={`${item}-${index}`}>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => applySuggestion(item)}
                  className={cn(
                    'flex w-full items-center px-4 py-2 text-left text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)]',
                    index === activeIndex
                      ? 'bg-white/10 text-[var(--text-primary)]'
                      : 'hover:bg-white/5',
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export { CodeEditor };
