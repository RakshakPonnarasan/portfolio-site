"use client";

import { useState } from "react";

import styles from "./Footer.module.css";

import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import ResumePreview from "@/components/ResumePreview/ResumePreview";

const EMAIL = "mprakshak05@gmail.com";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/rakshak-ponnarasan";

const RESUME_URL = "/resume.pdf";

export default function Footer() {
  const { theme, toggle } = useTheme();

  const [resumeOpen, setResumeOpen] =
    useState(false);

  return (
    <>
      <footer
        className={styles.footer}
        role="contentinfo"
      >
        {/* =====================================================
            LEFT — CONTACT LINKS
           ===================================================== */}

        <nav
          className={styles.footerCenter}
          aria-label="Footer navigation"
        >
          <a
            href={`mailto:${EMAIL}`}
            className={styles.footerLink}
          >
            EMAIL
          </a>

          <span
            className={styles.linkSeparator}
            aria-hidden="true"
          >
            /
          </span>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            LINKEDIN
          </a>

          <span
            className={styles.linkSeparator}
            aria-hidden="true"
          >
            /
          </span>

          {/* =================================================
              RESUME
              Only behavior changed:
              opens the preview instead of a new tab.
             ================================================= */}

          <button
            type="button"
            className={styles.footerLink}
            onClick={() =>
              setResumeOpen(true)
            }
          >
            RESUME
          </button>
        </nav>


        {/* =====================================================
            RIGHT — COPYRIGHT
           ===================================================== */}

        <div className={styles.footerRight}>
          <span className={styles.footerCopy}>
            © {new Date().getFullYear()} RAKSHAK M P
          </span>
        </div>
      </footer>


      {/* =========================================================
          RESUME PREVIEW
         ========================================================= */}

      <ResumePreview
        isOpen={resumeOpen}
        onClose={() =>
          setResumeOpen(false)
        }
      />
    </>
  );
}