import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, Clock, Tv, Swords } from "lucide-react";

const opProtagonistAnime = [
    {
        id: 1,
        title: "The Rising of the Shield Hero",
        genre: "Isekai, Dark Fantasy, Action",
        platforms: "Crunchyroll, Netflix",
        description: "Naofumi starts as a shunned hero but levels up his shield skills to become unstoppable. The anime features betrayal, redemption, and a unique class system—just like Jin-Woo's journey.",
        uniqueTwist: "Naofumi's rapport system lets him bond with monsters, adding a fresh layer to power progression.",
        fanQuote: "The moment Naofumi unlocks his Wrath Shield is as satisfying as Jin-Woo's first shadow army summon!"
    },
    {
        id: 2,
        title: "Mushoku Tensei: Jobless Reincarnation",
        genre: "Isekai, Fantasy, Adventure",
        platforms: "Crunchyroll",
        description: "Rudeus starts as a weak child but grinds his magic and swordsmanship to godlike levels. The magic system is deep, and his growth is earned through hard work—just like Jin-Woo's training.",
        uniqueTwist: "Reincarnation and lifelong skill mastery make his power feel realistic.",
        fanQuote: "Rudeus' Water God Style swordplay is as iconic as Jin-Woo's Shadow Extraction!"
    },
    {
        id: 3,
        title: "Arifureta: From Commonplace to World's Strongest",
        genre: "Isekai, Dark Fantasy, Action",
        platforms: "Crunchyroll, Funimation",
        description: "Hajime Nagumo is betrayed and left for dead, but he unlocks OP transmutation magic and builds a harem of powerful allies. His ruthless, strategic fights mirror Jin-Woo's tactical battles.",
        uniqueTwist: "Hajime's custom weapons and alchemy set him apart from typical isekai heroes.",
        fanQuote: "Hajime's Orichalcum armor and Euhrydale are as cool as Jin-Woo's Demon King's Castle!"
    },
    {
        id: 4,
        title: "The Misfit of Demon King Academy",
        genre: "Fantasy, Action, Comedy",
        platforms: "Crunchyroll",
        description: "Anos Voldigoad is a reincarnated demon king who's OP from the start but still faces challenges. His magic and demonic powers are as overwhelming as Jin-Woo's shadow army.",
        uniqueTwist: "Anos rebuilds his demon kingdom while dealing with political intrigue.",
        fanQuote: "Anos' Gigant Impact spell is the kind of over-the-top power fans love!"
    },
    {
        id: 5,
        title: "Berserk of Gluttony",
        genre: "Dark Fantasy, Action",
        platforms: "Crunchyroll",
        description: "Fate starts weak but gains the Gluttony skill, letting him devour enemies to level up—just like Jin-Woo's system. The dark, brutal world and power progression are major draws.",
        uniqueTwist: "The skill system is tied to sin and sacrifice, adding moral complexity.",
        fanQuote: "Fate's Gluttony evolution is as addictive as Jin-Woo's System messages!"
    },
    {
        id: 6,
        title: "Shangri-La Frontier",
        genre: "Action, Adventure, Game",
        platforms: "Crunchyroll",
        description: "Sunraku traps himself in a VR game and grinds to become the strongest player. The game mechanics and strategic battles feel like Solo Leveling's dungeon raids.",
        uniqueTwist: "Sunraku breaks the game's meta, making every fight creative.",
        fanQuote: "Sunraku's 'I'll solo this boss' energy is pure Jin-Woo vibes!"
    }
];

