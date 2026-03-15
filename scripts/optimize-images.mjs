import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, "Resources", "Photos");
const outputDir = path.join(projectRoot, "src", "assets", "photos");

const images = [
  {
    input: "Axalta 2024-MN-6.jpg",
    output: "headshot.webp",
    width: 1400,
    quality: 74,
  },
  {
    input: "axalta.jpg",
    output: "lab.webp",
    width: 1600,
    quality: 72,
  },
  {
    input: "thunky_storage.jpg",
    output: "hobby.webp",
    width: 1400,
    quality: 70,
  },
  {
    input: "wayne.jpeg",
    output: "wayne.webp",
    width: 1200,
    quality: 76,
  },
];

await fs.mkdir(outputDir, { recursive: true });

await Promise.all(
  images.map(async ({ input, output, width, quality }) => {
    const inputPath = path.join(sourceDir, input);
    const outputPath = path.join(outputDir, output);

    await sharp(inputPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);
  }),
);

console.log(`Optimized ${images.length} images into ${path.relative(projectRoot, outputDir)}`);
