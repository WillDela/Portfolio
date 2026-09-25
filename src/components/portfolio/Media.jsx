import { useState } from 'react';

export default function Media({ src, alt, className = '', label, priority = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`media-fallback ${className}`} role="img" aria-label={alt}>
        <span>{label || 'Image unavailable'}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
