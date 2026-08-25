"use client";

import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { projects } from "@/data/projects";

/* =========================================================
   SYNTRI IMAGE
   Preserves original aspect ratio.
   No cropping / no forced height.
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
          border: "1px solid var(--border)",
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
            maxWidth: "100%",
            height: "auto",
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

export default function SyntriPage() {
  const project = projects.find((item) => item.id === "syntri");

  if (!project) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "40px",
        }}
      >
        <p>Syntri project data not found.</p>
      </main>
    );
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
            Syntri is an AI-powered productivity workspace designed to bring
            projects, tasks, knowledge, and AI assistance into one connected
            experience.
          </p>

          <p>
            The project explores how a unified workspace can reduce context
            switching and help users move from planning to execution without
            repeatedly losing the information surrounding their work.
          </p>

          <p>
            Rather than treating AI as a separate destination, Syntri explores
            how intelligent assistance can become part of the everyday
            productivity workflow.
          </p>

          <ProjectImage
            src="/projects/syntri/hero.png"
            alt="Syntri AI-powered productivity workspace"
            caption="Syntri — AI-powered productivity workspace"
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
          <h2>Productivity work is fragmented across too many places.</h2>

          <p>
            Modern knowledge work rarely happens inside a single tool.
            Projects may live in one application, tasks in another, notes in
            documents, and AI assistance in a separate conversation.
          </p>

          <p>
            This fragmentation creates a recurring problem: users have to
            reconstruct the context of their work every time they move between
            tools.
          </p>

          <ul>
            <li>
              <strong>Information fragmentation:</strong> Project information,
              notes, tasks, and supporting knowledge are distributed across
              different destinations.
            </li>

            <li>
              <strong>Context switching:</strong> Moving between tools creates
              unnecessary interruptions during otherwise connected workflows.
            </li>

            <li>
              <strong>Disconnected AI:</strong> AI assistance often exists
              outside the actual project context where users need it.
            </li>

            <li>
              <strong>Repeated information transfer:</strong> Users repeatedly
              copy, move, summarize, or recreate information between tools.
            </li>
          </ul>

          <blockquote>
            The opportunity was not to create another productivity tool, but to
            connect the work users were already doing.
          </blockquote>
        </>
      ),
    },

    /* =========================================================
       03 — RESEARCH & DISCOVERY
       ========================================================= */

    {
      title: "Research & Discovery",
      content: (
        <>
          <h2>Understanding how people organize complex digital work.</h2>

          <p>
            The research focused on understanding how professionals organize
            projects, tasks, notes, information, and AI-assisted work across
            digital tools.
          </p>

          <p>
            The goal was to understand not only what users needed to manage,
            but how different types of information were connected during
            actual work.
          </p>

          <p>
            A recurring theme was that productivity is not a sequence of
            isolated actions. Users continuously move between planning,
            gathering information, documenting decisions, executing tasks, and
            solving problems.
          </p>

          <p>
            This suggested that the product should preserve those relationships
            instead of forcing users to treat each activity as a separate
            destination.
          </p>

          <ProjectImage
            src="/projects/syntri/User Persona.png"
            alt="Syntri user persona"
            caption="User persona — framing the needs of the primary workspace user"
          />
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
          <h2>Four patterns shaped the product direction.</h2>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Work Is Contextual</h3>
              <p>
                Tasks rarely exist independently. They are connected to
                projects, information, decisions, and supporting knowledge.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Information Is Reused</h3>
              <p>
                The same information can support planning, execution,
                documentation, and problem solving.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>AI Needs Context</h3>
              <p>
                AI assistance becomes more useful when it understands the work
                surrounding the user's current task.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Navigation Should Follow Work</h3>
              <p>
                The workspace should make it easy to move between related
                information without forcing users to restart their context.
              </p>
            </div>
          </div>

          <blockquote>
            The core design opportunity was to make relationships between work
            visible and accessible.
          </blockquote>
        </>
      ),
    },

    /* =========================================================
       05 — PRODUCT MODEL
       ========================================================= */

    {
      title: "Product Model",
      dark: true,
      content: (
        <>
          <p>
            These findings shaped the core model of Syntri around four
            connected areas:
          </p>

          <h2>Projects ↔ Tasks ↔ Knowledge ↔ AI</h2>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Projects</h3>
              <p>
                Projects provide the larger context for goals, work,
                information, and progress.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Tasks</h3>
              <p>
                Tasks represent actionable work while remaining connected to
                the surrounding project context.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Knowledge</h3>
              <p>
                Notes and supporting information provide the knowledge users
                need while working.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>AI</h3>
              <p>
                AI helps users interpret, generate, organize, and act on
                information within the workflow.
              </p>
            </div>
          </div>

          <p>
            The product model therefore moves away from isolated utilities and
            toward a connected workspace where each area contributes to the
            same working context.
          </p>
        </>
      ),
    },

    /* =========================================================
       06 — INFORMATION ARCHITECTURE
       ========================================================= */

    {
      title: "Information Architecture",
      content: (
        <>
          <h2>The structure follows the relationships between work.</h2>

          <p>
            The information architecture was designed around how users move
            through their work rather than simply reproducing a collection of
            productivity tools.
          </p>

          <p>
            Projects act as the primary context, while tasks, notes,
            AI-assisted work, and supporting information remain accessible
            around that context.
          </p>

          <p>
            This creates a hierarchy where the workspace can grow without
            making every capability feel like a completely separate product.
          </p>

          <ProjectImage
            src="/projects/syntri/IA.png"
            alt="Syntri information architecture"
            caption="Information architecture — organizing the connected workspace"
          />
        </>
      ),
    },

    /* =========================================================
       07 — USER FLOWS
       ========================================================= */

    {
      title: "User Flows",
      content: (
        <>
          <h2>Designing the paths through the workspace.</h2>

          <p>
            With the product structure established, I mapped the key journeys
            users would take through Syntri.
          </p>

          <p>
            The flows focus on maintaining context while users move between
            projects, tasks, knowledge, and AI-assisted actions.
          </p>

          <h3 style={{ marginTop: "48px" }}>Flow 01 — Working with a Project</h3>

          <p>
            This flow represents the movement from a project context into
            related work, information, and actions.
          </p>

          <ProjectImage
            src="/projects/syntri/User Flow 1.png"
            alt="Syntri user flow one"
            caption="User Flow 01 — moving through project context and related work"
          />

          <h3 style={{ marginTop: "72px" }}>Flow 02 — Completing a Task</h3>

          <p>
            The second flow explores how users move from an actionable task
            toward the supporting information and assistance required to
            complete it.
          </p>

          <ProjectImage
            src="/projects/syntri/User Flow 2.png"
            alt="Syntri user flow two"
            caption="User Flow 02 — completing work while maintaining context"
          />
        </>
      ),
    },

    /* =========================================================
       08 — WIREFRAMES
       ========================================================= */

    {
      title: "Wireframes",
      content: (
        <>
          <h2>Testing structure before committing to visual design.</h2>

          <p>
            Before developing the final visual language, I explored the main
            workspace areas through low-fidelity wireframes.
          </p>

          <p>
            The wireframes were used to validate hierarchy, navigation,
            information density, and the relationship between different
            product areas.
          </p>

          {/* DASHBOARD WIREFRAME */}

          <h3 style={{ marginTop: "48px" }}>Dashboard</h3>

          <p>
            The dashboard establishes the user's starting point and provides
            visibility into active work without overwhelming the workspace.
          </p>

          <ProjectImage
            src="/projects/syntri/Dashboard Wireframe.png"
            alt="Syntri dashboard wireframe"
            caption="Dashboard wireframe — establishing the workspace overview"
          />

          {/* AI ASSISTANT WIREFRAME */}

          <h3 style={{ marginTop: "72px" }}>AI Assistant</h3>

          <p>
            The AI assistant was explored as part of the working environment
            rather than as an isolated chatbot destination.
          </p>

          {/* NOTES WIREFRAME */}

          <h3 style={{ marginTop: "72px" }}>Notes</h3>

          <p>
            The notes experience was structured around capturing and accessing
            supporting information while remaining connected to the user's
            broader work.
          </p>

          <ProjectImage
            src="/projects/syntri/Notes Wireframe.png"
            alt="Syntri notes wireframe"
            caption="Notes wireframe — organizing supporting knowledge"
          />

          {/* PROMPT VAULT WIREFRAME */}

          <h3 style={{ marginTop: "72px" }}>Prompt Vault</h3>

          <p>
            The Prompt Vault explores how reusable AI instructions can become
            an organized part of the workspace instead of remaining scattered
            across conversations.
          </p>

          <ProjectImage
            src="/projects/syntri/Prompt vault Wireframe.png"
            alt="Syntri Prompt Vault wireframe"
            caption="Prompt Vault wireframe — organizing reusable AI prompts"
          />

          {/* TASKS WIREFRAME */}

          <h3 style={{ marginTop: "72px" }}>Tasks</h3>

          <p>
            The task structure focuses on making actionable work easy to scan,
            organize, and connect to the surrounding project context.
          </p>

          <ProjectImage
            src="/projects/syntri/Tasks Wireframe.png"
            alt="Syntri tasks wireframe"
            caption="Tasks wireframe — structuring actionable work"
          />
        </>
      ),
    },

    /* =========================================================
       09 — INTERFACE DESIGN
       ========================================================= */

    {
      title: "Interface Design",
      content: (
        <>
          <h2>Turning the connected model into a cohesive workspace.</h2>

          <p>
            The final interface translates the product model into a consistent
            workspace where each capability feels like part of the same
            system.
          </p>

          <p>
            The visual direction focuses on strong information hierarchy,
            dense but readable interfaces, consistent navigation, and clear
            relationships between primary work and supporting information.
          </p>

          {/* DASHBOARD */}

          <h3 style={{ marginTop: "56px" }}>01 — Dashboard</h3>

          <p>
            The dashboard acts as the central overview of the user's workspace,
            bringing active projects, tasks, and relevant activity into a
            single starting point.
          </p>

          <ProjectImage
            src="/projects/syntri/Dashboard.png"
            alt="Syntri dashboard interface"
            caption="Dashboard — the central overview of the workspace"
          />

          {/* AI ASSISTANT */}

          <h3 style={{ marginTop: "72px" }}>02 — AI Assistant</h3>

          <p>
            The AI Assistant brings intelligent support closer to the user's
            actual work. Instead of requiring a separate AI destination, the
            interaction is positioned as part of the broader workspace.
          </p>

          <ProjectImage
            src="/projects/syntri/AI Assistant.png"
            alt="Syntri AI assistant interface"
            caption="AI Assistant — contextual support inside the workspace"
          />

          {/* PROJECT */}

          <h3 style={{ marginTop: "72px" }}>03 — Project</h3>

          <p>
            The Project view establishes a focused context for a specific body
            of work, bringing its information and activity together.
          </p>

          <ProjectImage
            src="/projects/syntri/Project.png"
            alt="Syntri project interface"
            caption="Project — bringing work and context together"
          />

          {/* TASKS */}

          <h3 style={{ marginTop: "72px" }}>04 — Tasks</h3>

          <p>
            The Tasks interface turns project context into actionable work
            while maintaining a clear visual hierarchy for scanning and
            prioritization.
          </p>

          <ProjectImage
            src="/projects/syntri/Tasks.png"
            alt="Syntri tasks interface"
            caption="Tasks — organizing actionable work"
          />

          {/* NOTES */}

          <h3 style={{ marginTop: "72px" }}>05 — Notes</h3>

          <p>
            Notes provide a dedicated space for supporting information,
            decisions, and knowledge that users need while working through a
            project.
          </p>

          <ProjectImage
            src="/projects/syntri/Notes.png"
            alt="Syntri notes interface"
            caption="Notes — capturing and organizing supporting knowledge"
          />

          {/* PROMPT VAULT */}

          <h3 style={{ marginTop: "72px" }}>06 — Prompt Vault</h3>

          <p>
            The Prompt Vault organizes reusable AI instructions so users can
            return to useful prompts instead of repeatedly recreating them.
          </p>

          <ProjectImage
            src="/projects/syntri/Prompt Vault.png"
            alt="Syntri Prompt Vault interface"
            caption="Prompt Vault — organizing reusable AI instructions"
          />

          {/* TEAM SPACE */}

          <h3 style={{ marginTop: "72px" }}>07 — Team Space</h3>

          <p>
            Team Space extends the workspace beyond individual productivity,
            giving collaborative work its own place within the broader product
            structure.
          </p>

          <ProjectImage
            src="/projects/syntri/Team Space.png"
            alt="Syntri Team Space interface"
            caption="Team Space — extending the workspace to collaboration"
          />

          {/* SETTINGS */}

          <h3 style={{ marginTop: "72px" }}>08 — Settings</h3>

          <p>
            Settings provide the supporting controls required to manage the
            workspace while keeping configuration separate from the primary
            work experience.
          </p>

          <ProjectImage
            src="/projects/syntri/Settings.png"
            alt="Syntri settings interface"
            caption="Settings — managing the workspace configuration"
          />
        </>
      ),
    },

    /* =========================================================
       10 — KEY DESIGN DECISIONS
       ========================================================= */

    {
      title: "Key Design Decisions",
      content: (
        <>
          <h2>Five decisions shaped the Syntri experience.</h2>

          <div className="case-study-insights">
            <div>
              <span>01</span>
              <h3>Connected Workspace</h3>
              <p>
                Projects, tasks, knowledge, and AI are treated as connected
                parts of one system rather than isolated tools.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Context Over Fragmentation</h3>
              <p>
                Related information remains accessible from the surrounding
                workflow so users do not repeatedly rebuild context.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>AI Inside the Workflow</h3>
              <p>
                AI assistance is positioned alongside existing work instead of
                forcing users into a completely separate experience.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Clear Information Hierarchy</h3>
              <p>
                Primary work receives visual priority while supporting
                information remains accessible without competing for attention.
              </p>
            </div>

            <div>
              <span>05</span>
              <h3>Scalable Product Structure</h3>
              <p>
                The underlying model can accommodate additional productivity
                capabilities without disrupting the core experience.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       11 — OUTCOME
       ========================================================= */

    {
      title: "Outcome",
      content: (
        <>
          <h2>A productivity workspace built around context.</h2>

          <p>
            Syntri brings projects, tasks, knowledge, and AI assistance into a
            single product model designed around the relationships between
            different types of work.
          </p>

          <p>
            The final experience focuses on reducing fragmentation, making
            information easier to navigate, and bringing AI closer to the
            context where users actually need it.
          </p>

          <div className="case-study-insights">
            <div>
              <h3>Connected Work</h3>
              <p>
                Different types of productivity information can exist within a
                shared workspace.
              </p>
            </div>

            <div>
              <h3>Contextual AI</h3>
              <p>
                AI becomes part of the workflow rather than a separate
                destination.
              </p>
            </div>

            <div>
              <h3>Structured Knowledge</h3>
              <p>
                Notes, prompts, projects, and tasks are organized around the
                user's work.
              </p>
            </div>

            <div>
              <h3>Scalable Foundation</h3>
              <p>
                The product model provides a foundation for expanding the
                workspace with additional capabilities.
              </p>
            </div>
          </div>
        </>
      ),
    },

    /* =========================================================
       12 — REFLECTION
       ========================================================= */

    {
      title: "Reflection",
      content: (
        <>
          <h2>The challenge was not adding more tools. It was connecting them.</h2>

          <p>
            Syntri reinforced the idea that productivity products should not
            simply provide more capabilities. The larger design challenge is
            connecting different types of work without making users repeatedly
            reconstruct the context around that work.
          </p>

          <p>
            The project strengthened my understanding of product thinking,
            information architecture, interaction design, and how AI
            capabilities can be integrated into a complex digital product
            without becoming disconnected from the user's actual workflow.
          </p>

          <blockquote>
            Good productivity design is not about how many tools a workspace
            contains. It is about how well those tools work together.
          </blockquote>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      project={project}
      overview={{
        role: "UI/UX Designer",
        timeline: "2025",
        tools: "Figma",
        type: "Concept Project",
        behanceUrl:
          "https://www.behance.net/gallery/250651297/Syntri-AI-Powered-Productivity-Workspace",
        behanceDescription:
          "Explore the complete Syntri project, including the product concept, workflow, information architecture, interface design, AI-powered productivity experience, and detailed visual work on Behance.",
        behanceTags:
          "Product Design · UX · UI · Interaction · AI Productivity · Visual Design",
      }}
      sections={sections}
    />
  );
}