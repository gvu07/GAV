# Personalizing the Portfolio for Giang Anh Vu

Use this checklist to replace the existing "Anthony Fu" branding with your own identity. Each task is bite-sized so you can complete them sequentially until the site is fully personalized.

## 1. Gather Personal Content
- [x] Decide on the final display name (`Giang Anh Vu`) and any preferred initials. DONE
- [ ] Draft short and extended bios (hero paragraph + about section).
- [ ] List roles, employers, or communities you want to highlight.
- [ ] Collect the project, talk, post, photo, podcast, and media entries you want to showcase, with URLs, descriptions, and assets.
- [ ] Compile your active social and contact links (GitHub, LinkedIn, email, etc.).
- [ ] Decide whether you want sponsorship/donation information; gather relevant links if yes.

## 2. Update Global Metadata and Branding
- [ ] Edit `src/app/layout.tsx` metadata (`title`, `description`) to use “Giang Anh Vu” and your tagline.
- [ ] Replace any remaining `Anthony Fu` text or URLs across `src/`, `public/`, and config files (e.g., `public/feed.xml`).
- [ ] Update the favicon/OG assets if you have new ones (adjust the `<link rel="icon">` in `layout.tsx` and any OG image references).

## 3. Personalize the Home Page (`src/app/page.tsx`)
- [ ] Change hero heading to “Giang Anh Vu”.
- [ ] Replace the opening paragraph with your own bio.
- [ ] Swap out the “Working at” section with your employers, affiliations, or remove it if not needed.
- [ ] Update “Creator of”, “Core team of”, and “Maintaining” sections with your own projects or repurpose them (remove unused rows if you don’t need them).
- [ ] Refresh the narrative paragraphs (interests, hobbies, recent moves) with your personal story.
- [ ] Replace all social/contact links with your own (or remove irrelevant ones).
- [ ] Update sponsor call-to-action wording and links, or remove the block if you do not accept sponsorships.
- [ ] Change footer attribution to your name and the appropriate date range.

## 4. Revise Navigation and Shared Components
- [ ] In `src/components/Header.tsx`, update outbound icons/links (e.g., GitHub, Bluesky) to your profiles.
- [ ] Adjust any shared components that reference Anthony’s handles (search for `antfu` and replace or remove).
- [ ] Confirm the `ThemeToggle` and other shared UI elements still behave as expected.

## 5. Refresh Secondary Pages
- [ ] `src/app/projects/page.tsx`: replace the project list with your own projects (names, descriptions, logos).
- [ ] `src/app/podcasts/page.tsx`, `photos/page.tsx`, `media/page.tsx`, `talks/page.tsx`, `demos/page.tsx`, `posts/page.tsx`: update the sample data or prune sections you don’t plan to use.
- [ ] `src/app/posts/[slug]/page.tsx`: adjust any default content, metadata, or placeholders for blog posts.
- [ ] Review `src/app/sponsors-list/page.tsx` if you plan to keep sponsorship; update descriptions and links accordingly.

## 6. Audit Static Assets and Legacy References
- [ ] Update `public/feed.xml` with your name, site URL, and post listings (or regenerate via your CMS workflow).
- [ ] Replace any imported external images/logos pointing to Anthony’s CDN with your own assets stored in `public/`.
- [ ] Clear out `Clone1_Resources/` if those Anthony-specific assets are no longer required.

## 7. Documentation and Configuration
- [ ] Update `README.md` to describe your personalized portfolio, deployment details, and contact info.
- [ ] Review `next.config.js`, `netlify.toml`, or other deployment configs for references to antfu/Anthony.
- [ ] Adjust analytics, if any, to point to your accounts (search for tracking IDs).

## 8. Quality Assurance
- [ ] Run `bun install` (if needed) to ensure dependencies are up-to-date.
- [ ] Start the dev server (`bun dev` or `npm run dev`) and manually test every page for broken links or stale references.
- [ ] Lint (`bun run lint` or equivalent) and format the project to confirm code quality.
- [ ] Commit changes with a message like `feat: personalize site for giang anh vu`.

Progress through the checklist from top to bottom. After finishing a section, re-scan the site for any lingering references to “Anthony Fu” and confirm everything reflects your new branding.

