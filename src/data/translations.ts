export type Locale = 'en' | 'es';

export interface TranslationType {
  meta: {
    title: string;
    description: string;
  };
  announcement: {
    text: string;
    linkText: string;
  };
  nav: {
    product: string;
    howItWorks: string;
    integrations: string;
    pricing: string;
    faq: string;
    signIn: string;
    bookDemo: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlinePart1: string;
    headlinePart2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
    demoInboundFrom: string;
    demoInboundMessage: string;
    stepClassify: string;
    stepClassifyDetail: string;
    stepKnowledge: string;
    stepKnowledgeDetail: string;
    stepDraft: string;
    stepDraftDetail: string;
    stepBooking: string;
    stepBookingDetail: string;
    stepFollowup: string;
    stepFollowupDetail: string;
    statusAwaiting: string;
    statusApproved: string;
    buttonApprove: string;
    buttonReset: string;
  };
  integrationsStrip: {
    title: string;
  };
  editorialIntro: {
    part1: string;
    highlight1: string;
    part2: string;
    part3: string;
    highlight2: string;
    part4: string;
  };
  oneFunnel: {
    tag: string;
    subtitle: string;
    title: string;
    titleQuiet: string;
    description: string;
    bullets: string[];
    cta: string;
    triggerLabel: string;
    inboundLabel: string;
    inboundText: string;
    classifyLabel: string;
    classifyText: string;
    draftLabel: string;
    draftText: string;
    bookLabel: string;
    bookText: string;
  };
  automationDemo: {
    tag: string;
    subtitle: string;
    title: string;
    titleQuiet: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
      badge: string;
      detailSnippet: string;
    }[];
  };
  groundedAI: {
    tag: string;
    subtitle: string;
    title: string;
    titleQuiet: string;
    description: string;
    bullets: string[];
    cta: string;
    inboundEmail: string;
    inboundText: string;
    matchLabel: string;
    matchText: string;
    matchSource: string;
    draftLabel: string;
    draftBadge: string;
    draftText: string;
    draftAttachment: string;
    draftStatus: string;
    inspectSource: string;
    viewThreads: string;
  };
  knowledgeBase: {
    title: string;
    subtitle: string;
    docs: {
      name: string;
      type: string;
      meta: string;
      sections: string[];
      preview: string;
    }[];
    footerText: string;
  };
  dashboard: {
    tag: string;
    subtitle: string;
    title: string;
    titleQuiet: string;
    description: string;
    clientsTitle: string;
    clientsSubtitle: string;
    eventsTitle: string;
    eventsSubtitle: string;
    eventsTotal: string;
    knowledgeTitle: string;
    knowledgeSubtitle: string;
    answersCount: string;
    answersSuffix: string;
  };
  howItWorks: {
    tag: string;
    subtitle: string;
    title: string;
    titleQuiet: string;
    description: string;
    stages: {
      number: string;
      title: string;
      description: string;
      bullets: string[];
      boxTitle: string;
      boxSubtitle: string;
    }[];
    autonomyTitle: string;
    autonomySubtitle: string;
    sliderLabels: string[];
    matrixTitle: string;
    matrixActionCol: string;
    matrixModeCol: string;
    matrixDescCol: string;
    matrixRows: {
      action: string;
      mode: 'AUTO' | 'REVIEW' | 'HUMAN';
      modeLabel: string;
      description: string;
    }[];
  };
  outcomes: {
    tag: string;
    subtitle: string;
    title: string;
    titleQuiet: string;
    description: string;
    metrics: {
      value: number;
      suffix: string;
      label: string;
    }[];
  };
  integrationsMap: {
    tag: string;
    subtitle: string;
    title: string;
    description: string;
    items: {
      id: string;
      name: string;
      category: string;
      description: string;
      badge: string;
    }[];
    upcomingNote: string;
  };
  pricing: {
    tag: string;
    subtitle: string;
    title: string;
    description: string;
    billingMonthly: string;
    billingAnnual: string;
    saveBadge: string;
    perMonth: string;
    startTrial: string;
    contactUs: string;
    mostPopular: string;
    plans: {
      id: string;
      name: string;
      description: string;
      monthlyPrice: number;
      annualPrice: number;
      isCustom?: boolean;
      features: string[];
    }[];
  };
  faq: {
    tag: string;
    subtitle: string;
    title: string;
    titleQuiet: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  founder: {
    tag: string;
    title: string;
    quote: string;
    p1: string;
    p2: string;
    author: string;
    role: string;
    location: string;
  };
  finalCta: {
    title: string;
    description: string;
    buttonDemo: string;
    buttonPricing: string;
    guarantee: string;
  };
  footer: {
    tagline: string;
    description: string;
    origin: string;
    copyright: string;
    audience: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
  };
  modal: {
    bookDemoTitle: string;
    bookDemoSubtitle: string;
    nameLabel: string;
    emailLabel: string;
    venueLabel: string;
    venueTypeLabel: string;
    venueTypes: string[];
    dateLabel: string;
    timeLabel: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    closeButton: string;
  };
}

