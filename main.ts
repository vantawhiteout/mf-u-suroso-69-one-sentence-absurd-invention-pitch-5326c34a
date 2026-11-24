import { mkdirSync, writeFileSync } from "node:fs";

// One sentence: the annoyance, the absurd invention, and its silly mechanism.
const pitch =
  "For the bus you always miss by three seconds, a bus stop drops a velvet rope when it sees you running and detains you until the bus arrives.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
