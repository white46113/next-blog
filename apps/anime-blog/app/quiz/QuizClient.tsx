"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Share2, RotateCcw, Sparkles, Heart, Zap, Compass, Brain } from "lucide-react";

// Quiz questions data
const QUESTIONS = [
    {
        id: 1,
        q: "What's your ideal weekend plan?",
        options: [
            { id: "a", t: "shonen", text: "Train hard, binge action-packed shows", icon: Zap },
            { id: "b", t: "slice", text: "Relax with cozy slice-of-life anime", icon: Heart },
            { id: "c", t: "isekai", text: "Start a new adventure (game or story)", icon: Compass },
            { id: "d", t: "psy", text: "Watch something mind-bending and deep", icon: Brain },
        ],
    },
    {
        id: 2,
        q: "Pick a favorite color palette:",
        options: [
            { id: "a", t: "slice", text: "Soft pastels", icon: Heart },
            { id: "b", t: "shonen", text: "Bold primary colors", icon: Zap },
            { id: "c", t: "psy", text: "Muted, moody tones", icon: Brain },
            { id: "d", t: "isekai", text: "Vibrant fantasy hues", icon: Compass },
        ],
    },
    {
        id: 3,
        q: "What's the best protagonist trait?",
        options: [
            { id: "a", t: "shonen", text: "Determination and growth", icon: Zap },
            { id: "b", t: "psy", text: "Complex, flawed mind", icon: Brain },
            { id: "c", t: "slice", text: "Relatable and chill", icon: Heart },
            { id: "d", t: "isekai", text: "Quirky outsider vibe", icon: Compass },
        ],
    },
    {
        id: 4,
        q: "Which soundtrack would you pick?",
        options: [
            { id: "a", t: "shonen", text: "Pumped-up battle themes", icon: Zap },
            { id: "b", t: "slice", text: "Mellow acoustic", icon: Heart },
            { id: "c", t: "psy", text: "Haunting ambient", icon: Brain },
            { id: "d", t: "isekai", text: "Epic orchestral", icon: Compass },
        ],
    },
    {
        id: 5,
        q: "You find a mysterious item — it probably:",
        options: [
            { id: "a", t: "isekai", text: "Teleports you to another world", icon: Compass },
            { id: "b", t: "shonen", text: "Gives a power-up", icon: Zap },
            { id: "c", t: "slice", text: "Reminds you of home", icon: Heart },
            { id: "d", t: "psy", text: "Unravels a secret about you", icon: Brain },
        ],
    },
];

// Results data with personality types
const RESULTS = {
    shonen: {
        title: "The Shonen Spirit",
        desc: "You love hype, growth, and big emotional wins. You enjoy series where characters train, fail, learn, and then come back stronger.",
        recs: ["My Hero Academia", "Naruto", "Demon Slayer"],
        color: "from-orange-500 to-red-600",
        icon: Zap,
    },
    slice: {
        title: "Cozy Slice-of-Life",
        desc: "You appreciate small moments, warm character interactions, and soothing worldbuilding. You're here for feelings and comfort.",
        recs: ["Barakamon", "March Comes in Like a Lion", "K-On!"],
        color: "from-pink-400 to-purple-500",
        icon: Heart,
    },
    isekai: {
        title: "The Adventurer (Isekai)",
        desc: "You dream of other worlds. Escapism, exploration, and quirky fantasy settings make your day.",
        recs: ["Re:Zero", "That Time I Got Reincarnated as a Slime", "Konosuba"],
        color: "from-blue-500 to-cyan-600",
        icon: Compass,
    },
    psy: {
        title: "Psychological / Mind-bending",
        desc: "You enjoy twists, unreliable narrators, and shows that leave you thinking long after they end.",
        recs: ["Paranoia Agent", "Monster", "Serial Experiments Lain"],
        color: "from-purple-600 to-indigo-700",
        icon: Brain,
    },
};

