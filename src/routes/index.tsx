import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/invitation/Hero";
import { InvitationDetails } from "@/components/invitation/InvitationDetails";
import { RestaurantSection } from "@/components/invitation/RestaurantSection";
import { SurpriseSection } from "@/components/invitation/SurpriseSection";
import { AcceptanceSection } from "@/components/invitation/AcceptanceSection";
import { FinalMessage } from "@/components/invitation/FinalMessage";

const title = "Rossy, ¿cenamos juntos mañana? · La Parrilla Brava";
const description =
  "Una invitación a cenar para dos en La Parrilla Brava, el sábado 5 de septiembre a las 20:00.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <Hero />
      <InvitationDetails />
      <RestaurantSection />
      <SurpriseSection />
      <AcceptanceSection />
      <FinalMessage />
    </main>
  );
}
