"use client";

import { useEffect, useState } from "react";

const STATUS_QUOTES = [
  "Politely arguing with a PM about spacing...",
  "Pixel-aligning icons at 3 AM...",
  "Making drop shadows 1% opacity softer...",
  "Checking if the button is centered...",
  "Baking a fresh batch of wireframes...",
  "Hunting down stray pixels...",
  "Polishing micro-interactions...",
  "Increasing line height for better readability...",
  "Over-analyzing typography choices...",
  "Searching for the perfect balance...",
  "Making sure everything feels just right...",
  "Turning simple ideas into better experiences...",
  "Removing things that don't need to be there...",
  "Making the little details count...",
  "Giving every screen a little more personality...",
  "Making sure the experience feels effortless...",
  "One more tiny adjustment...",
  "Almost there...",
];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    /*
     * Only show the loader once per browser session.
     * Remove this block if you want the loader on every page refresh.
     */
    const hasLoaded = sessionStorage.getItem("portfolio-loaded");

    if (hasLoaded) {
      setVisible(false);
      return;
    }

    // Pick a genuinely random quote every time the loader appears.
    const randomStart = Math.floor(
      Math.random() * STATUS_QUOTES.length
    );

    setQuoteIndex(randomStart);

    /*
     * ----------------------------------------------------
     * QUOTE ROTATION
     * ----------------------------------------------------
     *
     * Slower than before so visitors have time to read.
     */
    const quoteInterval = setInterval(() => {
      setQuoteIndex((current) => {
        let next = Math.floor(
          Math.random() * STATUS_QUOTES.length
        );

        // Don't immediately repeat the same quote.
        while (next === current) {
          next = Math.floor(
            Math.random() * STATUS_QUOTES.length
          );
        }

        return next;
      });
    }, 2200);

    /*
     * ----------------------------------------------------
     * PROGRESS
     * ----------------------------------------------------
     *
     * The progress deliberately takes around 4–5 seconds.
     * The last few percentages move slower to make the
     * ending feel intentional rather than abrupt.
     */
    const progressInterval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          return 100;
        }

        let increment: number;

        if (current < 70) {
          increment = Math.random() * 1.8 + 0.8;
        } else if (current < 90) {
          increment = Math.random() * 1.1 + 0.4;
        } else {
          increment = Math.random() * 0.55 + 0.15;
        }

        return Math.min(current + increment, 100);
      });
    }, 55);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(progressInterval);
    };
  }, []);

  /*
   * ----------------------------------------------------
   * SMOOTH EXIT
   * ----------------------------------------------------
   *
   * This is the important part.
   *
   * We DON'T immediately remove the loader when it hits
   * 100%.
   *
   * Instead:
   *
   * 100%
   *   ↓
   * short pause
   *   ↓
   * fade + blur + scale + slide
   *   ↓
   * loader disappears
   */
  useEffect(() => {
    if (progress !== 100) return;

    const startExit = setTimeout(() => {
      setIsExiting(true);

      sessionStorage.setItem(
        "portfolio-loaded",
        "true"
      );

      /*
       * Must match the CSS exit animation duration below.
       */
      const removeLoader = setTimeout(() => {
        setVisible(false);
      }, 1100);

      return () => clearTimeout(removeLoader);
    }, 450);

    return () => clearTimeout(startExit);
  }, [progress]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <div
        className={`page-loader ${
          isExiting ? "page-loader--exiting" : ""
        }`}
        aria-label="Loading portfolio"
        aria-live="polite"
      >
        <div className="page-loader__ambient" />

        <div className="page-loader__content">

          {/* NAME */}
          <div className="page-loader__name-wrapper">
            <h1 className="page-loader__name">
              <span>RAKSHAK</span>
              <span>M P</span>
            </h1>
          </div>

          {/* QUOTE */}
          <div
            key={quoteIndex}
            className="page-loader__quote"
          >
            {STATUS_QUOTES[quoteIndex]}
          </div>

          {/* PERCENTAGE */}
          <div className="page-loader__percentage-wrapper">
            <span className="page-loader__percentage">
              {Math.floor(progress)}
            </span>

            <span className="page-loader__percentage-symbol">
              %
            </span>
          </div>

          {/* PROGRESS LINE */}
          <div className="page-loader__progress">
            <div
              className="page-loader__progress-fill"
              style={{
                transform: `scaleX(${progress / 100})`,
              }}
            />
          </div>

        </div>

        {/* Small corner mark */}
        <div className="page-loader__corner">
          MP / 01
        </div>
      </div>

      <style jsx>{`
        /* ==================================================
           LOADER
           ================================================== */

        .page-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background: #0b0b0b;
          color: #f4f2ec;

          isolation: isolate;

          opacity: 1;
          transform: scale(1);
          filter: blur(0);

          transition:
            opacity 900ms cubic-bezier(0.76, 0, 0.24, 1),
            transform 1100ms cubic-bezier(0.76, 0, 0.24, 1),
            filter 1100ms cubic-bezier(0.76, 0, 0.24, 1);

          will-change:
            opacity,
            transform,
            filter;
        }

        /*
         * Subtle dark atmosphere behind the content.
         */
        .page-loader__ambient {
          position: absolute;
          inset: -20%;

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(255, 255, 255, 0.045),
              transparent 32%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(255, 255, 255, 0.018),
              transparent 28%
            );

          pointer-events: none;

          animation: ambientPulse 4s ease-in-out infinite;
        }

        /*
         * EXIT
         */
        .page-loader--exiting {
          opacity: 0;
          transform: scale(1.035) translateY(-12px);
          filter: blur(10px);
          pointer-events: none;
        }

        /* ==================================================
           CONTENT
           ================================================== */

        .page-loader__content {
          position: relative;
          z-index: 2;

          width: min(1000px, 88vw);

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        /* ==================================================
           NAME
           ================================================== */

        .page-loader__name-wrapper {
          overflow: hidden;
          padding: 10px 0 16px;
        }

        .page-loader__name {
          margin: 0;

          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.28em;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
            
          font-size: clamp(
            4rem,
            10vw,
            9.5rem
          );

          line-height: 0.82;

          font-weight: 900;

          letter-spacing: -0.075em;

          color: #f4f2ec;

          white-space: nowrap;

          animation:
            nameReveal 1.15s
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }

        .page-loader__name span {
          display: inline-block;

          animation:
            nameFloat 4s
            ease-in-out
            infinite;
        }

        .page-loader__name span:nth-child(2) {
          animation-delay: 120ms;
        }

        /* ==================================================
           QUOTE
           ================================================== */

        .page-loader__quote {
          min-height: 26px;

          margin-top: 42px;

          max-width: 680px;

          padding: 0 20px;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: clamp(
            0.85rem,
            1.25vw,
            1.05rem
          );

          line-height: 1.5;

          font-weight: 400;

          letter-spacing: 0.01em;

          color: rgba(
            244,
            242,
            236,
            0.52
          );

          animation:
            quoteReveal 700ms
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }

        /* ==================================================
           PERCENTAGE
           ================================================== */

        .page-loader__percentage-wrapper {
          display: flex;
          align-items: baseline;

          margin-top: 58px;

          height: 112px;
        }

        .page-loader__percentage {
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: clamp(
            5.5rem,
            11vw,
            9rem
          );

          line-height: 0.85;

          font-weight: 800;

          letter-spacing: -0.07em;

          color: #f4f2ec;

          font-variant-numeric:
            tabular-nums;

          min-width: 2.25ch;

          text-align: right;
        }

        .page-loader__percentage-symbol {
          margin-left: 7px;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: clamp(
            1.5rem,
            2.5vw,
            2.2rem
          );

          font-weight: 400;

          color: rgba(
            244,
            242,
            236,
            0.45
          );
        }

        /* ==================================================
           PROGRESS LINE
           ================================================== */

        .page-loader__progress {
          position: relative;

          width: min(460px, 58vw);

          height: 1px;

          margin-top: 30px;

          overflow: hidden;

          background: rgba(
            244,
            242,
            236,
            0.16
          );
        }

        .page-loader__progress-fill {
          position: absolute;
          inset: 0;

          width: 100%;

          transform-origin: left center;

          background: #f4f2ec;

          will-change: transform;

          transition:
            transform 100ms
            linear;
        }

        /* ==================================================
           CORNER DETAIL
           ================================================== */

        .page-loader__corner {
          position: absolute;

          right: 28px;
          bottom: 24px;

          z-index: 3;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 10px;

          letter-spacing: 0.18em;

          color: rgba(
            244,
            242,
            236,
            0.3
          );
        }

        /* ==================================================
           ANIMATIONS
           ================================================== */

        @keyframes nameReveal {
          0% {
            opacity: 0;

            transform:
              translateY(90px)
              scale(0.94);

            filter: blur(14px);
          }

          60% {
            opacity: 1;
          }

          100% {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);

            filter: blur(0);
          }
        }

        @keyframes nameFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes quoteReveal {
          0% {
            opacity: 0;

            transform:
              translateY(8px);

            filter: blur(5px);
          }

          100% {
            opacity: 1;

            transform:
              translateY(0);

            filter: blur(0);
          }
        }

        @keyframes ambientPulse {
          0%,
          100% {
            opacity: 0.7;

            transform: scale(1);
          }

          50% {
            opacity: 1;

            transform: scale(1.04);
          }
        }

        /* ==================================================
           ACCESSIBILITY
           ================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .page-loader,
          .page-loader__name,
          .page-loader__name span,
          .page-loader__quote,
          .page-loader__ambient {
            animation: none !important;
            transition: none !important;
          }
        }

        /* ==================================================
           MOBILE
           ================================================== */

        @media (max-width: 600px) {
          .page-loader__name {
            flex-direction: column;

            align-items: center;

            gap: 0.08em;

            font-size: clamp(
              3.4rem,
              15vw,
              5.5rem
            );

            line-height: 0.78;
          }

          .page-loader__quote {
            margin-top: 34px;

            max-width: 330px;

            font-size: 0.85rem;
          }

          .page-loader__percentage-wrapper {
            margin-top: 48px;

            height: 90px;
          }

          .page-loader__progress {
            width: min(
              300px,
              70vw
            );

            margin-top: 22px;
          }

          .page-loader__corner {
            right: 18px;
            bottom: 18px;
          }
        }
      `}</style>
    </>
  );
}