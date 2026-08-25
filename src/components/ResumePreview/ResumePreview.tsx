"use client";

import { useEffect } from "react";

import styles from "./ResumePreview.module.css";

type ResumePreviewProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RESUME_URL = "/resume.pdf";

export default function ResumePreview({
  isOpen,
  onClose,
}: ResumePreviewProps) {
  /* =========================================================
     ESCAPE KEY + BODY SCROLL LOCK
     ========================================================= */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        {/* =====================================================
            HEADER
           ===================================================== */}

        <div className={styles.header}>
          <span className={styles.title}>
            RESUME
          </span>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close resume preview"
          >
            ×
          </button>
        </div>


        {/* =====================================================
            PDF PREVIEW
           ===================================================== */}

        <div className={styles.preview}>
          <iframe
            src={`${RESUME_URL}#view=FitH`}
            title="Rakshak M P resume"
            className={styles.pdf}
          />
        </div>


        {/* =====================================================
            FOOTER ACTIONS
           ===================================================== */}

        <div className={styles.actions}>
          <a
            href={RESUME_URL}
            download
            className={styles.download}
          >
            DOWNLOAD
          </a>

          <button
            type="button"
            className={styles.closeAction}
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}