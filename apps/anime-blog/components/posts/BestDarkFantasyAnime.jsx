import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar, Clock, Skull, Swords, Heart, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const darkFantasyAnime = [
    {
        id: 1,
        title: "Berserk (1997)",
        subtitle: "The Benchmark of Dark Fantasy",
        premise: "Guts, a lone mercenary with a massive sword, fights through a medieval world soaked in violence and betrayal. His journey takes him from battlefield to battlefield until he joins the Band of the Hawk, led by the charismatic Griffith. What follows is one of the most devastating betrayals in anime history—the Eclipse—where friendship, ambition, and humanity collide with cosmic horror.",
        whyMasterpiece: [
            "Sets the gold standard for dark fantasy with merciless worldbuilding",
            "Features one of anime's most iconic protagonists in Guts, shaped by endless suffering",
            "The Golden Age Arc delivers friendship, tragedy, and horror in equal measure",
            "Violence isn't gratuitous—every brutal moment serves the story's themes",
            "The Eclipse remains one of the most traumatic and unforgettable sequences in anime",
            "Explores ambition, sacrifice, and what it costs to chase a dream"
        ],
        darkElements: ["Extreme violence", "Psychological trauma", "Cosmic horror", "Moral collapse"],
        watchIf: "You want the definitive dark fantasy experience that doesn't hold back",
        image: "/images/posts/best-dark-fantasy-anime/berserk.png"
    },
    {
        id: 2,
        title: "Attack on Titan",
        subtitle: "Dark Fantasy Disguised as Mainstream",
        premise: "Humanity lives in fear behind massive walls, hiding from giant humanoid Titans that devour people. Eren Yeager's world shatters when Titans breach the wall and destroy his home. He joins the military to fight back, but as the story unfolds, Attack on Titan transforms from survival horror into political and philosophical dark fantasy—questioning freedom, hatred, and whether genocide can ever be justified.",
        whyMasterpiece: [
            "Begins as action-horror, evolves into complex political and moral drama",
            "Eren Yeager's transformation into one of anime's most controversial protagonists",
            "No clear heroes or villains—just conflicting ideologies and desperate choices",
            "Tackles heavy themes: cycles of hatred, freedom vs. safety, and war's true cost",
            "No character is safe from death or emotional devastation",
            "The final seasons refuse to provide easy moral answers"
        ],
        darkElements: ["War crimes", "Genocide discussions", "Moral ambiguity", "Psychological breakdowns"],
        watchIf: "You want dark fantasy that challenges your morality and forces difficult questions",
        image: "/images/posts/best-dark-fantasy-anime/attack-on-titan.png"
    },
    {
        id: 3,
        title: "Claymore",
        subtitle: "Cold, Bleak, and Criminally Underrated",
        premise: "In a medieval world plagued by shape-shifting demons called Yoma, the only defense is the Claymores—half-human, half-monster female warriors. They protect humanity by wielding the very power that threatens to consume them. Clare, a low-ranked Claymore, hunts the demon that destroyed her past, slowly losing her humanity with each battle.",
        whyMasterpiece: [
            "Atmosphere-driven storytelling with muted colors and quiet dread",
            "Strong female cast treated as tragic weapons, not fanservice",
            "Power comes at a terrible cost—humanity itself",
            "Brutal fights that feel grounded and consequential, never flashy",
            "Explores identity, sacrifice, and what it means to be human",
            "Emotional restraint creates haunting, lingering impact"
        ],
        darkElements: ["Body horror", "Loss of humanity", "Existential dread", "Quiet despair"],
        watchIf: "You appreciate atmosphere over spectacle and want dark fantasy with emotional depth",
        image: "/images/posts/best-dark-fantasy-anime/claymore.png"
    },
    {
        id: 4,
        title: "Devilman Crybaby",
        subtitle: "Emotionally Annihilating Masterpiece",
        premise: "Akira Fudo merges with a demon to fight against a demonic invasion, becoming Devilman—a being with a demon's power but a human's heart. As demons infiltrate society and paranoia spreads, humanity's true nature emerges. Devilman Crybaby dismantles the concept of good vs. evil, showing that love, compassion, and hope are fragile in the face of cosmic cruelty and human fear.",
        whyMasterpiece: [
            "Abstract, psychedelic storytelling with brutal emotional clarity",
            "Deconstructs humanity's nature when faced with existential threats",
            "Love exists but proves meaningless against cosmic horror and mob violence",
            "The finale is soul-crushing—you don't feel shocked, you feel empty",
            "Demons aren't the true monsters; humanity's fear and hatred are",
            "Psychological horror trumps gore for maximum emotional impact"
        ],
        darkElements: ["Nihilism", "Mob violence", "Apocalyptic horror", "Hopelessness"],
        watchIf: "You want dark fantasy that emotionally destroys you and questions everything",
        image: "/images/posts/best-dark-fantasy-anime/devilman-crybaby.png"
    },
    {
        id: 5,
        title: "Made in Abyss",
        subtitle: "Cute Art, Absolute Nightmare",
        premise: "Riko, a young orphan, dreams of exploring the Abyss—a mysterious pit filled with ancient relics and deadly creatures. When she meets Reg, an amnesiac robot boy, they descend into the Abyss together searching for her mother. But the Abyss punishes those who try to return, inflicting horrific curses the deeper they go. What starts innocent becomes a slow descent into body horror and existential dread.",
        whyMasterpiece: [
            "Deceptive art style hides one of anime's darkest narratives",
            "The Abyss is a cruel world that doesn't care about innocence",
            "Body horror is methodical and deeply unsettling, not cheap shock value",
            "Suffering is slow, deliberate, and psychologically devastating",
            "Explores themes of ambition, sacrifice, and what we're willing to endure",
            "Worldbuilding is rich, mysterious, and increasingly horrifying"
        ],
        darkElements: ["Body horror", "Child endangerment", "Existential terror", "Moral dilemmas"],
        watchIf: "You can handle dark fantasy that erodes your comfort over time with disturbing imagery",
        image: "/images/posts/best-dark-fantasy-anime/made-in-abyss.png"
    },
    {
        id: 6,
        title: "Dororo (2019)",
        subtitle: "Humanity vs. Survival",
        premise: "Hyakkimaru is born without limbs, eyes, ears, or skin because his father sacrificed him to demons for prosperity. Raised by a doctor who gave him prosthetics, Hyakkimaru hunts demons to reclaim his body parts. Each victory makes him more human—but also destabilizes the peace his father's deal created. Joined by the thief Dororo, he faces a painful question: Does his right to exist justify the suffering it causes?",
        whyMasterpiece: [
            "Quiet, introspective dark fantasy focused on moral conflict over gore",
            "Every victory toward humanity creates new ethical dilemmas",
            "Explores selfish ambition and the ripple effects of cruel choices",
            "Hyakkimaru's journey is as much internal as external",
            "Beautiful animation and emotional storytelling create haunting atmosphere",
            "Raises profound questions about existence, purpose, and sacrifice"
        ],
        darkElements: ["Disability themes", "Moral ambiguity", "Tragedy", "Selfish ambition"],
        watchIf: "You want dark fantasy that values character depth and moral complexity"
    },
    {
        id: 7,
        title: "Tokyo Ghoul (Season 1)",
        subtitle: "Identity Crisis Done Right",
        premise: "Ken Kaneki, a shy college student, survives a deadly encounter with a ghoul only to become half-ghoul himself. Caught between two worlds, he struggles to maintain his humanity while hunger for human flesh consumes him. Tokyo Ghoul's first season is a masterclass in psychological horror, watching Kaneki's morality crumble under pressure as society rejects him and survival demands violence.",
        whyMasterpiece: [
            "Internal conflict takes priority over spectacle and action",
            "Kaneki's transformation is realistic, gradual, and heartbreaking",
            "Ghouls aren't simple monsters—they're victims of a broken world",
            "Explores identity, acceptance, and what it means to be human",
            "One of anime's most iconic character breakdowns and transformations",
            "Season 1 perfectly balances horror, tragedy, and psychological depth"
        ],
        darkElements: ["Identity crisis", "Cannibalism", "Psychological torture", "Moral decay"],
        watchIf: "You want dark fantasy focused on psychological horror and character breakdown"
    },
    {
        id: 8,
        title: "Hell's Paradise (Jigokuraku)",
        subtitle: "Modern Dark Fantasy Done Right",
        premise: "Gabimaru the Hollow, a legendary assassin who claims to feel nothing, is sentenced to death but offered a pardon: retrieve the Elixir of Life from a mysterious island. Joined by an executioner who refuses to kill him, Gabimaru and other death row criminals navigate an island filled with immortal monsters and confront death, regret, and the meaning of living.",
        whyMasterpiece: [
            "Blends brutal violence with Taoist philosophy and introspection",
            "Gabimaru's emotional journey from emptiness to rediscovering purpose",
            "Gorgeous visuals that are both beautiful and deeply disturbing",
            "Characters aren't heroes—they're criminals seeking redemption or escape",
            "Action is visceral, but themes of life, death, and meaning drive the story",
            "Proves modern dark fantasy can feel raw and philosophical"
        ],
        darkElements: ["Graphic violence", "Existential themes", "Body horror", "Moral complexity"],
        watchIf: "You want modern dark fantasy that balances action, philosophy, and brutality"
    },
    {
        id: 9,
        title: "Re:Zero",
        subtitle: "Psychological Suffering as a Mechanic",
        premise: "Subaru Natsuki is transported to a fantasy world where he discovers he has one ability: Return by Death. Every time he dies, time resets, but only he remembers. What seems like a power becomes a curse as Subaru watches friends die repeatedly, carries trauma no one else remembers, and slowly breaks under the weight of suffering that never ends.",
        whyMasterpiece: [
            "Death isn't the horror—remembering every death and failure is",
            "Subaru isn't powerful or special; he's just endlessly traumatized",
            "Mental breakdowns are portrayed realistically and painfully",
            "Hopeless time loops create emotional consequences without instant rewards",
            "Explores how much suffering a person can endure before breaking",
            "Challenges isekai tropes by making power a curse, not a gift"
        ],
        darkElements: ["Repeated deaths", "PTSD", "Helplessness", "Psychological torture"],
        watchIf: "You want dark fantasy that asks how much trauma one person can carry"
    },
    {
        id: 10,
        title: "Fate/Zero",
        subtitle: "No Heroes, Only Ideals and Corpses",
        premise: "Seven mages summon legendary heroes to fight in the Holy Grail War, where the last one standing claims an omnipotent wish. Kiritsugu Emiya, a ruthless assassin, fights with pragmatic brutality, believing any sacrifice is justified to save the world. As noble ideals collide with harsh reality, Fate/Zero reveals a brutal truth: in war, winning still means losing.",
        whyMasterpiece: [
            "Every character believes they're right; every belief leads to bloodshed",
            "Kiritsugu embodies pragmatic utilitarianism taken to horrifying extremes",
            "Philosophical debates clash with brutal magical warfare",
            "Tragic inevitability—no one walks away clean or whole",
            "Explores the cost of ideals when tested by impossible choices",
            "Proves that victory can be indistinguishable from defeat"
        ],
        darkElements: ["Moral philosophy", "War crimes", "Betrayal", "Tragic inevitability"],
        watchIf: "You want dark fantasy that challenges idealism with brutal reality"
    }
];

