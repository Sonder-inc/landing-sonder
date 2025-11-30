
<high_level_design>
# 1. Brand & Art Direction Overview

This is a sophisticated, dark-themed SaaS product website for "Aside" - an AI-powered sales enablement tool. The design employs a premium, tech-forward aesthetic with:

- **Dark Mode Foundation**: Pure black (#000000) backgrounds throughout with strategic use of transparency and layering
- **Glassmorphic UI Elements**: Heavily featured "liquid glass" effects with blur, transparency, and subtle gradients creating depth
- **Premium Desktop Software Aesthetic**: Mimics macOS interface elements (menubar, window chrome) to suggest native app quality
- **Vibrant Accent Colors**: Bright emerald green (#10B981) as primary CTA color, with gradient overlays (pink/purple/blue) for visual interest
- **Minimalist Typography**: Clean, modern sans-serif hierarchy with generous whitespace
- **Micro-interactions**: Subtle animations, audio visualizers, and state transitions
- **Product-in-Context**: Extensive use of mockups showing the interface in realistic usage scenarios

The overall impression is sleek, professional, and cutting-edge - targeting B2B sales teams with an emphasis on privacy and sophistication.

# 2. Color Palette (Dark Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| Background Primary | #000000 | Main page background | Pure black |
| Background Secondary | #0A0A0A - #121212 | Card backgrounds, elevated surfaces | Subtle variation |
| Glass Effect Base | rgba(0,0,0,0.15) - rgba(0,0,0,0.30) | Glassmorphic overlays | Combined with blur |
| Text Primary | #FFFFFF | Headings, primary content | White |
| Text Secondary | rgba(255,255,255,0.60) - rgba(255,255,255,0.70) | Body text, descriptions | 60-70% opacity white |
| Text Tertiary | rgba(255,255,255,0.40) - rgba(255,255,255,0.50) | Subtle labels, metadata | 40-50% opacity white |
| Primary CTA | #10B981 | Buttons, primary actions | Emerald green |
| Primary CTA Hover | #059669 | Button hover states | Darker emerald |
| Accent Gradient 1 | Linear: Pink → Purple → Blue | Decorative backgrounds | Soft multi-color gradient |
| Accent Gradient 2 | #10B981 → Emerald variants | Subtle UI accents | Green-based gradients |
| Border Subtle | rgba(255,255,255,0.10) - rgba(255,255,255,0.15) | Dividers, card borders | 10-15% opacity |
| Border Emphasis | rgba(255,255,255,0.20) - rgba(255,255,255,0.30) | Glass borders, emphasized borders | Top borders with 20-30% opacity |
| Shadow Dark | rgba(0,0,0,0.5) - rgba(0,0,0,0.8) | Drop shadows | Heavy shadows for depth |
| MacOS Chrome Tan | #D4C5A9 - Tan/Beige | macOS menubar background | Desktop mockup |
| Orange Badge | #FF6B35 - #FF7A50 | Y Combinator branding | Accent color |

# 3. Typography Scale

**Font Families:**
- **Display/Headings**: "PPEditorialNew" (custom serif-style display font) OR "Satoshi" (sans-serif)
- **Body/UI**: "Inter" (sans-serif)
- **Monospace**: "DM Mono" (for code/technical)

**Type Scale:**

| Element | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---------|------|------|--------|-------------|----------------|-------|
| Hero H1 | PPEditorialNew/Satoshi | 40px / 48px (lg: 52px-56px) | 450-500 | 1.0-1.1 | -0.02em | Large display |
| Section H2 | Sans-serif | 32px-36px | 500-600 | 1.1-1.2 | -0.015em | Section headers |
| H3 | Sans-serif | 24px-28px | 500-600 | 1.2 | -0.01em | Subsection |
| Body Large | Inter | 18px-20px | 400-500 | 1.5 | 0 | Hero descriptions |
| Body | Inter | 15px-16px | 400-500 | 1.5-1.6 | 0 | Standard text |
| Body Small | Inter | 14px | 400-500 | 1.4-1.5 | 0 | Secondary info |
| Caption | Inter | 12px | 400-500 | 1.3 | 0 | Metadata, labels |
| Label Small | Inter | 10px-11px | 500-600 | 1.2 | 0 | Tiny labels |
| Button | Inter | 14px-16px | 500-600 | 1 | 0 | CTA text |
| Nav Link | Inter | 14px | 500 | 1 | 0 | Navigation |

**Font Loading:**
Custom fonts loaded via CSS modules with variable font support

# 4. Spacing & Layout Grid

**Container System:**
- Max width: 1280px (`max-w-(--breakpoint-xl)`)
- Horizontal padding: 24px mobile / 32px-64px desktop
- Centered with `mx-auto`

**Spacing Scale (Tailwind-based):**
- 0.5 = 2px
- 1 = 4px
- 1.5 = 6px
- 2 = 8px
- 3 = 12px
- 4 = 16px
- 5 = 20px
- 6 = 24px
- 8 = 32px
- 10 = 40px
- 12 = 48px
- 16 = 64px
- 20 = 80px

**Section Spacing:**
- Section padding top: 48px mobile / 80px desktop
- Section padding bottom: 40px mobile / 80px desktop
- Gap between sections: 80px-120px

**Component Spacing:**
- Card padding: 12px-20px
- Button padding: 16px-24px horizontal, 10px-12px vertical
- Icon size: 16px (size-4), 20px (size-5), 24px (size-6)
- Border radius: 12px (rounded-xl), 24px (rounded-3xl for pills)

**Grid System:**
- Two-column layout for feature sections (text left, visual right)
- Responsive: stacks to single column on mobile

# 5. Visual Effects & Treatments

**Glassmorphism (Signature Effect):**
- Background: `rgba(0,0,0,0.15)` to `rgba(0,0,0,0.30)`
- Backdrop blur: 20px-40px
- Border top: 1px solid rgba(255,255,255,0.30)
- Box shadow: `0 20px 40px rgba(0,0,0,0.5)` - heavy drop shadows
- Border radius: 24px (rounded-3xl)

**Shadows:**
- Subtle: `shadow-xs` - minimal elevation
- Medium: `shadow-lg` - 0 10px 20px rgba(0,0,0,0.3)
- Heavy: `shadow-2xl` - 0 25px 50px rgba(0,0,0,0.5)

**Borders:**
- Subtle dividers: 1px solid rgba(255,255,255,0.10)
- Card borders: 1px solid rgba(255,255,255,0.15)
- Emphasized borders: 1px solid rgba(255,255,255,0.20)

**Border Radius:**
- Small: 8px (rounded-lg)
- Medium: 12px (rounded-xl)
- Large: 16px (rounded-2xl)
- Pill: 24px-999px (rounded-3xl / rounded-full)

**Gradients:**
- Multi-color soft gradient: `linear-gradient(135deg, rgba(255,100,150,0.3), rgba(150,100,255,0.3), rgba(100,150,255,0.3))`
- Emerald gradient: `linear-gradient(to-br, #10B981, #059669)`
- Fade overlays: `linear-gradient(to-b, transparent 75%, rgba(16,185,129,0.15))`

**Animations:**
- Audio bars: Custom keyframe animations (audioBar1, audioBar2, audioBar3) with staggered delays
- Transitions: `transition-all` with 200-300ms duration
- Hover effects: Scale 1.02-1.05, opacity changes

**Blur Effects:**
- Backdrop blur: `backdrop-blur-xl` (20px)
- Background blur on glass elements
- SVG displacement map filters for liquid glass distortion

# 6. Component Styles

**Navigation Bar:**
- Fixed position, top: 0, z-index: 50
- Height: 56px (h-14)
- Background: transparent initially, becomes opaque on scroll
- Border bottom: 1px transparent initially
- Glassmorphic when active
- Logo: SVG, height 24px-28px
- Links: 14px medium weight, rounded-full pills with hover bg
- CTA button: Primary emerald green, rounded-full

**Buttons:**
- **Primary CTA**: 
  - Background: #10B981
  - Color: White
  - Padding: 16px-24px horizontal, 10px-12px vertical
  - Border radius: 999px (fully rounded)
  - Font: 14-16px, weight 500-600
  - Hover: Darken to #059669, subtle scale
  - Shadow: subtle
  
- **Ghost/Secondary**:
  - Background: transparent or hover:rgba(16,185,129,0.05)
  - Color: rgba(255,255,255,0.7)
  - Border: none or subtle
  - Hover: Background rgba(255,255,255,0.1)

**Cards:**
- Background: rgba(0,0,0,0.15) - rgba(0,0,0,0.30) with backdrop blur
- Border: 1px solid rgba(255,255,255,0.15)
- Border top: 1px solid rgba(255,255,255,0.30) for glass effect
- Border radius: 24px (rounded-3xl)
- Padding: 16px-24px
- Shadow: 0 20px 40px rgba(0,0,0,0.5)

**Minibar (Signature Component):**
- Glassmorphic rounded-3xl container
- Inner content with black/15-30 opacity background
- SVG liquid displacement filter for distortion effect
- Nested pills for actions (Insights, Ask)
- Audio visualizer bars with staggered animation
- Citation pills with rounded borders, subtle backgrounds
- Pause/play button with quaternary background

**Desktop Mockup:**
- MacOS-style window chrome
- Tan menubar (#D4C5A9) with system icons
- Wallpaper background image
- Realistic shadow and depth

**Icons:**
- Size: 16px-24px typically
- Inline SVG or icon font
- Opacity: 50% for inactive, 100% for active
- Smooth transitions on state changes

**Badges:**
- Small rounded pills
- Background: subtle with border
- Font size: 10-12px
- Padding: 4px-8px

**Avatar Images:**
- Circular (rounded-full)
- Size: 20px-32px typically
- Border: optional 1px subtle

# 7. Site Sections

**Section Order:**

1. **Navigation Header**
   - Fixed top navigation with logo, nav links (Home, Pricing, Blog, Changelog), and "Book a demo" CTA
   - Glassmorphic background on scroll

2. **Hero Section**
   - Large centered headline: "Never stall on technical questions again."
   - Subheadline explaining value proposition
   - Y Combinator badge
   - Primary CTA button: "Book a demo"
   - Large desktop mockup showing macOS interface with Aside minibar overlay
   - Scenic wallpaper background visible in mockup

3. **Section 01 - Before the Call / Prepare**
   - Two-column layout
   - Left: "Pre-meeting briefs for back-to-back calls" feature description
   - Right: Product screenshot showing CRM integration and LinkedIn profiles
   - Sub-feature: "One-click recording across every platform" with platform logos (Zoom, Google Meet, etc.)

4. **Section 02 - During the Call / Features**
   - Headline: "Aside gives live suggestion during the call"
   - Three key features:
     - **Live search answers**: Searches docs in under a second
     - **Best answers delivered**: Turns past winning calls into suggestions
     - **Question suggestions**: Reads buyer signals, prompts next questions
   - Product screenshots showing each feature in context

5. **Section 03-1 - After the Call / Summarize**
   - "Scorecard coaching that never repeats mistakes"
   - Screenshot showing coaching interface

6. **Section 03-2 - After the Call / Memory**
   - "Your team's best answers keep getting better"
   - Explanation of continuous learning

7. **Security & Privacy Section**
   - Headline: "Private and secure"
   - Four security features in grid:
     - Invisible to screen share
     - Doesn't join calls
     - End-to-end encryption (AES-256-GCM, RSA-4096)
     - Your data never trains AI models
   - Decorative dotted pattern graphics for each feature

8. **Final CTA Section**
   - "Cut the ramp time, close more deals"
   - Description: "See how Aside handles the hard parts"
   - "Book a demo" CTA button
   - Dark background with subtle pattern

9. **Footer**
   - Company information: "At Your Side Inc."
   - Address: 45 Lansing St, San Francisco, CA 94105
   - Copyright notice
   - Links: Privacy Policy, Terms of Service
   - Minimal, single-line layout
</high_level_design>

<theme>
dark
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/navigation.tsx</file_path>
    <design_instructions>
Clone the top navigation bar with dark background, featuring the Aside logo on the left, centered navigation links (Home, Pricing, Blog, Changelog), and a "Book a demo" button on the right. The navigation should have a transparent border-bottom and be fixed to the top with proper z-index layering. Include responsive behavior that collapses navigation on mobile devices.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero.tsx</file_path>
    <design_instructions>
Clone the hero section with centered layout featuring the main headline "Never stall on technical questions again." with large display typography, followed by a descriptive subheading about Aside showing answers from past calls and docs. Include the "Backed by Y Combinator" badge with logo, and a centered "Book a demo" call-to-action button. Use dark background with proper spacing and typography hierarchy.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/y-combinator_ff4e4a4e-1.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/desktop-preview.tsx</file_path>
    <design_instructions>
Clone the macOS desktop mockup section showing Aside's interface overlaid on a scenic wallpaper background. Include the authentic macOS menu bar at the top with Apple logo, application name, menu items, and system icons (wifi, spotlight, share, control center, time). Feature the Aside interface floating window showing "Insights" and "Ask" tabs with a pause button and audio visualization bars. Display the answer card showing "Q. What's the difference with Firebase?" with response text and citation cards for Supabase and a past call. Use glassmorphism effects with proper transparency and blur.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/wallpaper-15.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-apple_2b5d6514-2.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-wifi_a265f209-3.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-spotlight_f1b25dd2-4.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-share_a39f7040-5.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-control-center_8cc83767-6.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/character-casper_87004055-7.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/insights_2d831173-8.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-supabase_dc08722f-1.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-profile_8c511a53-2.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/before-call.tsx</file_path>
    <design_instructions>
Clone the "[01] BEFORE THE CALL / PREPARE" section with split layout showing two feature cards. Left side displays "01 Pre-meeting briefs for back-to-back calls" with description and LinkedIn/social icons. Right side shows the pre-read interface mockup with Y Combinator meeting details, CRM data, deal information, and participant profiles (Andrew Miklas and Garry Tan). Below, show "02 One-click recording across every platform" with description and a colorful gradient card displaying meeting detection notification with platform icons (Zoom, Google Meet, Slack, Teams, Webex). Use dark background with proper card styling and gradient overlays.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/zoom_aae3c79c-2.webp", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/google-meet_ec1c5fa2-3.webp", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/slack_874eeb6f-4.webp", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/teams_d5dc402a-5.webp", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/webex_4c753814-6.webp", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/yc-square_e929d257-3.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/andrew-miklas-a4a02c771d0206992fb5c86d8270fba268de-4.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/garry-852ae376014448cd052ddbca9a16eb96c0ed76dfd33a-5.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/during-call.tsx</file_path>
    <design_instructions>
Clone the "[02] DURING THE CALL / FEATURES" section with large centered headline "Aside gives live suggestion during the call. Every rep speaks like your best rep." Display three key features in a scrolling layout: "Live search answers to technical questions" showing Supabase migration documentation with answer card and citations; "Your best answers, delivered by every rep" showing memorize answer interface with past call reference; "Question suggestions that never miss the real pain" showing buyer signal detection. Use diagonal striped background patterns and proper card layouts with glassmorphism effects.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-slash-17.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-profile2_08365775-6.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/after-call.tsx</file_path>
    <design_instructions>
Clone the "[03] AFTER THE CALL / MEMORY" section split into two subsections. "03-1. SUMMARIZE - Scorecard coaching that never repeats mistakes" showing a call analysis interface with gradient background transitioning from blue to yellow/orange. "03-2. MEMORY - Your team's best answers keep getting better" with description of learning from calls. Display the coaching interface with "Needs Improvement" highlighting missed budget availability question and conversation transcript excerpts. Use vibrant gradient backgrounds and proper card styling.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-gradient-3_94671283-7.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/illust-after-meeting-1_804bbc7d-8.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/security.tsx</file_path>
    <design_instructions>
Clone the security and privacy section with large centered headline "Private and secure. No bots in the call. No screen-share. Your data stays safe and 100% private with E2E encryption." Display four security features in a 2x2 grid: "Invisible to screen share" with dotted lock pattern, "Doesn't join calls" with camera/participant icons, "End-to-end encryption" with encryption visualization, and "Your data never trains AI models" with AI model prohibition icon. Use dark background with subtle dot pattern overlay and proper icon styling.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-03_e404bb58-10.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-04_3449ad18-11.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-01_61f67964-12.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/lock-02_4cb1305f-13.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-dot-16.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/final-cta.tsx</file_path>
    <design_instructions>
Clone the final call-to-action section with dark gray/charcoal background featuring large headline "Cut the ramp time, close more deals." and supporting text "See how Aside handles the hard parts and makes every rep sound like a pro." Include a prominent "Book a demo" button. Use centered layout with proper spacing and typography hierarchy. Background should have subtle arrow pattern overlay.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-arrow-18.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the footer section with dark background displaying company information "At Your Side Inc." with address "45 Lansing St, San Francisco CA 94105". Include copyright text "© 2025 At Your Side Inc. All rights reserved." and links for "Privacy Policy" and "Terms of Service". Use subtle typography with proper spacing and muted text colors for secondary information.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