export const translations: Record<Locale, TranslationType> = {
  en: {
    meta: {
      title: "Maxander — AI Booking & Inbox Automation for Restaurants",
      description: "Maxander handles customer inquiries, bookings and follow-ups with AI that learns your business and works inside the tools you already use."
    },
    announcement: {
      text: "New — Maxander now creates bookings in Restoo, straight from the inbox",
      linkText: "Learn more"
    },
    nav: {
      product: "Product",
      howItWorks: "How it works",
      integrations: "Integrations",
      pricing: "Pricing",
      faq: "FAQ",
      signIn: "Sign in",
      bookDemo: "Book a demo"
    },
    hero: {
      badge: "THE AI BOOKING OPERATOR",
      headline: "The booking funnel that runs itself.",
      headlinePart1: "The booking funnel",
      headlinePart2: "that runs itself.",
      description: "Maxander pulls every inquiry — Gmail, Outlook, TheFork, your website — into one place. Its AI drafts the reply, attaches the right menu, books the table, and chases the follow-up.",
      ctaPrimary: "Book a demo",
      ctaSecondary: "See how it works",
      trustText: "Read-only until you flip the switch · Every reply cites its source",
      demoInboundFrom: "Sofia Marín · BrightLabs",
      demoInboundMessage: "“Hi! We'd love a private dinner for 24 on Dec 12 — do you have space, and can you share the group menu?”",
      stepClassify: "Classifying intent...",
      stepClassifyDetail: "✓ Private dining  ✓ 24 guests  ✓ Dec 12  ✓ Dinner",
      stepKnowledge: "Knowledge matched",
      stepKnowledgeDetail: "Events FAQ: Garden Room seats up to 28 · Autumn Group Tasting €58/pp",
      stepDraft: "Reply drafted",
      stepDraftDetail: "“Hi Sofia — we'd love to host you. The Garden Room is available for Dec 12...”",
      stepBooking: "Booking held in Restoo",
      stepBookingDetail: "Garden Room held · Deposit link generated (€240) · Auto-expires 48h",
      stepFollowup: "Follow-up scheduled",
      stepFollowupDetail: "Day 30 automated check-in & reminder scheduled",
      statusAwaiting: "Awaiting approval · Draft mode",
      statusApproved: "Approved & sent · Booking synchronized",
      buttonApprove: "Approve & Send",
      buttonReset: "Replay simulation"
    },
    integrationsStrip: {
      title: "Plugs into the tools you already run on"
    },
    editorialIntro: {
      part1: "Hospitality runs on a thousand",
      highlight1: "small messages.",
      part2: "Maxander catches every one, answers in your voice, and turns them into",
      highlight2: "bookings",
      part3: "— so your team can",
      part4: "run the room, not the inbox."
    },
    oneFunnel: {
      tag: "[ 01 ] One funnel",
      subtitle: "/ Every channel",
      title: "Every channel.",
      titleQuiet: "One funnel. Nothing dropped.",
      description: "An inquiry lands at 23:40 — TheFork widget, a long email, a WhatsApp voice note. Maxander treats them all the same way: classify, extract, act. Here is what actually happens to each one:",
      bullets: [
        "Intent + party size + date extracted in seconds",
        "Reply drafted in your voice, package PDF attached",
        "Small bookings created directly in Restoo & TheFork"
      ],
      cta: "Explore automations",
      triggerLabel: "Trigger",
      inboundLabel: "New inquiry in inbox",
      inboundText: "“Hi! We'd love a private dinner for 24 on Dec 12 — do you have space?”",
      classifyLabel: "Classify & extract",
      classifyText: "Detects intent, party size, date, and budget from the thread.",
      draftLabel: "Draft reply",
      draftText: "Written in your voice. Garden Room PDF attached.",
      bookLabel: "Book table",
      bookText: "Holds the Garden Room. Deposit link included."
    },
    automationDemo: {
      tag: "[ 02 ] Live automation",
      subtitle: "/ Step-by-step workflow",
      title: "From raw message",
      titleQuiet: "to confirmed table.",
      description: "Watch Maxander handle an inquiry end-to-end. Notice how every step is logged, verified against your documents, and kept under your complete supervision.",
      steps: [
        {
          number: "01",
          title: "Inbound inquiry received",
          description: "Customer emails from Gmail, Outlook, TheFork or fills out your website form.",
          badge: "Channel: Gmail",
          detailSnippet: "From: sofia@brightlabs.io | Subject: Private dining inquiry for 24 guests"
        },
        {
          number: "02",
          title: "AI parses & classifies intent",
          description: "Extracts party size, preferred time, room preference, budget, and dietary questions.",
          badge: "Confidence: 99.4%",
          detailSnippet: "Extracted: { type: 'private_dinner', guests: 24, date: '2026-12-12', room: 'Garden Room' }"
        },
        {
          number: "03",
          title: "Knowledge retrieved & verified",
          description: "Searches your menus, room capacities, minimum spends, and deposit policies.",
          badge: "Source: Events FAQ v3",
          detailSnippet: "Matched rule: Garden Room max capacity 28. Minimum spend €1,200. Group menu €58/pp."
        },
        {
          number: "04",
          title: "On-brand reply drafted",
          description: "Personalized reply written in your tone with the exact PDF package attached.",
          badge: "Attached: Menu_Autumn.pdf",
          detailSnippet: "“Hi Sofia — we'd love to host you. The Garden Room takes 24 comfortably...”"
        },
        {
          number: "05",
          title: "Reservation held in Restoo",
          description: "Direct API integration creates provisional hold and generates Stripe deposit link.",
          badge: "Restoo ID #84920",
          detailSnippet: "Status: Provisional Hold | Table: Garden Room | Deposit: €240 via Stripe"
        },
        {
          number: "06",
          title: "Follow-up scheduled",
          description: "If deposit isn't completed in 48 hours or event is 7 days away, automated reminders fire.",
          badge: "Auto Follow-up: 48h",
          detailSnippet: "Scheduled: Polite nudge if unpaid by Dec 14 18:00. Floor sheet synced with Google Cal."
        }
      ]
    },
    groundedAI: {
      tag: "[ 03 ] Grounded AI",
      subtitle: "/ Cites its sources",
      title: "Replies that know your house.",
      titleQuiet: "Never invent an answer.",
      description: "Maxander studies your past replies, menus, and policies, then answers new inquiries the way your best host would. Every draft cites the policy or thread it came from — when it isn't sure, it asks you instead of guessing.",
      bullets: [
        "Knowledge base built from your own sent mail",
        "Every reply cites the exact document and policy used",
        "Low-confidence threads flagged for human review, never sent"
      ],
      cta: "Explore the knowledge base",
      inboundEmail: "sofia@brightlabs.io",
      inboundText: "“Do you have space for a private dinner for 24 on Dec 12 — and is there a vegetarian menu?”",
      matchLabel: "Knowledge match",
      matchText: "“The Garden Room seats up to 28 for private dinners. Vegetarian tasting menu available at €58 per person.”",
      matchSource: "From: Events FAQ · learned from 212 of your threads",
      draftLabel: "Reply drafted",
      draftBadge: "cites 2 sources",
      draftText: "Hi Sofia — we'd love to host you. The Garden Room takes 24 comfortably, and our vegetarian tasting menu is €58 per person…",
      draftAttachment: "GardenRoom_Events.pdf",
      draftStatus: "Awaiting your approval · auto-send off",
      inspectSource: "Inspect source citation",
      viewThreads: "View 212 verified threads"
    },
    knowledgeBase: {
      title: "Grounded in your business documents",
      subtitle: "Knowledge refreshed nightly across all locations",
      docs: [
        {
          name: "Menu — Autumn 2026.pdf",
          type: "PDF Document",
          meta: "Indexed · 4 sections · Refreshed 2h ago",
          sections: ["Tasting Menu €58", "Wine Pairings €32", "Vegetarian Options", "Allergen Disclaimers"],
          preview: "Autumn Tasting Menu includes 5 courses. Group bookings of 12+ require set menu selection 7 days prior."
        },
        {
          name: "Deposit & Cancellation SOP.pdf",
          type: "SOP Policy",
          meta: "Indexed · 3 versions · Active",
          sections: ["Private Room Deposits", "48h Cancellation Policy", "No-show Fees", "Stripe Checkout Rules"],
          preview: "Private dining holds require €10/guest deposit. Full refund available up to 48 hours prior to reservation."
        },
        {
          name: "Private Dining Briefing.pdf",
          type: "Space Spec",
          meta: "Indexed · 2 spaces · Floor plans",
          sections: ["Garden Room (Max 28)", "Main Mezzanine (Max 60)", "AV Equipment", "Minimum Spends"],
          preview: "Garden Room includes dedicated bar access, private sound system, and seating for up to 28 guests."
        },
        {
          name: "Past Sent Replies (90 d)",
          type: "Email Knowledge",
          meta: "Indexed · 1,204 threads · 100% anonymized",
          sections: ["Greeting Formats", "Host Tone Calibration", "Custom Event Inquiries", "Special Requests"],
          preview: "AI matches the hospitable, gracious tone of your top front-of-house managers from 1,204 verified threads."
        }
      ],
      footerText: "1,284 answers learned from your threads — searched before every reply."
    },
    dashboard: {
      tag: "[ 04 ] One source of truth",
      subtitle: "/ Clients · Events · Knowledge",
      title: "Everything in its place.",
      titleQuiet: "Before you even look.",
      description: "Every conversation files itself: contacts get a timeline, confirmed events land in the calendar with revenue attached, and what your team writes becomes knowledge the AI reuses.",
      clientsTitle: "Clients",
      clientsSubtitle: "signals, live",
      eventsTitle: "Events",
      eventsSubtitle: "December · Confirmed revenue",
      eventsTotal: "€7,120",
      knowledgeTitle: "Knowledge refreshed nightly",
      knowledgeSubtitle: "Knowledge graph",
      answersCount: "1,284",
      answersSuffix: "answers learned from your threads — searched before every reply."
    },
    howItWorks: {
      tag: "[ 05 ] How it works",
      subtitle: "/ Co-pilot → pilot",
      title: "Trust is earned",
      titleQuiet: "in three stages.",
      description: "Maxander never starts in the driver's seat. You promote it, category by category, once it's proven it can handle the work.",
      stages: [
        {
          number: "01",
          title: "Connect Gmail / Outlook",
          description: "One-click OAuth. Maxander reads incoming customer emails — quietly, without sending anything. Read-only until you say otherwise.",
          bullets: [
            "Read-only access at first",
            "No customer ever notices a change",
            "Full audit log from day one"
          ],
          boxTitle: "bookings@elforo.com",
          boxSubtitle: "Read-only · 142 threads / week · Connected"
        },
        {
          number: "02",
          title: "Build your knowledge base",
          description: "Upload SOPs, menus, policies, past replies. Maxander studies how you write and what you say yes (and no) to.",
          bullets: [
            "Trained on your past replies",
            "Grounded in your SOPs and menus",
            "Tone matched to your brand voice"
          ],
          boxTitle: "Knowledge Base Synchronized",
          boxSubtitle: "4 Documents · 1,204 threads indexed"
        },
        {
          number: "03",
          title: "Gradually take over",
          description: "Start with drafts you approve. Promote categories to auto-send once trust is built. Bookings get created in TheFork or Restoo in the background.",
          bullets: [
            "Draft → approve → auto-send",
            "Promote one category at a time",
            "You always keep the override"
          ],
          boxTitle: "Autonomy Dial",
          boxSubtitle: "Granular category-level rules"
        }
      ],
      autonomyTitle: "The Autonomy Progression",
      autonomySubtitle: "Drag the slider or click a level to see how control transitions smoothly.",
      sliderLabels: ["01. Read-Only", "02. Draft for Review", "03. Category Auto-Send", "04. Full Co-Pilot"],
      matrixTitle: "Safety & Control Matrix",
      matrixActionCol: "Inquiry Category",
      matrixModeCol: "Operational Mode",
      matrixDescCol: "Execution Behavior",
      matrixRows: [
        { action: "Send Menu & Pricing", mode: "AUTO", modeLabel: "Auto-Send", description: "Answers with indexed PDF menu and current pricing rules." },
        { action: "Confirm Standard Booking", mode: "AUTO", modeLabel: "Auto-Send", description: "Creates hold in Restoo/TheFork if capacity is verified." },
        { action: "Reschedule Request", mode: "AUTO", modeLabel: "Auto-Send", description: "Modifies reservation time after checking live floor sheet." },
        { action: "Allergy / Custom Diet Inquiry", mode: "REVIEW", modeLabel: "Draft for Approval", description: "Drafts response based on kitchen SOPs; requests staff sign-off." },
        { action: "Guest Complaint / Special Escort", mode: "HUMAN", modeLabel: "Human Only", description: "Immediately alerts manager; no AI auto-reply is ever generated." }
      ]
    },
    outcomes: {
      tag: "[ 06 ] Real outcomes",
      subtitle: "/ Live venue",
      title: "Six weeks in.",
      titleQuiet: "Numbers from a live venue.",
      description: "A Madrid restaurant after six weeks of category-by-category promotion.",
      metrics: [
        { value: 87, suffix: "%", label: "of customer emails handled without a human touching them" },
        { value: 14, suffix: " hrs", label: "given back to the front-of-house team each week" },
        { value: 4, suffix: " min", label: "average reply time, day or night" },
        { value: 3.2, suffix: "x", label: "more bookings closed from the same inbound traffic" }
      ]
    },
    integrationsMap: {
      tag: "[ 07 ] Integrations",
      subtitle: "/ Inside your tools",
      title: "Already wired into the tools you run on.",
      description: "Mailboxes, booking systems, and billing — Maxander operates inside them, not on top of them.",
      items: [
        {
          id: "gmail",
          name: "Gmail",
          category: "Email",
          description: "Read incoming threads, draft and send replies, and label conversations automatically.",
          badge: "Full Two-Way Sync"
        },
        {
          id: "outlook",
          name: "Microsoft Outlook",
          category: "Email",
          description: "Same Gmail-grade handling on Microsoft 365 mailboxes for enterprise hospitality groups.",
          badge: "M365 Certified"
        },
        {
          id: "thefork",
          name: "TheFork",
          category: "Bookings",
          description: "Create, modify, and cancel reservations directly from customer inquiry threads.",
          badge: "Direct API"
        },
        {
          id: "restoo",
          name: "Restoo",
          category: "Bookings",
          description: "Live availability + reservation creation for restaurants across Spain, France, and Portugal.",
          badge: "Native Integration"
        },
        {
          id: "stripe",
          name: "Stripe",
          category: "Billing",
          description: "Deposits, no-show guarantees, and post-event invoicing triggered from the conversation.",
          badge: "Secure Payments"
        },
        {
          id: "google-calendar",
          name: "Google Calendar",
          category: "Scheduling",
          description: "Two-way sync with the venue calendar so the floor team and the inbox never disagree.",
          badge: "Real-Time Sync"
        },
        {
          id: "whatsapp",
          name: "WhatsApp Business",
          category: "Messaging",
          description: "Process inquiries, voice notes, and quick confirmations through official WhatsApp API.",
          badge: "Official Cloud API"
        },
        {
          id: "website",
          name: "Website Forms",
          category: "Inbound",
          description: "Ingest inquiries from your website contact form or custom booking widget instantly.",
          badge: "Webhook & Embed"
        }
      ],
      upcomingNote: "OpenTable and Resy are next. Run your own proprietary system? We plug in via REST API on the Enterprise plan."
    },
    pricing: {
      tag: "[ 07 ] Pricing",
      subtitle: "/ Earned autonomy",
      title: "You only pay for the autonomy you've earned.",
      description: "Start with drafts. Upgrade as you promote categories to auto-send. Cancel any time — your knowledge base is yours.",
      billingMonthly: "Monthly",
      billingAnnual: "Annual",
      saveBadge: "Save 20%",
      perMonth: "/month",
      startTrial: "Start free trial",
      contactUs: "Contact us",
      mostPopular: "Most popular",
      plans: [
        {
          id: "starter",
          name: "Starter",
          description: "For one venue getting started with Max.",
          monthlyPrice: 249,
          annualPrice: 199,
          features: [
            "1 connected inbox",
            "Up to 300 emails handled / month",
            "Every reply drafted for your approval — no auto-send",
            "Client & event records",
            "Email support"
          ]
        },
        {
          id: "growth",
          name: "Growth",
          description: "Max replies on his own, and you plan ahead.",
          monthlyPrice: 499,
          annualPrice: 399,
          features: [
            "Everything in Starter",
            "Up to 3 connected inboxes",
            "Up to 5,000 emails / month",
            "Auto-send for confident replies",
            "Event forecasting",
            "Priority support"
          ]
        },
        {
          id: "enterprise",
          name: "Enterprise",
          description: "Custom volume and terms, built around your operation.",
          monthlyPrice: 0,
          annualPrice: 0,
          isCustom: true,
          features: [
            "Everything in Growth",
            "Volume discounts on emails",
            "Up to 10 inboxes & multiple locations",
            "Outreach campaigns & newsletters",
            "Dedicated support & onboarding"
          ]
        }
      ]
    },
    faq: {
      tag: "[ 09 ] FAQ",
      subtitle: "/ Straight answers",
      title: "The questions venue owners",
      titleQuiet: "actually ask.",
      items: [
        {
          q: "How does Maxander actually learn my business?",
          a: "We pull your past 90 days of replies (you choose which mailboxes), your SOPs, menus, pricing, and policies. Maxander reads them, drafts in your tone, and cites the source on every reply so you can verify it. Nothing is sent in your name until you turn that on, category by category."
        },
        {
          q: "Is it really safe to let it reply on its own?",
          a: "Auto-send is opt-in per category — never global. You promote 'confirm a booking' or 'send menu' before you promote 'handle a complaint.' Every auto-send is logged with the source it cited, and any thread Maxander is unsure about lands in your review queue."
        },
        {
          q: "What happens when it gets something wrong?",
          a: "You correct the reply once and Maxander learns from the correction. Categories with a wrong-reply rate above your threshold automatically drop back into draft mode until you re-promote them. You stay in control of the dial."
        },
        {
          q: "Which booking systems do you integrate with?",
          a: "TheFork and Restoo today, with Google Calendar and Outlook for the venue side. We're adding OpenTable and Resy next. If you run your own booking system, we'll plug in via API on the Autonomous plan."
        },
        {
          q: "What about data privacy?",
          a: "Your mail and customer data live in EU-region storage. We don't train shared models on your inbox — your knowledge base is yours alone. SOC 2 Type II is in progress (Q3); a signed BAA and custom retention are available on the Enterprise plan."
        },
        {
          q: "How long does it take to get to autonomous?",
          a: "Most venues hit auto-send on their first category (usually 'send menu' or 'confirm booking') within a week, and have 60%+ of inbound handled autonomously by week six. The exact ramp depends on how clean your SOPs are when we start."
        }
      ]
    },
    founder: {
      tag: "Hospitality DNA",
      title: "Built by people who understand the room.",
      quote: "“The best restaurants aren't run from a desk behind a laptop. They are run on the floor, in the kitchen, and at the front desk. Maxander exists so your team can focus on the guest in front of them.”",
      p1: "Founded in Madrid and built hand-in-hand with leading European hospitality operators, Maxander bridges the gap between chaotic customer mailboxes and seamless reservation management.",
      p2: "We believe AI in hospitality must be quiet, grounded, respectful of house rules, and completely under the operator's control.",
      author: "Alexander & the Maxander Team",
      role: "Madrid · Paris · Lisbon",
      location: "Active pilot venues across Spain, France & Portugal"
    },
    finalCta: {
      title: "Live from week one.",
      description: "Connect a mailbox, watch the drafts roll in, and promote your first category when you're ready.",
      buttonDemo: "Book a demo",
      buttonPricing: "See pricing →",
      guarantee: "14-day free trial · Cancel anytime · Drafts-only by default"
    },
    footer: {
      tagline: "Starts as a co-pilot. Becomes the pilot.",
      description: "AI-handled email, bookings, and follow-ups for restaurants, venues, and service businesses.",
      origin: "Built in Madrid · Pilot customers in Spain, France, Portugal",
      copyright: "© 2026 Maxander. All rights reserved.",
      audience: "Built for the people who run the room.",
      columns: [
        {
          title: "Product",
          links: [
            { label: "Automations", href: "#product" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Integrations", href: "#integrations" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" }
          ]
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "#" },
            { label: "Customers", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Security", href: "#" },
            { label: "DPA", href: "#" }
          ]
        }
      ]
    },
    modal: {
      bookDemoTitle: "Experience Maxander live",
      bookDemoSubtitle: "Select a time for a 20-minute tailored walkthrough for your restaurant or venue group.",
      nameLabel: "Your Name",
      emailLabel: "Work Email",
      venueLabel: "Restaurant / Venue Name",
      venueTypeLabel: "Venue Type",
      venueTypes: ["Fine Dining / Bistro", "Private Dining & Events Venue", "Restaurant Group / Multi-Unit", "Hotel & Hospitality Venue", "Service Business"],
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time (CET)",
      submitButton: "Confirm Demo Request",
      submitting: "Scheduling session...",
      successTitle: "Demo Request Confirmed!",
      successMessage: "We've sent a calendar invitation and preparation link to your email. We look forward to showing you Maxander in action.",
      closeButton: "Close"
    }
  },
  es: {
    meta: {
      title: "Maxander — IA para reservas y bandeja de entrada en hostelería",
      description: "Maxander gestiona consultas de clientes, reservas y seguimientos con una IA que aprende de tu negocio y trabaja dentro de las herramientas que ya utilizas."
    },
    announcement: {
      text: "Nuevo — Maxander ahora crea reservas en Restoo, directamente desde el buzón",
      linkText: "Saber más"
    },
    nav: {
      product: "Producto",
      howItWorks: "Cómo funciona",
      integrations: "Integraciones",
      pricing: "Precios",
      faq: "Preguntas",
      signIn: "Iniciar sesión",
      bookDemo: "Reservar demo"
    },
    hero: {
      badge: "EL OPERADOR DE RESERVAS CON IA",
      headline: "El embudo de reservas que funciona solo.",
      headlinePart1: "El embudo de reservas",
      headlinePart2: "que funciona solo.",
      description: "Maxander centraliza cada solicitud — Gmail, Outlook, TheFork, tu web — en un solo lugar. Su IA redacta la respuesta, adjunta el menú adecuado, reserva la mesa y hace el seguimiento.",
      ctaPrimary: "Reservar demo",
      ctaSecondary: "Ver cómo funciona",
      trustText: "Modo solo lectura hasta que tú decidas · Cada respuesta cita su fuente",
      demoInboundFrom: "Sofía Marín · BrightLabs",
      demoInboundMessage: "«¡Hola! Nos gustaría una cena privada para 24 personas el 12 de diciembre. ¿Tenéis disponibilidad y podéis enviarnos la carta de grupos?»",
      stepClassify: "Clasificando intención...",
      stepClassifyDetail: "✓ Cena privada  ✓ 24 comensales  ✓ 12 dic  ✓ Cena",
      stepKnowledge: "Conocimiento vinculado",
      stepKnowledgeDetail: "FAQ Eventos: Sala Jardín hasta 28 pax · Menú Degustación Grupo 58 €/pax",
      stepDraft: "Borrador redactado",
      stepDraftDetail: "«Hola Sofía: nos encantaría recibiros. La Sala Jardín está disponible para el 12 de diciembre...»",
      stepBooking: "Mesa bloqueada en Restoo",
      stepBookingDetail: "Sala Jardín bloqueada · Enlace fianza generado (240 €) · Expira en 48h",
      stepFollowup: "Seguimiento programado",
      stepFollowupDetail: "Recordatorio y seguimiento día 30 programado automáticamente",
      statusAwaiting: "Esperando tu aprobación · Modo borrador",
      statusApproved: "Aprobado y enviado · Reserva sincronizada",
      buttonApprove: "Aprobar y Enviar",
      buttonReset: "Reiniciar simulación"
    },
    integrationsStrip: {
      title: "Se conecta a las herramientas que ya utilizas en tu día a día"
    },
    editorialIntro: {
      part1: "La hostelería funciona sobre mil",
      highlight1: "pequeños mensajes.",
      part2: "Maxander captura cada uno, responde con tu propia voz y los convierte en",
      highlight2: "reservas",
      part3: "— para que tu equipo pueda",
      part4: "atender la sala, no el buzón."
    },
    oneFunnel: {
      tag: "[ 01 ] Un solo embudo",
      subtitle: "/ Todos los canales",
      title: "Todos los canales.",
      titleQuiet: "Un solo embudo. Cero pérdidas.",
      description: "Entra una consulta a las 23:40 — widget de TheFork, un email largo, un audio de WhatsApp. Maxander los procesa con el mismo rigor: clasifica, extrae y actúa. Esto es lo que ocurre con cada una:",
      bullets: [
        "Intención + número de comensales + fecha extraídos en segundos",
        "Borrador redactado en tu tono, dossier PDF adjunto",
        "Reservas creadas directamente en Restoo y TheFork"
      ],
      cta: "Explorar automatizaciones",
      triggerLabel: "Disparador",
      inboundLabel: "Nueva consulta en buzón",
      inboundText: "«¡Hola! Nos gustaría organizar una cena privada para 24 el 12 de diciembre. ¿Tenéis espacio?»",
      classifyLabel: "Clasificar y extraer",
      classifyText: "Detecta intención, comensales, fecha y presupuesto del hilo.",
      draftLabel: "Redactar respuesta",
      draftText: "Escrito en tu tono. Dossier de la Sala Jardín adjunto.",
      bookLabel: "Reservar mesa",
      bookText: "Bloquea la Sala Jardín. Enlace de fianza incluido."
    },
    automationDemo: {
      tag: "[ 02 ] Automatización en vivo",
      subtitle: "/ Flujo paso a paso",
      title: "Desde el mensaje entrante",
      titleQuiet: "hasta la mesa confirmada.",
      description: "Descubre cómo Maxander gestiona una consulta de inicio a fin. Cada paso queda auditado, verificado contra tus documentos y bajo tu supervisión.",
      steps: [
        {
          number: "01",
          title: "Consulta entrante recibida",
          description: "El cliente escribe desde Gmail, Outlook, TheFork o el formulario de tu web.",
          badge: "Canal: Gmail",
          detailSnippet: "De: sofia@brightlabs.io | Asunto: Consulta cena privada para 24 personas"
        },
        {
          number: "02",
          title: "La IA analiza y clasifica",
          description: "Extrae comensales, horario, espacio deseado, presupuesto y dudas sobre alérgenos.",
          badge: "Confianza: 99.4%",
          detailSnippet: "Extraído: { tipo: 'cena_privada', comensales: 24, fecha: '2026-12-12', sala: 'Sala Jardín' }"
        },
        {
          number: "03",
          title: "Conocimiento contrastado",
          description: "Consulta tus cartas, aforos de salas, consumos mínimos y política de cancelaciones.",
          badge: "Fuente: FAQ Eventos v3",
          detailSnippet: "Regla aplicada: Sala Jardín max 28 pax. Mínimo 1.200 €. Menú grupos 58 €/pax."
        },
        {
          number: "04",
          title: "Respuesta redactada con tu voz",
          description: "Respuesta personalizada con tu tono exacto y el PDF de menús adjunto.",
          badge: "Adjunto: Menu_Otono.pdf",
          detailSnippet: "«Hola Sofía: nos encantaría recibiros. La Sala Jardín acoge 24 cómodamente...»"
        },
        {
          number: "05",
          title: "Reserva bloqueada en Restoo",
          description: "La integración directa crea el bloqueo provisional y genera el enlace de fianza Stripe.",
          badge: "Restoo ID #84920",
          detailSnippet: "Estado: Bloqueo Provisional | Espacio: Sala Jardín | Fianza: 240 € vía Stripe"
        },
        {
          number: "06",
          title: "Seguimiento calendarizado",
          description: "Si no se abona la fianza en 48 horas o faltan 7 días para el evento, se envían recordatorios.",
          badge: "Auto Recordatorio: 48h",
          detailSnippet: "Programado: Recordatorio automático si no hay fianza el 14 dic. Sincronizado con Google Cal."
        }
      ]
    },
    groundedAI: {
      tag: "[ 03 ] IA Verificada",
      subtitle: "/ Cita sus fuentes",
      title: "Respuestas que conocen tu casa.",
      titleQuiet: "Jamás inventan nada.",
      description: "Maxander estudia tus respuestas anteriores, cartas y protocolos, y responde a las nuevas consultas como lo haría tu mejor jefe de sala. Cada borrador cita la norma o hilo del que procede — cuando duda, te pregunta a ti en vez de adivinar.",
      bullets: [
        "Base de conocimiento construida a partir de tus propios envíos",
        "Cada respuesta cita el documento y la norma utilizada",
        "Los hilos de baja confianza van a revisión manual, nunca se envían"
      ],
      cta: "Ver la base de conocimiento",
      inboundEmail: "sofia@brightlabs.io",
      inboundText: "«¿Tenéis espacio para una cena privada para 24 el 12 de diciembre — y tenéis menú vegetariano?»",
      matchLabel: "Coincidencia de conocimiento",
      matchText: "«La Sala Jardín tiene capacidad de hasta 28 comensales. Menú degustación vegetariano disponible a 58 € por persona.»",
      matchSource: "De: FAQ Eventos · aprendido de 212 de tus hilos",
      draftLabel: "Borrador generado",
      draftBadge: "cita 2 fuentes",
      draftText: "Hola Sofía: nos encantaría recibiros. La Sala Jardín acoge a 24 personas cómodamente, y nuestro menú degustación vegetariano cuesta 58 € por persona…",
      draftAttachment: "SalaJardin_Eventos.pdf",
      draftStatus: "Esperando tu aprobación · auto-envío desactivado",
      inspectSource: "Inspeccionar cita de fuente",
      viewThreads: "Ver 212 hilos contrastados"
    },
    knowledgeBase: {
      title: "Basado en los documentos reales de tu negocio",
      subtitle: "Conocimiento actualizado cada noche en todos tus locales",
      docs: [
        {
          name: "Carta — Otoño 2026.pdf",
          type: "Documento PDF",
          meta: "Indexado · 4 secciones · Actualizado hace 2h",
          sections: ["Menú Degustación 58 €", "Maridaje 32 €", "Opciones Vegetarianas", "Alérgenos"],
          preview: "El Menú de Otoño consta de 5 pases. Los grupos de más de 12 personas requieren menú cerrado 7 días antes."
        },
        {
          name: "Protocolo de Fianzas y Cancelaciones.pdf",
          type: "Protocolo SOP",
          meta: "Indexado · 3 versiones · Activo",
          sections: ["Fianzas Salas Privadas", "Cancelación 48h", "No-show fees", "Reglas Stripe"],
          preview: "Las reservas privadas requieren 10 €/comensal en concepto de fianza. Devolución íntegra hasta 48h antes."
        },
        {
          name: "Ficha de Espacios y Privados.pdf",
          type: "Ficha Técnica",
          meta: "Indexado · 2 espacios · Planos",
          sections: ["Sala Jardín (Max 28)", "Planta Mezzanine (Max 60)", "Equipo Audiovisual", "Consumos Mínimos"],
          preview: "La Sala Jardín dispone de barra exclusiva, sistema de sonido independiente y aforo de 28 comensales."
        },
        {
          name: "Respuestas Anteriores (90 d)",
          type: "Conocimiento Emails",
          meta: "Indexado · 1.204 hilos · 100% anonimizados",
          sections: ["Fórmulas de Saludo", "Calibración del Tono", "Consultas Singulares", "Peticiones Especiales"],
          preview: "La IA reproduce el trato cordial, impecable y profesional de tus jefes de sala a partir de 1.204 hilos contrastados."
        }
      ],
      footerText: "1.284 respuestas aprendidas de tus hilos — consultadas antes de cada mensaje."
    },
    dashboard: {
      tag: "[ 04 ] Fuente única de verdad",
      subtitle: "/ Clientes · Eventos · Conocimiento",
      title: "Todo en su sitio.",
      titleQuiet: "Antes de que tengas que mirar.",
      description: "Cada conversación se clasifica sola: los contactos tienen un historial, los eventos confirmados entran al calendario con su facturación y lo que escribe tu equipo se convierte en conocimiento reutilizable.",
      clientsTitle: "Clientes",
      clientsSubtitle: "señales en directo",
      eventsTitle: "Eventos",
      eventsSubtitle: "Diciembre · Ingresos confirmados",
      eventsTotal: "7.120 €",
      knowledgeTitle: "Conocimiento actualizado cada noche",
      knowledgeSubtitle: "Grafo de conocimiento",
      answersCount: "1.284",
      answersSuffix: "respuestas aprendidas de tus hilos — consultadas antes de cada respuesta."
    },
    howItWorks: {
      tag: "[ 05 ] Cómo funciona",
      subtitle: "/ Copiloto → piloto",
      title: "La confianza se gana",
      titleQuiet: "en tres etapas.",
      description: "Maxander nunca empieza al volante. Lo vas promocionando, categoría a categoría, una vez demuestra que domina el trabajo.",
      stages: [
        {
          number: "01",
          title: "Conecta Gmail o Outlook",
          description: "OAuth en un clic. Maxander lee los correos entrantes de los clientes — en silencio, sin enviar nada. Solo lectura hasta que tú decidas.",
          bullets: [
            "Acceso en solo lectura al principio",
            "Ningún cliente nota el cambio",
            "Registro de auditoría completo desde el día 1"
          ],
          boxTitle: "reservas@elforo.com",
          boxSubtitle: "Solo lectura · 142 hilos / semana · Conectado"
        },
        {
          number: "02",
          title: "Construye tu base de conocimiento",
          description: "Sube protocolos, cartas, políticas y respuestas anteriores. Maxander aprende cómo redactas y a qué dices que sí (y que no).",
          bullets: [
            "Entrenado con tus respuestas reales",
            "Basado en tus protocolos y cartas",
            "Tono adaptado a la voz de tu marca"
          ],
          boxTitle: "Base de conocimiento sincronizada",
          boxSubtitle: "4 Documentos · 1.204 hilos indexados"
        },
        {
          number: "03",
          title: "Cede el control poco a poco",
          description: "Empieza con borradores que tú apruebas. Promociona categorías a auto-envío cuando haya confianza. Las reservas se crean solas en TheFork o Restoo.",
          bullets: [
            "Borrador → aprobar → auto-envío",
            "Promociona una categoría cada vez",
            "Tú mantienes siempre el control"
          ],
          boxTitle: "Dial de Autonomía",
          boxSubtitle: "Reglas granulares por categoría"
        }
      ],
      autonomyTitle: "La Progresión de Autonomía",
      autonomySubtitle: "Desplaza la barra o pulsa en una etapa para comprobar el control gradual.",
      sliderLabels: ["01. Solo Lectura", "02. Borradores para Revisión", "03. Auto-Envío por Categoría", "04. Copiloto Total"],
      matrixTitle: "Matriz de Seguridad y Control",
      matrixActionCol: "Categoría de Consulta",
      matrixModeCol: "Modo de Operación",
      matrixDescCol: "Comportamiento del Sistema",
      matrixRows: [
        { action: "Enviar Carta y Precios", mode: "AUTO", modeLabel: "Auto-Envío", description: "Responde con el dossier PDF y las tarifas vigentes." },
        { action: "Confirmar Reserva Estándar", mode: "AUTO", modeLabel: "Auto-Envío", description: "Crea el bloqueo en Restoo/TheFork tras verificar aforo." },
        { action: "Solicitud de Cambio de Hora", mode: "AUTO", modeLabel: "Auto-Envío", description: "Modifica la reserva tras consultar el plano de sala en vivo." },
        { action: "Pregunta sobre Alérgenos / Dietas", mode: "REVIEW", modeLabel: "Borrador para Aprobación", description: "Redacta según protocolo de cocina; requiere visto bueno del equipo." },
        { action: "Reclamación o Petición VIP", mode: "HUMAN", modeLabel: "Solo Humano", description: "Avisa de inmediato al director; nunca se genera respuesta automática." }
      ]
    },
    outcomes: {
      tag: "[ 06 ] Resultados reales",
      subtitle: "/ Local en vivo",
      title: "Seis semanas después.",
      titleQuiet: "Cifras de un local real.",
      description: "Un restaurante de Madrid tras seis semanas de promoción categoría a categoría.",
      metrics: [
        { value: 87, suffix: "%", label: "de los emails gestionados sin intervención humana" },
        { value: 14, suffix: " h", label: "recuperadas para el equipo de sala cada semana" },
        { value: 4, suffix: " min", label: "de tiempo medio de respuesta, día y noche" },
        { value: 3.2, suffix: "x", label: "más reservas cerradas con el mismo tráfico entrante" }
      ]
    },
    integrationsMap: {
      tag: "[ 07 ] Integraciones",
      subtitle: "/ Dentro de tus herramientas",
      title: "Integrado en las herramientas que ya utilizas.",
      description: "Buzones, sistemas de reservas y cobros — Maxander opera dentro de ellos, no por encima.",
      items: [
        {
          id: "gmail",
          name: "Gmail",
          category: "Email",
          description: "Lee hilos entrantes, redacta y envía respuestas y etiqueta conversaciones de forma automática.",
          badge: "Sincronización Total"
        },
        {
          id: "outlook",
          name: "Microsoft Outlook",
          category: "Email",
          description: "La misma potencia sobre buzones Microsoft 365 para grupos y hoteles.",
          badge: "Certificado M365"
        },
        {
          id: "thefork",
          name: "TheFork",
          category: "Reservas",
          description: "Crea, modifica y cancela reservas directamente desde los correos de los clientes.",
          badge: "API Directa"
        },
        {
          id: "restoo",
          name: "Restoo",
          category: "Reservas",
          description: "Disponibilidad en tiempo real y creación de reservas para restaurantes en España, Francia y Portugal.",
          badge: "Integración Nativa"
        },
        {
          id: "stripe",
          name: "Stripe",
          category: "Cobros",
          description: "Fianzas, cobro de no-shows y facturación de eventos disparados desde la misma conversación.",
          badge: "Pagos Seguros"
        },
        {
          id: "google-calendar",
          name: "Google Calendar",
          category: "Calendario",
          description: "Sincronización bidireccional para que la sala y el buzón nunca tengan discrepancias.",
          badge: "Sincronización en Vivo"
        },
        {
          id: "whatsapp",
          name: "WhatsApp Business",
          category: "Mensajería",
          description: "Gestiona consultas, audios de voz y confirmaciones rápidas mediante la API oficial de WhatsApp.",
          badge: "Cloud API Oficial"
        },
        {
          id: "website",
          name: "Formularios Web",
          category: "Entradas",
          description: "Recibe consultas desde el formulario de contacto o widget de tu web al instante.",
          badge: "Webhook e Integración"
        }
      ],
      upcomingNote: "OpenTable y Resy llegan pronto. ¿Tienes tu propio software? Nos conectamos vía REST API en el plan Enterprise."
    },
    pricing: {
      tag: "[ 07 ] Precios",
      subtitle: "/ Autonomía ganada",
      title: "Solo pagas por la autonomía que has ganado.",
      description: "Empieza con borradores. Sube de plan cuando promociones categorías al envío automático. Cancela cuando quieras — tu base de conocimiento es tuya.",
      billingMonthly: "Mensual",
      billingAnnual: "Anual",
      saveBadge: "Ahorra un 20%",
      perMonth: "/mes",
      startTrial: "Prueba gratis",
      contactUs: "Habla con nosotros",
      mostPopular: "El más elegido",
      plans: [
        {
          id: "starter",
          name: "Starter",
          description: "Para un local que empieza con Max.",
          monthlyPrice: 249,
          annualPrice: 199,
          features: [
            "1 buzón conectado",
            "Hasta 300 correos gestionados / mes",
            "Cada respuesta se redacta para tu aprobación — sin envío automático",
            "Fichas de clientes y eventos",
            "Soporte por email"
          ]
        },
        {
          id: "growth",
          name: "Growth",
          description: "Max responde solo y tú planificas con antelación.",
          monthlyPrice: 499,
          annualPrice: 399,
          features: [
            "Todo lo de Starter",
            "Hasta 3 buzones conectados",
            "Hasta 5.000 correos / mes",
            "Envío automático para respuestas con confianza",
            "Previsión de eventos",
            "Soporte prioritario"
          ]
        },
        {
          id: "enterprise",
          name: "Enterprise",
          description: "Volumen y condiciones a medida de tu operación.",
          monthlyPrice: 0,
          annualPrice: 0,
          isCustom: true,
          features: [
            "Todo lo de Growth",
            "Descuentos por volumen de correos",
            "Hasta 10 buzones y varias ubicaciones",
            "Campañas de difusión y newsletters",
            "Soporte y onboarding dedicados"
          ]
        }
      ]
    },
    faq: {
      tag: "[ 09 ] Preguntas frecuentes",
      subtitle: "/ Respuestas directas",
      title: "Las preguntas que los hosteleros",
      titleQuiet: "hacen de verdad.",
      items: [
        {
          q: "¿Cómo aprende Maxander mi negocio?",
          a: "Tomamos tus últimos 90 días de respuestas (tú eliges qué buzones), tus protocolos, menús, precios y políticas. Maxander los lee, redacta con tu tono y cita la fuente en cada respuesta para que puedas verificarla. Nada se envía en tu nombre hasta que tú lo actives, categoría a categoría."
        },
        {
          q: "¿Es seguro dejar que responda solo?",
          a: "El envío automático se activa por categoría — nunca en global. Promocionas «confirmar una reserva» o «enviar la carta» antes que «gestionar una queja». Cada envío automático queda registrado con la fuente que citó, y cualquier hilo dudoso aterriza en tu cola de revisión."
        },
        {
          q: "¿Qué pasa cuando se equivoca?",
          a: "Corriges la respuesta una vez y Maxander aprende de la corrección. Las categorías con una tasa de error por encima de tu umbral vuelven solas al modo borrador hasta que las promociones de nuevo. El dial siempre lo controlas tú."
        },
        {
          q: "¿Con qué sistemas de reservas se integra?",
          a: "Hoy, TheFork y Restoo, con Google Calendar y Outlook para el lado del local. OpenTable y Resy llegan pronto. Si tienes tu propio sistema de reservas, nos conectamos por API en el plan Autónomo."
        },
        {
          q: "¿Y la privacidad de los datos?",
          a: "Tu correo y los datos de tus clientes viven en almacenamiento en la UE. No entrenamos modelos compartidos con tu inbox — tu base de conocimiento es solo tuya. El SOC 2 Type II está en curso (Q3); el BAA firmado y la retención a medida están disponibles en el plan Autónomo."
        },
        {
          q: "¿Cuánto se tarda en llegar al modo autónomo?",
          a: "La mayoría de locales activa el envío automático en su primera categoría (normalmente «enviar la carta» o «confirmar reserva») en una semana, y gestiona de forma autónoma más del 60% del correo entrante en la semana seis. El ritmo exacto depende de lo limpios que estén tus protocolos al empezar."
        }
      ]
    },
    founder: {
      tag: "ADN Hostelero",
      title: "Creado por personas que conocen la sala.",
      quote: "«Los mejores restaurantes no se gestionan desde un despacho frente a una pantalla. Se gestionan en la sala, en la cocina y en la recepción. Maxander existe para que tu equipo atienda al comensal que tiene delante.»",
      p1: "Nacido en Madrid y desarrollado codo con codo con los principales hosteleros europeos, Maxander conecta buzones caóticos con una gestión impecable de reservas.",
      p2: "Creemos que la IA en hostelería debe ser discreta, rigurosa, respetuosa con los protocolos de la casa y 100% controlada por el hostelero.",
      author: "Alexander y el equipo de Maxander",
      role: "Madrid · París · Lisboa",
      location: "Locales piloto activos en España, Francia y Portugal"
    },
    finalCta: {
      title: "Operativo desde la primera semana.",
      description: "Conecta un buzón, comprueba cómo entran los borradores y promociona tu primera categoría cuando estés listo.",
      buttonDemo: "Reservar demo",
      buttonPricing: "Ver precios →",
      guarantee: "Prueba gratuita de 14 días · Cancela cuando quieras · Solo borradores por defecto"
    },
    footer: {
      tagline: "Starts as a co-pilot. Becomes the pilot.",
      description: "Gestión con IA de correo, reservas y seguimientos para restaurantes, locales y negocios de servicios.",
      origin: "Nacido en Madrid · Clientes piloto en España, Francia y Portugal",
      copyright: "© 2026 Maxander. Todos los derechos reservados.",
      audience: "Diseñado para quienes lideran la sala.",
      columns: [
        {
          title: "Producto",
          links: [
            { label: "Automatizaciones", href: "#product" },
            { label: "Cómo funciona", href: "#how-it-works" },
            { label: "Integraciones", href: "#integrations" },
            { label: "Precios", href: "#pricing" },
            { label: "FAQ", href: "#faq" }
          ]
        },
        {
          title: "Empresa",
          links: [
            { label: "Sobre nosotros", href: "#" },
            { label: "Clientes", href: "#" },
            { label: "Carreras", href: "#" },
            { label: "Contacto", href: "#" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacidad", href: "#" },
            { label: "Términos", href: "#" },
            { label: "Seguridad", href: "#" },
            { label: "DPA", href: "#" }
          ]
        }
      ]
    },
    modal: {
      bookDemoTitle: "Descubre Maxander en directo",
      bookDemoSubtitle: "Elige fecha y hora para una demostración personalizada de 20 minutos para tu restaurante o grupo.",
      nameLabel: "Tu Nombre",
      emailLabel: "Email Profesional",
      venueLabel: "Nombre del Restaurante / Local",
      venueTypeLabel: "Tipo de Establecimiento",
      venueTypes: ["Alta Cocina / Bistro", "Espacio para Eventos y Privados", "Grupo Gastronómico / Multilocal", "Hotel y Restauración", "Negocio de Servicios"],
      dateLabel: "Fecha Preferida",
      timeLabel: "Hora Preferida (CET)",
      submitButton: "Confirmar Solicitud de Demo",
      submitting: "Programando sesión...",
      successTitle: "¡Solicitud Confirmada!",
      successMessage: "Te hemos enviado la invitación de calendario y el enlace de acceso por email. Será un placer mostrarte Maxander en directo.",
      closeButton: "Cerrar"
    }
  }
};