const darkFantasyAnime = [
    {
        id: 1,
        title: "Gachiakuta",
        genre: "Dark Fantasy, Action",
        release: "Summer 2025",
        platforms: "Crunchyroll",
        description: "Set in a dystopian floating city, Rudo fights monsters and uncovers conspiracies—just like Jin-Woo's hunter world. The action is visceral, and the power system is unique.",
        uniqueTwist: "Graffiti-inspired visuals and urban rebellion themes make it stand out.",
        fanQuote: "Gachiakuta's monster designs are as terrifying as Solo Leveling's Ant Monarch!"
    },
    {
        id: 2,
        title: "Tougen Anki",
        genre: "Dark Fantasy, Action, Supernatural",
        release: "July 2025",
        platforms: "Crunchyroll",
        description: "Shiki discovers his Oni powers and battles rival clans in a blood-soaked world. The power progression and dark atmosphere are reminiscent of Solo Leveling's later arcs.",
        uniqueTwist: "Oni transformation mechanics and clan politics add depth.",
        fanQuote: "Shiki's Oni form is as intimidating as Jin-Woo's Demon King mode!"
    },
    {
        id: 3,
        title: "Chainsaw Man",
        genre: "Dark Fantasy, Horror, Action",
        platforms: "Crunchyroll",
        description: "Denji starts as a nobody but gains devil powers and fights for survival. The brutal action and power-ups are Solo Leveling levels of intense.",
        uniqueTwist: "Denji's Chainsaw Devil form is as iconic as Jin-Woo's Shadow Monarch.",
        fanQuote: "Denji's 'I just want a normal life' struggle hits as hard as Jin-Woo's early hunter days!"
    },
    {
        id: 4,
        title: "Jujutsu Kaisen",
        genre: "Dark Fantasy, Action, Supernatural",
        platforms: "Crunchyroll, HBO Max",
        description: "Yuji Itadori swallows a cursed object and gains OP powers, but must train and level up to survive. The power system is well-defined, and the battles are visceral.",
        uniqueTwist: "Cursed energy mechanics and team dynamics set it apart.",
        fanQuote: "Yuji's Divergent Fist is as hype as Jin-Woo's Ashborn powers!"
    }
];

const uniquePowerSystems = [
    {
        id: 1,
        title: "Log Horizon",
        genre: "Isekai, Adventure, Game",
        platforms: "Hulu, Crunchyroll",
        description: "Players are trapped in a game world and must level up classes and skills to survive. The strategy and world-building are top-tier.",
        uniqueTwist: "Guild politics and economy play a huge role."
    },
    {
        id: 2,
        title: "DanMachi (Is It Wrong to Try to Pick Up Girls in a Dungeon?)",
        genre: "Fantasy, Adventure, Action",
        platforms: "HIDIVE, Crunchyroll",
        description: "Bell Cranel starts as a weak adventurer but levels up through dungeon crawling. The RPG mechanics and goddess blessings are a fun twist.",
        uniqueTwist: "Familia (guild) system and romantic subplots."
    },
    {
        id: 3,
        title: "The Unwanted Undead Adventurer",
        genre: "Fantasy, Adventure",
        platforms: "Crunchyroll",
        description: "Rentt Faina becomes an undead but retains his adventurer skills, forcing him to adapt and level up in a cruel world.",
        uniqueTwist: "Undead mechanics and survival horror elements."
    }
];

