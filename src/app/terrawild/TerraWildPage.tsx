"use client";

import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { projects } from "@/data/projects";

const BEHANCE_URL =
  "https://www.behance.net/gallery/250077487/TerraWild-Visitor-Experience-Mobile-App";

/* =========================================================
   TERRAWILD IMAGE
   Same approach as Syntri / BuildTrack.
   No CSS module.
   No ImageBlock.
   No fixed height.
   ========================================================= */

function Visual({
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
        width: "100%",
        margin: "48px 0 0",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "var(--bg-raised)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: "12px",
            fontSize: "12px",
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

function VisualGrid({
  images,
}: {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
        marginTop: "48px",
      }}
    >
      {images.map((image) => (
        <figure
          key={image.src}
          style={{
            margin: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              background: "var(--bg-raised)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
            />
          </div>

          {image.caption && (
            <figcaption
              style={{
                marginTop: "12px",
                fontSize: "12px",
                lineHeight: 1.5,
                opacity: 0.6,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default function TerraWildPage() {
  const project = projects.find(
    (item) => item.id === "terrawild"
  );

  if (!project) {
    throw new Error("TerraWild project data not found.");
  }

  const sections = [
    /* =========================================================
       01 — OVERVIEW
       ========================================================= */
    {
      title: "Overview",
      content: (
        <>

          <p>
            TerraWild is a visitor-experience mobile app concept
            designed for zoos and wildlife parks. It acts as a
            lightweight digital guide, helping visitors explore
            exhibits, understand what is nearby, navigate the park,
            and keep track of live activities.
          </p>

          <p>
            The experience brings navigation, discovery, schedules,
            alerts, and recommendations together so visitors can
            spend less effort figuring out where to go and more time
            enjoying the park.
          </p>

          <div className="case-study-meta">
            <p>
              <strong>Project:</strong> TerraWild — Visitor
              Experience Mobile App
            </p>

            <p>
              <strong>Date:</strong> March 2026
            </p>

            <p>
              <strong>Role:</strong> UI/UX Designer
            </p>

            <p>
              <strong>Platform:</strong> Mobile App
            </p>

            <p>
              <strong>Tools:</strong> Figma
            </p>
          </div>

          <Visual
            src="/projects/terrawild/hero.png"
            alt="TerraWild visitor experience mobile app"
            caption="TerraWild — Visitor Experience Mobile App"
          />
        </>
      ),
    },

    /* =========================================================
       02 — THE CHALLENGE
       ========================================================= */
    {
      title: "The Challenge",
      content: (
        <>
          <p>
            A visit to a large wildlife park can quickly become
            difficult to navigate. Visitors may not know what is
            nearby, miss scheduled activities, or spend time
            deciding where to go next.
          </p>

          <p>
            TerraWild was designed around the idea of giving
            visitors useful information at the right moment without
            making the experience feel complicated or overwhelming.
          </p>

          <blockquote>
            How might a mobile experience help visitors navigate,
            discover, and plan their visit without interrupting the
            experience itself?
          </blockquote>

          <div
            className="case-study-insights"
            style={{ marginTop: "40px" }}
          >
            <div>
              <strong>01</strong>
              <h3>Navigation</h3>
              <p>
                Help visitors understand where they are and where
                important exhibits or activities are located.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Discovery</h3>
              <p>
                Make nearby animals and attractions easier to
                discover instead of requiring visitors to search
                manually.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Activities</h3>
              <p>
                Surface schedules and live activities so visitors
                have better awareness of what is happening around
                them.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Decision Fatigue</h3>
              <p>
                Reduce the effort required to decide what to see and
                where to go next.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       03 — RESEARCH & STRUCTURE
       ========================================================= */
    {
      title: "Research & Structure",
      content: (
        <>
          <p>
            I approached TerraWild as a mobile product experience
            rather than a collection of individual screens. The
            work focused on understanding the visitor journey first
            and then translating it into a clear interface.
          </p>

          <div
            className="case-study-insights"
            style={{ marginTop: "40px" }}
          >
            <div>
              <strong>01</strong>
              <h3>Problem Definition</h3>
              <p>
                Defined the main visitor-experience problems around
                navigation, missed activities, nearby discovery, and
                decision fatigue.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>User Persona</h3>
              <p>
                Used a visitor persona to frame the experience
                around the needs and expectations of someone
                exploring a wildlife park.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>User Flow</h3>
              <p>
                Mapped the visitor journey to understand how
                discovery, navigation, activities, and
                recommendations should connect.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Information Architecture</h3>
              <p>
                Structured the main product areas so important
                visitor information could be accessed without
                unnecessary complexity.
              </p>
            </div>
          </div>

          <Visual
            src="/projects/terrawild/User Flow.png"
            alt="TerraWild user flow"
            caption="User Flow — Mapping the visitor journey"
          />

          <Visual
            src="/projects/terrawild/Information Architecture.png"
            alt="TerraWild information architecture"
            caption="Information Architecture — Structuring the experience"
          />

          <Visual
            src="/projects/terrawild/MICHAEL HORVATH.png"
            alt="TerraWild user persona"
            caption="User Persona — Michael Horvath"
          />
        </>
      ),
    },

    /* =========================================================
   04 — WIREFRAMES
   ========================================================= */
{
  title: "Wireframes",
  content: (
    <>
      <p>
        Before moving into the visual design, I explored the
        structure and hierarchy of the main screens through
        wireframes.
      </p>

      <p>
        The goal was to establish a simple navigation model and
        make sure important visitor information could be
        accessed without unnecessary interaction.
      </p>

      <Visual
        src="/projects/terrawild/wireframes.png"
        alt="TerraWild wireframes"
        caption="Wireframes - Exploring structure and hierarchy"
      />
    </>
  ),
},

    /* =========================================================
       05 — THE PRODUCT
       ========================================================= */
    {
      title: "The Product",
      dark: true,
      content: (
        <>
          <p>
            TerraWild brings the main parts of a wildlife-park visit
            into one connected mobile experience.
          </p>

          <div
            className="case-study-insights"
            style={{ marginTop: "40px" }}
          >
            <div>
              <strong>01</strong>
              <h3>Interactive Map</h3>
              <p>
                Gives visitors a visual way to understand the park
                and navigate toward exhibits and attractions.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Nearby Discovery</h3>
              <p>
                Highlights nearby animals and attractions so
                visitors can discover experiences without planning
                every stop in advance.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Schedules & Alerts</h3>
              <p>
                Keeps important activities and timely information
                visible so visitors can stay aware of what is
                happening around them.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Recommendations</h3>
              <p>
                Helps visitors decide what to explore next by
                surfacing relevant experiences instead of leaving
                them with an empty choice space.
              </p>
            </div>

            <div>
              <strong>05</strong>
              <h3>Visitor Profile</h3>
              <p>
                Provides a personal area for managing the visitor
                experience and keeping relevant information
                accessible.
              </p>
            </div>

            <div>
              <strong>06</strong>
              <h3>Context-Aware Experience</h3>
              <p>
                Presents useful information in context rather than
                forcing visitors to constantly search for it.
              </p>
            </div>
          </div>

          <VisualGrid
            images={[
              {
                src: "/projects/terrawild/1.png",
                alt: "TerraWild mobile interface screens",
              },
              {
                src: "/projects/terrawild/2.png",
                alt: "TerraWild mobile experience screens",
              },
            ]}
          />
        </>
      ),
    },

    /* =========================================================
       06 — DESIGN DECISIONS
       ========================================================= */
    {
      title: "Design Decisions",
      content: (
        <>
          <p>
            The strongest design decisions were focused on keeping
            the experience useful while maintaining a simple and
            approachable mobile interface.
          </p>

          <div
            className="case-study-insights"
            style={{ marginTop: "40px" }}
          >
            <div>
              <strong>01</strong>
              <h3>Map as a Primary Tool</h3>
              <p>
                Navigation is central to the park experience, so
                the map acts as an important part of the product
                rather than an isolated utility.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Nearby Information</h3>
              <p>
                Nearby discovery reduces the need for visitors to
                repeatedly search through the entire park to find
                something interesting.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Clear Activity Visibility</h3>
              <p>
                Schedules and alerts are surfaced prominently
                because time-sensitive activities can easily be
                missed during a visit.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Nature-Inspired Visual Language</h3>
              <p>
                The interface uses a visual direction inspired by
                nature while keeping hierarchy and readability
                strong enough for practical use outdoors.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       07 — OUTCOME
       ========================================================= */
    {
      title: "Outcome",
      content: (
        <>
          <p>
            TerraWild brings the visitor journey together into a
            focused mobile experience for exploring wildlife parks
            and zoos.
          </p>

          <ul>
            <li>
              <strong>Navigation becomes easier</strong> — visitors
              can use the interactive map to understand the park
              and move between experiences.
            </li>

            <li>
              <strong>Discovery becomes contextual</strong> —
              nearby animals and attractions can be surfaced
              without requiring extensive searching.
            </li>

            <li>
              <strong>Activities stay visible</strong> — schedules
              and alerts help visitors remain aware of live
              experiences.
            </li>

            <li>
              <strong>Planning requires less effort</strong> —
              recommendations help reduce the number of decisions
              visitors need to make themselves.
            </li>

            <li>
              <strong>The experience feels connected</strong> —
              maps, discovery, schedules, alerts, recommendations,
              and profile features work as parts of one visitor
              journey.
            </li>
          </ul>

          <p>
            The project demonstrates my ability to structure a
            mobile experience around navigation, discovery,
            information hierarchy, interaction, and visual
            consistency while keeping the interface approachable
            for a broad visitor audience.
          </p>
        </>
      ),
    },

    /* =========================================================
       08 — FULL CASE STUDY
       ========================================================= */
    {
      title: "Explore the Full Case Study",
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
            Full Case Study
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              color: "var(--text-primary)",
            }}
          >
            See the complete TerraWild story.
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
            Explore the complete TerraWild project, including the
            problem, goals, persona, user flow, information
            architecture, wireframes, UI screens, interaction
            design, and final visual direction on Behance.
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
            View Full Case Study on Behance
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
            UX Research · User Flow · IA · Persona · Wireframes · UI
            · Interaction Design
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
        timeline: "March 2026",
        tools: "Figma",
        type: "Mobile App — Visitor Experience",
      }}
    />
  );
}