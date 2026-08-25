"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";
import styles from "./CaseStudy.module.css";

interface CaseStudySection {
  title: string;
  content: ReactNode;
  dark?: boolean;
}

interface CaseStudyProps {
  project: Project;
  sections: CaseStudySection[];
  overview: {
    role: string;
    timeline: string;
    tools: string;
    type: string;
    behanceUrl?: string;
    behanceDescription?: string;
    behanceTags?: string;
  };
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.24,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedSection({
  section,
}: {
  section: CaseStudySection;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.section
      ref={ref}
      className={`${styles.section} ${
        section.dark ? styles.sectionDark : ""
      }`}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.24,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={styles.sectionInner}>
        <div className={styles.sectionLeft}>
          <span className={styles.sectionTitle}>
            {section.title.toUpperCase()}
          </span>
        </div>

        <div className={styles.sectionContent}>
          {section.content}
        </div>
      </div>
    </motion.section>
  );
}

export default function CaseStudyLayout({
  project,
  sections,
  overview,
}: CaseStudyProps) {
  return (
  <div className={styles.main}>
        {/* =====================================================
            HERO
            ===================================================== */}

        <header className={styles.hero}>
          <motion.div
            className={styles.heroInner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.24,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className={styles.breadcrumb}>
              <Link
                href="/"
                className={styles.breadcrumbLink}
              >
                INDEX
              </Link>

              <span
                className={styles.breadcrumbSep}
                aria-hidden="true"
              >
                —
              </span>

              <span className={styles.breadcrumbCurrent}>
                {project.title}
              </span>
            </div>

            <div className={styles.heroTitle}>
              <span className={styles.heroNum}>
                {project.number}
              </span>

              <h1 className={styles.heroName}>
                {project.title}
              </h1>
            </div>

            <p className={styles.heroCategory}>
              {project.category}
            </p>

            <div className={styles.overviewStrip}>
              <div className={styles.overviewItem}>
                <span className={styles.overviewKey}>
                  ROLE
                </span>

                <span className={styles.overviewVal}>
                  {overview.role}
                </span>
              </div>

              <div className={styles.overviewItem}>
                <span className={styles.overviewKey}>
                  YEAR
                </span>

                <span className={styles.overviewVal}>
                  {project.year}
                </span>
              </div>

              <div className={styles.overviewItem}>
                <span className={styles.overviewKey}>
                  DISCIPLINE
                </span>

                <span className={styles.overviewVal}>
                  {project.metadata.join(" / ")}
                </span>
              </div>

              <div className={styles.overviewItem}>
                <span className={styles.overviewKey}>
                  PLATFORM
                </span>

                <span className={styles.overviewVal}>
                  {project.platform}
                </span>
              </div>

              <div className={styles.overviewItem}>
                <span className={styles.overviewKey}>
                  STATUS
                </span>

                <span className={styles.overviewVal}>
                  {project.status}
                </span>
              </div>

              <div className={styles.overviewItem}>
                <span className={styles.overviewKey}>
                  TOOLS
                </span>

                <span className={styles.overviewVal}>
                  {overview.tools}
                </span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* =====================================================
            SHORT DESCRIPTION
            ===================================================== */}

        <Reveal className={styles.descWrap}>
          <p className={styles.descText}>
            {project.description}
          </p>
        </Reveal>

        {/* =====================================================
            CASE STUDY SECTIONS
            ===================================================== */}

        <div className={styles.sectionsWrap}>
          {sections.map((section, index) => (
            <AnimatedSection
              key={`${section.title}-${index}`}
              section={section}
            />
          ))}
        </div>

        {/* =====================================================
            FULL BEHANCE CASE STUDY
            ===================================================== */}

        {overview.behanceUrl && (
          <section className={styles.fullCaseStudy}>
            <div className={styles.fullCaseStudyLabel}>
              EXPLORE THE FULL CASE STUDY
            </div>

            <motion.div
              className={styles.fullCaseStudyCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.fullCaseStudyInner}>
                <span className={styles.fullCaseStudyBadge}>
                  FULL CASE STUDY
                </span>

                <h2 className={styles.fullCaseStudyTitle}>
                  See the complete {project.title} story.
                </h2>

                <p className={styles.fullCaseStudyDescription}>
                  {overview.behanceDescription ||
                    `Explore the complete ${project.title} project, including the product concept, design process, interface decisions, and detailed visual work on Behance.`}
                </p>

                <a
                  href={overview.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fullCaseStudyButton}
                >
                  View Full Case Study on Behance
                  <span aria-hidden="true">↗</span>
                </a>

                <div className={styles.fullCaseStudyTags}>
                  {overview.behanceTags ||
                    "Product Design · UX · UI · Interaction · Visual Design"}
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* =====================================================
            BOTTOM NAVIGATION
            ===================================================== */}

        <div className={styles.bottomNav}>
          <Link
            href="/"
            className={styles.backBtn}
          >
            ← BACK TO INDEX
          </Link>
        </div>
    </div>
  );
}