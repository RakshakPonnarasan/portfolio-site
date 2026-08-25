"use client";

import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { projects } from "@/data/projects";

const BEHANCE_URL =
  "https://www.behance.net/gallery/251185831/FrameHouse-Creator-Studio-Booking-Platform";

/* =========================================================
   IMAGE SYSTEM
   ========================================================= */

const imageStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  objectFit: "contain",
  objectPosition: "center",
  verticalAlign: "middle",
  borderRadius: "18px",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
};

const imageFrameStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  display: "block",
  overflow: "hidden",
  boxSizing: "border-box",
  marginTop: "40px",
  padding: 0,
  lineHeight: 0,
};

const imageGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "24px",
  width: "100%",
  maxWidth: "100%",
  marginTop: "40px",
  alignItems: "start",
  justifyItems: "stretch",
  boxSizing: "border-box",
};

const gridImageWrapperStyle: React.CSSProperties = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  lineHeight: 0,
};

/* =========================================================
   SINGLE IMAGE
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
        maxWidth: "100%",
        margin: "40px 0 0",
        padding: 0,
        overflow: "visible",
        boxSizing: "border-box",
      }}
    >
      <div style={imageFrameStyle}>
        <img
  src={src}
  alt={alt}
  style={imageStyle}
  loading="eager"
  decoding="async"
  draggable={false}
/>
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: "12px",
            fontSize: "11px",
            lineHeight: 1.5,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* =========================================================
   IMAGE GRID
   ========================================================= */

