"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Share2, RotateCcw, Sparkles, Heart, Zap, Compass, Brain } from "lucide-react";

// --- Enhanced quiz data with weighted scoring and playful otaku copy ---
const QUESTIONS = [
    {
        id: 1,
        q: "You're the MC in an anime — what's your opening scene?",
        options: [
            { id: "a", text: "Training montage where I yell and never quit", weight: { shonen: 3, slice: 0, isekai: 0, psy: 0 }, icon: Zap },
            { id: "b", text: "Sipping tea while the world slowly heals around me", weight: { shonen: 0, slice: 3, isekai: 0, psy: 0 }, icon: Heart },
            { id: "c", text: "I wake up in a bizarre forest with a talking slime", weight: { shonen: 0, slice: 0, isekai: 3, psy: 0 }, icon: Compass },
            { id: "d", text: "I stare at a cracked mirror and question reality", weight: { shonen: 0, slice: 0, isekai: 0, psy: 3 }, icon: Brain },
        ],
    },
    {
        id: 2,
        q: "It's festival season — you...",
        options: [
            { id: "a", text: "Bring the noise: fireworks, pep talk and a power-up", weight: { shonen: 2, slice: 1, isekai: 0, psy: 0 }, icon: Zap },
            { id: "b", text: "Help little kids win games and eat all dango", weight: { shonen: 0, slice: 3, isekai: 0, psy: 0 }, icon: Heart },
            { id: "c", text: "Find a portal behind the food stalls", weight: { shonen: 0, slice: 0, isekai: 3, psy: 0 }, icon: Compass },
            { id: "d", text: "Receive a cryptic letter that changes everything", weight: { shonen: 0, slice: 0, isekai: 0, psy: 3 }, icon: Brain },
        ],
    },
    {
        id: 3,
        q: "What soundtrack gets you pumped?",
        options: [
            { id: "a", text: "Thunderous drums and electric guitar (fight!!)", weight: { shonen: 3, slice: 0, isekai: 1, psy: 0 }, icon: Zap },
            { id: "b", text: "Soft piano while petals fall", weight: { shonen: 0, slice: 3, isekai: 0, psy: 0 }, icon: Heart },
            { id: "c", text: "Grand orchestral swells for world-building", weight: { shonen: 1, slice: 0, isekai: 3, psy: 0 }, icon: Compass },
            { id: "d", text: "Eerie ambient that makes my spine tingle", weight: { shonen: 0, slice: 0, isekai: 0, psy: 3 }, icon: Brain },
        ],
    },
    {
        id: 4,
        q: "Your squad needs one skill — you bring...",
        options: [
            { id: "a", text: "Unbreakable will (and some epic one-liners)", weight: { shonen: 3, slice: 0, isekai: 1, psy: 0 }, icon: Zap },
            { id: "b", text: "Comfort food and sage advice", weight: { shonen: 0, slice: 3, isekai: 0, psy: 0 }, icon: Heart },
            { id: "c", text: "A map to unknown dimensions", weight: { shonen: 0, slice: 0, isekai: 3, psy: 0 }, icon: Compass },
            { id: "d", text: "The ability to read the true motives of others", weight: { shonen: 0, slice: 0, isekai: 0, psy: 3 }, icon: Brain },
        ],
    },
    {
        id: 5,
        q: "Your favorite plot twist is...",
        options: [
            { id: "a", text: "Rival becomes ally after intense training", weight: { shonen: 3, slice: 0, isekai: 1, psy: 0 }, icon: Zap },
            { id: "b", text: "A quiet character reveals a huge heart", weight: { shonen: 0, slice: 3, isekai: 0, psy: 0 }, icon: Heart },
            { id: "c", text: "Turns out the fantasy world has rules that surprise you", weight: { shonen: 0, slice: 0, isekai: 3, psy: 0 }, icon: Compass },
            { id: "d", text: "Everything you trusted is a fabricated memory", weight: { shonen: 0, slice: 0, isekai: 0, psy: 3 }, icon: Brain },
        ],
    },
];

