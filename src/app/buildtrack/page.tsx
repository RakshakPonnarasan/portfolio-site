import type { Metadata } from "next";
import BuildTrackPage from "./BuildTrackPage";

export const metadata: Metadata = {
  title: "BuildTrack — Iteration Management for Game Development | Rakshak",
  description:
    "Connecting features, builds, and playtest feedback into one iteration workflow. Product Design · Web · Workflow.",
};

export default function Page() {
  return <BuildTrackPage />;
}
