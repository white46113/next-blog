import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, Clock, Globe, Brain, Trophy, Map, GraduationCap, Rocket, Zap, BookOpen, Shield, Gamepad2 } from "lucide-react";

const animeList = [
    {
        id: 1,
        title: "Re:Zero - Starting Life in Another World",
        rating: "⭐⭐⭐⭐⭐",
        subtitle: "The Psychological Masterpiece That Redefined the Genre",
        premise: "Subaru Natsuki, an ordinary teenager, finds himself suddenly transported to a fantasy world. Unlike typical isekai heroes, he has no special powers—except one: 'Return by Death.' When killed, he returns to a predetermined 'save point' with all memories intact.",
        uniquePoints: [
            "Real Consequences: Every death carries psychological weight",
            "Flawed Protagonist: Subaru isn't overpowered—he's deeply human",
            "Unpredictable Plot: Twists that genuinely surprise",
            "Emotional Depth: Explores love, sacrifice, and madness",
            "Beautiful World: Meticulously crafted fantasy setting"
        ],
        whyWatch: "Re:Zero isn't afraid to put its characters through hell. Subaru's journey is one of the most psychologically realistic portrayals of trauma in anime. His growth feels earned through unimaginable pain.",
        tip: "Watch Order: Season 1 -> Memory Snow OVA -> The Frozen Bond OVA -> Season 2"
    },
    {
        id: 2,
        title: "Mushoku Tensei: Jobless Reincarnation",
        rating: "⭐⭐⭐⭐⭐",
        subtitle: "The Controversial Masterpiece That Perfected the Genre",
        premise: "A 34-year-old NEET dies after a wasted life and is reincarnated as Rudeus Greyrat in a magical fantasy world. With memories intact, he vows to live his new life without regrets, mastering magic from infancy.",
        uniquePoints: [
            "Production Quality: Movie-level animation every episode",
            "World-Building: Most detailed fantasy setting in anime",
            "Character Growth: Decades-spanning development",
            "Magic System: Intricate and well-defined",
            "Emotional Range: From hilarious to heartbreaking"
        ],
        whyWatch: "Mushoku Tensei features a protagonist with problematic behaviors from his past life. The series doesn't shy away from showing Rudeus's flaws as he gradually grows into a better person.",
        tip: "Content Warning: Sexual content and fan service. Not for younger audiences."
    },
    {
        id: 3,
        title: "That Time I Got Reincarnated as a Slime",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Cozy Power Fantasy That Everyone Loves",
        premise: "Satoru Mikami, a 37-year-old salaryman, is stabbed and reincarnated in a fantasy world as a slime—the weakest monster type. But with his unique abilities 'Predator' and 'Great Sage,' he begins building a nation where monsters and humans can coexist peacefully.",
        uniquePoints: [
            "Low-Stress Viewing: Conflict resolution through diplomacy",
            "Satisfying Progression: Watching a nation being built",
            "Likeable Cast: Dozens of memorable characters",
            "Consistent Quality: Three excellent seasons",
            "Balanced Tone: Serious when needed, humorous often"
        ],
        whyWatch: "Unlike most isekai focusing on individual power, 'Slime' explores governance, economics, and nation-building. Watching Rimuru create laws, establish trade, and build infrastructure is surprisingly engaging.",
        tip: "Watch Order: Season 1 -> OVAs -> Season 2 -> Season 3"
    },
    {
        id: 4,
        title: "Sword Art Online",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Series That Made Isekai Mainstream",
        premise: "In 2022, 10,000 players log into the VRMMORPG Sword Art Online to discover they cannot log out. The creator reveals that dying in-game means dying in real life, and the only escape is clearing all 100 floors of Aincrad.",
        uniquePoints: [
            "Accessible Concept: Video game mechanics are familiar",
            "High Stakes: Life-or-death tension from episode one",
            "Romantic Core: Kirito and Asuna's relationship",
            "Visual Appeal: Early 2010s animation that still impresses",
            "Varied Settings: Different game worlds each season"
        ],
        whyWatch: "Though controversial among veterans, SAO's importance cannot be overstated. It brought isekai to global attention and introduced millions to the genre.",
        tip: "Best Entry Points: Season 1 (Aincrad Arc) or Progressive Movies"
    },
    {
        id: 5,
        title: "Konosuba: God's Blessing on This Wonderful World!",
        rating: "⭐⭐⭐⭐⭐",
        subtitle: "The Brilliant Parody That Loves What It Mocks",
        premise: "After a ridiculous death, Kazuma Sato is offered reincarnation in a fantasy world by the useless goddess Aqua. He chooses to bring her along, forming the most dysfunctional adventuring party in anime history.",
        uniquePoints: [
            "Character Chemistry: The quartet's dysfunction is perfection",
            "Satirical Edge: Mocks every isekai trope with affection",
            "Consistent Humor: Jokes that land 90% of the time",
            "Surprising Heart: Genuine character moments between laughs"
        ],
        whyWatch: "Konosuba doesn't hate isekai—it celebrates the genre while highlighting its absurdities. Every character represents a parody of common archetypes.",
        tip: "Watch Order: Season 1 -> Season 2 -> Legend of Crimson Movie"
    },
    {
        id: 6,
        title: "Overlord",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Villain Protagonist Done Right",
        premise: "When popular game YGGDRASIL shuts down, player Momonga stays logged in until the final moment—only to find himself trapped in the game world as his skeletal mage character, with his NPC followers gaining sentience and worshipping him as their ruler.",
        uniquePoints: [
            "Unique Perspective: Villain protagonist who stays villainous",
            "World Conquest: Methodical expansion of the Nazarick empire",
            "NPC Characters: Deeply developed supporting cast",
            "Power Scale: The protagonists are always the strongest",
            "Political Intrigue: Nations reacting to an unstoppable force"
        ],
        whyWatch: "While most isekai follow heroes, Overlord asks: 'What if you had absolute power and no moral constraints?' Momonga gradually loses his humanity as he plays the role of evil overlord to perfection.",
        tip: "Content Warning: Graphic violence, dark themes, and moral ambiguity."
    },
    {
        id: 7,
        title: "The Rising of the Shield Hero",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Redemption Arc Masterpiece",
        premise: "Naofumi Iwatani is summoned as one of Four Cardinal Heroes to save a fantasy world. Betrayed, falsely accused, and despised by everyone, he must rise from the lowest point to become the hero the world needs but doesn't deserve.",
        uniquePoints: [
            "Underdog Story: Starting from absolute rock bottom",
            "Character Growth: Naofumi's journey from bitterness to heroism",
            "Raphtalia: One of anime's best companion characters",
            "System Mechanics: RPG elements integrated into plot",
            "Emotional Payoff: Satisfying vengeance and redemption"
        ],
        whyWatch: "The difficult start makes Naofumi's growth more meaningful. It explores complex themes like slave morality and economic systems.",
        tip: "Season 1 is excellent; Season 2 is weaker but necessary setup; Season 3 returns to form."
    },
    {
        id: 8,
        title: "No Game No Life",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Strategic Mastermind Fantasy",
        premise: "Siblings Sora and Shiro are NEET gaming prodigies known collectively as 'Blank'. Transported to the world of Disboard where all conflicts are resolved through games, they aim to conquer all sixteen races and challenge the god Tet.",
        uniquePoints: [
            "Brain over Brawn: Intellectual battles instead of physical",
            "Visual Spectacle: Vibrant, surreal colors",
            "Sibling Dynamic: Perfect team with deep emotional core",
            "World Rules: Consistent game mechanics that matter"
        ],
        whyWatch: "In a genre dominated by combat, No Game No Life stands out by making every conflict a game requiring strategy, psychology, and sometimes cheating.",
        tip: "Only 12 episodes + movie (No Game No Life Zero)."
    },
    {
        id: 9,
        title: "Log Horizon",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Society-Building Isekai",
        premise: "When 30,000 Japanese players find themselves trapped in the MMORPG Elder Tales, socially awkward strategist Shiroe works to build a functional society within the game's mechanics.",
        uniquePoints: [
            "Intellectual Focus: Strategies and negotiations over battles",
            "System Exploitation: Using game mechanics creatively",
            "Character Development: Large cast with individual arcs",
            "World Mystery: Unraveling why they're trapped"
        ],
        whyWatch: "Unlike SAO's life-or-death stakes, Log Horizon focuses on politics, economics, and governance. Perfect for fans of strategy games and thoughtful world-building.",
        tip: "Three seasons available."
    },
    {
        id: 10,
        title: "The Eminence in Shadow",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Delusional Protagonist Comedy",
        premise: "Cid Kagenou dreams of becoming a 'mastermind who operates from the shadows'. Reincarnated in a fantasy world, he creates an imaginary organization to fight a made-up cult—except everything he invented turns out to be real.",
        uniquePoints: [
            "Comedy Gold: Dramatic irony where Cid remains clueless",
            "Production Quality: Surprisingly excellent fight scenes",
            "Originality: Fresh take on overpowered protagonist trope",
            "Likeable Cast: Shadow Garden members are developed characters"
        ],
        whyWatch: "The humor comes from Cid believing he's playing along with delusions, while everyone else sees him as a genius mastermind.",
        tip: "20 episodes of consistent quality in Season 1."
    },
    {
        id: 11,
        title: "So I'm a Spider, So What?",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Survival Isekai with Dual Timelines",
        premise: "A classroom is obliterated, reincarnating students in a fantasy world. Our protagonist wakes up as a tiny spider monster in a dungeon's deepest level and must survive and evolve.",
        uniquePoints: [
            "Monster Evolution: RPG-style progression system",
            "Isolated Protagonist: Engaging internal monologues",
            "Mystery Elements: Slowly connecting two timelines",
            "Creative Combat: Using spider abilities in clever ways"
        ],
        whyWatch: "The spider protagonist (Kumoko) carries the story with her survival struggle and creative problem-solving.",
        tip: "CGI for spider sections improves over time."
    },
    {
        id: 12,
        title: "Ascendance of a Bookworm",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Cozy, Revolutionary Isekai",
        premise: "A book-obsessed student is reincarnated as a sickly five-year-old in a medieval world where books are rare. Her mission: create books so she can read again.",
        uniquePoints: [
            "Slice-of-Life Revolution: Focuses on technology and economics",
            "Incremental Progress: Small inventions feel monumental",
            "World-Building: Authentically researched medieval society",
            "Emotional Stakes: Health issues create constant tension"
        ],
        whyWatch: "Myne changes her world through economic innovation and knowledge dissemination rather than strength.",
        tip: "Perfect for fans of historical fiction and intellectual protagonists."
    },
    {
        id: 13,
        title: "Gate: Thus the JSDF Fought There",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Military Isekai with Political Commentary",
        premise: "A mysterious gate appears in Tokyo, unleashing a fantasy army. Japan's Self-Defense Forces defeat them and send an expedition to establish diplomatic relations.",
        uniquePoints: [
            "Realism Approach: Modern military vs fantasy world",
            "Political Realism: Bureaucracy and international law",
            "Cultural Exchange: Language barriers and customs",
            "Unique Blend: Military/political/fantasy"
        ],
        whyWatch: "Explores the technological disparity and political consequences of a modern military encountering a fantasy world.",
        tip: "Two 12-episode seasons."
    },
    {
        id: 14,
        title: "The Devil is a Part-Timer!",
        rating: "⭐⭐⭐⭐",
        subtitle: "Reverse Isekai Perfection",
        premise: "The Demon Lord Satan escapes to modern-day Tokyo, loses his powers, and gets a job at a fast-food restaurant to survive.",
        uniquePoints: [
            "Reverse Isekai: Fantasy characters in modern Japan",
            "Fish-Out-of-Water Humor: Demon Lords in customer service",
            "Character Development: Enemies becoming found family",
            "Consistent Quality: Season 1 is nearly perfect"
        ],
        whyWatch: "The comedy comes from seeing fantasy rivalries play out in minimum-wage jobs.",
        tip: "Season 2 released in 2022."
    },
    {
        id: 15,
        title: "Cautious Hero",
        rating: "⭐⭐⭐⭐",
        subtitle: "The Parody That Understands Gamers",
        premise: "A hero is summoned to save an S-rank world but is pathologically cautious. He trains to max level before leaving town and prepares excessively for every battle.",
        uniquePoints: [
            "Gamer Mentality: Overleveling and hoarding items",
            "Comedy Through Excess: Absurd precautions",
            "Surprising Depth: Justification for caution revealed later",
            "Emotional Payoff: Satisfying conclusion"
        ],
        whyWatch: "Perfect parody of RPG player habits with a surprisingly emotional story.",
        tip: "Single season complete story."
    }
];