// --- Bigger recommendation pools per type so results vary ---
const RECS_POOL = {
    shonen: [
        { title: "Naruto", tags: ["growth", "friendship"] },
        { title: "My Hero Academia", tags: ["school", "powers"] },
        { title: "Demon Slayer", tags: ["visuals", "emotional"] },
        { title: "Haikyuu!!", tags: ["sports", "teamwork"] },
        { title: "One Punch Man", tags: ["parody", "action"] },
        { title: "Blue Exorcist", tags: ["powers", "brotherhood"] },
    ],
    slice: [
        { title: "Barakamon", tags: ["healing", "growth"] },
        { title: "K-On!", tags: ["cute", "music"] },
        { title: "March Comes in Like a Lion", tags: ["emotion", "slice"] },
        { title: "Non Non Biyori", tags: ["rural", "slow"] },
        { title: "Laid-Back Camp", tags: ["cozy", "travel"] },
        { title: "Natsume's Book of Friends", tags: ["gentle", "supernatural"] },
    ],
    isekai: [
        { title: "Konosuba", tags: ["comedy", "party"] },
        { title: "Re:Zero", tags: ["dark", "time-loop"] },
        { title: "That Time I Got Reincarnated as a Slime", tags: ["world-build", "fun"] },
        { title: "No Game No Life", tags: ["strategy", "bright"] },
        { title: "Overlord", tags: ["power-fantasy", "world"] },
        { title: "Gate", tags: ["military", "portal"] },
    ],
    psy: [
        { title: "Serial Experiments Lain", tags: ["weird", "mind-bend"] },
        { title: "Monster", tags: ["thriller", "investigation"] },
        { title: "Paranoia Agent", tags: ["surreal", "social"] },
        { title: "Erased", tags: ["mystery", "time"] },
        { title: "Perfect Blue", tags: ["psychological", "classic"] },
        { title: "Paprika", tags: ["psychedelic", "visual"] },
    ],
};

// Utility: shuffle array (Fisher-Yates)
function shuffle<T>(arr: T[]) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

type ArchetypeKey = 'shonen' | 'slice' | 'isekai' | 'psy';

type Weights = {
    shonen: number;
    slice: number;
    isekai: number;
    psy: number;
};

