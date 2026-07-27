import 'dotenv/config';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { buildJourneyBlueprint } from '../lib/sre/buildBlueprint';
import { sampleAnswers } from '../config/sampleAnswers';
import { prisma } from '../lib/db/client';

async function main() {
  const blueprint = await buildJourneyBlueprint(sampleAnswers);
  const outputPath = path.join(__dirname, '../config/demo-blueprint.json');
  writeFileSync(outputPath, JSON.stringify(blueprint, null, 2));
  console.log(`Wrote frozen demo blueprint to ${outputPath}`);
}

main()
  .catch((error) => {
    console.error('Failed to generate demo blueprint:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });