import type { NextConfig } from 'next'

// Auto-detects repo name from GitHub Actions environment
// Works for both username.github.io repos (no basePath) and project repos
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGitHubActions = !!process.env.GITHUB_ACTIONS

// Set to '' if your repo is named <username>.github.io
// Otherwise GitHub Actions will auto-detect the repo name
const basePath = isGitHubActions && repo !== 'ananttripathi.github.io' ? `/${repo}` : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
