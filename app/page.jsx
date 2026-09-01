"use client";

import Link from "next/link";
import { Box, Button, Card, Heading, Text } from "theme-ui";
import InfoBox from "@/app/Components/InfoBox";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        bg: "sunken",
        p: 3,
      }}
    >
      <Card
        variant="primary"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid",
          borderColor: "text",
          maxWidth: "layout",
          width: "100%",
          p: 4,
        }}
      >
        <Heading
          as="h1"
          variant="text.ultratitle"
          sx={{ fontSize: ["28px", 5], color: "text", lineHeight: 1.3 }}
        >
          Welcome to Highlands YSWS!
        </Heading>
        <Text variant="lead" sx={{ color: "secondary" }}>
          Check out #highlands on Slack and scroll down for more info!
        </Text>
        <Button
          as={Link}
          href="https://link.aregus.me/highlands-rsvp"
          variant="lg"
          sx={{ mt: 2, fontSize: [2, 3] }}
        >
          RSVP Now!
        </Button>
      </Card>
      <InfoBox Header="What's this about?">
        Highlands is a mountain themed YSWS where you code or do hardware, climb
        digital mountains and earn prizes such as hiking gear, earphones, 3d
        printers, and more + a chance to get invited to an IRL hackathon in
        Armenia.
      </InfoBox>

      <InfoBox Header="What is the Highlands Challenge?">
        The optional Highlands challenge is about climbing mountains through
        time spent working on code and/or hardware projects and receiving extra
        shop currency after completing one. A mountain will feature multiple
        stages to complete with different time requirements and limits.
      </InfoBox>

      <InfoBox Header="Where is Armenia?">
        Armenia is in the Southern Caucasus, between Iran, Georgia, and Turkey!
        Armenia is considered the 10th most mountainous nation, hence the name
        &quot;Highlands.&quot; I would like this YSWS to happen in Yerevan, the
        capital, because it provides the most flexibility. Flights are available
        from European, Central Asian, and Middle Eastern cities, and it&apos;s
        visa-free for most nations.
      </InfoBox>

      <InfoBox Header="Is there anything in Yerevan?">
        There are a lot of places to visit in Yerevan. Most famous sites in
        Yerevan include the cascade complex, Tsitsernakaberd, Republic Square,
        The National History Museum, the Opera, and more outside of Yerevan
      </InfoBox>
    </Box>
  );
}
