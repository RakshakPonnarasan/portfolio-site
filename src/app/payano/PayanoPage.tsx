"use client";

import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { projects } from "@/data/projects";

const project = projects.find((item) => item.id === "payano")!;

const BEHANCE_URL =
  "https://www.behance.net/gallery/254496375/Payano-Student-Ride-Sharing-Mobile-App";

const imageStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: "18px",
};

const fullVisualStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "40px",
  overflow: "hidden",
  borderRadius: "18px",
};

const captionStyle: React.CSSProperties = {
  marginTop: "12px",
  fontSize: "11px",
  opacity: 0.5,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

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
    <figure style={{ margin: 0, marginTop: "40px" }}>
      <div style={fullVisualStyle}>
        <img src={src} alt={alt} style={imageStyle} />
      </div>

      {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
    </figure>
  );
}

function TwoColumnVisuals({
  first,
  second,
}: {
  first: { src: string; alt: string };
  second: { src: string; alt: string };
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      <img src={first.src} alt={first.alt} style={imageStyle} />
      <img src={second.src} alt={second.alt} style={imageStyle} />
    </div>
  );
}

export default function PayanoPage() {
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
              maxWidth: "760px",
              marginBottom: "42px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(20px, 2.4vw, 30px)",
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              A student ride-sharing experience designed around affordability,
              trust, and safer campus travel.
            </p>
          </div>

          <div className="case-study-meta">
          <p>Payano is a mobile ride-sharing app that connects college students who need a ride with verified students already heading in the same direction. 
            The goal is simple make everyday student travel more affordable, safer, and easier through a trusted community of students.
          </p>
          <br></br>
            <p>
              <strong>Client:</strong> Dharaneeshkar R
            </p>

            <p>
              <strong>Timeline:</strong> July 1 – August 18, 2026
            </p>

            <p>
              <strong>Role:</strong> UI/UX Designer
            </p>

            <p>
              <strong>Platform:</strong> Mobile — iOS
            </p>

            <p>
              <strong>Tools:</strong> Figma, FigJam, Notion
            </p>
          </div>

          <Visual
            src="/projects/payano/hero.png"
            alt="Payano student ride-sharing mobile app"
            caption="Payano — Student Ride-Sharing Mobile App"
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
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.45,
              maxWidth: "700px",
            }}
          >
            Campus travel can be expensive and difficult to coordinate.
          </p>

          <p>
            Students regularly travel between home, college, hostels, railway
            stations, and nearby areas. Finding an affordable and reliable
            ride is not always easy.
          </p>

          <Visual
            src="/projects/payano/2.png"
            alt="Payano problem definition and student travel challenges"
            caption="The problem — cost, delays, crowded transport, and trust"
          />
        </>
      ),
    },

    /* =========================================================
       03 — RESEARCH
       ========================================================= */
    {
      title: "Research",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.45,
              maxWidth: "720px",
            }}
          >
            Before designing, I looked at how students actually travel and what
            makes their daily journeys difficult.
          </p>

          <Visual
            src="/projects/payano/3.png"
            alt="Payano student research and survey findings"
            caption="Student research — understanding everyday travel behaviour"
          />

          <div
            className="case-study-insights"
            style={{
              marginTop: "44px",
            }}
          >
            <div>
              <span>01</span>
              <h3>Travel cost matters</h3>
              <p>
                Students are sensitive to the cost of everyday transportation.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Transport creates friction</h3>
              <p>
                Traffic, delays, and crowded public transport affect daily
                journeys.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Ride-sharing has potential</h3>
              <p>
                Students showed interest in sharing rides with people travelling
                in similar directions.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Safety matters</h3>
              <p>
                Verification and live location tracking were preferred safety
                features.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       04 — COMPETITIVE RESEARCH
       ========================================================= */
    {
      title: "Competitive Research",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.45,
              maxWidth: "720px",
            }}
          >
            I studied existing ride-sharing patterns from products such as
            Rapido and Ola to understand what could be adapted for Payano.
          </p>

          <Visual
            src="/projects/payano/4.png"
            alt="Payano competitive research"
            caption="Competitive research — patterns from existing ride-sharing products"
          />

          <div
            className="case-study-insights"
            style={{
              marginTop: "44px",
            }}
          >
            <div>
              <span>01</span>
              <h3>Trust should be visible early</h3>
              <p>
                Important rider, driver, and vehicle information should be
                visible before the ride begins.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Safety stays accessible</h3>
              <p>
                PIN verification, tracking, and emergency actions should be
                easy to find.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Booking should be quick</h3>
              <p>
                The ride-request process should avoid unnecessary complexity.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Feedback must be clear</h3>
              <p>
                Users need clear feedback when a ride is accepted, cancelled,
                or unavailable.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       05 — THE SOLUTION
       ========================================================= */
    {
      title: "The Solution",
      content: (
        <>
          <div
            style={{
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(22px, 3vw, 38px)",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              A student ride-sharing app built around simple booking, trust,
              and safety.
            </p>
          </div>

          <Visual
            src="/projects/payano/5.png"
            alt="Payano solution overview"
            caption="The solution — connecting students travelling in similar directions"
          />
        </>
      ),
    },

    /* =========================================================
       06 — USERS
       ========================================================= */
    {
      title: "Users",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.45,
              maxWidth: "720px",
            }}
          >
            Payano has two main users: students looking for a ride and students
            who can offer one.
          </p>

          <Visual
            src="/projects/payano/6.png"
            alt="Payano rider and driver personas"
            caption="Personas — rider and driver perspectives"
          />
        </>
      ),
    },

    /* =========================================================
       07 — INFORMATION ARCHITECTURE
       ========================================================= */
    {
      title: "Information Architecture",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.45,
              maxWidth: "720px",
            }}
          >
            The product needed to support two connected modes while keeping
            authentication, rides, payments, and safety easy to navigate.
          </p>

          <Visual
            src="/projects/payano/7.png"
            alt="Payano information architecture"
            caption="Information architecture — structuring the connected product"
          />
        </>
      ),
    },

    /* =========================================================
       08 — USER FLOW
       ========================================================= */
    {
      title: "User Flow",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.45,
              maxWidth: "720px",
            }}
          >
            I mapped the major Rider, Driver, verification, ride, and payment
            journeys before moving into detailed interface design.
          </p>

          <Visual
            src="/projects/payano/8.png"
            alt="Payano rider, driver, and payment user flows"
            caption="User flows — Rider, Driver, pickup verification, and payment"
          />
        </>
      ),
    },

    /* =========================================================
       09 — DESIGN SYSTEM
       ========================================================= */
    {
      title: "Design System",
      content: (
        <>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.45,
              maxWidth: "720px",
            }}
          >
            The visual system was built to keep the product clear, consistent,
            and recognisable across both Rider and Driver experiences.
          </p>

          <Visual
            src="/projects/payano/9.png"
            alt="Payano color system"
            caption="Color system"
          />

          <Visual
            src="/projects/payano/10.png"
            alt="Payano typography system"
            caption="Typography — Satoshi"
          />

          <Visual
            src="/projects/payano/11.png"
            alt="Payano UI component system"
            caption="Reusable UI components"
          />
        </>
      ),
    },

    /* =========================================================
       10 — RIDER EXPERIENCE
       ========================================================= */
    {
      title: "Rider Experience",
      dark: true,
      content: (
        <>
          <div
            style={{
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(22px, 3vw, 36px)",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Find → Match → Verify → Ride.
            </p>

            <p style={{ marginTop: "22px" }}>
              The Rider experience focuses on helping students discover a
              suitable ride, understand who they are travelling with, confirm
              pickup, and stay informed throughout the journey.
            </p>
          </div>

          <Visual
            src="/projects/payano/13.png"
            alt="Payano rider mobile experience"
            caption="Rider experience — discovery, matching, verification, tracking, and ride completion"
          />
        </>
      ),
    },

    /* =========================================================
       11 — SAFETY + PAYMENT
       ========================================================= */
    {
      title: "Safety & Payment",
      dark: true,
      content: (
        <>
          <div
            style={{
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(22px, 3vw, 36px)",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Safety shouldn't disappear after the booking.
            </p>

            <p style={{ marginTop: "22px" }}>
              Live tracking, SOS, trip sharing, fare breakdowns, and payment
              confirmation are integrated directly into the journey.
            </p>
          </div>

          <Visual
            src="/projects/payano/14.png"
            alt="Payano active ride and payment experience"
            caption="Active ride, safety actions, fare details, and payment"
          />
        </>
      ),
    },

    /* =========================================================
       12 — DRIVER EXPERIENCE
       ========================================================= */
    {
      title: "Driver Experience",
      dark: true,
      content: (
        <>
          <div
            style={{
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(22px, 3vw, 36px)",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              The other side of the marketplace.
            </p>

            <p style={{ marginTop: "22px" }}>
              Drivers can go online, review incoming requests, accept or
              decline rides, verify riders, complete trips, and track earnings.
            </p>
          </div>

          <Visual
            src="/projects/payano/15.png"
            alt="Payano driver experience"
            caption="Driver experience — requests, pickup, PIN verification, ride completion, and earnings"
          />
        </>
      ),
    },    

    /* =========================================================
       14 — OUTCOME
       ========================================================= */
    {
      title: "Outcome",
      content: (
        <>
          <div
            style={{
              maxWidth: "780px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(26px, 4vw, 48px)",
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              Designing a simpler way to move around campus.
            </p>

            <p
              style={{
                marginTop: "28px",
                fontSize: "17px",
                lineHeight: 1.7,
              }}
            >
              Payano brings ride discovery, ride sharing, safety, and payments
              into one connected student-focused experience.
            </p>
          </div>

          <Visual
            src="/projects/payano/16.png"
            alt="Payano project outcome"
            caption="Project outcome"
          />

          <div
            className="case-study-insights"
            style={{
              marginTop: "44px",
            }}
          >
            <div>
              <span>01</span>
              <h3>Simpler ride experience</h3>
              <p>
                Finding, requesting, and completing a ride is kept focused and
                straightforward.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Clear Driver experience</h3>
              <p>
                Drivers can review requests and decide which rides they accept.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Trust built into the journey</h3>
              <p>
                Verification, user information, PIN confirmation, and reporting
                are integrated into the experience.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Safety kept visible</h3>
              <p>
                Tracking and SOS remain accessible during the ride.
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: "44px",
              maxWidth: "700px",
            }}
          >
            An early usability check with two participants showed successful
            completion of the tested Rider journey. Because of the small sample
            size, this was treated as an initial usability signal rather than
            final validation.
          </p>
        </>
      ),
    },

    /* =========================================================
       15 — CLOSING
       ========================================================= */
    {
      title: "Closing",
      content: (
        <>
          <Visual
            src="/projects/payano/17.png"
            alt="Thank you for exploring Payano"
            caption="Payano — 2026"
          />

          <div
            style={{
              marginTop: "56px",
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
              See the complete Payano story.
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
              Explore the detailed research, information architecture, user
              flows, design system, high-fidelity screens, prototype, and
              usability work behind Payano.
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
              Research · Flows · UI · Prototype · Testing
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      project={project}
      sections={sections}
      overview={{
        role: "UI/UX Designer",
        timeline: "July 1 – August 18, 2026",
        tools: "Figma / FigJam / Notion",
        type: "Mobile App — Student Ride-Sharing",
      }}
    />
  );
}