const honorableMentions = [
    { title: "Akame ga Kill", reason: "Messy execution but emotionally effective character deaths" },
    { title: "Overlord", reason: "Dark power fantasy from the villain's perspective" },
    { title: "The Ancient Magus' Bride", reason: "Soft dark fantasy with emotional depth and melancholy" },
    { title: "Parasyte", reason: "Sci-fi dark fantasy crossover exploring humanity and identity" },
    { title: "Vinland Saga", reason: "Historical dark fantasy about war, revenge, and redemption" },
    { title: "Goblin Slayer", reason: "Brutal, grounded dark fantasy with realistic consequences" }
];

const whatMakesDarkFantasy = [
    {
        title: "Morally Gray Protagonists",
        description: "Heroes who make questionable choices and live with consequences"
    },
    {
        title: "Hopeless or Cruel Worlds",
        description: "Settings where survival itself is a struggle and hope is fragile"
    },
    {
        title: "Meaningful Consequences",
        description: "Actions have weight; death, betrayal, and loss aren't temporary"
    },
    {
        title: "Power That Costs",
        description: "Strength comes at a price—often humanity, sanity, or morality"
    },
    {
        title: "No Happy Ending Guarantee",
        description: "Stories don't promise resolution, comfort, or justice"
    },
    {
        title: "Suffering That Changes People",
        description: "Characters break, evolve, or lose themselves through trauma"
    }
];

