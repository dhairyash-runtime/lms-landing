'use client';
import React, { useRef, useEffect } from 'react';

/* ─────────────────────────────────────────────
   SVG ILLUSTRATIONS
───────────────────────────────────────────── */

/** Card 1 – Digital School Platform
 *  Shows: Open book with graduation cap, floating elements (stars, checkmarks),
 *  a monitor with dashboard, and connected nodes representing modules.
 */
const IllustrationLifecycle = () => (
    <svg viewBox="0 0 520 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* ── Open Book ── */}
        <path d="M60 180 L150 160 L150 60 L60 80 Z" fill="#218CA1" opacity="0.15" />
        <path d="M150 160 L240 180 L240 80 L150 60 Z" fill="#218CA1" opacity="0.22" />
        <path d="M150 60 L150 160" stroke="#218CA1" strokeWidth="2" opacity="0.4" />
        {/* book lines */}
        <rect x="80" y="95" width="55" height="3" rx="1.5" fill="#218CA1" opacity="0.3" />
        <rect x="85" y="108" width="48" height="3" rx="1.5" fill="#218CA1" opacity="0.25" />
        <rect x="82" y="121" width="52" height="3" rx="1.5" fill="#218CA1" opacity="0.2" />
        <rect x="165" y="90" width="55" height="3" rx="1.5" fill="#218CA1" opacity="0.3" />
        <rect x="168" y="103" width="50" height="3" rx="1.5" fill="#218CA1" opacity="0.25" />
        <rect x="163" y="116" width="56" height="3" rx="1.5" fill="#218CA1" opacity="0.2" />

        {/* ── Graduation cap ── */}
        <polygon points="150,20 110,42 150,58 190,42" fill="#218CA1" opacity="0.85" />
        <line x1="150" y1="58" x2="150" y2="60" stroke="#218CA1" strokeWidth="2" />
        <path d="M128 48 L128 68 Q150 78 172 68 L172 48" stroke="#218CA1" strokeWidth="1.5" fill="none" opacity="0.5" />
        <line x1="190" y1="42" x2="190" y2="68" stroke="#218CA1" strokeWidth="1.5" opacity="0.6" />
        <circle cx="190" cy="70" r="3" fill="#DEDB00" opacity="0.8" />

        {/* ── Monitor with dashboard ── */}
        <rect x="300" y="50" width="170" height="110" rx="10" fill="#1e293b" />
        <rect x="308" y="58" width="154" height="85" rx="6" fill="#0f172a" />
        {/* traffic dots */}
        <circle cx="320" cy="66" r="3" fill="#ef4444" />
        <circle cx="332" cy="66" r="3" fill="#f59e0b" />
        <circle cx="344" cy="66" r="3" fill="#22c55e" />
        {/* dashboard elements */}
        <rect x="318" y="78" width="60" height="8" rx="2" fill="#218CA1" opacity="0.6" />
        <rect x="318" y="92" width="45" height="5" rx="2" fill="#334155" />
        <rect x="318" y="102" width="55" height="5" rx="2" fill="#334155" />
        {/* mini chart */}
        <rect x="398" y="108" width="10" height="22" rx="2" fill="#218CA1" opacity="0.5" />
        <rect x="414" y="98" width="10" height="32" rx="2" fill="#218CA1" opacity="0.7" />
        <rect x="430" y="88" width="10" height="42" rx="2" fill="#DEDB00" opacity="0.7" />
        <rect x="446" y="103" width="10" height="27" rx="2" fill="#218CA1" opacity="0.4" />
        {/* monitor stand */}
        <rect x="365" y="160" width="40" height="8" rx="2" fill="#94a3b8" opacity="0.4" />
        <rect x="355" y="166" width="60" height="5" rx="2.5" fill="#64748b" opacity="0.5" />

        {/* ── Floating elements ── */}
        <circle cx="270" cy="40" r="12" fill="#DEDB00" opacity="0.2" />
        <path d="M266 40 L270 34 L274 40" stroke="#DEDB00" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M270 44 L270 36" stroke="#DEDB00" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {/* checkmark circle */}
        <circle cx="280" cy="160" r="16" fill="#218CA1" opacity="0.12" />
        <path d="M272 160 L278 166 L290 154" stroke="#218CA1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

        {/* star */}
        <path d="M490 30 L493 38 L502 38 L495 43 L498 52 L490 47 L482 52 L485 43 L478 38 L487 38 Z" fill="#DEDB00" opacity="0.5" />

        {/* connection dashes */}
        <path d="M240 150 Q270 140 300 120" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" fill="none" />
        <path d="M190 45 Q230 40 300 70" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.3" fill="none" />
    </svg>
);

