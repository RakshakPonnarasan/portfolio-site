"use client";

import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { projects } from "@/data/projects";

const project = projects.find(
  (item) => item.id === "crimson-feast"
)!;

const BEHANCE_URL =
  "https://www.behance.net/gallery/250077273/Crimson-Feast-Restaurant-Landing-Page-Design";

/* =========================================================
   IMAGE COMPONENT
   Full image visibility — no cropping
   ========================================================= */

function ProjectImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure
      style={{
        margin: "48px 0 0",
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          overflow: "hidden",
          background: "var(--bg)",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: "12px",
            fontSize: "11px",
            lineHeight: 1.5,
            opacity: 0.6,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* =========================================================
   CRIMSON FEAST
   UI / Visual Exploration
   ========================================================= */

export default function CrimsonFeastPage() {
  const sections = [
    /* =====================================================
       01 — OVERVIEW
       ===================================================== */

    {
      title: "Overview",
      content: (
        <>
          <p>
            Crimson Feast is a restaurant landing page concept I created
            while exploring visual design and UI composition in Figma.
          </p>

          <p>
            The project was mainly an opportunity to experiment with how
            typography, food imagery, colour, spacing, and layout can come
            together to create a strong visual identity for a restaurant
            website.
          </p>

          <div className="case-study-meta">
            <p>
              <strong>Role:</strong> UI Designer
            </p>

            <p>
              <strong>Timeline:</strong> May 2026
            </p>

            <p>
              <strong>Platform:</strong> Web
            </p>

            <p>
              <strong>Tools:</strong> Figma
            </p>

            <p>
              <strong>Type:</strong> UI / Visual Exploration
            </p>
          </div>

          <ProjectImage
            src="/projects/crimson-feast/hero.png"
            alt="Crimson Feast restaurant landing page design"
            caption="Crimson Feast — Landing Page Exploration"
          />
        </>
      ),
    },

    /* =====================================================
       02 — ABOUT THE EXPLORATION
       ===================================================== */

    {
      title: "The Exploration",
      content: (
        <>
          <p>
            I approached Crimson Feast as a visual UI exercise rather than
            a research-driven product case study.
          </p>

          <p>
            The goal was to explore how a restaurant brand could be expressed
            through a landing page while keeping the interface structured,
            readable, and visually engaging.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Visual Direction</h3>
              <p>
                Exploring a warm food-focused visual style that gives the
                restaurant a distinctive personality.
              </p>
            </div>

            <div>
              <h3>Typography</h3>
              <p>
                Experimenting with type scale, hierarchy, and contrast to
                create clear entry points throughout the page.
              </p>
            </div>

            <div>
              <h3>Composition</h3>
              <p>
                Practicing how images, text, cards, and whitespace can work
                together within one landing page.
              </p>
            </div>

            <div>
              <h3>UI Structure</h3>
              <p>
                Organizing restaurant content into sections that feel easy
                to scan and visually connected.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =====================================================
       03 — VISUAL EXPLORATION
       ===================================================== */

    {
      title: "Visual Exploration",
      content: (
        <>
          <p>
            The main landing page became the starting point for exploring
            different visual relationships between imagery, content, and
            interface elements.
          </p>

          <p>
            I experimented with scale, spacing, alignment, cards, and
            supporting content to understand how each element contributed to
            the overall composition.
          </p>

          <ProjectImage
            src="/projects/crimson-feast/1.jpg"
            alt="Crimson Feast visual exploration"
            caption="Visual composition and content exploration"
          />

          <p
            style={{
              marginTop: "32px",
            }}
          >
            This exploration helped me understand how supporting sections
            could extend the visual language established by the main
            landing-page design.
          </p>
        </>
      ),
    },

    /* =====================================================
       04 — UI EXPLORATION
       ===================================================== */

    {
      title: "UI Exploration",
      content: (
        <>
          <p>
            After establishing the main visual direction, I explored
            additional interface patterns that could belong to the same
            restaurant experience.
          </p>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Content Cards</h3>
              <p>
                Practiced using card-based structures to organize supporting
                restaurant information.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Information Hierarchy</h3>
              <p>
                Explored different heading sizes and spacing relationships
                to guide attention through the interface.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>CTA Placement</h3>
              <p>
                Practiced positioning important actions so they remain
                noticeable without dominating the page.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Visual Consistency</h3>
              <p>
                Kept typography, spacing, imagery, and colour connected
                across different sections.
              </p>
            </div>
          </div>

          <ProjectImage
            src="/projects/crimson-feast/2.jpg"
            alt="Crimson Feast interface exploration"
            caption="Interface and component exploration"
          />
        </>
      ),
    },

    /* =====================================================
       05 — DESIGN DETAILS
       ===================================================== */

    {
      title: "Design Details",
      dark: true,
      content: (
        <>
          <p>
            The project gave me an opportunity to focus on the small visual
            decisions that make a landing page feel cohesive.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Typography</h3>
              <p>
                Used different type sizes and weights to separate headings,
                supporting information, and smaller details.
              </p>
            </div>

            <div>
              <h3>Colour</h3>
              <p>
                Explored warm tones that support the food and restaurant
                context of the design.
              </p>
            </div>

            <div>
              <h3>Imagery</h3>
              <p>
                Used food imagery as an important part of the visual
                storytelling.
              </p>
            </div>

            <div>
              <h3>Spacing</h3>
              <p>
                Practiced using whitespace to separate content and maintain
                a comfortable visual rhythm.
              </p>
            </div>
          </div>

          <ProjectImage
            src="/projects/crimson-feast/3.jpg"
            alt="Crimson Feast final visual exploration"
            caption="Final visual exploration"
          />
        </>
      ),
    },

    /* =====================================================
       06 — WHAT I PRACTICED
       ===================================================== */

    {
      title: "What I Practiced",
      content: (
        <>
          <p>
            Crimson Feast was primarily a hands-on UI design exercise. It
            helped me become more comfortable translating a visual idea into
            a structured interface in Figma.
          </p>

          <ul>
            <li>Restaurant landing-page design</li>
            <li>Visual hierarchy</li>
            <li>Typography and type scale</li>
            <li>Colour exploration</li>
            <li>Food-focused visual composition</li>
            <li>Content organization</li>
            <li>Spacing and alignment</li>
            <li>Image and text balance</li>
            <li>Card-based UI patterns</li>
            <li>High-fidelity Figma design</li>
          </ul>
        </>
      ),
    },

    /* =====================================================
       07 — LEARNING
       ===================================================== */

    {
      title: "Learning",
      content: (
        <>
          <h3>
            Learning to balance visual personality with structure.
          </h3>

          <p>
            One of the main things I learned from Crimson Feast was that
            visual design is not only about making a page look attractive.
            Typography, spacing, imagery, alignment, and hierarchy all need
            to support the content.
          </p>

          <p>
            This project gave me more practice working from a blank Figma
            canvas and making visual decisions independently. It also helped
            me become more comfortable experimenting with different layouts
            before settling on a final composition.
          </p>
        </>
      ),
    },

    /* =====================================================
       08 — REFLECTION
       ===================================================== */

    {
      title: "Reflection",
      dark: true,
      content: (
        <>
          <p>
            Crimson Feast was a valuable visual design exercise because it
            allowed me to focus on the fundamentals of UI composition without
            the constraints of a complex product workflow.
          </p>

          <p>
            The project strengthened my understanding of hierarchy, spacing,
            typography, imagery, and visual consistency. More importantly, it
            gave me practical experience turning a simple concept into a
            complete high-fidelity landing page.
          </p>

          <p>
            Since this was a UI exploration rather than a research-based
            product project, the main outcome was the visual design itself
            and the experience I gained while creating it.
          </p>
        </>
      ),
    },

    /* =====================================================
       09 — BEHANCE
       ===================================================== */

    {
      title: "Explore on Behance",
      content: (
        <div
          style={{
            marginTop: "24px",
            padding: "48px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, var(--bg-raised) 0%, var(--bg-subtle) 100%)",
            border: "1px solid var(--border)",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "var(--bg-subtle)",
              color: "var(--text-muted)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Visual Exploration
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              color: "var(--text-primary)",
            }}
          >
            See the complete Crimson Feast design.
          </h2>

          <p
            style={{
              maxWidth: "680px",
              marginTop: "18px",
              marginBottom: "28px",
              color: "var(--text-second)",
              lineHeight: 1.7,
            }}
          >
            Explore the complete visual presentation of Crimson Feast,
            including the restaurant landing page, visual direction,
            interface exploration, typography, imagery, and final design
            work.
          </p>

          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 22px",
              borderRadius: "10px",
              background: "var(--text-primary)",
              color: "var(--bg)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
                          }}
          >
            View Crimson Feast on Behance
            <span aria-hidden="true">↗</span>
          </a>

          <p
            style={{
              marginTop: "16px",
              marginBottom: 0,
              fontSize: "12px",
              color: "var(--text-muted)",
            }}
          >
            UI Exploration · Visual Design · Landing Page · Figma
          </p>
        </div>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      project={project}
      sections={sections}
      overview={{
        role: "UI Designer",
        timeline: "May 2026",
        tools: "Figma",
        type: "Web — Restaurant Landing Page",
      }}
    />
  );
}