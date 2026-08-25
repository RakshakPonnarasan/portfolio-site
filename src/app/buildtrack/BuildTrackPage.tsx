"use client";

import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { projects } from "@/data/projects";

const project = projects.find((item) => item.id === "buildtrack")!;

const BEHANCE_URL =
  "https://www.behance.net/gallery/250078171/BuildTrack-Game-Development-Tracking-Platform";

/* =========================================================
   IMAGE COMPONENT
   Preserves the original image ratio.
   Nothing is cropped.
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
        width: "100%",
        margin: "48px 0 0",
      }}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          borderRadius: "14px",
          background: "var(--bg-raised)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: "10px",
            fontSize: "11px",
            lineHeight: 1.5,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function BuildTrackPage() {
  const sections = [
    /* =========================================================
       01 — OVERVIEW
       ========================================================= */

    {
      title: "Overview",
      content: (
        <>
          <p>
            BuildTrack is a web-based iteration management platform designed
            for indie game developers.
          </p>

          <p>
            It connects gameplay features, game builds, and playtest feedback
            so developers can understand what changed, what was tested, and
            what needs attention next.
          </p>

          <div className="case-study-meta">
            <p>
              <strong>Role:</strong> Product Designer
            </p>

            <p>
              <strong>Duration:</strong> 2 weeks
            </p>

            <p>
              <strong>Platform:</strong> Web
            </p>

            <p>
              <strong>Tools:</strong> Figma, Notion, Google Forms, Google
              Sheets
            </p>
          </div>

          <ProjectImage
            src="/projects/buildtrack/hero.png"
            alt="BuildTrack game development tracking platform"
            caption="BuildTrack — game development tracking platform"
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
          <h2>Iteration was happening across too many places.</h2>

          <p>
            Indie developers continuously move between feature development,
            builds, playtesting, and feedback. But these activities were often
            managed through separate tools such as task boards, spreadsheets,
            documents, and chat platforms.
          </p>

          <p>
            This made it difficult to understand which features belonged to a
            build, what testers had reported, and how that feedback influenced
            the next iteration.
          </p>

          <blockquote>
            The challenge was not simply tracking work. It was connecting the
            work.
          </blockquote>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Fragmented Workflow</h3>
              <p>
                Development information was spread across multiple tools and
                locations.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Build Visibility</h3>
              <p>
                Developers needed to understand which features and changes were
                included in each build.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Feedback Context</h3>
              <p>
                Feedback became more useful when connected to the build and
                feature it related to.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Iteration Decisions</h3>
              <p>
                Developers needed a clearer picture of what was tested, what
                changed, and what still needed attention.
              </p>
            </div>
          </div>
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
          <h2>Understanding how indie developers iterate.</h2>

          <p>
            I wanted to understand how indie developers currently manage
            features, builds, and playtest feedback — and where the existing
            workflow becomes difficult to manage.
          </p>

          <div className="case-study-insights">
            <div>
              <span>09</span>
              <h3>Developers Surveyed</h3>
              <p>
                The research included solo developers and small teams working
                across different game-development environments.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Development Environments</h3>
              <p>
                Participants worked with Unity, Unreal, Godot, and custom game
                engines.
              </p>
            </div>

            <div>
              <span>01</span>
              <h3>Online Survey</h3>
              <p>
                The survey explored feature tracking, playtest feedback, and
                build-version practices.
              </p>
            </div>

            <div>
              <span>5+</span>
              <h3>Years of Experience</h3>
              <p>
                Participants represented a range of experience levels, from
                beginners to developers with more than five years of
                experience.
              </p>
            </div>
          </div>

          <h3>What I investigated</h3>

          <div className="case-study-insights">
            <div>
              <h3>Feature Tracking</h3>
              <p>
                How developers associate gameplay features with specific builds
                or versions.
              </p>
            </div>

            <div>
              <h3>Playtest Feedback</h3>
              <p>
                How feedback is collected, organized, and reviewed after
                playtesting.
              </p>
            </div>

            <div>
              <h3>Build Tracking</h3>
              <p>
                How developers maintain versions and understand what changed
                between builds.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       04 — RESEARCH INSIGHTS
       ========================================================= */

    {
      title: "Research Insights",
      content: (
        <>
          <h2>Four patterns stood out.</h2>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Tools Were Disconnected</h3>
              <p>
                Developers relied on multiple tools to manage features,
                feedback, and builds.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Feedback Lacked Context</h3>
              <p>
                Playtest feedback was often collected through informal
                channels, making it harder to organize and analyze.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Changes Were Difficult to Trace</h3>
              <p>
                Developers lacked a structured way to connect feedback to the
                feature and build it affected.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Iteration Relied on Scattered Information</h3>
              <p>
                Development decisions could depend on notes, messages, or
                memory instead of a connected history.
              </p>
            </div>
          </div>

          <blockquote>
            Create a system that connects features, builds, and feedback
            throughout the iteration cycle.
          </blockquote>
        </>
      ),
    },

    /* =========================================================
       05 — PRODUCT DIRECTION
       ========================================================= */

    {
      title: "Product Direction",
      dark: true,
      content: (
        <>
          <p>
            The product direction came from a simple relationship between
            three core elements of game development.
          </p>

          <h2>Features ↔ Builds ↔ Feedback</h2>

          <p>
            Features represent what developers are building. Builds represent
            where those changes are packaged and released. Feedback represents
            what testers experience and report.
          </p>

          <p>
            Connecting these three elements allows developers to trace an
            iteration from what was built, to what was tested, to what should
            change next.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Features</h3>
              <p>
                Track gameplay mechanics, UI changes, improvements, and bug
                fixes as individual units of work.
              </p>
            </div>

            <div>
              <h3>Builds</h3>
              <p>
                Understand which features and changes are included in each
                version of the game.
              </p>
            </div>

            <div>
              <h3>Feedback</h3>
              <p>
                Capture observations, issues, and suggestions in the context
                of the build being tested.
              </p>
            </div>

            <div>
              <h3>Connected Context</h3>
              <p>
                Move from a feature to its builds and feedback, or start with
                feedback and trace it back to the relevant feature.
              </p>
            </div>
          </div>

          <ProjectImage
            src="/projects/buildtrack/Dashboard.png"
            alt="BuildTrack dashboard showing connected development activity"
            caption="Dashboard — a connected overview of development activity"
          />
        </>
      ),
    },

    /* =========================================================
       06 — WORKFLOW
       ========================================================= */

    {
      title: "Workflow",
      content: (
        <>
          <h2>From scattered iteration to a connected workflow.</h2>

          <p>
            The research revealed that iteration was already happening. The
            problem was the lack of a structured relationship between each
            stage.
          </p>

          <h3>Before BuildTrack</h3>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Develop Gameplay Features</h3>
              <p>Features are implemented inside the game engine.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Create & Share a Build</h3>
              <p>
                A build is created and shared with testers through different
                channels.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Collect Feedback</h3>
              <p>
                Testers provide feedback through messages, forms, or other
                channels.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Review Feedback</h3>
              <p>
                Developers manually identify which features need improvement.
              </p>
            </div>

            <div>
              <span>05</span>
              <h3>Plan the Next Update</h3>
              <p>
                Developers decide what to change before creating another build.
              </p>
            </div>
          </div>

          <h3>With BuildTrack</h3>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Create Features</h3>
              <p>
                Gameplay features are added and tracked inside BuildTrack.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Create a Build</h3>
              <p>
                Each build includes the features implemented in that version.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Collect Feedback</h3>
              <p>
                Playtesters submit structured feedback related to the build.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Link Feedback</h3>
              <p>
                Feedback can be connected directly to the relevant feature.
              </p>
            </div>

            <div>
              <span>05</span>
              <h3>Plan the Next Iteration</h3>
              <p>
                Organized feedback and build history support the next round of
                development.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       07 — FEATURE PRIORITIZATION
       ========================================================= */

    {
      title: "Feature Prioritization",
      content: (
        <>
          <h2>Defining what the first version needed.</h2>

          <p>
            The product was prioritized around the workflows that were most
            important to connecting development iterations.
          </p>

          <div className="case-study-insights">
            <div>
              <span>CORE</span>
              <h3>Feature Tracking</h3>
              <p>
                Create and manage gameplay features throughout development.
              </p>
            </div>

            <div>
              <span>CORE</span>
              <h3>Build Management</h3>
              <p>Track different game builds and versions.</p>
            </div>

            <div>
              <span>CORE</span>
              <h3>Feedback Management</h3>
              <p>Store and organize playtest feedback.</p>
            </div>

            <div>
              <span>CORE</span>
              <h3>Feedback → Feature</h3>
              <p>
                Connect feedback to the gameplay feature it concerns.
              </p>
            </div>
          </div>

          <h3>Supporting features</h3>

          <p>
            Feedback priority, build history, search, and filters were treated
            as supporting functionality around the core workflow.
          </p>

          <h3>Future considerations</h3>

          <p>
            Analytics, team collaboration, and a dedicated playtester portal
            were identified as future opportunities rather than first-version
            requirements.
          </p>
        </>
      ),
    },

    /* =========================================================
       08 — INFORMATION ARCHITECTURE
       ========================================================= */

    {
      title: "Information Architecture",
      content: (
        <>
          <h2>The structure follows the relationships.</h2>

          <p>
            Instead of treating features, builds, and feedback as isolated
            sections, the information architecture was organized around the
            relationships between them.
          </p>

          <p>
            Users can enter the workflow from different points and continue
            through connected information without losing context.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Feature → Build</h3>
              <p>
                Understand where a feature was introduced and which builds
                contain it.
              </p>
            </div>

            <div>
              <h3>Build → Feedback</h3>
              <p>
                Review what testers reported while using a specific build.
              </p>
            </div>

            <div>
              <h3>Feedback → Feature</h3>
              <p>
                Trace an observation or issue back to the feature it concerns.
              </p>
            </div>

            <div>
              <h3>Iteration History</h3>
              <p>
                Understand how the product changes across development cycles.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       09 — USER FLOWS
       ========================================================= */

    {
      title: "User Flows",
      content: (
        <>
          <h2>Three flows shaped the product.</h2>

          <p>
            I mapped the core actions around creating features, creating
            builds, and connecting feedback to the relevant feature.
          </p>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Create a Feature</h3>
              <p>
                Dashboard → Features → New Feature → Enter details → Save.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Create a Build</h3>
              <p>
                Dashboard → Builds → New Build → Add features → Save.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Connect Feedback</h3>
              <p>
                Dashboard → Feedback → Select feedback → Link feature → Save.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       10 — WIREFRAMES
       ========================================================= */

    {
      title: "Wireframes",
      content: (
        <>
          <h2>Testing the structure before styling.</h2>

          <p>
            Before moving into visual design, I explored the core workflows
            through low-fidelity wireframes to establish hierarchy, navigation,
            and relationships between information.
          </p>

          <p>
            The wireframes focused on the primary actions that would later
            become the foundation for the final interface.
          </p>

          <ProjectImage
            src="/projects/buildtrack/wireframe.png"
            alt="BuildTrack low-fidelity wireframe exploration"
            caption="Early wireframe exploration"
          />
        </>
      ),
    },

    /* =========================================================
       11 — INTERFACE DESIGN
       ========================================================= */

    {
      title: "Interface Design",
      content: (
        <>
          <h2>Turning the workflow into a working interface.</h2>

          <p>
            The interface was designed to handle connected development
            information without making the workflow feel unnecessarily
            complex.
          </p>

          <p>
            The final product brings together dashboard information, feature
            tracking, build management, and playtest feedback within a
            consistent navigation system.
          </p>

          {/* FEATURES */}

          <h3 style={{ marginTop: "56px" }}>Features</h3>

          <p>
            A structured view of gameplay features and their development
            progress.
          </p>

          <ProjectImage
            src="/projects/buildtrack/Features.png"
            alt="BuildTrack features interface"
            caption="Features — tracking gameplay work"
          />

          {/* BUILDS */}

          <h3 style={{ marginTop: "72px" }}>Builds</h3>

          <p>
            Builds organize releases around the features included in each
            version.
          </p>

          <ProjectImage
            src="/projects/buildtrack/Builds.png"
            alt="BuildTrack builds interface"
            caption="Builds — organizing game versions"
          />

          {/* FEEDBACK */}

          <h3 style={{ marginTop: "72px" }}>Feedback</h3>

          <p>
            Feedback becomes part of the iteration workflow rather than
            remaining disconnected notes.
          </p>

          <ProjectImage
            src="/projects/buildtrack/Feedback.png"
            alt="BuildTrack feedback interface"
            caption="Feedback — connecting playtest observations to development"
          />

          {/* BUILD DETAILS */}

          <h3 style={{ marginTop: "72px" }}>Build Detail</h3>

          <p>
            Detail views provide the contextual relationships needed to
            understand what changed in a particular build.
          </p>

          <ProjectImage
            src="/projects/buildtrack/Build Details.png"
            alt="BuildTrack build details interface"
            caption="Build detail — understanding a specific iteration"
          />
        </>
      ),
    },

    /* =========================================================
       12 — KEY DESIGN DECISIONS
       ========================================================= */

    {
      title: "Key Design Decisions",
      content: (
        <>
          <h2>Four decisions shaped BuildTrack.</h2>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Relationship-First Architecture</h3>
              <p>
                The product is organized around connections between features,
                builds, and feedback instead of isolated lists.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Multiple Entry Points</h3>
              <p>
                Users can begin with a feature, build, or feedback item and
                continue through the connected workflow.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Clear Information Hierarchy</h3>
              <p>
                The interface prioritizes the information developers need
                while working through an iteration.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Contextual Feedback</h3>
              <p>
                Feedback is treated as part of the development workflow rather
                than as disconnected notes.
              </p>
            </div>
          </div>
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
          <h2>A connected iteration system.</h2>

          <p>
            BuildTrack brings features, builds, and playtest feedback into one
            structured workflow for indie game development.
          </p>

          <p>
            The final interface focuses on clear navigation, information
            hierarchy, and contextual relationships, allowing developers to
            move between development work, builds, and feedback without losing
            context.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Connected Workflow</h3>
              <p>
                Features, builds, and feedback are represented within one
                system.
              </p>
            </div>

            <div>
              <h3>Build Visibility</h3>
              <p>
                Developers can understand what features and changes belong to
                different versions.
              </p>
            </div>

            <div>
              <h3>Contextual Feedback</h3>
              <p>
                Playtest observations can be understood in relation to the
                build and feature involved.
              </p>
            </div>

            <div>
              <h3>Clearer Iteration</h3>
              <p>
                The product creates a structured path from what was built to
                what was tested and what needs attention next.
              </p>
            </div>
          </div>

          <blockquote>
            The value of BuildTrack is not simply tracking individual items.
            It is making the relationships between those items visible.
          </blockquote>
        </>
      ),
    },

    /* =========================================================
       14 — FULL CASE STUDY
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
            See the complete BuildTrack story.
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
            Explore the complete BuildTrack project, including the product
            concept, research, workflow, information architecture, user flows,
            interface design, and detailed visual work.
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
            Research · Workflow · IA · User Flows · UI · Visual Design
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
        role: "Product Designer",
        timeline: "2 weeks",
        tools: "Figma",
        type: "Web Platform — Game Development Tracking",
      }}
    />
  );
}