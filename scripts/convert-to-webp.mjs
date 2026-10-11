import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));

console.log(`Found ${files.length} images to convert to WebP...`);

for (const file of files) {
  const inputPath = path.join(imagesDir, file);
  const baseName = file.replace(/\.(jpg|jpeg)$/i, '');
  const outputPath = path.join(imagesDir, `${baseName}.webp`);

  const initialStat = fs.statSync(inputPath);
  await sharp(inputPath)
    .webp({ quality: 82, effort: 5 })
    .toFile(outputPath);
  
  const finalStat = fs.statSync(outputPath);
  const savedPercent = Math.round((1 - finalStat.size / initialStat.size) * 100);
  console.log(`✓ ${file} (${Math.round(initialStat.size / 1024)}KB) -> ${baseName}.webp (${Math.round(finalStat.size / 1024)}KB) [Saved ${savedPercent}%]`);
  
  // Remove the old .jpg file
  fs.unlinkSync(inputPath);
}

console.log('All images converted to WebP and JPGs removed!');
