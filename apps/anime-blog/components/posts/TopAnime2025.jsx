import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, Clock } from "lucide-react";

const animeList = [
    {
        id: 1,
        title: "Attack on Titan: Legacy",
        genre: "Dark Fantasy, Action, Drama",
        studio: "To be announced (expected MAPPA or new partnership)",
        release: "Late 2025 (expected)",
        description: "Attack on Titan captured global attention for a decade, and 2025 reignites the world of Titans with Attack on Titan: Legacy. This brand-new project reportedly takes place years after the original storyline, focusing on a fresh cast living with the consequences of generations of conflict.",
        expectations: [
            "A new protagonist discovering remnants of Titan power",
            "Expanded lore beyond Paradis and Marley",
            "A more political and psychological narrative",
            "Potential cameos from surviving characters",
            "High-quality action scenes similar to season 4"
        ],
        whyWatch: "If you thought the story ended, think again. This new entry revives the franchise with broader worldbuilding and a darker, more mature tone suitable for veterans and new viewers alike."
    },
    {
        id: 2,
        title: "Demon Slayer: The Infinite Castle Arc",
        genre: "Shonen, Action, Supernatural",
        studio: "Ufotable",
        release: "2025",
        description: "The finale fans have been begging for. Following the Hashira Training Arc, Demon Slayer moves into the Infinite Castle Arc—one of the most visually spectacular arcs in all of shonen. Ufotable has hinted that the animation quality will surpass even the Mugen Train film.",
        expectations: [
            "Over 10 breathtaking boss-level battles",
            "Long-awaited clashes between Hashira and Upper Moons",
            "Muzan’s shocking transformations",
            "Emotional character deaths",
            "Perhaps the most explosive final act in modern anime"
        ],
        whyWatch: "It’s the climactic battle that wraps the entire Demon Slayer story. The Infinite Castle Arc may go down as one of anime's greatest action spectacles."
    },
    {
        id: 3,
        title: "One Punch Man Season 3",
        genre: "Superhero, Action, Comedy",
        studio: "(Rumored) MAPPA or J.C. Staff return",
        release: "Mid-to-late 2025",
        description: "Saitama fans have waited years, and now 2025 brings the Monster Association Arc—the longest and most intense saga in the manga.",
        expectations: [
            "Saitama vs. Orochi",
            "Garou’s monstrous evolution",
            "More S-Class heroes in full combat",
            "Massive destruction sequences",
            "Darker tone compared to earlier seasons"
        ],
        whyWatch: "Season 3 covers the most iconic arc in the franchise. If animated well, it could become one of the biggest anime events of the decade."
    },
    {
        id: 4,
        title: "Solo Leveling Season 2",
        genre: "Dark Fantasy, Action",
        studio: "A-1 Pictures",
        release: "Early 2025",
        description: "Following the global success of Season 1, Solo Leveling Season 2 pushes Sung Jin-Woo into dangerous new territory as he faces deadlier gates, discovers more secrets about his powers, and encounters the intense Monarch storyline.",
        expectations: [
            "New shadow soldiers",
            "Jin-Woo’s dramatic power evolution",
            "Monarch vs. Hunter world war setup",
            "Emotional character relationships",
            "Higher-budget fight animation"
        ],
        whyWatch: "Solo Leveling Season 2 is where the real story begins. If you enjoyed the power fantasy and boss fights of Season 1, Season 2 delivers far more action, lore, and emotional stakes."
    },
    {
        id: 5,
        title: "Chainsaw Man Season 2",
        genre: "Horror, Dark Comedy, Action",
        studio: "MAPPA",
        release: "2025",
        description: "Chainsaw Man shook the industry with its gritty violence, unpredictable characters, and emotional depth. Season 2 dives into some of the manga’s strongest arcs.",
        expectations: [
            "The Bomb Girl Arc continuation",
            "More devil encounters with disturbing designs",
            "Darker psychological themes",
            "Denji’s evolving motivations",
            "Increased focus on Makima’s mysterious plans"
        ],
        whyWatch: "The chaos, brutality, humor, and emotional punches are exactly why Chainsaw Man stands out. Season 2 is expected to be even more explosive."
    },
    {
        id: 6,
        title: "Jujutsu Kaisen Season 3",
        genre: "Dark Fantasy, Action, Supernatural",
        studio: "MAPPA",
        release: "2025",
        description: "After the Shibuya Incident Arc shook fans with its brutality, Season 3 adapts the Culling Game Arc, introducing new sorcerers, complex battles, and major twists.",
        expectations: [
            "New powerful villains and allies",
            "Multistage domain battles",
            "Yuji’s dramatic growth",
            "A deeper look into Megumi’s fate",
            "More Satoru Gojo relevance"
        ],
        whyWatch: "Season 3 brings high-level combat and emotional stakes. For fans who survived the heartbreak of Shibuya, this arc offers a thrilling continuation."
    },
    {
        id: 7,
        title: "My Hero Academia: Final Chapter / Final Season",
        genre: "Superhero, Action, Drama",
        studio: "Bones",
        release: "2025",
        description: "Deku’s journey may reach its emotional conclusion in 2025. The final season is expected to cover the last major war between heroes and villains.",
        expectations: [
            "Class 1-A’s ultimate evolution",
            "All For One vs. One For All finale",
            "Deku’s internal struggles",
            "Shigaraki’s final form",
            "Multiple tear-jerking character resolutions"
        ],
        whyWatch: "This is a generation-defining series. The finale promises massive battles, emotional payoff, and a satisfying end to an iconic franchise."
    },
    {
        id: 8,
        title: "Blue Lock Season 2",
        genre: "Sports, Psychological, Drama",
        studio: "Eight Bit",
        release: "2025",
        description: "The high-intensity soccer anime Blue Lock returns with even more ego-driven battles as Isagi dreams of becoming the world’s best striker.",
        expectations: [
            "Introduction of international teams",
            "Advanced rivalries with Rin, Kaiser & Shidou",
            "Tactical brilliance mixed with psychological pressure",
            "Higher-stakes matches",
            "Stronger character development"
        ],
        whyWatch: "Blue Lock is not just sports—it’s survival, ego, and ambition blended with high-speed animation. Season 2 elevates the series to new heights."
    },
    {
        id: 9,
        title: "Oshi no Ko Season 2",
        genre: "Drama, Idol, Mystery",
        studio: "Doga Kobo",
        release: "2025",
        description: "After captivating fans with its dark and emotional first season, Oshi no Ko returns with more industry secrets and deeper character revelations.",
        expectations: [
            "Aqua’s continued investigation",
            "New idol group dynamics",
            "Shocking production industry twists",
            "Ruby’s character expansion",
            "More behind-the-scenes realism"
        ],
        whyWatch: "Oshi no Ko mixes entertainment industry critique with gripping mystery. Season 2 promises more heartbreak, more drama, and more brilliance."
    },
    {
        id: 10,
        title: "Monster (2025 Remastered Edition)",
        genre: "Psychological Thriller, Mystery",
        studio: "Madhouse (expected)",
        release: "2025",
        description: "Naoki Urasawa’s masterpiece returns in a fully remastered version, introducing a new generation to one of the greatest anime psychological thrillers ever made.",
        expectations: [
            "Enhanced HD visuals",
            "Improved sound design",
            "Uncut original story",
            "Refreshed character models",
            "Same unforgettable psychological tension"
        ],
        whyWatch: "If you haven’t seen Monster, 2025 gives you the perfect excuse. It’s slow-burning, deeply intelligent, and unmatched in tension and character writing."
    }
];

