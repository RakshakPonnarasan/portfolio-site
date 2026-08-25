"use client";

import Image from "next/image";
import styles from "./ImageBlock.module.css";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  dark?: boolean;
  wide?: boolean;
}

export default function ImageBlock({
  src,
  alt,
  caption,
  dark,
  wide,
}: ImageBlockProps) {
  return (
    <figure
      className={`${styles.figure} ${dark ? styles.dark : ""} ${
        wide ? styles.wide : ""
      }`}
    >
      <div className={styles.imageWrap}>
        {/* Placeholder shown when image is missing */}
        <div className={styles.placeholder} aria-hidden="true">
          <div className={styles.placeholderInner}>
            <span className={styles.placeholderIcon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="8.5"
                  cy="9.5"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M3 15l4-4 3 3 4-4 7 7"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className={styles.placeholderLabel}>
              — image pending —
            </span>
          </div>
        </div>

        <Image
          src={src}
          alt={alt}
          className={styles.image}
          fill
          sizes="(max-width: 768px) 100vw, calc(100vw - 358px)"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
}