function VisualGrid({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) {
  return (
    <div style={imageGridStyle}>
      {images.map((image) => (
        <div
          key={image.src}
          style={gridImageWrapperStyle}
        >
          <img
  src={image.src}
  alt={image.alt}
  style={imageStyle}
  loading="eager"
  decoding="async"
  draggable={false}
/>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   FRAMEHOUSE PAGE
   ========================================================= */

export default function FrameHousePage() {
  const project = projects.find(
    (item) => item.id === "framehouse"
  );

  if (!project) {
    throw new Error("FrameHouse project data not found.");
  }

  const sections = [
    /* =========================================================
       01 — OVERVIEW
       ========================================================= */
    {
      title: "Overview",
      content: (
        <>
          <div
            style={{
              maxWidth: "820px",
              marginBottom: "36px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(20px, 2.4vw, 30px)",
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              A creator-first platform designed to make discovering,
              comparing, and booking professional studios simpler,
              clearer, and more trustworthy.
            </p>
          </div>

          <p>
            FrameHouse helps creators find production studios for
            podcasts, video production, photography, and livestreaming.
          </p>

          <p>
            Instead of relying on scattered sources such as Instagram,
            WhatsApp groups, recommendations, and personal contacts,
            FrameHouse brings discovery, recommendations, comparison,
            and booking into one connected experience.
          </p>

          <Visual
            src="/projects/framehouse/hero.png"
            alt="FrameHouse creator studio discovery and booking platform"
            caption="FrameHouse — Creator Studio Discovery & Booking Platform"
          />
        </>
      ),
    },

    /* =========================================================
       02 — THE PROBLEM
       ========================================================= */
    {
      title: "The Problem",
      content: (
        <>
          <p>
            Finding the right production studio can be surprisingly
            difficult for creators.
          </p>

          <p>
            Studio information is often spread across different
            channels. Creators may need to search social media, ask
            for recommendations, message studios directly, and
            collect information manually before they can even compare
            their options.
          </p>

          <div
            className="case-study-insights"
            style={{ marginTop: "40px" }}
          >
            <div>
              <strong>01</strong>
              <h3>Fragmented discovery</h3>
              <p>
                Studio options are scattered across different
                platforms and communication channels.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Difficult comparison</h3>
              <p>
                Pricing, equipment, facilities, and availability are
                not always easy to evaluate side by side.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Unclear booking process</h3>
              <p>
                Booking may require multiple messages and calls
                before a creator can confidently commit.
              </p>
            </div>
          </div>

          <blockquote>
            How might we help creators discover, compare, and book
            studios with greater confidence?
          </blockquote>
        </>
      ),
    },

    /* =========================================================
       03 — EXPLORATION & INSIGHTS
       ========================================================= */
    {
      title: "Exploration & Insights",
      content: (
        <>
          <p>
            I explored how creators might approach the studio
            selection process and what information could influence
            their decision before booking.
          </p>

          <p>
            The exploration focused on three questions:
          </p>

          <ol>
            <li>How do creators currently find studios?</li>
            <li>What information matters before booking?</li>
            <li>
              What helps a creator feel confident about their choice?
            </li>
          </ol>

          <p
            style={{
              marginTop: "28px",
              opacity: 0.7,
            }}
          >
            The available project material does not document a formal
            participant-based research study, so these are presented
            as problem exploration and design insights rather than
            measured research findings.
          </p>

          <Visual
            src="/projects/framehouse/research.png"
            alt="FrameHouse research and problem exploration"
            caption="Research & Problem Exploration"
          />

          <div
            className="case-study-insights"
            style={{ marginTop: "48px" }}
          >
            <div>
              <strong>01</strong>
              <h3>Discovery is fragmented</h3>
              <p>
                Creators may use several channels before finding a
                suitable studio.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Price is not enough</h3>
              <p>
                Equipment, facilities, atmosphere, and availability
                can all affect studio fit.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Recommendations reduce uncertainty</h3>
              <p>
                Creators may know what they want to produce without
                knowing which studio is the right match.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Booking needs transparency</h3>
              <p>
                Important costs and booking information should be
                visible before confirmation.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       04 — DESIGN DIRECTION
       ========================================================= */
    {
      title: "Design Direction",
      content: (
        <>
          <p>
            These insights led to a simple product direction:
          </p>

          <blockquote>
            Discover the right studios, understand the differences,
            and book with confidence.
          </blockquote>

          <p>
            Instead of creating another studio catalogue, I focused
            on structuring the experience around the creator's
            decision-making journey.
          </p>

          <div className="case-study-goals">
            <div>
              <strong>01</strong>
              <h3>Simplify discovery</h3>
              <p>
                Bring professional studio options into one
                structured experience.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Guide the decision</h3>
              <p>
                Help creators define their production requirements
                before choosing a studio.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Make comparison easier</h3>
              <p>
                Surface pricing, equipment, facilities, and other
                relevant information clearly.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Make booking transparent</h3>
              <p>
                Keep important booking information visible throughout
                the reservation process.
              </p>
            </div>

            <div>
              <strong>05</strong>
              <h3>Build confidence</h3>
              <p>
                Give creators enough context to make an informed
                decision.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       05 — UNDERSTANDING THE USER
       ========================================================= */
    {
      title: "Understanding the User",
      content: (
        <>
          <p>
            FrameHouse was designed around content creators who need
            professional production spaces but may not know which
            studio best fits their requirements.
          </p>

          <p>
            A creator might be preparing a podcast, video shoot,
            photography session, or livestream. Their decision can
            depend on equipment, facilities, atmosphere, pricing,
            and availability.
          </p>

          <Visual
            src="/projects/framehouse/User%20Persona.png"
            alt="FrameHouse creator user persona"
            caption="Target creator persona"
          />

          <p
            style={{
              marginTop: "28px",
              opacity: 0.7,
            }}
          >
            The persona is used as a design representation of the
            target creator rather than a claim of a fully validated
            user profile.
          </p>
        </>
      ),
    },

    /* =========================================================
       06 — EXPERIENCE ARCHITECTURE
       ========================================================= */
    {
      title: "Experience Architecture",
      content: (
        <>
          <p>
            The product structure was organized around one continuous
            journey: moving from an uncertain studio search toward a
            confident booking decision.
          </p>

          <Visual
            src="/projects/framehouse/User%20Flow.png"
            alt="FrameHouse user flow from discovery to booking"
            caption="Core creator journey"
          />

          <blockquote>
            Discover → Define requirements → Get recommendations →
            Compare → Review studio → Book → Pay → Confirm
          </blockquote>

          <p>
            The Setup Builder acts as the key entry point because it
            allows creators to describe what they need before asking
            them to choose a specific studio.
          </p>
        </>
      ),
    },

    /* =========================================================
       07 — WIREFRAMES
       ========================================================= */
    {
      title: "Wireframes",
      content: (
        <>
          <p>
            Early wireframes were used to structure the core
            experience before moving into the visual design.
          </p>

          <p>
            The focus was on organizing discovery, setup,
            recommendations, studio details, and booking into a
            clear end-to-end flow.
          </p>

          <Visual
            src="/projects/framehouse/wireframes.png"
            alt="FrameHouse wireframes showing the early product structure"
            caption="Early wireframes — core product structure"
          />
        </>
      ),
    },

    /* =========================================================
       08 — SETUP BUILDER
       ========================================================= */
    {
      title: "The Setup Builder",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              lineHeight: 1.4,
            }}
          >
            Instead of asking creators to browse a large catalogue
            and figure everything out themselves, FrameHouse first
            helps them define what they actually need.
          </p>

          <p>
            The guided flow considers factors such as content type,
            equipment requirements, and production setup before
            leading the creator toward suitable recommendations.
          </p>

          <p>
            This was one of the central product decisions in the
            project because it changes the experience from passive
            browsing into a more guided decision-making process.
          </p>

          <VisualGrid
            images={[
              {
                src: "/projects/framehouse/Setup%20Builder%201.png",
                alt: "FrameHouse Setup Builder step 1",
              },
              {
                src: "/projects/framehouse/Setup%20Builder%202.png",
                alt: "FrameHouse Setup Builder step 2",
              },
              {
                src: "/projects/framehouse/Setup%20Builder%203.png",
                alt: "FrameHouse Setup Builder step 3",
              },
              {
                src: "/projects/framehouse/Setup%20Builder%204.png",
                alt: "FrameHouse Setup Builder step 4",
              },
              {
                src: "/projects/framehouse/Setup%20Builder%205.png",
                alt: "FrameHouse Setup Builder step 5",
              },
            ]}
          />
        </>
      ),
    },

    /* =========================================================
       09 — RECOMMENDATIONS & COMPARISON
       ========================================================= */
    {
      title: "Recommendations & Comparison",
      content: (
        <>
          <p>
            Once the creator has defined their requirements,
            FrameHouse surfaces studio options that can be evaluated
            against those needs.
          </p>

          <p>
            Comparison was treated as part of the core decision
            journey. Instead of forcing creators to open multiple
            sources, relevant information can be understood in one
            place.
          </p>

          <Visual
            src="/projects/framehouse/Recommendation.png"
            alt="FrameHouse studio recommendation experience"
            caption="Personalized studio recommendations"
          />

          <p>
            The goal was not to overwhelm creators with more choices.
            It was to make the differences between relevant options
            easier to understand.
          </p>
        </>
      ),
    },

    /* =========================================================
       10 — STUDIO DETAILS & BOOKING
       ========================================================= */
    {
      title: "Studio Details & Booking",
      content: (
        <>
          <p>
            After narrowing down the options, the studio detail
            experience brings the most important information together
            before the creator commits to a booking.
          </p>

          <p>
            Facilities, equipment, pricing, and relevant booking
            information are presented together so the creator can
            make a more informed decision.
          </p>

          <Visual
            src="/projects/framehouse/Studio%20Details.png"
            alt="FrameHouse studio details page"
            caption="Studio details and booking information"
          />

          <p>
            The booking experience then continues through date
            selection, review, payment, and confirmation without
            requiring the creator to move between disconnected
            communication channels.
          </p>

          <VisualGrid
            images={[
              {
                src: "/projects/framehouse/Complete%20booking.png",
                alt: "FrameHouse booking experience",
              },
              {
                src: "/projects/framehouse/Confirmation%20Page.png",
                alt: "FrameHouse booking confirmation",
              },
            ]}
          />
        </>
      ),
    },

    /* =========================================================
       11 — DESIGN SYSTEM
       ========================================================= */
    {
      title: "Design System",
      content: (
        <>
          <p>
            A reusable design system was created to keep the
            FrameHouse experience visually consistent across
            discovery, recommendations, studio details, comparison,
            and booking.
          </p>

          <p>
            The system brought recurring interface patterns together
            so individual screens felt like parts of the same product
            rather than separate designs.
          </p>

          <Visual
            src="/projects/framehouse/Design%20System.png"
            alt="FrameHouse design system"
            caption="FrameHouse design system"
          />

          <div className="case-study-goals">
            <div>
              <strong>01</strong>
              <h3>Typography</h3>
              <p>Clear hierarchy across product surfaces.</p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Components</h3>
              <p>
                Reusable buttons, cards, forms, and interface
                patterns.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Navigation</h3>
              <p>
                Consistent movement through the product journey.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>States</h3>
              <p>Clear booking and interaction states.</p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       12 — FINAL EXPERIENCE
       ========================================================= */
    {
      title: "Final Experience",
      dark: true,
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              lineHeight: 1.4,
            }}
          >
            The final interface brings the product strategy together
            as one connected creator journey.
          </p>

          <p>
            Each major stage of the experience is designed around
            helping the creator move from discovery to decision and
            finally to booking.
          </p>

          <VisualGrid
            images={[
              {
                src: "/projects/framehouse/Home.png",
                alt: "FrameHouse home and discovery experience",
              },
              {
                src: "/projects/framehouse/Explore%20Studio.png",
                alt: "FrameHouse explore studio experience",
              },
              {
                src: "/projects/framehouse/Recommendation.png",
                alt: "FrameHouse recommendation experience",
              },
              {
                src: "/projects/framehouse/Studio%20Details.png",
                alt: "FrameHouse studio details",
              },
            ]}
          />

          <h3>Discover</h3>

          <p>
            Creators can explore studios and begin their discovery
            process from a structured starting point.
          </p>

          <h3>Define & Recommend</h3>

          <p>
            The Setup Builder helps creators define what they need
            before presenting relevant studio options.
          </p>

          <h3>Compare & Evaluate</h3>

          <p>
            Studio information is organized to make differences in
            pricing, equipment, and facilities easier to understand.
          </p>

          <h3>Book & Confirm</h3>

          <p>
            The booking experience carries the creator from date
            selection through payment and confirmation.
          </p>
        </>
      ),
    },

    /* =========================================================
       13 — OUTCOME
       ========================================================= */
    {
      title: "Outcome",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              lineHeight: 1.4,
            }}
          >
            FrameHouse brings the major parts of studio discovery and
            booking into one connected experience.
          </p>

          <div className="case-study-insights">
            <div>
              <strong>01</strong>
              <h3>Centralized discovery</h3>
              <p>
                Creators can explore professional studios from one
                platform.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Personalized recommendations</h3>
              <p>
                The Setup Builder connects creator requirements with
                suitable studio options.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Clear comparison</h3>
              <p>
                Pricing, equipment, and facilities can be evaluated
                more easily.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Transparent booking</h3>
              <p>
                Important information remains visible before
                confirmation.
              </p>
            </div>

            <div>
              <strong>05</strong>
              <h3>Connected experience</h3>
              <p>
                Discovery, recommendation, booking, and management
                are brought into one product journey.
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: "32px",
              opacity: 0.65,
            }}
          >
            These describe the capabilities of the designed product
            experience. No measured conversion, time-saving, or
            business-impact claims are made because the project
            material does not provide those measurements.
          </p>
        </>
      ),
    },

    /* =========================================================
       14 — REFLECTION
       ========================================================= */
    {
      title: "Reflection",
      content: (
        <>
          <p>
            FrameHouse taught me that choosing a studio is not only
            about price or location. Equipment, atmosphere,
            availability, and trust can also shape the decision.
          </p>

          <p>
            The Setup Builder helped me explore how a complex decision
            can be simplified through guided interactions, while
            personalized recommendations created a more focused
            discovery experience.
          </p>

          <p>
            The project strengthened my skills in product thinking,
            user flows, design systems, and designing an end-to-end
            experience from discovery through booking.
          </p>

          <blockquote>
            Good product design is not just about presenting more
            information. It is about structuring that information so
            users can make better decisions with confidence.
          </blockquote>
        </>
      ),
    },

    /* =========================================================
       15 — BEHANCE
       ========================================================= */
    {
      title: "View the Full Case Study",
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
            See the complete FrameHouse story.
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
            Explore the complete research, product thinking, Setup
            Builder, recommendations, booking experience, design
            system, and final UI on Behance.
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
            Research · Product Thinking · Setup Builder · UI ·
            Prototype
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
        timeline: "June 8 – June 17, 2026",
        tools: "Figma / Notion",
        type: "Web Platform — Creator Studio Discovery & Booking",
      }}
    />
  );
}