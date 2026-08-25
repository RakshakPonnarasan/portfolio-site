import type { Metadata } from "next";
import PayanoPage from "./PayanoPage";

export const metadata: Metadata = {
  title: "Payano — Campus Ride-Sharing | Rakshak",
  description:
    "A campus ride-sharing experience designed to make finding, matching, and coordinating rides between students simpler. Product Design · UX/UI · Mobile.",
};

export default function Page() {
  return <PayanoPage />;
}