export default function TopAnime2025() {
    return (
        <div className="space-y-8">
            {/* Article Header */}
            <div className="mb-8">
                <Badge className="mb-4 bg-purple-600">Ultimate Guide</Badge>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Top 10 Anime to Watch in 2025
                </h1>

                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>January 18, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>10 min read</span>
                    </div>
                    <span>By Anime Blog Team</span>
                </div>
            </div>

            <Separator className="my-8" />

            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    <strong>2025 is shaping up to be one of the most exciting years in anime history.</strong> With massive sequels, high-budget adaptations, and bold new originals set to debut, fans worldwide are preparing for a lineup that could rival any previous year. Whether you're a die-hard shonen fan, a mystery lover, or someone who enjoys beautifully animated dramas, this year has something for everyone.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    In this detailed guide, we break down the Top 10 Anime to Watch in 2025, including plot overviews, expected release windows, key production studios, fan expectations, and why each title deserves a spot on your watchlist.
                </p>
                <p className="text-lg font-semibold mt-4">Let’s dive in!</p>
            </div>

            {/* Anime List */}
            <div className="space-y-8">
                {animeList.map((anime, index) => (
                    <Card key={anime.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                        <CardHeader className="bg-muted/50 pb-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant="outline" className="text-lg font-bold">
                                            #{index + 1}
                                        </Badge>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold text-sm">Most Anticipated</span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl md:text-3xl mb-2">{anime.title}</CardTitle>
                                    <CardDescription className="text-base font-medium">
                                        {anime.genre} • {anime.studio} • {anime.release}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {anime.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-secondary/20 p-4 rounded-lg">
                                    <h4 className="font-bold mb-3 flex items-center gap-2">
                                        <span className="text-xl">🔥</span> What to Expect
                                    </h4>
                                    <ul className="space-y-2">
                                        {anime.expectations.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-secondary/20 p-4 rounded-lg">
                                    <h4 className="font-bold mb-3 flex items-center gap-2">
                                        <span className="text-xl">👀</span> Why Watch
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {anime.whyWatch}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Conclusion */}
            <Card className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardHeader>
                    <CardTitle className="text-3xl">Conclusion — 2025 Is a Monumental Year for Anime Fans</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        From shonen giants like Demon Slayer, Jujutsu Kaisen, and One Punch Man, to emotional masterpieces like Oshi no Ko and the return of Monster, the 2025 anime calendar is packed with unforgettable experiences.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Whether you're looking for breathtaking animation, deep character writing, thrilling battles, or emotional storytelling, 2025 delivers it all—and more.
                    </p>
                </CardContent>
            </Card>

            {/* FAQs */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">What is the most anticipated anime of 2025?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Demon Slayer: Infinite Castle Arc and Attack on Titan: Legacy are leading the hype.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Will One Punch Man Season 3 really release in 2025?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Yes, all insider scheduling points to a 2025 release.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">What anime should new fans watch first?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Solo Leveling, Oshi no Ko, and Demon Slayer are excellent beginner recommendations.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Are there new original anime in 2025?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Yes—several new sci-fi and fantasy originals are expected and will be announced mid-2025.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
