"use client";

import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

import styles from "./ArchiveHome.module.css";


type Project = (typeof projects)[number];


function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  return (
    <div className={styles.projectVisual}>
      <Image
        src={project.heroImage}
        alt={`${project.title} — ${project.category}`}
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
        className={styles.projectImage}
        priority={
          project.number === "01" ||
          project.number === "02"
        }
      />
    </div>
  );
}


function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article
      className={styles.projectCard}
    >
      <Link
        href={`/${project.slug}`}
        className={styles.projectLink}
        aria-label={`Open ${project.title} case study`}
      >
        <ProjectVisual
          project={project}
        />

        <div
          className={styles.projectInfo}
        >
          <div
            className={
              styles.projectIdentity
            }
          >
            <h2
              className={
                styles.projectTitle
              }
            >
              {project.title.toLowerCase()}
            </h2>

            <span
              className={
                styles.projectPlatform
              }
            >
              {project.platform}
            </span>
          </div>


          <p
            className={
              styles.projectDescription
            }
          >
            {project.description}
          </p>


          <span
            className={
              styles.projectYear
            }
          >
            {project.year}
          </span>
        </div>
      </Link>
    </article>
  );
}


function WorkHeader() {
  return (
    <header
      className={styles.workHeader}
    >
      <h1 id="selected-work-title">
        SELECTED WORK
      </h1>

      <span>
        {projects.length} CASE STUDIES
      </span>
    </header>
  );
}


export default function ArchiveHome() {
  return (
    <div className={styles.archive}>
      <section
        className={styles.work}
        aria-labelledby="selected-work-title"
      >
        <WorkHeader />

        <div
          className={styles.projectGrid}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </div>
  );
}