export default function QuizClient() {
    const [step, setStep] = useState(0); // 0 = intro, 1..n = questions, n+1 = result
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [scores, setScores] = useState({ shonen: 0, slice: 0, isekai: 0, psy: 0 });
    const [resultKey, setResultKey] = useState<keyof typeof RESULTS | null>(null);
    const [mounted, setMounted] = useState(false);

    // Handle client-side mounting
    useEffect(() => {
        setMounted(true);
    }, []);

    // Load progress from localStorage
    useEffect(() => {
        if (!mounted) return;
        try {
            const saved = localStorage.getItem("anime_quiz_progress");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.step) setStep(parsed.step);
                if (parsed.answers) setAnswers(parsed.answers);
                if (parsed.scores) setScores(parsed.scores);
            }
        } catch (e) {
            // ignore
        }
    }, [mounted]);

    // Persist progress to localStorage
    useEffect(() => {
        if (!mounted) return;
        const payload = { step, answers, scores };
        try {
            localStorage.setItem("anime_quiz_progress", JSON.stringify(payload));
        } catch (e) {
            // ignore
        }
    }, [step, answers, scores, mounted]);

    function startQuiz() {
        setStep(1);
        setAnswers({});
        setScores({ shonen: 0, slice: 0, isekai: 0, psy: 0 });
        setResultKey(null);
    }

    function selectOption(questionId: number, option: (typeof QUESTIONS)[0]['options'][0]) {
        setAnswers((prev) => ({ ...prev, [questionId]: option.id }));
        // Update scores
        setScores((prev) => {
            const next = { ...prev };
            const key = option.t as keyof typeof RESULTS;
            next[key] = (next[key] || 0) + 1;
            return next;
        });

        // Move to next step after a tiny delay for UX
        const nextStep = questionId < QUESTIONS.length ? step + 1 : QUESTIONS.length + 1;
        setTimeout(() => setStep(nextStep), 250);
    }

    function computeResult() {
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const top = sorted[0][0] as keyof typeof RESULTS;
        setResultKey(top);
    }

    useEffect(() => {
        if (step === QUESTIONS.length + 1 && !resultKey) {
            computeResult();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step]);

    function resetQuiz() {
        if (mounted) {
            localStorage.removeItem("anime_quiz_progress");
        }
        startQuiz();
    }

    function shareResult() {
        if (!resultKey) return;
        const text = `I got ${RESULTS[resultKey].title} on the Anime Personality Quiz! 🎌 Try it: ${typeof window !== 'undefined' ? window.location.href : ''}`;
        if (navigator.share) {
            navigator.share({ text }).catch(() => { });
        } else {
            navigator.clipboard?.writeText(text).then(() => alert("Result copied to clipboard!"));
        }
    }

    if (!mounted) {
        return null; // Prevent hydration mismatch
    }

    // JSON-LD structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://anime.weebcoder.com/quiz",
                "url": "https://anime.weebcoder.com/quiz",
                "name": "Anime Personality Quiz - Discover Your Anime Type",
                "description": "Take our interactive anime personality quiz to discover which anime type matches your personality. Get personalized anime recommendations.",
                "isPartOf": {
                    "@id": "https://anime.weebcoder.com/#website"
                },
                "breadcrumb": {
                    "@id": "https://anime.weebcoder.com/quiz#breadcrumb"
                }
            },
            {
                "@type": "Quiz",
                "name": "Anime Personality Quiz",
                "description": "Discover your anime personality type through 5 engaging questions",
                "educationalLevel": "Beginner",
                "assesses": "Anime viewing preferences and personality alignment",
                "hasPart": QUESTIONS.map((q, idx) => ({
                    "@type": "Question",
                    "position": idx + 1,
                    "text": q.q,
                    "acceptedAnswer": q.options.map(opt => ({
                        "@type": "Answer",
                        "text": opt.text
                    }))
                }))
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://anime.weebcoder.com/quiz#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://anime.weebcoder.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Anime Personality Quiz",
                        "item": "https://anime.weebcoder.com/quiz"
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            A
                        </div>
                        <span className="font-bold text-xl tracking-tight">Anime Blog</span>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Intro Screen */}
                    {step === 0 && (
                        <div>
                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="inline-block mb-4"
                                >
                                    <Sparkles className="h-16 w-16 text-primary" />
                                </motion.div>
                                <h1 className="text-4xl font-bold tracking-tight mb-4">
                                    Which Anime Personality Type Are You?
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                    Discover your anime personality type and get personalized recommendations based on your preferences!
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Heart className="h-5 w-5 text-primary" />
                                            Why Take This Quiz?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Get personalized anime recommendations</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Discover your anime viewing personality</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Share your results with friends</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Fast, fun, and completely private</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Sparkles className="h-5 w-5 text-primary" />
                                            How It Works
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            Answer 5 quick questions about your preferences. We'll analyze your choices and match you with one of four anime personality types: Shonen Spirit, Cozy Slice-of-Life, The Adventurer (Isekai), or Psychological Mind-bender.
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="flex gap-4 justify-center">
                                <Button onClick={startQuiz} size="lg" className="text-lg px-8">
                                    <Sparkles className="mr-2 h-5 w-5" />
                                    Start Quiz
                                </Button>
                            </div>

                            <p className="text-center text-sm text-muted-foreground mt-8">
                                All quiz data is stored locally in your browser. No account required.
                            </p>
                        </div>
                    )}

                    {/* Question Screens */}
                    {step >= 1 && step <= QUESTIONS.length && (
                        <div>
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground">
                                        Question {step} of {QUESTIONS.length}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        Progress: {Object.keys(answers).length}/{QUESTIONS.length}
                                    </span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                                        className="bg-primary h-2 rounded-full"
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>

                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{QUESTIONS[step - 1].q}</CardTitle>
                                    <CardDescription>Choose the option that best fits you</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {QUESTIONS[step - 1].options.map((opt) => {
                                            const Icon = opt.icon;
                                            return (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <Button
                                                        onClick={() => selectOption(QUESTIONS[step - 1].id, opt)}
                                                        variant="outline"
                                                        className="w-full h-auto p-4 text-left justify-start"
                                                    >
                                                        <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                                        <span>{opt.text}</span>
                                                    </Button>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex justify-between items-center">
                                <Button
                                    onClick={() => {
                                        if (step > 1) setStep(step - 1);
                                    }}
                                    variant="ghost"
                                    disabled={step === 1}
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back
                                </Button>
                                <p className="text-sm text-muted-foreground hidden md:block">
                                    💡 Tip: Your first instinct is usually best
                                </p>
                                <Button
                                    onClick={() => setStep(QUESTIONS.length + 1)}
                                    variant="ghost"
                                >
                                    Finish Early
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Results Screen */}
                    {step === QUESTIONS.length + 1 && resultKey && (
                        <div>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <Card className={`bg-gradient-to-br ${RESULTS[resultKey].color} text-white border-0 mb-6`}>
                                    <CardHeader className="text-center pb-4">
                                        <motion.div
                                            initial={{ rotate: -180, scale: 0 }}
                                            animate={{ rotate: 0, scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                            className="inline-block mx-auto mb-4"
                                        >
                                            {(() => {
                                                const Icon = RESULTS[resultKey].icon;
                                                return <Icon className="h-20 w-20" />;
                                            })()}
                                        </motion.div>
                                        <CardTitle className="text-3xl mb-2">{RESULTS[resultKey].title}</CardTitle>
                                        <CardDescription className="text-white/90 text-lg">
                                            {RESULTS[resultKey].desc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>

                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>Recommended Anime for You</CardTitle>
                                    <CardDescription>Based on your personality type, you might enjoy:</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {RESULTS[resultKey].recs.map((rec, idx) => (
                                            <motion.li
                                                key={rec}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                                            >
                                                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span className="font-medium">{rec}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <div className="flex flex-wrap gap-4 justify-center mb-6">
                                <Button onClick={shareResult} size="lg">
                                    <Share2 className="mr-2 h-5 w-5" />
                                    Share Result
                                </Button>
                                <Button onClick={resetQuiz} variant="outline" size="lg">
                                    <RotateCcw className="mr-2 h-5 w-5" />
                                    Retake Quiz
                                </Button>
                                <Link href="/">
                                    <Button variant="outline" size="lg">
                                        <ArrowLeft className="mr-2 h-5 w-5" />
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Why This Result?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        We analyzed your answers across 5 different dimensions of anime preferences. Your choices showed a strong affinity for {RESULTS[resultKey].title.toLowerCase()} characteristics. Each answer contributed to your final personality type based on themes, aesthetics, and storytelling preferences.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Loading State */}
                    {step === QUESTIONS.length + 1 && !resultKey && (
                        <Card>
                            <CardContent className="py-12 text-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="inline-block mb-4"
                                >
                                    <Sparkles className="h-12 w-12 text-primary" />
                                </motion.div>
                                <p className="text-muted-foreground">Calculating your result...</p>
                            </CardContent>
                        </Card>
                    )}
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 bg-muted/30 border-t mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 Anime Blog. All rights reserved.</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms & Conditions</Link>
                        <Link href="/about" className="hover:text-foreground">About</Link>
                        <Link href="/contact" className="hover:text-foreground">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
