# MakersCreate — Full Product Specification
> A YSWS (You Ship We Ship) program where participants complete a set number of hours making 3D-printable projects and earn a free 3D printer.
> Organisation: Yamauchi No.10 Family Office team
> Built in phases. Each phase = a separate prompt/agent session.

---

## 0. OVERVIEW & CONCEPT

**What is MakersCreate?**
MakersCreate is a YSWS (You Ship We Ship) event. Participants complete a target number of hours building and designing 3D-printable projects. Once they hit the hour threshold, they earn a free 3D printer shipped to them.

**Core Loop:**
1. Participant signs up via Hack Club Slack OAuth
2. They create and log 3D-printable projects, tracking time per project
3. Each project must meet a minimum hour requirement to count
4. Once total logged hours reach the program threshold, they are marked eligible
5. They submit a shipping form and receive their 3D printer

**Primary Reference — Construct (construct.hackclub.com):**
Construct is a Hack Club YSWS where teens spend 40 hours doing CAD projects to earn a free 3D printer. MakersCreate follows a similar logic but:
- Is NOT limited to CAD — any 3D-printable project counts (sculpture, functional parts, art, mechanical assemblies, etc.)
- Has its own distinct brand, visual identity, and site structure
- Is run by the Yamauchi No.10 Family Office team, not Hack Club directly (though it integrates Hack Club auth)
- Will be built in phases, one page/feature per agent session

---

## 1. PROGRAM RULES (TO BE FINALISED — PLACEHOLDERS MARKED)