/** Card 2 – Corporate Training Suite
 *  Shows: Presentation screen with chart, seated figures, briefcase, trophy icon.
 */
const IllustrationCloud = () => (
    <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* ── Presentation Board ── */}
        <rect x="120" y="20" width="240" height="150" rx="10" fill="#1e293b" />
        <rect x="128" y="28" width="224" height="120" rx="6" fill="#0f172a" />
        {/* traffic dots */}
        <circle cx="142" cy="38" r="3.5" fill="#ef4444" />
        <circle cx="154" cy="38" r="3.5" fill="#f59e0b" />
        <circle cx="166" cy="38" r="3.5" fill="#22c55e" />
        {/* chart inside */}
        <rect x="148" y="60" width="80" height="6" rx="2" fill="#218CA1" opacity="0.6" />
        <rect x="148" y="74" width="60" height="4" rx="2" fill="#334155" />
        <rect x="148" y="84" width="70" height="4" rx="2" fill="#334155" />
        {/* bar chart */}
        <rect x="260" y="105" width="14" height="28" rx="2" fill="#218CA1" opacity="0.4" />
        <rect x="280" y="90" width="14" height="43" rx="2" fill="#218CA1" opacity="0.65" />
        <rect x="300" y="75" width="14" height="58" rx="2" fill="#DEDB00" opacity="0.7" />
        <rect x="320" y="95" width="14" height="38" rx="2" fill="#218CA1" opacity="0.5" />
        {/* rising trend */}
        <polyline points="267,110 287,95 307,78 327,88" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* board stand */}
        <line x1="240" y1="170" x2="220" y2="210" stroke="#64748b" strokeWidth="2.5" opacity="0.5" />
        <line x1="240" y1="170" x2="260" y2="210" stroke="#64748b" strokeWidth="2.5" opacity="0.5" />

        {/* ── Seated person 1 (left) ── */}
        <circle cx="70" cy="170" r="14" fill="#218CA1" opacity="0.25" />
        <circle cx="70" cy="167" r="9" fill="#218CA1" opacity="0.6" />
        <path d="M52 200 Q70 188 88 200" stroke="#218CA1" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* laptop */}
        <rect x="56" y="195" width="28" height="18" rx="3" fill="#1e293b" opacity="0.7" />
        <rect x="59" y="198" width="22" height="10" rx="2" fill="#0f172a" />

        {/* ── Seated person 2 (right) ── */}
        <circle cx="410" cy="170" r="14" fill="#218CA1" opacity="0.25" />
        <circle cx="410" cy="167" r="9" fill="#218CA1" opacity="0.6" />
        <path d="M392 200 Q410 188 428 200" stroke="#218CA1" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* laptop */}
        <rect x="396" y="195" width="28" height="18" rx="3" fill="#1e293b" opacity="0.7" />
        <rect x="399" y="198" width="22" height="10" rx="2" fill="#0f172a" />

        {/* ── Trophy icon (top-right) ── */}
        <rect x="400" y="22" width="28" height="20" rx="4" fill="#DEDB00" opacity="0.7" />
        <path d="M405 42 Q414 50 423 42" fill="#DEDB00" opacity="0.5" />
        <rect x="410" y="48" width="8" height="3" rx="1.5" fill="#DEDB00" opacity="0.5" />
        <path d="M398 28 Q392 22 398 16" stroke="#DEDB00" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M430 28 Q436 22 430 16" stroke="#DEDB00" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* ── Briefcase icon (bottom-left) ── */}
        <rect x="20" y="112" width="36" height="28" rx="5" fill="#218CA1" opacity="0.2" />
        <rect x="30" y="106" width="16" height="8" rx="3" fill="none" stroke="#218CA1" strokeWidth="1.5" opacity="0.4" />
        <line x1="20" y1="122" x2="56" y2="122" stroke="#218CA1" strokeWidth="1.5" opacity="0.3" />

        {/* ── Connection lines ── */}
        <path d="M88 185 Q110 170 120 150" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.3" fill="none" />
        <path d="M392 185 Q370 170 360 150" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.3" fill="none" />
    </svg>
);

/** Card 3 – White-Label Platform  (small card)
 *  Shows: Branded UI frame with palette/brush, customizable logo area.
 */