export default function IsekaiAnimePrimer() {
    return (
        <div className="space-y-12">
            {/* Article Header */}
            <div className="mb-8">
                <Badge className="mb-4 bg-purple-600">Genre Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Welcome to the World of Isekai: Your Portal to Infinite Possibilities
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>January 25, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>25 min read</span>
                    </div>
                    <span>By Anime Blog Team</span>
                </div>
            </div>

            <Separator className="my-8" />

            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    The term "isekai" (異世界) literally translates to "another world" or "different world" in Japanese. This wildly popular anime genre follows characters who are transported, reborn, or reincarnated into fantasy worlds, virtual realities, or parallel universes. What began as a niche concept has exploded into anime's most dominant genre, offering everything from epic adventures to hilarious parodies.
                </p>
            </div>

            {/* Cultural Phenomenon */}
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-none">
                <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <Globe className="h-8 w-8 text-indigo-600" />
                        <CardTitle className="text-2xl">The Isekai Explosion: A Cultural Phenomenon</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-lg mb-3">Why Isekai Captured the World</h4>
                            <ul className="space-y-2">
                                {[
                                    "Escape Fantasy: Adventure beyond daily life",
                                    "Power Progression: Satisfying growth from zero to hero",
                                    "World-Building: Intricate fantasy systems",
                                    "Relatability: Modern protagonists in extraordinary situations",
                                    "Variety: From dark survival to cozy slice-of-life"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-3">The Numbers Don't Lie</h4>
                            <ul className="space-y-2">
                                {[
                                    "40% of light novel publications in Japan are isekai",
                                    "Over 300 isekai anime produced in the last decade",
                                    "Most-watched anime category on global platforms",
                                    "Merchandise sales exceed $500 million annually"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Separator />

            {/* Top 15 List */}
            <div className="space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Trophy className="h-10 w-10 text-yellow-500" />
                        The Definitive Top 15 Isekai Anime
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Complete breakdowns of the masterpieces defining the genre.
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
                                    <h4 className="font-bold text-lg mb-3">The Premise</h4>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {anime.premise}
                                    </p>
                                    <h4 className="font-bold text-lg mb-3">What Makes It Unique</h4>
                                    <ul className="space-y-2">
                                        {anime.uniquePoints.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-secondary/20 p-6 rounded-lg">
                                        <h4 className="font-bold mb-3">Why You Should Watch</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {anime.whyWatch}
                                        </p>
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

            {/* Decision Guide */}
            <Card className="bg-slate-900 text-white border-none">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Map className="h-8 w-8 text-blue-400" />
                        <CardTitle className="text-2xl">Choosing Your First Isekai</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-blue-300">By Preferred Experience</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Emotional Depth</span>
                                <span className="text-blue-200">Re:Zero</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Epic Storytelling</span>
                                <span className="text-blue-200">Mushoku Tensei</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Cozy & Feel-Good</span>
                                <span className="text-blue-200">Slime Isekai</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Comedy & Parody</span>
                                <span className="text-blue-200">Konosuba</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Strategy & Mind Games</span>
                                <span className="text-blue-200">No Game No Life</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-blue-300">By Time Investment</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Short & Complete</span>
                                <span className="text-blue-200">Konosuba, NGNL</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Medium Length</span>
                                <span className="text-blue-200">Re:Zero, Shield Hero</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Long Commitment</span>
                                <span className="text-blue-200">Slime, Mushoku Tensei</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Very Long</span>
                                <span className="text-blue-200">SAO, Overlord</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Common Tropes */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <Gamepad2 className="h-8 w-8 text-primary" />
                    The Isekai Formula: Common Tropes
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: "Truck-kun", desc: "The infamous truck that sends protagonists to other worlds" },
                        { title: "Cheat Ability", desc: "Overpowered skill given upon arrival" },
                        { title: "Demon Lord", desc: "The ultimate evil that must be defeated" },
                        { title: "Adventurer's Guild", desc: "Standard fantasy organization for quests" }
                    ].map((item, i) => (
                        <Card key={i}>
                            <CardContent className="p-4">
                                <span className="font-bold text-primary block mb-1">{item.title}</span>
                                <span className="text-sm text-muted-foreground">{item.desc}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <Card>
                        <CardHeader><CardTitle className="text-lg">What does "isekai" mean?</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Japanese for "another world". It refers to stories where characters are transported to fantasy worlds.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle className="text-lg">Why are there so many isekai?</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">They offer wish fulfillment, escapism, and easy-to-understand video game mechanics that resonate with modern audiences.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle className="text-lg">Are all isekai about overpowered heroes?</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">No. While common, many series like Re:Zero or Konosuba feature weak or incompetent protagonists to subvert expectations.</p></CardContent>
                    </Card>
                </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center space-y-6">
                <Rocket className="h-12 w-12 mx-auto" />
                <h2 className="text-3xl font-bold">Start Your Adventure!</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    Whether you want epic battles, cozy nation-building, or hilarious comedy, there's an isekai waiting for you. Pick one from our Top 15 and jump into a new world today!
                </p>
            </div>
        </div>
    );
}
