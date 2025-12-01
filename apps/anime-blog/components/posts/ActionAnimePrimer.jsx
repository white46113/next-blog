import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, Clock, BookOpen, Globe, Brain, Trophy, Map, GraduationCap, Rocket } from "lucide-react";

const animeList = [
    {
        id: 1,
        title: "Fullmetal Alchemist: Brotherhood",
        rating: "⭐⭐⭐⭐⭐",
        subtitle: "The Gold Standard of Anime Perfection",
        whyFirst: "If we could recommend only one anime to represent the entire medium, this would be it. It's a complete package that showcases everything amazing about the medium.",
        story: "Two brothers, Edward and Alphonse Elric, commit the ultimate alchemical taboo: attempting to resurrect their dead mother. The experiment fails catastrophically, costing Edward an arm and a leg, and Alphonse his entire body. Their journey to restore their bodies leads them through political conspiracies, moral dilemmas, and philosophical questions about equivalent exchange.",
        beginnerFriendly: [
            "Zero Filler: All 64 episodes advance the plot meaningfully",
            "Perfect Pacing: Each episode ends with a reason to watch the next",
            "Complete Character Arcs: Every major character gets satisfying development",
            "Balanced Tone: Expertly blends humor, tragedy, action, and philosophy",
            "Self-Contained Story: No need for prior anime knowledge"
        ],
        technicalExcellence: [
            "Animation that holds up beautifully years later",
            "One of the greatest English dubs ever recorded",
            "Musical score that enhances every emotional beat",
            "Fight choreography that serves character development"
        ],
        tip: "Watch the 2003 'Fullmetal Alchemist' series later if you want, but start with Brotherhood—it follows the complete manga story."
    },
    {
        id: 2,
        title: "Demon Slayer: Kimetsu no Yaiba",
        rating: "⭐⭐⭐⭐⭐",
        subtitle: "The Visual Revolution That Redefined Modern Anime",
        whyFirst: "When Episode 19 aired in 2019, it created a global sensation. This series represents the cutting edge of what anime can achieve visually.",
        story: "In Taisho-era Japan, Tanjiro Kamado returns home to find his family slaughtered by demons, with only his sister Nezuko surviving—but transformed into a demon herself. Tanjiro joins the Demon Slayer Corps to find a cure for Nezuko while hunting the demon responsible for his family's tragedy.",
        beginnerFriendly: [
            "Accessible Story: Emotional core of family and protection resonates universally",
            "Breathtaking Animation: Studio Ufotable's digital effects are movie-quality",
            "Manageable Length: Three seasons plus a movie (approximately 55 episodes total)",
            "Cultural Elements: Beautiful integration of Japanese folklore and tradition",
            "Pacing: Each season tells a complete narrative arc"
        ],
        technicalExcellence: [
            "The 'Episode 19' Phenomenon: A cultural moment demonstrating animation as pure art",
            "Combines traditional Japanese art with digital effects",
            "Emotional storytelling that leaves you breathless"
        ],
        tip: "Watch Order: Season 1 -> Mugen Train Movie -> Season 2 -> Season 3"
    },
    {
        id: 3,
        title: "Attack on Titan",
        rating: "⭐⭐⭐⭐⭐",
        subtitle: "The Epic That Transformed Anime's Global Perception",
        whyFirst: "It begins as a straightforward monster survival story but evolves into one of the most complex narratives in modern fiction. It rewards attention and patience with unbelievable payoffs.",
        story: "Humanity lives within three concentric walls protecting them from Titans—giant humanoid creatures that devour humans seemingly without reason. When the outermost wall is breached, young Eren Yeager witnesses his mother being eaten and vows to exterminate every Titan.",
        beginnerFriendly: [
            "Production Value: Hollywood-level animation and sound design",
            "Mystery Box Storytelling: Each answer creates three new questions",
            "Character Evolution: Protagonists and antagonists evolve dramatically",
            "Thematic Depth: Explores nationalism, freedom, and the cycle of hatred"
        ],
        technicalExcellence: [
            "Arguably the darkest series on this list",
            "Features graphic violence, body horror, and major character deaths",
            "Explores moral ambiguity and complex politics"
        ],
        tip: "Seasons 1-3 build an incredible foundation, but Season 4 elevates the series to legendary status."
    },
    {
        id: 4,
        title: "My Hero Academia",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Modern Superhero Saga That Captured a Generation",
        whyFirst: "If Western superhero stories resonate with you, this provides the perfect bridge to anime. It takes familiar superhero tropes and filters them through Japanese storytelling sensibilities.",
        story: "In a world where 80% of the population has superpowers (called 'Quirks'), Izuku Midoriya is part of the powerless 20%. His dream of becoming a hero like the legendary All Might seems impossible until a chance encounter changes everything.",
        beginnerFriendly: [
            "Relatable Protagonist: Izuku's journey feels earned",
            "The School Setting: UA High School provides natural story progression",
            "Villain Development: Some of anime's most compelling antagonists",
            "Thematic Consistency: Explores what it truly means to be a hero"
        ],
        technicalExcellence: [
            "Balances flashy superpower battles with character-driven drama",
            "Social commentary on celebrity and responsibility",
            "Legacy and mentorship themes"
        ],
        tip: "Best Arcs: Sports Festival (S2), Hideout Raid (S3), Paranormal Liberation War (S6)"
    },
    {
        id: 5,
        title: "One Punch Man",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Brilliant Parody That Became a Masterpiece",
        whyFirst: "It begins as a simple premise: what if a superhero became so powerful he could defeat any enemy with a single punch? This joke evolves into a brilliant examination of heroism and purpose.",
        story: "Saitama was an ordinary salaryman until he decided to become a hero for fun. After three years of intense training, he achieved ultimate power but lost his hair and, more importantly, the ability to feel challenged or excited by battle.",
        beginnerFriendly: [
            "Short Commitment: Season 1 is only 12 episodes",
            "Instant Gratification: The comedy lands immediately",
            "Stunning Animation: Season 1 features some of the best fight scenes ever",
            "Subversive Take: Perfect for those tired of predictable hero stories"
        ],
        technicalExcellence: [
            "Examination of what gives life meaning",
            "Satire of bureaucratic hero rankings",
            "Commentary on fame and recognition"
        ],
        tip: "Perfect for Marvel/DC fans, comedy lovers, and anyone who wants something different."
    },
    {
        id: 6,
        title: "Jujutsu Kaisen",
        rating: "⭐⭐⭐⭐",
        subtitle: "The New Generation Standard Bearer",
        whyFirst: "Jujutsu Kaisen represents the current generation of action anime. It takes everything that works about the genre and executes them with contemporary style and pacing.",
        story: "High school student Yuji Itadori swallows a cursed finger containing the spirit of Sukuna, the King of Curses. To prevent Sukuna's full resurrection, Yuji enrolls in Tokyo Metropolitan Jujutsu Technical High School to become a jujutsu sorcerer.",
        beginnerFriendly: [
            "Animation Quality: Studio MAPPA's work is consistently stunning",
            "Pacing: Minimal filler, maximum action",
            "Character Design: Memorable and distinctive visual style",
            "Power System: Cursed energy system is intuitive but deep"
        ],
        technicalExcellence: [
            "Domain Expansions: Personalized reality-warping spaces",
            "Well-developed female characters",
            "Hip-hop influenced soundtrack feels fresh and modern"
        ],
        tip: "Two seasons and a movie available, with more confirmed to come."
    },
    {
        id: 7,
        title: "Hunter x Hunter (2011)",
        rating: "⭐⭐⭐⭐⭐",
        subtitle: "The Journey That Grows With You",
        whyFirst: "It begins as a bright, adventurous story but becomes a complex exploration of human nature. It's a series that matures alongside its viewer.",
        story: "Gon Freecss discovers his father is one of the world's legendary Hunters. Gon decides to become a Hunter himself to find his father and understand why he was abandoned.",
        beginnerFriendly: [
            "Hunter Exam Arc: Standard tournament/battle royale done well",
            "Heaven's Arena: Introduction of the Nen power system",
            "Yorknew City: Shifts to dark, criminal underworld thriller",
            "Chimera Ant Arc: Becomes philosophical masterpiece about humanity"
        ],
        technicalExcellence: [
            "Nen System: Arguably the best power system in anime",
            "Strategic battles rather than simple power comparisons",
            "Gradual complexity increase"
        ],
        tip: "148 episodes. Consider it a long-term project."
    },
    {
        id: 8,
        title: "Mob Psycho 100",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Unexpected Emotional Powerhouse",
        whyFirst: "From the creator of One Punch Man, but explores internal growth and emotional intelligence rather than external heroism.",
        story: "Shigeo 'Mob' Kageyama is an incredibly powerful esper who suppresses his emotions to avoid losing control. He works for con-man Reigen Arataka as they handle supernatural cases.",
        beginnerFriendly: [
            "Art Style: Unique and expressive",
            "Character Growth: Mob's journey of self-acceptance is moving",
            "Balance: Perfect mix of comedy, action, and heartfelt drama",
            "Complete Story: Three perfect seasons"
        ],
        technicalExcellence: [
            "The 100% System: Powers tied to emotional state",
            "Argues that emotional growth matters more than power",
            "Consistently praised by critics and fans"
        ],
        tip: "Often overshadowed by flashier series, but a hidden gem."
    },
    {
        id: 9,
        title: "Sword Art Online",
        rating: "⭐⭐⭐",
        subtitle: "The Gateway to Isekai",
        whyFirst: "It popularized the 'isekai' (another world) genre and remains many people's first anime.",
        story: "In 2022, 10,000 players log into the virtual reality MMORPG Sword Art Online only to discover they cannot log out. Dying in-game means dying in real life.",
        beginnerFriendly: [
            "Familiar Concept: Video game mechanics are accessible",
            "High Stakes: Life-or-death scenario creates tension",
            "Romantic Element: Central love story adds weight",
            "Visual Appeal: Animation still looks good"
        ],
        technicalExcellence: [
            "Gateway to other isekai like Re:Zero and Konosuba",
            "Controversial elements can be springboards for discussion",
            "Core adventure remains compelling"
        ],
        tip: "Seasons 1 and 2 provide a complete experience."
    },
    {
        id: 10,
        title: "Naruto / Naruto Shippuden",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Cultural Phenomenon",
        whyFirst: "For an entire generation, this was their introduction to anime. Its cultural impact is immense.",
        story: "Naruto Uzumaki is an orphan ninja shunned by his village for hosting the Nine-Tailed Fox demon. He dreams of becoming Hokage to earn everyone's respect.",
        beginnerFriendly: [
            "Iconic Characters: Kakashi, Sasuke, Sakura",
            "Thematic Depth: Explores cycles of hatred and legacy",
            "World-Building: Expansive ninja world",
            "Emotional Payoff: Memorable moments"
        ],
        technicalExcellence: [
            "Use a Filler Guide to skip non-canon episodes",
            "Watch 'Naruto Kai' for a streamlined experience",
            "Best Arcs: Land of Waves, Chunin Exams, Pain's Assault"
        ],
        tip: "Approximately 500 essential episodes. A long-term project."
    }
];