const IllustrationScale = () => (
    <svg viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* browser frame */}
        <rect x="10" y="12" width="120" height="85" rx="8" fill="#1e293b" />
        <rect x="10" y="12" width="120" height="18" rx="8" fill="#0f172a" />
        <circle cx="24" cy="21" r="3" fill="#ef4444" />
        <circle cx="34" cy="21" r="3" fill="#f59e0b" />
        <circle cx="44" cy="21" r="3" fill="#22c55e" />
        {/* content area */}
        <rect x="18" y="36" width="44" height="6" rx="2" fill="#218CA1" opacity="0.6" />
        <rect x="18" y="48" width="34" height="4" rx="2" fill="#334155" />
        <rect x="18" y="56" width="40" height="4" rx="2" fill="#334155" />
        {/* logo placeholder */}
        <rect x="85" y="38" width="36" height="26" rx="4" fill="#218CA1" opacity="0.15" stroke="#218CA1" strokeWidth="1" strokeDasharray="3 2" />
        <text x="94" y="55" fontSize="8" fill="#218CA1" opacity="0.6" fontWeight="500">LOGO</text>
        {/* color palette */}
        <circle cx="30" cy="112" r="9" fill="#218CA1" opacity="0.8" />
        <circle cx="52" cy="112" r="9" fill="#DEDB00" opacity="0.8" />
        <circle cx="74" cy="112" r="9" fill="#1e293b" opacity="0.8" />
        <circle cx="96" cy="112" r="9" fill="#ec4899" opacity="0.4" />
        {/* paint brush hint */}
        <path d="M115 100 L122 108 L118 112 L112 104 Z" fill="#218CA1" opacity="0.4" />
        <rect x="109" y="103" width="4" height="14" rx="2" fill="#64748b" opacity="0.4" transform="rotate(-40, 111, 110)" />
    </svg>
);

/** Card 4 – Cloud Hosting  (small card)
 *  Shows: Cloud with server rack nodes, uptime arrow, shield accent.
 */
const IllustrationSecure = () => (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* cloud shape */}
        <path d="M30 85 Q12 85 12 68 Q12 52 28 48 Q32 30 52 32 Q62 18 80 24 Q98 16 108 32 Q122 38 118 56 Q128 68 118 80 Q116 90 100 88 Z"
            fill="#218CA1" opacity="0.12" />
        <path d="M36 80 Q22 80 20 66 Q18 54 32 50 Q35 36 52 38 Q60 26 76 30 Q90 22 100 34 Q112 38 108 52 Q118 62 110 74 Q108 82 96 82 Z"
            fill="#218CA1" opacity="0.25" />
        {/* cloud icon */}
        <path d="M45 70 Q35 70 34 60 Q33 50 42 48 Q44 38 55 40 Q60 32 70 35 Q80 30 86 38 Q94 40 92 50 Q98 56 92 64 Q90 70 82 68 Z"
            fill="white" opacity="0.95" />
        {/* upload arrow */}
        <path d="M60 52 L65 46 L70 52" stroke="#218CA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="65" y1="46" x2="65" y2="62" stroke="#218CA1" strokeWidth="2" strokeLinecap="round" />

        {/* server nodes */}
        <rect x="8" y="95" width="35" height="22" rx="4" fill="white" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))' }} />
        <circle cx="17" cy="106" r="3" fill="#22c55e" />
        <rect x="24" y="103" width="14" height="3" rx="1.5" fill="#334155" opacity="0.5" />
        <rect x="24" y="109" width="10" height="2" rx="1" fill="#334155" opacity="0.3" />

        <rect x="87" y="95" width="35" height="22" rx="4" fill="white" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))' }} />
        <circle cx="96" cy="106" r="3" fill="#22c55e" />
        <rect x="103" y="103" width="14" height="3" rx="1.5" fill="#334155" opacity="0.5" />
        <rect x="103" y="109" width="10" height="2" rx="1" fill="#334155" opacity="0.3" />

        {/* connection lines */}
        <path d="M40 95 Q50 85 55 70" stroke="#218CA1" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" fill="none" />
        <path d="M90 95 Q80 85 75 70" stroke="#218CA1" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" fill="none" />

        {/* uptime badge */}
        <rect x="42" y="96" width="46" height="18" rx="9" fill="#218CA1" opacity="0.12" />
        <text x="48" y="109" fontSize="9" fill="#218CA1" fontWeight="600">99.9%</text>
    </svg>
);

