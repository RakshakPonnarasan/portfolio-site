export default function PlayPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px 4vw",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: ".1em",
          color: "var(--text-muted)",
        }}
      >
        PLAY
      </p>

      <h1
        style={{
          marginTop: "35vh",
          maxWidth: 900,
          fontFamily: "var(--font-mono)",
          fontWeight: 400,
          fontSize: "clamp(42px, 7vw, 92px)",
          lineHeight: 0.95,
          letterSpacing: "-.055em",
        }}
      >
        Making things for fun.
      </h1>

      <p
        style={{
          maxWidth: 420,
          marginTop: 28,
          color: "var(--text-second)",
          fontSize: 14,
        }}
      >
        This space is ready for UI experiments, visual explorations, and small
        things I make outside case studies.
      </p>
    </div>
  );
}