export default function ActionAnimePrimer() {
    return (
        <div className="space-y-12">
            {/* Article Header */}
            <div className="mb-8">
                <Badge className="mb-4 bg-purple-600">Beginner's Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    The Ultimate Beginner's Primer: Why Action Anime is Your Perfect Gateway
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>January 20, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>20 min read</span>
                    </div>
                    <span>By Anime Blog Team</span>
                </div>
            </div>

            <Separator className="my-8" />

            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Welcome to the vibrant, thrilling world of anime! If you're holding this guide, you're standing at the threshold of one of the most exciting entertainment mediums on the planet. Action anime isn't just cartoons from Japan—it's a storytelling art form that combines breathtaking animation, complex characters, and narratives that can make you laugh, cry, and cheer, often within the same episode.
                </p>
            </div>

            {/* Global Phenomenon */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-none">
                <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <Globe className="h-8 w-8 text-blue-600" />
                        <CardTitle className="text-2xl">The Global Anime Phenomenon</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-lg">
                        Let's address the elephant in the room: "Isn't anime just for kids?" This outdated misconception couldn't be further from reality. Modern action anime tackles mature themes including:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {[
                            "Philosophical questions about morality and existence",
                            "Complex political systems and societal structures",
                            "Psychological trauma and character development",
                            "Realistic consequences of violence and war",
                            "Adult relationships and responsibilities"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 bg-background/50 p-3 rounded-lg">
                                <span className="h-2 w-2 rounded-full bg-blue-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                        The global anime market was valued at $24.23 billion in 2021 and is projected to reach $48.3 billion by 2030.
                    </p>
                </CardContent>
            </Card>

            {/* Science Behind Appeal */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <Brain className="h-8 w-8 text-purple-600" />
                        The Science Behind the Appeal
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Why do viewers become so passionately devoted to anime? Neuroscience provides some answers:
                    </p>
                </div>
                <div className="grid gap-4">
                    {[
                        { title: "Visual Complexity", desc: "Uses more facial expressions per minute, creating deeper emotional connections" },
                        { title: "Story Pacing", desc: "Follows a 3-act structure per episode with satisfying short and long-term payoff" },
                        { title: "Character Design", desc: "Distinctive styles make characters instantly recognizable and memorable" },
                        { title: "Sound Design", desc: "Audio elements are crafted with cinematic care" }
                    ].map((item, i) => (
                        <Card key={i}>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-primary">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Top 10 List */}
            <div className="space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Trophy className="h-10 w-10 text-yellow-500" />
                        The Definitive Top 10
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Complete breakdowns of the best action anime for beginners.
                    </p>
                </div>

                {animeList.map((anime, index) => (
                    <Card key={anime.id} className="overflow-hidden border-l-4 border-l-primary">
                        <CardHeader className="bg-muted/30 pb-6">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant="outline" className="text-lg font-bold">#{index + 1}</Badge>
                                        <div className="flex text-yellow-400">
                                            {anime.rating}
                                        </div>
                                    </div>
                                    <CardTitle className="text-3xl mb-2">{anime.title}</CardTitle>
                                    <CardDescription className="text-lg font-medium text-primary">
                                        {anime.subtitle}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-8 space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-3">The Story</h4>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {anime.story}
                                    </p>
                                    <h4 className="font-bold text-lg mb-3">Why It's Beginner-Friendly</h4>
                                    <ul className="space-y-2">
                                        {anime.beginnerFriendly.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-secondary/20 p-6 rounded-lg">
                                        <h4 className="font-bold mb-3">Technical Excellence</h4>
                                        <ul className="space-y-2">
                                            {anime.technicalExcellence.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                                        <p className="text-sm font-medium flex gap-2">
                                            <span className="text-xl">💡</span>
                                            {anime.tip}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Roadmap */}
            <Card className="bg-slate-900 text-white border-none">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Map className="h-8 w-8 text-blue-400" />
                        <CardTitle className="text-2xl">Your First 100 Hours Roadmap</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            phase: "Phase 1: Foundation",
                            hours: "First 50 Hours",
                            goal: "Experience different styles",
                            items: ["Fullmetal Alchemist: Brotherhood", "Demon Slayer (S1 + Movie)", "One Punch Man (S1)"]
                        },
                        {
                            phase: "Phase 2: Deep Dive",
                            hours: "Next 50 Hours",
                            goal: "Commit to a longer series",
                            items: ["Attack on Titan (S1-2)", "My Hero Academia (S1-3)", "Hunter x Hunter (Ep 1-50)"]
                        },
                        {
                            phase: "Phase 3: Specialization",
                            hours: "Beyond 100 Hours",
                            goal: "Explore niche interests",
                            items: ["Steins;Gate (Sci-Fi)", "Vinland Saga (Historical)", "Jujutsu Kaisen (Action)"]
                        }
                    ].map((phase, i) => (
                        <div key={i} className="bg-white/10 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-1">{phase.phase}</h3>
                            <p className="text-sm text-blue-300 mb-4">{phase.hours}</p>
                            <p className="text-sm mb-4 italic opacity-80">{phase.goal}</p>
                            <ul className="space-y-2 text-sm">
                                {phase.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-white rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Anime Literacy */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    Anime Literacy: Essential Terminology
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { term: "Shonen", def: "Targeted at young males (but enjoyed by all)" },
                        { term: "Seinen", def: "Targeted at adult males" },
                        { term: "Shojo", def: "Targeted at young females" },
                        { term: "Isekai", def: "'Another world' genre" },
                        { term: "Sakuga", def: "Exceptionally well-animated sequences" },
                        { term: "Filler", def: "Non-canon material (usually anime-only)" }
                    ].map((item, i) => (
                        <Card key={i}>
                            <CardContent className="p-4">
                                <span className="font-bold text-primary block mb-1">{item.term}</span>
                                <span className="text-sm text-muted-foreground">{item.def}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center space-y-6">
                <Rocket className="h-12 w-12 mx-auto" />
                <h2 className="text-3xl font-bold">Welcome to the Adventure!</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    You stand at the beginning of what could become one of the most rewarding entertainment journeys of your life. The worlds, characters, and stories awaiting you have brought joy, inspiration, and community to millions worldwide.
                </p>
                <div className="font-medium text-xl">
                    "In every end, there is also a beginning."
                </div>
            </div>
        </div>
    );
}