export default function BestDarkFantasyAnime() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="mb-8">
                <Badge className="mb-4 bg-red-700 hover:bg-red-800">Dark Fantasy</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                    Best Dark Fantasy Anime of All Time (That Actually Leave a Scar)
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>December 28, 2024</span>
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
            <div className="space-y-12">
                <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border-2 border-red-900/30">
                    <img
                        src="/images/posts/best-dark-fantasy-anime/banner.png"
                        alt="Best Dark Fantasy Anime Banner"
                        className="object-cover w-full h-full brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Not all fantasy anime hit the same. Some are flashy, some are fun, and some are power trips wrapped in pretty animation. But dark fantasy anime? That's different. <strong>Dark fantasy hurts. It lingers.</strong> It makes you uncomfortable in a way that feels intentional—like the story is daring you to look away… and you don't.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        This list isn't about what's popular this season or what's trending on social media. It's about dark fantasy anime that <strong>stay with you</strong>, question your morals, and sometimes straight-up ruin your mood—in the best possible way. If you're here looking for edge without substance, you're in the wrong place. But if you want pain, depth, brutal worlds, broken characters, and stories that don't apologize—<strong>welcome</strong>.
                    </p>
                </div>
            </div>

            {/* What Makes Dark Fantasy */}
            <div className="space-y-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Defines "Dark Fantasy"?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Dark fantasy isn't just blood, gore, and death. That's surface-level. <strong>Real dark fantasy</strong> has depth, consequence, and suffering that fundamentally changes people.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whatMakesDarkFantasy.map((element, index) => (
                        <Card key={index} className="border-l-4 border-l-red-600 bg-gradient-to-br from-red-950/10 to-purple-950/10">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Skull className="h-5 w-5 text-red-600" />
                                    {element.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{element.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Alert className="bg-red-950/20 border-red-800">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Content Warning</AlertTitle>
                    <AlertDescription>
                        Many anime on this list contain graphic violence, psychological trauma, body horror, and disturbing themes. They're masterpieces—but they're not for everyone.
                    </AlertDescription>
                </Alert>
            </div>

            <Separator className="my-12" />

            {/* Main Anime List */}
            <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Definitive Dark Fantasy List
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        These anime aren't just dark—they're unforgettable. Each one challenges you, changes you, and refuses to let go.
                    </p>
                </div>

                {darkFantasyAnime.map((anime, index) => (
                    <Card key={anime.id} className="overflow-hidden border-2 border-red-900/20 hover:border-red-600/50 transition-all">
                        <CardHeader className="bg-gradient-to-br from-red-950/30 to-purple-950/20 pb-6">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <Badge variant="outline" className="bg-red-900/20 border-red-700 text-red-400 shrink-0">
                                                #{index + 1}
                                            </Badge>
                                            {anime.darkElements.slice(0, 2).map((element, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs shrink-0">
                                                    {element}
                                                </Badge>
                                            ))}
                                        </div>
                                        <CardTitle className="text-2xl md:text-3xl mb-2 break-words">
                                            {anime.title}
                                        </CardTitle>
                                        <CardDescription className="text-base md:text-lg font-medium text-red-400">
                                            {anime.subtitle}
                                        </CardDescription>
                                    </div>
                                    <Skull className="h-10 w-10 md:h-12 md:w-12 text-red-600 opacity-50 shrink-0" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-8 space-y-8">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <Swords className="h-5 w-5 text-red-600" />
                                        The Premise
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">{anime.premise}</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        Why It's a Masterpiece
                                    </h4>
                                    <ul className="space-y-2">
                                        {anime.whyMasterpiece.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Alert className="bg-purple-950/20 border-purple-800">
                                    <Heart className="h-4 w-4" />
                                    <AlertTitle>Watch If...</AlertTitle>
                                    <AlertDescription className="text-base">
                                        {anime.watchIf}
                                    </AlertDescription>
                                </Alert>
                            </div>

                            {anime.image && (
                                <div className="mt-8 rounded-xl overflow-hidden border border-red-900/20">
                                    <img
                                        src={anime.image}
                                        alt={anime.title}
                                        className="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Separator className="my-12" />

            {/* Honorable Mentions */}
            <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Honorable Mentions
                    </h2>
                    <p className="text-muted-foreground">
                        These anime didn't make the top 10 but still deserve your attention.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {honorableMentions.map((anime, index) => (
                        <Card key={index} className="border-l-4 border-l-purple-600">
                            <CardHeader>
                                <CardTitle className="text-lg">{anime.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{anime.reason}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Separator className="my-12" />

            {/* Why Dark Fantasy Matters */}
            <div className="space-y-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Dark Fantasy Anime Hits Harder Than Ever
                    </h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        The reason dark fantasy anime keeps growing in popularity is simple: <strong>people are tired of fake hope</strong>. We crave stories that admit the world is unfair, acknowledge pain without sugarcoating it, and show strength that comes from endurance rather than luck or destiny.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Dark fantasy doesn't promise happiness. It promises <strong>truth</strong>. And sometimes, that's more comforting than hollow optimism. These stories challenge us to confront uncomfortable questions about morality, sacrifice, and what it means to keep fighting when hope feels impossible.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Dark fantasy anime respect their audiences. They don't treat us like children who need protection from harsh realities. Instead, they trust us to handle complexity, ambiguity, and pain—because that's what makes the rare moments of triumph and humanity feel <em>earned</em>.
                    </p>
                </div>

                <Alert className="bg-gradient-to-r from-red-950/30 to-purple-950/30 border-red-800">
                    <Info className="h-4 w-4" />
                    <AlertTitle>For Newcomers to Dark Fantasy</AlertTitle>
                    <AlertDescription className="text-base">
                        If you're new to dark fantasy anime, start with <strong>Attack on Titan</strong> or <strong>Dororo</strong> for a gentler introduction. Save <strong>Berserk</strong>, <strong>Devilman Crybaby</strong>, and <strong>Made in Abyss</strong> for when you're ready for maximum emotional damage.
                    </AlertDescription>
                </Alert>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white space-y-6">
                <div className="text-center space-y-4">
                    <Skull className="h-16 w-16 mx-auto opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-bold">Final Thoughts</h2>
                    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                        Dark fantasy anime don't entertain you—they <strong>challenge you</strong>. They force you to confront uncomfortable truths, sit with moral ambiguity, and experience suffering alongside broken characters fighting for meaning in cruel worlds.
                    </p>
                    <p className="text-lg opacity-90 max-w-3xl mx-auto">
                        These stories linger. They scar. They make you question things you thought you understood. And honestly? That's exactly why we keep coming back.
                    </p>
                    <p className="text-base opacity-80 italic max-w-2xl mx-auto pt-4">
                        "In dark fantasy, hope isn't given—it's fought for, bled for, and sometimes lost entirely. And that's what makes it real."
                    </p>
                </div>
            </div>
        </div>
    );
}