/** Card 5 – Custom Feature Integration  (small card)
 *  Shows: Puzzle pieces fitting together with gear and API connection nodes.
 */
const IllustrationDev = () => (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* puzzle piece 1 (top-left) */}
        <path d="M20 30 L50 30 L50 40 Q58 36 58 44 Q58 52 50 48 L50 58 L20 58 L20 48 Q12 52 12 44 Q12 36 20 40 Z"
            fill="#218CA1" opacity="0.7" />
        {/* puzzle piece 2 (top-right) */}
        <path d="M52 30 L82 30 L82 40 Q90 36 90 44 Q90 52 82 48 L82 58 L52 58 L52 48 Q60 52 60 44 Q60 36 52 40 Z"
            fill="#DEDB00" opacity="0.7" />
        {/* puzzle piece 3 (bottom-left) */}
        <path d="M20 60 L50 60 L50 70 Q58 66 58 74 Q58 82 50 78 L50 88 L20 88 L20 78 Q12 82 12 74 Q12 66 20 70 Z"
            fill="#1e293b" opacity="0.5" />
        {/* puzzle piece 4 (bottom-right) */}
        <path d="M52 60 L82 60 L82 70 Q90 66 90 74 Q90 82 82 78 L82 88 L52 88 L52 78 Q60 82 60 74 Q60 66 52 70 Z"
            fill="#218CA1" opacity="0.35" />

        {/* gear icon */}
        <circle cx="108" cy="35" r="14" fill="#218CA1" opacity="0.12" />
        <circle cx="108" cy="35" r="8" fill="none" stroke="#218CA1" strokeWidth="2" opacity="0.6" />
        <circle cx="108" cy="35" r="3" fill="#218CA1" opacity="0.5" />
        {/* gear teeth */}
        <rect x="106" y="20" width="4" height="6" rx="1" fill="#218CA1" opacity="0.5" />
        <rect x="106" y="44" width="4" height="6" rx="1" fill="#218CA1" opacity="0.5" />
        <rect x="93" y="33" width="6" height="4" rx="1" fill="#218CA1" opacity="0.5" />
        <rect x="117" y="33" width="6" height="4" rx="1" fill="#218CA1" opacity="0.5" />

        {/* API connection nodes */}
        <circle cx="108" cy="95" r="10" fill="white" style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.1))' }} />
        <text x="100" y="99" fontSize="8" fill="#218CA1" fontWeight="700">API</text>

        {/* connecting lines */}
        <path d="M82 44 Q95 42 96 35" stroke="#218CA1" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" fill="none" />
        <path d="M82 74 Q95 80 105 87" stroke="#218CA1" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" fill="none" />
        <path d="M108 50 L108 83" stroke="#218CA1" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" fill="none" />

        {/* small floating dots */}
        <circle cx="25" cy="105" r="5" fill="#DEDB00" opacity="0.3" />
        <circle cx="55" cy="112" r="4" fill="#218CA1" opacity="0.2" />
        <circle cx="40" cy="120" r="3" fill="#1e293b" opacity="0.15" />
    </svg>
);

const StripedBg = () => {
    // Replicate the yappes.com background exactly:
    // Base solid background with 24 stripes using a linear-gradient overlay
    const total = 24;
    return (
        <div
            className="absolute inset-0 z-0 flex flex-row"
            aria-hidden="true"
            style={{ backgroundColor: '#BAB70B' }}
        >
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    style={{
                        flex: '1 0 0px',
                        backgroundImage: 'linear-gradient(270deg, rgba(242, 240, 238, 0.2) 0%, rgba(242, 240, 238, 0) 100%)',
                    }}
                />
            ))}
            {/* White gradient fade at the very bottom */}
            <div
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                    height: '200px',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
                }}
            />
        </div>
    );
};

/* ─────────────────────────────────────────────
   CARD DATA
───────────────────────────────────────────── */
const LARGE_CARDS = [
    {
        id: 'digital-school',
        title: 'Digital School Platform',
        description:
            'A complete digital school solution for institutions — with course management, student tracking, teacher coordination, exams, and certification systems.',
        Illustration: IllustrationLifecycle,
    },
    {
        id: 'corporate-training',
        title: 'Corporate Training Suite',
        description:
            'Build a scalable training platform for corporates — with employee onboarding modules, skill development tracks, performance analytics, and certification management.',
        Illustration: IllustrationCloud,
    },
];

