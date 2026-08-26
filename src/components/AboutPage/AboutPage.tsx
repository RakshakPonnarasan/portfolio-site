"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";
import ResumePreview from "@/components/ResumePreview/ResumePreview";

// Keep this in sync with Sidebar.tsx
const LINKEDIN_URL = "https://www.linkedin.com/in/rakshak-ponnarasan";
const EMAIL = "mprakshak05@gmail.com";


export default function AboutPage() {
    const [resumeOpen, setResumeOpen] =
    useState(false);
  return (
    <div className={styles.main}>
      {/* =======================================================
          TOP HEADER
         ======================================================= */}
      <header className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            WORK
          </Link>

          <span className={styles.breadcrumbSep}>—</span>

          <span className={styles.breadcrumbCurrent}>
            ABOUT
          </span>
        </div>

        <h1 className={styles.pageTitle}>
          ABOUT ME
        </h1>
      </header>

      {/* =======================================================
          ABOUT GRID
          CENTER = IMAGE + INTRO
          RIGHT  = EDUCATION / SKILLS / TOOLS / CONTACT / OPEN TO
         ======================================================= */}
      <section className={styles.aboutGrid}>

        {/* =====================================================
            CENTER COLUMN
           ===================================================== */}
        <motion.section
          className={styles.profileColumn}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Profile image */}
          <div className={styles.imageFrame}>
            <img
              src="/images/about/rakshak.png"
              alt="Rakshak M P"
              className={styles.profileImage}
            />
          </div>

          {/* Introduction */}
          <div className={styles.introduction}>
            <h2 className={styles.introTitle}>
              HI, I&apos;M RAKSHAK
            </h2>

            <p>
              I&apos;m a UI/UX Designer focused on creating clear,
              useful, and visually considered digital experiences.
            </p>

            <p>
              I enjoy working through the design process — from
              understanding a problem and shaping user flows to
              wireframing, visual design, prototyping, and building
              consistent interfaces.
            </p>

            <p>
              My strongest area is visual and interface design.
              I care about hierarchy, typography, spacing,
              interaction patterns, and turning ideas into
              polished screens that are easy to understand.
            </p>

            <p>
              I&apos;m currently completing my B.E. in Computer Science
              and Engineering while building real-world UI/UX
              projects and developing my product design practice.
            </p>
          </div>

          {/* Small positioning statement */}
          <div className={styles.focusBox}>
            <span className={styles.focusLabel}>
              CURRENT FOCUS
            </span>

            <p className={styles.focusText}>
              UI/UX Design · Visual Design · Product Interfaces
            </p>
          </div>
        </motion.section>

        {/* =====================================================
            RIGHT COLUMN
           ===================================================== */}
        <motion.aside
          className={styles.infoColumn}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* =================================================
              EDUCATION
             ================================================= */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>
              EDUCATION
            </h2>

            <div className={styles.educationItem}>
              <span className={styles.meta}>
                2023 — 2027
              </span>

              <strong>
                B.E. Computer Science &amp; Engineering
              </strong>

              <span className={styles.secondary}>
                Kumaraguru College of Technology
              </span>
            </div>
          </div>

          {/* =================================================
              SKILLS
             ================================================= */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>
              SKILLS
            </h2>

            <div className={styles.skillsGrid}>
              <span>UI Design</span>
              <span>UX Design</span>
              <span>Visual Design</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
              <span>User Flows</span>
              <span>Design Systems</span>
              <span>Responsive Design</span>
              <span>Interaction Design</span>
            </div>
          </div>

          {/* =================================================
              TOOLS
             ================================================= */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>
              TOOLS
            </h2>

            <div className={styles.skillsGrid}>
              <span>Figma</span>
              <span>FigJam</span>
              <span>Framer</span>
              <span>NOTION</span>
              <span>CANVA</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
            </div>

            <p className={styles.toolNote}>
              Figma is my primary design tool. My development
              background helps me understand how designs translate
              into real interfaces.
            </p>
          </div>

          {/* =================================================
              CONTACT
             ================================================= */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>
              CONTACT
            </h2>

            <div className={styles.contactLinks}>
              <a
                href={`mailto:${EMAIL}`}
                className={styles.contactLink}
              >
                <span>↳</span>
                <span>{EMAIL}</span>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span>↳</span>
                <span>
                  linkedin.com/in/rakshak-ponnarasan
                </span>
              </a>

              <a
  href="https://www.behance.net/rakshakmp"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.contactLink}
>
  <span>↳</span>
  <span>
    behance.net/rakshakmp
  </span>
</a>

              <button
  type="button"
  className={styles.contactLink}
  onClick={() =>
    setResumeOpen(true)
  }
>
  <span>↳</span>
  <span>Resume (PDF)</span>
</button>
            </div>
          </div>

          {/* =================================================
              OPEN TO
             ================================================= */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>
              OPEN TO
            </h2>

            <p className={styles.openText}>
              UI/UX Design opportunities, internships,
              collaborations, and freelance projects.
            </p>
          </div>
        </motion.aside>
      </section>

      <ResumePreview
        isOpen={resumeOpen}
        onClose={() =>
          setResumeOpen(false)
        }
      />
    </div>
  );
}