import type { Metadata } from "next";
import FrameHousePage from "./FrameHousePage";

export const metadata: Metadata = {
  title: "FrameHouse — Creator Studio Discovery & Booking | Rakshak",
  description:
    "A creator-first platform for discovering, comparing, and booking production studios. Product Design · Web · Booking.",
};

export default function Page() {
  return <FrameHousePage />;
}