const SMALL_CARDS = [
    {
        id: 'white-label',
        title: 'White-Label Platform',
        description:
            'Launch your own branded learning platform with fully customizable interfaces, admin dashboards, and student portals — no code changes needed.',
        Illustration: IllustrationScale,
    },
    {
        id: 'cloud-hosting',
        title: 'Cloud Hosting',
        description:
            'Enterprise-grade cloud infrastructure with auto-scaling, CDN delivery, data backups, and 99.9% uptime for seamless learning experiences.',
        Illustration: IllustrationSecure,
    },
    {
        id: 'custom-integration',
        title: 'Custom Feature Integration',
        description:
            'Extend your LMS with custom modules, third-party integrations, API access, and tailored features built to match your workflow.',
        Illustration: IllustrationDev,
    },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Benefits = () => {
    const cardRefs = useRef([]);

    /* Staggered slide-up reveal on scroll */
    useEffect(() => {
        const els = cardRefs.current.filter(Boolean);
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const idx = els.indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, idx * 110);
                    io.unobserve(entry.target);
                });
            },
            { threshold: 0.1 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const cardBase = {
        opacity: 0,
        transform: 'translateY(36px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
    };

    return (
        <section id="benefits" className="relative w-full overflow-hidden font-['Poppins']">

            {/* ── striped orange background ── */}
            <StripedBg />

            {/* ── content ── */}
            <div className="relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-16 pt-14 md:pt-24 pb-0">

                {/* ── "Benefit" pill ── */}
                <div className="mb-7 md:mb-10">
                    <span
                        className="inline-block bg-white text-[#218CA1] text-[13px] md:text-[14px] font-semibold
                       rounded-full px-[22px] py-[6px] tracking-wide"
                    >
                        Benefit
                    </span>
                </div>

                {/* ── heading ── */}
                <h2
                    className="text-center font-bold text-white leading-[1.25] tracking-tight
                     text-[34px] sm:text-[40px] md:text-[46px]
                     max-w-[320px] sm:max-w-[560px] md:max-w-[760px]"
                >
                    Accelerate Growth with<br className="hidden md:block" /> Enterprise Grade LMS
                </h2>

                {/* ── subtitle ── */}
                <p
                    className="text-center text-white mt-4 md:mt-6
                     text-[15px] md:text-[17px] leading-[1.65] font-light
                     max-w-[300px] sm:max-w-[480px] md:max-w-[620px]"
                >
                    A powerful platform with scalable architecture for digital schools,
                    corporate training, and skill development centers.
                </p>

                {/* ── card grid ── */}
                <div className="w-full max-w-[1140px] mt-12 md:mt-20">

                    {/* top row – 2 large cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mb-5 md:mb-7">
                        {LARGE_CARDS.map(({ id, title, description, Illustration }, i) => (
                            <div
                                key={id}
                                ref={(el) => (cardRefs.current[i] = el)}
                                style={cardBase}
                                className="bg-white rounded-[24px] md:rounded-[32px] flex flex-col overflow-hidden
                           shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                            >
                                {/* text block */}
                                <div className="p-8 md:p-10 pb-4 md:pb-6">
                                    <h3 className="font-semibold text-[#1a1a1a] text-[19px] md:text-[24px] leading-snug mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-[#555] text-[13.5px] md:text-[15px] leading-[1.7] max-w-[420px]">
                                        {description}
                                    </p>
                                </div>
                                {/* illustration block */}
                                <div className="flex-1 flex items-end justify-center px-4 md:px-8 pb-0" style={{ minHeight: 240 }}>
                                    <div className="w-full" style={{ height: 240 }}>
                                        <Illustration />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* bottom row – 3 small cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 pb-16 md:pb-32">
                        {SMALL_CARDS.map(({ id, title, description, Illustration }, i) => (
                            <div
                                key={id}
                                ref={(el) => (cardRefs.current[i + LARGE_CARDS.length] = el)}
                                style={cardBase}
                                className="bg-white rounded-[24px] md:rounded-[32px] flex flex-col overflow-hidden
                           shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                            >
                                {/* illustration */}
                                <div className="flex items-center justify-center pt-8 md:pt-12 px-4" style={{ minHeight: 160 }}>
                                    <div style={{ width: 140, height: 140 }}>
                                        <Illustration />
                                    </div>
                                </div>
                                {/* text block */}
                                <div className="flex-1 p-6 md:p-8 pt-4 md:pt-6">
                                    <h3 className="font-bold text-[#1a1a1a] text-[18px] md:text-[22px] leading-snug mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.65]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div >
        </section >
    );
};

export default Benefits;
