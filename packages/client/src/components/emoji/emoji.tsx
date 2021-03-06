import React from 'react';

export interface EmojiProps {
  emoji: string;
  ariaLabel: string;
}

export default function Emoji({ emoji, ariaLabel }: EmojiProps) {
  return (
    <span role="presentation" aria-label={ariaLabel}>
      {emoji}
    </span>
  );
}