export default function QuizClient() {
    const [mounted, setMounted] = useState(false);
    const [step, setStep] = useState(0); // 0 intro, 1..n questions, n+1 results
    const [answers, setAnswers] = useState<Record<number, string>>({}); // { questionId: optionId }
    const [weights, setWeights] = useState<Weights>({ shonen: 0, slice: 0, isekai: 0, psy: 0 });
    const [resultKey, setResultKey] = useState<ArchetypeKey | null>(null);
    const [finalRecs, setFinalRecs] = useState<string[]>([]);

    useEffect(() => setMounted(true), []);

    // Load progress
    useEffect(() => {
        if (!mounted) return;
        try {
            const saved = localStorage.getItem("anime_quiz_v2");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.step) setStep(parsed.step);
                if (parsed.answers) setAnswers(parsed.answers);
                if (parsed.weights) setWeights(parsed.weights);
                if (parsed.resultKey) setResultKey(parsed.resultKey);
                if (parsed.finalRecs) setFinalRecs(parsed.finalRecs);
            }
        } catch (e) {
            // ignore
        }
    }, [mounted]);

    // Persist progress
    useEffect(() => {
        if (!mounted) return;
        const payload = { step, answers, weights, resultKey, finalRecs };
        try {
            localStorage.setItem("anime_quiz_v2", JSON.stringify(payload));
        } catch (e) {
            // ignore
        }
    }, [step, answers, weights, resultKey, finalRecs, mounted]);

    function startQuiz() {
        setStep(1);
        setAnswers({});
        setWeights({ shonen: 0, slice: 0, isekai: 0, psy: 0 });
        setResultKey(null);
        setFinalRecs([]);
    }

    function selectOption(qId: number, option: typeof QUESTIONS[0]['options'][0]) {
        // Save the answer
        setAnswers((prev) => ({ ...prev, [qId]: option.id }));

        // Merge weights
        setWeights((prev) => {
            const next = { ...prev };
            for (const k of Object.keys(option.weight) as ArchetypeKey[]) {
                next[k] = (next[k] || 0) + (option.weight[k] || 0);
            }
            return next;
        });

        // go next
        const nextStep = qId < QUESTIONS.length ? step + 1 : QUESTIONS.length + 1;
        // tiny delay so the button press feels snappy
        setTimeout(() => setStep(nextStep), 220);
    }

    function pickUniqueRecs(dominantPool : any, runnerPool : any) {
  // Combine pools with weighted importance
        const combined = [
            ...dominantPool, 
            ...dominantPool,  // Weighted more heavily
            ...runnerPool
        ];

        // Shuffle once
        const shuffled = shuffle(combined);

        // Remove duplicates while preserving order
        const unique = Array.from(new Set(shuffled));

        // Get final 3
        return unique.slice(0, 3);
        }


    function computeResult() {
        const sorted = Object.entries(weights).sort((a, b) => b[1] - a[1]);
        const top = sorted[0][0] as ArchetypeKey;
        setResultKey(top);

        // Build dynamic recommendations: pick 3 that match the dominant vibe, but also sprinkle 1 from the 2nd place
        const dominant = top as ArchetypeKey;
        const runnerUp = sorted[1][0] as ArchetypeKey;

        const poolDominant = RECS_POOL[dominant];
        const poolRunner = RECS_POOL[runnerUp];


        // const picks = shuffle(poolDominant).slice(0, 2).concat(shuffle(poolRunner).slice(0, 1), shuffle(poolDominant).slice(2, 3));
        const picks = pickUniqueRecs(poolDominant, poolRunner);
        console.log('picks ', picks)
        setFinalRecs(shuffle(picks).map((p) => p.title));
    }

    useEffect(() => {
        if (step === QUESTIONS.length + 1 && !resultKey) {
            computeResult();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step]);

    function resetQuiz() {
        localStorage.removeItem("anime_quiz_v2");
        startQuiz();
    }

    function shareResult() {
        if (!resultKey) return;
        const text = `I got ${formatTitle(resultKey)} on the Otaku Personality Quiz! Discover yours: ${typeof window !== 'undefined' ? window.location.href : ''}`;
        if (navigator.share) {
            navigator.share({ text }).catch(() => { });
        } else {
            navigator.clipboard?.writeText(text).then(() => alert("Result copied to clipboard!"));
        }
    }

    function formatTitle(key: ArchetypeKey | null): string {
        switch (key) {
            case "shonen":
                return "The Shonen Spirit";
            case "slice":
                return "Cozy Slice-of-Life";
            case "isekai":
                return "The Adventurer (Isekai)";
            case "psy":
                return "Psychological / Mind-bender";
            default:
                return "Anime Lover";
        }
    }

    if (!mounted) return null;

    // Percentage breakdown for UI
    const total = Object.values(weights).reduce((a, b) => a + b, 0) || 1;
    const breakdown: Record<string, number> = Object.fromEntries(
        Object.entries(weights).map(([k, v]) => [k, Math.round((v / total) * 100)])
    );

    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">A</div>
                        <span className="font-bold text-xl tracking-tight">Anime Blog</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={() => { setStep(0); }}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Intro
                        </Button>
                        <Link href="/">
                            <Button variant="ghost" size="sm">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

                    {/* Intro */}
                    {step === 0 && (
                        <div>
                            <div className="text-center mb-8">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="inline-block mb-4">
                                    <Sparkles className="h-16 w-16 text-primary" />
                                </motion.div>
                                <h1 className="text-4xl font-bold tracking-tight mb-4">Which Otaku Anime Type Are You?</h1>
                                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">I built this as a hardcore anime nerd — expect cheeky copy, otaku energy, and recs you'd actually want to watch. Answer like you're the protagonist and we'll give you a varied, spicy recommendation list.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><Heart className="h-5 w-5 text-primary" />Why this quiz?</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Nuanced scoring (weights) — not one-point fits all</span></li>
                                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Dynamic recs from larger pools so results vary</span></li>
                                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Otaku tone because why not</span></li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" />How it works</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">Pick answers like you're roleplaying. Each option carries weighted vibes across the four archetypes; we total the vibes and give you a dominant type plus a fun mix of recommendations.</CardDescription>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="flex gap-4 justify-center">
                                <Button onClick={startQuiz} size="lg" className="text-lg px-8">
                                    <Sparkles className="mr-2 h-5 w-5" />Start (I am the protagonist)
                                </Button>
                            </div>

                            <p className="text-center text-sm text-muted-foreground mt-8">Progress is saved locally. Come back and finish later.</p>
                        </div>
                    )}

                    {/* Questions */}
                    {step >= 1 && step <= QUESTIONS.length && (
                        <div>
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground">Question {step} of {QUESTIONS.length}</span>
                                    <span className="text-sm text-muted-foreground">Answered: {Object.keys(answers).length}/{QUESTIONS.length}</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${(step / QUESTIONS.length) * 100}%` }} className="bg-primary h-2 rounded-full" transition={{ duration: 0.25 }} />
                                </div>
                            </div>

                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{QUESTIONS[step - 1].q}</CardTitle>
                                    <CardDescription>Choose like you're actually starring in this scene</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {QUESTIONS[step - 1].options.map((opt) => {
                                            const Icon = opt.icon;
                                            const isSelected = answers[QUESTIONS[step - 1].id] === opt.id;
                                            return (
                                                <motion.div key={opt.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                    <Button onClick={() => selectOption(QUESTIONS[step - 1].id, opt)} variant={isSelected ? "default" : "outline"} className="w-full h-auto p-4 text-left justify-start">
                                                        <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                                        <div>
                                                            <div className="font-medium">{opt.text}</div>
                                                            <div className="text-sm text-muted-foreground">{isSelected ? "Selected" : "Tap to choose"}</div>
                                                        </div>
                                                    </Button>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex justify-between items-center">
                                <Button onClick={() => step > 1 && setStep(step - 1)} variant="ghost" disabled={step === 1}><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>
                                <p className="text-sm text-muted-foreground hidden md:block">Otaku tip: pick what feels iconic to you.</p>
                                <Button onClick={() => setStep(QUESTIONS.length + 1)} variant="ghost">Finish Early</Button>
                            </div>
                        </div>
                    )}

                    {/* Results */}
                    {step === QUESTIONS.length + 1 && resultKey && (
                        <div>
                            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                                <Card className={`bg-gradient-to-br ${resultKey === 'shonen' ? 'from-orange-500 to-red-600' : resultKey === 'slice' ? 'from-pink-400 to-purple-500' : resultKey === 'isekai' ? 'from-blue-500 to-cyan-600' : 'from-purple-600 to-indigo-700'} text-white border-0 mb-6`}>
                                    <CardHeader className="text-center pb-4">
                                        <motion.div initial={{ rotate: -180, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }} className="inline-block mx-auto mb-4">
                                            {resultKey === 'shonen' && <Zap className="h-20 w-20" />}
                                            {resultKey === 'slice' && <Heart className="h-20 w-20" />}
                                            {resultKey === 'isekai' && <Compass className="h-20 w-20" />}
                                            {resultKey === 'psy' && <Brain className="h-20 w-20" />}
                                        </motion.div>
                                        <CardTitle className="text-3xl mb-2">{formatTitle(resultKey)}</CardTitle>
                                        <CardDescription className="text-white/90 text-lg">{resultKey === 'shonen' ? 'You crave hype, growth, and cathartic wins.' : resultKey === 'slice' ? 'You savor cozy moments and gentle character growth.' : resultKey === 'isekai' ? 'You dream of escaping to wondrous worlds.' : 'You love puzzles, twists, and the uncanny.'}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>

                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>Dynamic Recommendations</CardTitle>
                                    <CardDescription>Hand-picked just for you (rotates each playthrough)</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {finalRecs.map((rec, idx) => (
                                            <motion.li key={rec} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.08 }} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span className="font-medium">{rec}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <div className="flex flex-wrap gap-4 justify-center mb-6">
                                <Button onClick={shareResult} size="lg"><Share2 className="mr-2 h-5 w-5" />Share Result</Button>
                                <Button onClick={resetQuiz} variant="outline" size="lg"><RotateCcw className="mr-2 h-5 w-5" />Retake Quiz</Button>
                                <Link href="/"><Button variant="outline" size="lg"><ArrowLeft className="mr-2 h-5 w-5" />Back to Home</Button></Link>
                            </div>

                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="text-lg">Why this result?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">We computed weighted vibes from your answers to find your dominant archetype, then mixed recs from the dominant and runner-up pools so you get a list that reflects nuance — not a blunt label.</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Your Breakdown</CardTitle>
                                    <CardDescription>How much each archetype influenced your result</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <div className="text-sm text-muted-foreground">Shonen</div>
                                            <div className="text-2xl font-bold">{breakdown.shonen}%</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-muted-foreground">Slice</div>
                                            <div className="text-2xl font-bold">{breakdown.slice}%</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-muted-foreground">Isekai</div>
                                            <div className="text-2xl font-bold">{breakdown.isekai}%</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-muted-foreground">Psych</div>
                                            <div className="text-2xl font-bold">{breakdown.psy}%</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Loading state while computing */}
                    {step === QUESTIONS.length + 1 && !resultKey && (
                        <Card>
                            <CardContent className="py-12 text-center">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="inline-block mb-4">
                                    <Sparkles className="h-12 w-12 text-primary" />
                                </motion.div>
                                <p className="text-muted-foreground">Crunching otaku vibes...</p>
                            </CardContent>
                        </Card>
                    )}

                </motion.div>
            </main>

            <footer className="py-8 px-4 bg-muted/30 border-t mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 Anime Blog. All rights reserved. — Made with borderline unhealthy love for anime.</p>
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