### Eligibility
- Must be a member of the Hack Club Slack community
- Must have verified identity via Hack Club's identity platform (auth.hackclub.com)
- Age range: TBD (likely 13–18, matching Hack Club standard)
- Must not be banned from Hackatime (Hack Club's time tracking tool)

### Project Rules
- Every project submitted must be **3D printable** — this is the only hard constraint on project type
- Minimum hours per individual project: TBD (Construct uses 1 hour minimum per project)
- Time must be tracked using the site's built-in journaling/logging feature
- Projects should be uploaded to a public platform (e.g. Printables, Thingiverse, or MakerWorld) once complete — link required on submission
- No restriction on software/tool used to design the model (unlike Construct which uses approved editors only) — TBD if this changes

### Completion Threshold
- Total hour target to earn the printer: **TBD** (Construct uses 40 hours)
- Hours are only counted from approved/reviewed projects that meet the minimum per-project hour rule
- Program end date: **TBD** (no deadline set yet — could be rolling or event-based)

### Reward
- One free 3D printer per eligible participant
- Printer model/choice options: TBD
- Shipping eligibility (regions): TBD

---

## 2. TECH STACK DECISIONS

These are recommendations for the agent building each phase. Adjust per preference.

| Layer | Recommendation | Notes |
|---|---|---|
| Frontend | SvelteKit or Next.js | SvelteKit preferred for clean minimal UI |
| Styling | Tailwind CSS | Minimal config, utility-first |
| Auth | Hack Club OAuth / Slack OAuth | Same as Construct — use auth.hackclub.com |
| Database | Postgres (via Supabase or PlanetScale) | Store users, projects, time logs |
| ORM | Prisma | Clean schema management |
| Hosting | Vercel or Netlify | Easy CI/CD |
| Time Tracking | Custom journaling UI (no Hackatime dependency) | Log hours manually per project session |

---

## 3. VISUAL DESIGN LANGUAGE

**Overall Vibe:** Clean, minimal, editorial — inspired by y-n10.com (Yamauchi No.10 Family Office website).

### Aesthetic Principles
- Lots of negative (white/dark) space — content breathes, never cramped
- Typography does the heavy lifting — no reliance on illustrations or busy graphics
- Monochromatic base palette with one accent color (TBD — could be a warm amber or ink blue)
- No gradients, no drop shadows, no rounded corners unless intentional
- Sections are clearly numbered (01, 02, 03…) in an editorial style
- Bold section headers, light body text
- Bilingual aesthetic is NOT required (site is English only) but the typographic discipline from y-n10 should be maintained

### Typography
- Headings: Serif or high-contrast sans-serif (e.g. Playfair Display, Editorial New, or PP Neue Montreal)
- Body: Clean grotesque (e.g. Inter, DM Sans, or Geist)
- Monospace accents for numbers, hour counts, timestamps (e.g. JetBrains Mono, Geist Mono)
- Type scale: Large, deliberate. Section numbers very large and light. Body text comfortable size (16–18px)

### Color Palette (Suggested — finalise per phase)
- Background: Off-white (#F7F5F0) or near-black (#0F0F0F) for dark mode
- Text: Near-black (#111111) or near-white (#EFEFEF)
- Accent: TBD — one color only, used sparingly (e.g. a clay orange or deep teal)
- Borders/dividers: Very subtle, thin (1px, low-opacity)

### Motion & Interaction
- Subtle scroll-triggered fade-ins (not aggressive)
- No loaders or spinners unless genuinely needed
- Hover states: underline shift or color opacity change — nothing dramatic
- Page transitions: soft fade or none
- Sound: NOT required (unlike y-n10.com — MakersCreate is a functional app, not a brand experience site)

---

## 4. SITE ARCHITECTURE — PHASES

The site is built in phases. Each phase is a separate build session. Below is the full intended architecture broken into phases.

---

### PHASE 1 — Landing Page

**Purpose:** Explain what MakersCreate is, get people excited, drive sign-ups.

**URL:** `/`

**Sections (in order):**

#### Hero
- Full-viewport section
- Large typographic headline — something like: *"Make things. Get a printer."* or *"Ship hours. Earn your printer."*
- Subheadline: one sentence explaining the program (X hours of 3D-printable projects = free 3D printer)
- CTA button: "Get Started" → triggers Hack Club Slack OAuth login
- Subtle background: could be a very faint grid, a 3D wireframe render, or just pure negative space

#### What is this? (Section 01)
- Editorial section explaining the program concept
- Short, punchy paragraphs — not a wall of text
- Could include a simple visual showing the loop: Design → Log Hours → Earn Printer

#### How it works (Section 02)
- Step-by-step breakdown (numbered, editorial style):
  1. Sign up with Hack Club
  2. Build 3D-printable projects
  3. Log your hours per project
  4. Hit the hour threshold
  5. Claim your free 3D printer
- Clean numbered list layout, large step numbers

#### Rules & Eligibility (Section 03)
- Eligibility criteria (age, Hack Club membership, identity verification)
- Project rules (must be 3D printable, minimum hours per project, upload requirement)
- FAQ accordion (expandable Q&A):
  - Is this free?
  - What counts as a 3D printable project?
  - What software can I use?
  - How do I track my hours?
  - When do I get my printer?
  - What printer do I get?

#### Footer
- Program name + org credit (Yamauchi No.10 Family Office)
- Links: GitHub repo (if open source), Hack Club, Contact/email
- No cookie banners, no newsletter signup

**Design Notes for Phase 1:**
- No navbar needed — single scroll page
- The "Get Started" / Login CTA should appear both in the hero AND sticky at the bottom or repeated at the end
- Section numbers (01, 02, 03) displayed large and light, like y-n10.com
- Once logged in, the CTA changes to "Go to Dashboard"

---

### PHASE 2 — Authentication Flow

**Purpose:** Let users log in via Hack Club Slack OAuth and verify identity.

**Flow:**
1. User clicks "Get Started" on landing page
2. Redirected to Hack Club OAuth (auth.hackclub.com)
3. On success, redirected back to `/dashboard`
4. If first time: show a brief onboarding screen (name confirmation, acknowledge rules)
5. If returning: go straight to dashboard

**Onboarding Screen (first login only):**
- Welcome message with their Slack display name
- Brief rules summary (3–4 bullet points)
- Checkbox: "I understand the project requirements"
- Button: "Start Making" → saves to DB, redirects to `/dashboard`

**Database records created on first login:**
- `user` record: slack_id, display_name, avatar_url, joined_at, is_eligible (bool), hours_total
- Session/cookie set for auth persistence

---

### PHASE 3 — Dashboard

**Purpose:** The participant's home base. Shows progress, projects, and actions.

**URL:** `/dashboard`

**Layout:**
- Clean, minimal. White/off-white background, black text.
- Left sidebar (desktop) or top nav (mobile) with: Dashboard, My Projects, Submit Claim
- Main content area

**Components:**

#### Progress Bar / Hours Counter
- Large, prominent display of current total hours vs. target (e.g. "23.5 / 40 hours")
- Visual progress bar — thin, minimal, uses accent color
- Below it: "[X] hours to go" or "🎉 You're eligible!" if threshold met
- Hours are summed from all approved projects

#### Quick Stats
- Total projects submitted
- Projects under review
- Projects approved
- Hours logged this week (nice to have)

#### Recent Projects (list)
- Shows last 3–5 projects with: title, hours logged, status badge (Pending / Approved / Rejected)
- "View all projects" link → `/dashboard/projects`

#### CTA Area
- If not yet eligible: "Add a New Project" button (prominent)
- If eligible: "Claim Your Printer" button (prominent, accent color)

---

### PHASE 4 — Project Submission & Logging

**Purpose:** Let participants add projects, log time, and write journal entries.

**URL:** `/dashboard/projects` (list) and `/dashboard/projects/new` (submission form)

**Project List Page:**
- Table or card grid of all submitted projects
- Columns/fields: Project Name, Hours, Status, Date Submitted, Actions
- Filter by status (All / Pending / Approved / Rejected)
- "Add New Project" button top right

**New Project Form (`/dashboard/projects/new`):**

Fields:
- **Project Title** — text input
- **Description** — textarea (what did you make? what is it for? is it printable as-is?)
- **Project Type** — dropdown or tags (e.g. Functional, Decorative, Art, Mechanical, Prototype, Other)
- **Files / Model Link** — URL field pointing to Printables / Thingiverse / MakerWorld / GitHub etc.
- **Total Hours Logged** — number input (auto-calculated from journal entries if using journal feature, OR manual entry)
- **Journal Entries** — repeatable time log entries, each with:
  - Date
  - Hours spent (e.g. 1.5)
  - Notes (what did you work on in this session?)
- **Screenshots / Photos** — file upload (optional but encouraged, max 5 images)

Validation:
- Project must have at least the minimum hour count (TBD) to be submitted
- Model link is required
- At least one journal entry required

On Submit:
- Project saved with status = "Pending"
- User sees confirmation: "Project submitted! We'll review it shortly."
- Dashboard hours counter does NOT increase until project is Approved

**Project Detail Page (`/dashboard/projects/[id]`):**
- Shows all submitted info
- Shows status + any reviewer notes (if rejected with feedback)
- If Pending: "Edit" button (can edit until reviewed)
- If Approved: locked, shows approval date
- If Rejected: shows reason, "Resubmit" button

---

### PHASE 5 — Admin / Review Panel

**Purpose:** Allow organizers (MakersCreate team) to review and approve/reject projects.

**URL:** `/admin` (protected route — admin role only)

**Admin Dashboard:**
- Count of: pending reviews, total participants, total eligible participants
- List of all pending project submissions

**Project Review View:**
- Shows full project details (title, description, hours, journal entries, photos, model link)
- External link to model (Printables etc.) to verify it's real and 3D printable
- Two actions: **Approve** (with optional note) or **Reject** (requires reason text)
- On Approve: project status → Approved, user's total hours recalculated, eligibility flag checked
- On Reject: project status → Rejected, rejection reason stored, user notified (TBD — email or in-app)

**Admin User List:**
- View all participants
- See their hours, project count, eligibility status
- Ability to manually override eligibility (edge cases)

**Access Control:**
- Admin role stored in DB (`user.role = 'admin'`)
- Middleware check on all `/admin/*` routes
- Only pre-approved Slack IDs can be admin (seeded in DB or set via env config)

---

### PHASE 6 — Printer Claim Flow

**Purpose:** Once eligible, let participants submit their shipping details to claim their printer.

**URL:** `/dashboard/claim`

**Trigger:**
- "Claim Your Printer" button appears on dashboard only when `user.is_eligible = true`

**Claim Form:**
- Full legal name
- Email address
- Shipping address (line 1, line 2, city, state/region, postal code, country)
- Phone number (for shipping carrier)
- Printer preference (if multiple options available — TBD)
- Acknowledgement checkbox: "I confirm my details are correct and I am eligible"

On Submit:
- Claim record saved to DB with status = "Submitted"
- User sees: "Claim received! We'll be in touch via email."
- Admin notified of new claim

**Admin Claim Management:**
- View all submitted claims
- Mark as: Processing → Shipped (with tracking number input) → Delivered
- Tracking number shown to user on their claim status page

---

### PHASE 7 — Public Project Gallery (Optional / Nice to Have)

**Purpose:** Showcase what participants have made. Builds social proof and community.

**URL:** `/gallery`

**Features:**
- Public grid of all approved projects
- Each card shows: project photo (if uploaded), title, maker's name, hours spent
- Filter by project type tag
- Click a card → project detail page (public view, no edit controls)
- No login required to browse

---

## 5. DATABASE SCHEMA (Suggested)

```
User
- id (uuid)
- slack_id (string, unique)
- display_name (string)
- avatar_url (string)
- email (string, nullable)
- role (enum: participant | admin)
- is_eligible (bool, default false)
- hours_total (float, computed from approved projects)
- claim_submitted (bool)
- joined_at (timestamp)
- onboarded_at (timestamp, nullable)

Project
- id (uuid)
- user_id (foreign key → User)
- title (string)
- description (text)
- project_type (string)
- model_url (string)
- hours_logged (float)
- status (enum: pending | approved | rejected)
- reviewer_note (text, nullable)
- reviewed_at (timestamp, nullable)
- submitted_at (timestamp)
- photos (string[], array of URLs)

JournalEntry
- id (uuid)
- project_id (foreign key → Project)
- date (date)
- hours (float)
- notes (text)

Claim
- id (uuid)
- user_id (foreign key → User, unique)
- full_name (string)
- email (string)
- address_line1 (string)
- address_line2 (string, nullable)
- city (string)
- region (string)
- postal_code (string)
- country (string)
- phone (string)
- printer_preference (string, nullable)
- status (enum: submitted | processing | shipped | delivered)
- tracking_number (string, nullable)
- submitted_at (timestamp)
```

---

## 6. KEY UX PRINCIPLES FOR ALL PHASES

- **Never make the user feel lost.** Every page should have a clear next action.
- **Progress should always be visible.** The hours counter and eligibility state should be accessible everywhere inside the dashboard (sidebar/header).
- **Rejection should not feel punishing.** If a project is rejected, the UI should be warm and constructive — show the reviewer's note clearly, offer a clear "revise and resubmit" path.
- **Mobile first.** Many participants will be on phones.
- **No unnecessary friction.** The project submission form should be easy and fast. Don't ask for things you don't need.
- **Empty states matter.** When a user has no projects yet, don't show a blank table. Show an encouraging empty state with a clear "Add your first project" CTA.

---

## 7. COPY / TONE OF VOICE

- **Not corporate.** Warm, direct, encouraging.
- **Not over-the-top hype.** Not "LET'S GOOOO 🚀🔥" energy. More: calm confidence.
- **Maker-respecting.** The copy should treat participants as capable builders, not children being handed candy.
- **Short sentences.** Like the y-n10.com copy — punchy, deliberate, no fluff.

Example headline directions:
- "Make things. Earn your printer."
- "40 hours. One printer. Yours to keep."
- "Build anything. As long as it prints."
- "Ship hours. Get hardware."

---

## 8. THINGS STILL TO DECIDE (FILL BEFORE EACH PHASE)

| Decision | Status |
|---|---|
| Hour threshold to earn printer | TBD |
| Minimum hours per project | TBD |
| Printer model(s) offered | TBD |
| Eligible countries for shipping | TBD |
| Program end date / deadline | TBD |
| Whether to require approved editor/software | TBD |
| Public gallery — yes or no | TBD |
| Notification method (email vs in-app vs Slack DM) | TBD |
| Open source / public GitHub repo | TBD |
| Domain name | TBD (e.g. makerscreate.hackclub.com or makerscreate.com) |
| Accent color | TBD |
| Font choices (finalize) | TBD |

---

*Document prepared for MakersCreate YSWS — Yamauchi No.10 Family Office team*
*Use this as the master brief when starting each new agent/phase session.*
