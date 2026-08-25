"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import { projects } from "@/data/projects";

import styles from "./Sidebar.module.css";

/* =========================================================
   MAIN NAVIGATION
   ========================================================= */

const navItems = [
  {
    href: "/",
    label: "WORK",
    note: "A selection of recent work",
    icon: "work",
  },
  {
    href: "/play",
    label: "PLAY",
    note: "Making things for fun",
    icon: "play",
  },
  {
    href: "/about",
    label: "ABOUT",
    note: "Let's get to know each other",
    icon: "about",
  },
];

/* =========================================================
   SELECTED CASE STUDIES
   ========================================================= */

const selectedCaseStudySlugs = [
  "payano",
  "framehouse",
  "buildtrack",
  "syntri",
];

/* =========================================================
   SIDEBAR ICON ASSETS
   ========================================================= */

const navIconImages = {
  work: "/icons/icon%20A.jpeg",
  play: "/icons/icon%20B.jpeg",
  about: "/icons/icon%20C.png",
};

const projectIconImages: Record<string, string> = {
  payano: "/icons/thumbnail%20D.png",
  framehouse: "/icons/thumbnail%20E.png",
  buildtrack: "/icons/thumbnail%20F.png",
  syntri: "/icons/thumbnail%20G.png",
};

/* =========================================================
   EXISTING SVG ICONS
   Kept intentionally — not removed.
   ========================================================= */

function WorkIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={styles.iconSvg}
    >
      <rect x="7" y="7" width="14" height="14" />
      <rect x="27" y="7" width="14" height="14" />
      <rect x="7" y="27" width="14" height="14" />
      <rect x="27" y="27" width="14" height="14" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={styles.iconSvg}
    >
      <path d="M24 5c-3 8-7 11-15 13 8 2 12 5 15 13 3-8 7-11 15-13-8-2-12-5-15-13Z" />
      <path d="M11 31c4 1 6 3 7 7 1-4 3-6 7-7-4-1-6-3-7-7-1 4-3 6-7 7Z" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={styles.iconSvg}
    >
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="20" r="5" />
      <path d="M14 36c2-6 6-9 10-9s8 3 10 9" />
    </svg>
  );
}

/* =========================================================
   NAV ICON
   Uses supplied image assets.
   ========================================================= */

function NavIcon({ type }: { type: string }) {
  const src =
    navIconImages[type as keyof typeof navIconImages];

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={styles.navIconImage}
    />
  );
}

/* =========================================================
   SIDEBAR
   ========================================================= */

export default function Sidebar() {
  const pathname = usePathname();

  const { theme, toggle } = useTheme();

  const isWork =
    pathname === "/" ||
    pathname === "/work" ||
    projects.some(
      (project) =>
        pathname === `/${project.slug}`,
    );

  const isAbout =
    pathname === "/about";

  const isPlay =
    pathname === "/play";

  const selectedCaseStudies =
    projects.filter((project) =>
      selectedCaseStudySlugs.includes(
        project.slug,
      ),
    );

  return (
    <>
      <aside
        className={styles.sidebar}
        aria-label="Primary navigation"
      >
        <div className={styles.inner}>

          {/* =====================================================
              IDENTITY
             ===================================================== */}

          <Link
            href="/"
            className={styles.identity}
          >
            <span className={styles.name}>
              RAKSHAK M P
            </span>

            <span className={styles.role}>
              UI/UX DESIGNER
            </span>
          </Link>


          {/* =====================================================
              INTRO
             ===================================================== */}

          <p className={styles.intro}>
            I design clear, useful digital products
            and interfaces with a strong focus on
            visual design.
          </p>


          {/* =====================================================
              MAIN NAVIGATION
             ===================================================== */}

          <nav
            className={styles.nav}
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const active =
                item.label === "WORK"
                  ? isWork
                  : item.label === "PLAY"
                    ? isPlay
                    : isAbout;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${
                    active
                      ? styles.active
                      : ""
                  }`}
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                >
                  <span
                    className={
                      styles.navIcon
                    }
                  >
                    <NavIcon
                      type={item.icon}
                    />
                  </span>


                  <span
                    className={
                      styles.navText
                    }
                  >
                    <span
                      className={
                        styles.navLabel
                      }
                    >
                      {item.label}
                    </span>

                    <span
                      className={
                        styles.navNote
                      }
                    >
                      {item.note}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>


          {/* =====================================================
              SELECTED CASE STUDIES
             ===================================================== */}

          <div className={styles.projects}>

  <span
    className={
      styles.projectsLabel
    }
  >
    SELECTED CASE STUDIES
  </span>

  <div
    className={
      styles.projectList
    }
  >
    {selectedCaseStudies.map(
      (project) => {
        const active =
          pathname ===
          `/${project.slug}`;

        return (
          <Link
            key={project.id}
            href={`/${project.slug}`}
            className={`${styles.projectLink} ${
              active
                ? styles.projectActive
                : ""
            }`}
            aria-current={
              active
                ? "page"
                : undefined
            }
          >
            {/* =================================================
                SINGLE PROJECT THUMBNAIL
               ================================================= */}

            <span
              className={
                styles.projectThumb
              }
            >
              <img
                src={
                  projectIconImages[
                    project.slug
                  ]
                }
                alt=""
                aria-hidden="true"
                className={
                  styles.projectThumbImage
                }
              />
            </span>

            {/* =================================================
                PROJECT INFORMATION
               ================================================= */}

            <span
              className={
                styles.projectMeta
              }
            >
              <span
                className={
                  styles.projectName
                }
              >
                {project.title}
              </span>

              <span
                className={
                  styles.projectDescription
                }
              >
                {project.description}
              </span>
            </span>

          </Link>
        );
      },
    )}
  </div>
</div>


          {/* =====================================================
              SIDEBAR FOOTER
              ONLY THEME — NO EMAIL / LINKEDIN
             ===================================================== */}

          <div className={styles.bottom}>

            <button
              type="button"
              className={styles.theme}
              onClick={toggle}
              aria-label="Toggle color theme"
            >
              <span
                className={
                  theme === "dark"
                    ? styles.themeActive
                    : ""
                }
              >
                DARK
              </span>

              <span
                className={
                  styles.themeSlash
                }
              >
                /
              </span>

              <span
                className={
                  theme === "light"
                    ? styles.themeActive
                    : ""
                }
              >
                LIGHT
              </span>
            </button>

          </div>
        </div>
      </aside>


      {/* =========================================================
          MOBILE HEADER
         ========================================================= */}

      <header
        className={styles.mobileBar}
      >
        <Link
          href="/"
          className={styles.mobileName}
        >
          RAKSHAK M P
        </Link>


        <div
          className={
            styles.mobileActions
          }
        >
          <button
            type="button"
            onClick={toggle}
            className={
              styles.mobileTheme
            }
            aria-label="Toggle color theme"
          >
            {theme === "dark"
              ? "LIGHT"
              : "DARK"}
          </button>


          <Link
            href={
              isWork
                ? "/about"
                : "/"
            }
            className={
              styles.mobileMenuLink
            }
          >
            {isWork
              ? "ABOUT"
              : "WORK"}
          </Link>
        </div>
      </header>
    </>
  );
}