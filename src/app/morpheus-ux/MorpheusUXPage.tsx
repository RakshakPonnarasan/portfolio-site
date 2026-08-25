"use client";

import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { projects } from "@/data/projects";

const project = projects.find((item) => item.id === "morpheus-ux")!;

const BEHANCE_URL =
  "https://www.behance.net/gallery/250077067/Morpheus-UX-Agency-Website-Concept";

function ProjectImage({
  src,
  alt,
  caption,
  dark = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  dark?: boolean;
}) {
  return (
    <figure
      style={{
        margin: "40px 0 0",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          borderRadius: "16px",
          background: dark ? "var(--bg)" : "var(--bg-raised)",
          border: dark
            ? "1px solid var(--border)"
            : "1px solid var(--border)",
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
            fontSize: "12px",
            lineHeight: 1.5,
            opacity: 0.55,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function MorpheusUXPage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            Morpheus UX is a fictional UI/UX agency website concept I created
            as an early visual exploration project. The main goal was to
            practice designing a complete landing page in Figma and explore
            how typography, color, spacing, and visual hierarchy could work
            together.
          </p>

          <p>
            Rather than solving a specific product problem, this project was
            focused on learning through visual experimentation and building
            confidence with Figma and interface design.
          </p>

          <div className="case-study-meta">
            <p>
              <strong>Project:</strong> Morpheus UX — Agency Website Concept
            </p>

            <p>
              <strong>Role:</strong> UI/UX Designer
            </p>

            <p>
              <strong>Platform:</strong> Web
            </p>

            <p>
              <strong>Tool:</strong> Figma
            </p>

            <p>
              <strong>Type:</strong> UI Exploration
            </p>
          </div>

          <ProjectImage
            src="/projects/morpheus-ux/hero.png"
            alt="Morpheus UX agency website concept shown on a laptop"
            caption="Morpheus UX — Agency Website Concept"
            dark
          />
        </>
      ),
    },

    {
      title: "Visual Exploration",
      dark: true,
      content: (
        <>
          <h3>
            Exploring a dark visual direction for a fictional UX agency.
          </h3>

          <p>
            I wanted to experiment with a darker interface and create a visual
            identity that felt bold and expressive. The design uses a deep
            black background with bright red and orange accents, contrasting
            typography, and strong calls to action.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Dark UI</h3>
              <p>
                Experimented with deep dark surfaces as the foundation of the
                website.
              </p>
            </div>

            <div>
              <h3>Typography</h3>
              <p>
                Explored different type styles and sizes to create stronger
                visual hierarchy.
              </p>
            </div>

            <div>
              <h3>Accent Color</h3>
              <p>
                Used red and orange accents to bring attention to important
                elements and CTAs.
              </p>
            </div>

            <div>
              <h3>Composition</h3>
              <p>
                Practiced balancing large visual elements with supporting
                content and whitespace.
              </p>
            </div>
          </div>

          <ProjectImage
            src="/projects/morpheus-ux/1.jpg"
            alt="Full Morpheus UX landing page design"
            caption="Full landing-page exploration"
            dark
          />
        </>
      ),
    },

    {
      title: "UI Exploration",
      content: (
        <>
          <p>
            After exploring the main landing page, I experimented with
            different interface sections and supporting screens. This helped
            me understand how the same visual direction could be applied to
            different UI patterns.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Landing Page</h3>
              <p>
                Practiced creating a clear hero section and organizing
                information into structured sections.
              </p>
            </div>

            <div>
              <h3>Content Cards</h3>
              <p>
                Explored cards for mission statements, features, and
                testimonials.
              </p>
            </div>

            <div>
              <h3>CTA Design</h3>
              <p>
                Practiced making important actions visually prominent without
                overwhelming the page.
              </p>
            </div>

            <div>
              <h3>Form UI</h3>
              <p>
                Extended the visual direction into basic login and signup
                interfaces.
              </p>
            </div>
          </div>

          <ProjectImage
            src="/projects/morpheus-ux/2.jpg"
            alt="Morpheus UX login and welcome screen exploration"
            caption="Login interface exploration"
          />

          <ProjectImage
            src="/projects/morpheus-ux/3.jpg"
            alt="Morpheus UX signup and authentication interface exploration"
            caption="Signup interface exploration"
          />
        </>
      ),
    },

    {
      title: "What I Practiced",
      dark: true,
      content: (
        <>
          <p>
            Morpheus UX was mainly a practice project where I explored the
            fundamentals of visual interface design and became more familiar
            with Figma.
          </p>

          <ul>
            <li>Working with Figma to create web interfaces</li>
            <li>Hero section hierarchy</li>
            <li>Dark UI composition</li>
            <li>Typography and scale</li>
            <li>CTA emphasis and placement</li>
            <li>Section spacing and alignment</li>
            <li>Card-based content layouts</li>
            <li>Basic login and signup form UI</li>
            <li>Maintaining consistency across different screens</li>
          </ul>
        </>
      ),
    },

    {
      title: "Final Exploration",
      content: (
        <>
          <h3>
            A first step into designing complete web experiences.
          </h3>

          <p>
            The final result brought the different experiments together into a
            fictional agency website. It gave me an opportunity to practice
            designing beyond individual screens and think about how a complete
            page flows from the hero section through supporting content and
            calls to action.
          </p>

          <ProjectImage
            src="/projects/morpheus-ux/1.jpg"
            alt="Complete Morpheus UX agency website landing page"
            caption="Final landing-page exploration"
            dark
          />
        </>
      ),
    },

    {
      title: "Reflection",
      dark: true,
      content: (
        <>
          <h3>
            Learning through visual experimentation.
          </h3>

          <p>
            Morpheus UX was one of my early projects while learning UI/UX
            design. It helped me become more comfortable with Figma and gave
            me practical experience with typography, spacing, color,
            hierarchy, and page composition.
          </p>

          <p>
            The project was not based on user research or a validated product
            problem. Instead, it was an opportunity to experiment, make
            design decisions, and understand how different visual elements
            come together to form a complete interface.
          </p>
        </>
      ),
    },

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
              color: "var(--text-primary)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Behance
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              color: "var(--text-primary)",
            }}
          >
            See the original exploration.
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
            Explore the original Morpheus UX concept on Behance, including
            the landing page, visual direction, typography experiments,
            content sections, and authentication screens.
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
            View on Behance
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
            Figma · UI/UX · Web Design · Visual Exploration
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
        role: "UI/UX Designer",
        timeline: "2026",
        tools: "Figma",
        type: "Web — UI Exploration",
      }}
    />
  );
}