export default function SoloLevelingAlternatives() {
    return (
        <div className="space-y-8">
            {/* Article Header */}
            <div className="mb-8">
                <Badge className="mb-4 bg-purple-600">Ultimate Guide</Badge>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Best Anime Like Solo Leveling: OP Protagonists & Unique Leveling Systems (2025)
                </h1>

                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>December 4, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>12 min read</span>
                    </div>
                    <span>By Anime Blog Team</span>
                </div>
            </div>

            <Separator className="my-8" />

            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    <strong>If you loved Solo Leveling for its OP protagonist, satisfying power progression, and epic battles, you're in the right place.</strong> Below, we've curated the best anime that deliver the same thrills—whether it's leveling up, dominating enemies, or exploring dark fantasy worlds.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    From isekai adventures with game-like systems to dark fantasy thrillers with brutal combat, these anime capture what makes Solo Leveling so addictive. Whether you're craving strategic dungeon raids, overpowered main characters, or unique progression mechanics, this comprehensive guide has you covered.
                </p>
            </div>

            {/* Section 1: OP Protagonists & Leveling Systems */}
            <div className="space-y-6">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
                        <Swords className="h-8 w-8 text-primary" />
                        Anime with OP Protagonists & Leveling Systems
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        These series perfectly blend the zero-to-hero journey with game-like progression, just like Solo Leveling:
                    </p>
                </div>

                <div className="space-y-6">
                    {opProtagonistAnime.map((anime, index) => (
                        <Card key={anime.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                            <CardHeader className="bg-muted/50 pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-2xl mb-2">{anime.title}</CardTitle>
                                        <CardDescription className="text-base font-medium">
                                            {anime.genre} • {anime.platforms}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    <strong>Why it's similar:</strong> {anime.description}
                                </p>
                                <div className="bg-secondary/20 p-4 rounded-lg">
                                    <p className="text-sm">
                                        <strong className="text-primary">Unique twist:</strong> {anime.uniqueTwist}
                                    </p>
                                </div>
                                {anime.fanQuote && (
                                    <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-muted-foreground">
                                        "{anime.fanQuote}"
                                    </blockquote>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Separator className="my-12" />

            {/* Section 2: Dark Fantasy Anime */}
            <div className="space-y-6">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
                        <Star className="h-8 w-8 text-primary" />
                        Dark Fantasy Anime with Action & Leveling (2025 Picks)
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        For fans who love Solo Leveling's dark tone, high stakes, and brutal battles, these 2025 dark fantasy anime are must-watches:
                    </p>
                </div>

                <div className="space-y-6">
                    {darkFantasyAnime.map((anime) => (
                        <Card key={anime.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
                            <CardHeader className="bg-muted/50 pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-2xl mb-2">{anime.title}</CardTitle>
                                        <CardDescription className="text-base font-medium">
                                            {anime.genre} • {anime.platforms}
                                            {anime.release && ` • ${anime.release}`}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    <strong>Why it's similar:</strong> {anime.description}
                                </p>
                                <div className="bg-secondary/20 p-4 rounded-lg">
                                    <p className="text-sm">
                                        <strong className="text-primary">Unique twist:</strong> {anime.uniqueTwist}
                                    </p>
                                </div>
                                {anime.fanQuote && (
                                    <blockquote className="border-l-4 border-purple-600 pl-4 italic text-sm text-muted-foreground">
                                        "{anime.fanQuote}"
                                    </blockquote>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Separator className="my-12" />

            {/* Section 3: Unique Power Systems */}
            <div className="space-y-6">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
                        <Tv className="h-8 w-8 text-primary" />
                        Unique Power Progression Systems
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        These anime feature innovative power systems that make progression addictive and rewarding:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {uniquePowerSystems.map((anime) => (
                        <Card key={anime.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader className="bg-muted/50">
                                <CardTitle className="text-xl">{anime.title}</CardTitle>
                                <CardDescription className="text-sm">
                                    {anime.genre} • {anime.platforms}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-3">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Why it's similar:</strong> {anime.description}
                                </p>
                                <div className="bg-secondary/20 p-3 rounded-lg">
                                    <p className="text-xs">
                                        <strong className="text-primary">Unique twist:</strong> {anime.uniqueTwist}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Separator className="my-12" />

            {/* Why These Anime Are Perfect */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl">Why These Anime Are Perfect for Solo Leveling Fans</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                            <div>
                                <strong>OP Protagonists:</strong> Each series features a main character who starts weak but becomes a powerhouse—just like Jin-Woo.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                            <div>
                                <strong>Leveling Systems:</strong> Whether it's magic, skills, or game mechanics, progression is satisfying and well-defined.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                            <div>
                                <strong>Dark Fantasy & Action:</strong> For fans of Solo Leveling's mature themes and brutal fights, these picks deliver.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                            <div>
                                <strong>Unique Twists:</strong> No two power systems are the same, keeping the experience fresh.
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Where to Watch */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Where to Watch These Anime?</h2>
                <Card>
                    <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold mb-2">Crunchyroll</h3>
                                <p className="text-sm text-muted-foreground">Most titles including The Rising of the Shield Hero, Mushoku Tensei, Arifureta, Chainsaw Man, Jujutsu Kaisen, Gachiakuta, and Tougen Anki</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Netflix</h3>
                                <p className="text-sm text-muted-foreground">Mushoku Tensei, Chainsaw Man</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Hulu</h3>
                                <p className="text-sm text-muted-foreground">Log Horizon</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Funimation</h3>
                                <p className="text-sm text-muted-foreground">Arifureta, Overlord</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* FAQs */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Is there a Solo Leveling Season 2?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Yes! Season 2 premiered in 2025, continuing Jin-Woo's journey with even darker themes and bigger battles.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">What is the best anime with a leveling system?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Mushoku Tensei and The Rising of the Shield Hero are fan favorites for their deep progression systems.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Are there any new dark fantasy anime in 2025?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Absolutely! Gachiakuta and Tougen Anki are 2025's standout dark fantasy anime, blending action, leveling, and mature themes.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Conclusion */}
            <Card className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardHeader>
                    <CardTitle className="text-3xl">Conclusion: Which Anime Will You Watch Next?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Solo Leveling set the bar high, but these anime deliver the same thrills—whether you're here for OP protagonists, leveling systems, or dark fantasy action. From the strategic battles of Shangri-La Frontier to the brutal world of Chainsaw Man, each recommendation offers a unique take on power progression and epic storytelling. Start your next anime adventure today!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
