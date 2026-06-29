import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { UTApi, UTFile } from 'uploadthing/server';

const token = process.env.UPLOADTHING_TOKEN;

if (!token) {
  throw new Error('UPLOADTHING_TOKEN is required.');
}

const utapi = new UTApi();

const localAssets = [
  { id: 'logo', file: 'public/logo.svg', name: 'codxperts-logo.svg' },
  { id: 'faviconIco', file: 'public/favicon.ico', name: 'codxperts-favicon.ico' },
  { id: 'faviconSvg', file: 'public/favicon.svg', name: 'codxperts-favicon.svg' },
  { id: 'favicon32', file: 'public/favicon-32.png', name: 'codxperts-favicon-32.png' },
  { id: 'favicon16', file: 'public/favicon-16.png', name: 'codxperts-favicon-16.png' },
  { id: 'appleTouchIcon', file: 'public/apple-touch-icon.png', name: 'codxperts-apple-touch-icon.png' },
  { id: 'icon192', file: 'public/icon-192.png', name: 'codxperts-icon-192.png' },
  { id: 'icon512', file: 'public/icon-512.png', name: 'codxperts-icon-512.png' },
  { id: 'ogImagePng', file: 'public/og-image.png', name: 'codxperts-og-image.png' },
  { id: 'ogImageSvg', file: 'public/og-image.svg', name: 'codxperts-og-image.svg' },
];

const teamAvatars = [
  { id: 'danishGhaffar', url: 'https://unavatar.io/linkedin/danish-ghaffar-96b992220', name: 'danish-ghaffar-linkedin-avatar' },
  { id: 'atabicUmer', url: 'https://unavatar.io/linkedin/atabicumer', name: 'atabic-umer-linkedin-avatar' },
  { id: 'safeeullahSamir', url: 'https://unavatar.io/linkedin/safeeullah-samir', name: 'safeeullah-samir-linkedin-avatar' },
  { id: 'taimoorHashim', url: 'https://unavatar.io/linkedin/taimoor-hashim-23757a1b8', name: 'taimoor-hashim-linkedin-avatar' },
  { id: 'hammadEjaz', url: 'https://unavatar.io/linkedin/hammad-ejaz-7a5b80243', name: 'hammad-ejaz-linkedin-avatar' },
  { id: 'muhammadAhmad', url: 'https://unavatar.io/linkedin/muhammad-ahmad-782b34262', name: 'muhammad-ahmad-linkedin-avatar' },
  { id: 'amnaImranNagi', url: 'https://unavatar.io/linkedin/amna-imran-nagi-71817b245', name: 'amna-imran-nagi-linkedin-avatar' },
  { id: 'talhaIjlal', url: 'https://unavatar.io/linkedin/talhaijlal', name: 'talha-ijlal-linkedin-avatar' },
  { id: 'abdullahAmjad', url: 'https://unavatar.io/linkedin/abdullah-amjad-1-', name: 'abdullah-amjad-linkedin-avatar' },
  { id: 'syedAbdulRehman', url: 'https://unavatar.io/linkedin/syed-abdr', name: 'syed-abdul-rehman-linkedin-avatar' },
  { id: 'hamidShahid', url: 'https://unavatar.io/linkedin/hamid-shahid-579531253', name: 'hamid-shahid-linkedin-avatar' },
];

const extensionFromType = (contentType) => {
  const type = contentType.split(';')[0].trim().toLowerCase();
  if (type === 'image/svg+xml') return 'svg';
  if (type === 'image/jpeg') return 'jpg';
  if (type === 'image/png') return 'png';
  if (type === 'image/webp') return 'webp';
  if (type === 'image/gif') return 'gif';
  if (type === 'image/x-icon' || type === 'image/vnd.microsoft.icon') return 'ico';
  return 'bin';
};

const uploadedUrl = (result) => {
  if (result.error) {
    throw new Error(result.error.message ?? JSON.stringify(result.error));
  }

  return result.data.ufsUrl ?? result.data.url ?? result.data.appUrl;
};

const uploadLocalAssets = async () => {
  const files = await Promise.all(localAssets.map(async (asset) => {
    const buffer = await readFile(asset.file);
    return new UTFile([buffer], asset.name, { customId: asset.id });
  }));

  const results = await utapi.uploadFiles(files, { concurrency: 4 });

  return Object.fromEntries(results.map((result, index) => [localAssets[index].id, uploadedUrl(result)]));
};

const uploadTeamAvatars = async () => {
  const files = [];

  for (const avatar of teamAvatars) {
    const response = await fetch(avatar.url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${avatar.id}: ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    const extension = extensionFromType(contentType);
    const arrayBuffer = await response.arrayBuffer();

    files.push(new UTFile([arrayBuffer], `${avatar.name}.${extension}`, {
      type: contentType,
      customId: `team-${avatar.id}`,
    }));
  }

  const results = await utapi.uploadFiles(files, { concurrency: 4 });

  return Object.fromEntries(results.map((result, index) => [teamAvatars[index].id, uploadedUrl(result)]));
};

const [site, team] = await Promise.all([
  uploadLocalAssets(),
  uploadTeamAvatars(),
]);

await writeFile(
  path.join('src', 'data', 'uploaded-assets.ts'),
  `export const uploadedAssets = ${JSON.stringify({ site, team }, null, 2)} as const;\n`,
);

console.log(`Uploaded ${Object.keys(site).length} site assets and ${Object.keys(team).length} team avatars.`);
