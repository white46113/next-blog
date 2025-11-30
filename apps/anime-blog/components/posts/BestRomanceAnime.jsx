import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Heart } from "lucide-react";

const animeList = [
    {
        category: "The Unforgettable Classics: The Pillars of the Genre",
        description: "These are the titans, the series that defined romance anime for a generation and continue to capture hearts today. They are the essential viewing for any fan.",
        items: [
            {
                id: 1,
                title: "Fruits Basket (2019-2021)",
                premise: "After a family tragedy, high schooler Tohru Honda ends up living in a tent in the woods. Her secret is discovered by classmate Yuki Sohma and his cousin Shigure, who invite her to stay at their house. She soon learns the Sohma family's dark secret: they are cursed by the spirits of the Chinese zodiac. When they are stressed, weak, or hugged by someone of the opposite sex, they transform into their zodiac animal. Tohru’s kindness and unwavering optimism become a beacon of hope for the entire cursed family.",
                whyMasterpiece: "While the original 2001 version is beloved, the 2019 reboot is a flawless adaptation of the entire manga. It masterfully blends whimsical comedy, profound tragedy, and a deeply moving romance. At its core, Fruits Basket is a story about healing from trauma. The love triangle between Tohru, the princely Yuki, and the tormented Kyo is one of the most well-written in all of anime. It’s not just about who she chooses, but how each relationship helps all three of them grow into better, healthier people. The final season is an emotional tour de force that provides one of the most satisfying conclusions in the genre.",
                watchIf: "Love triangles, stories about healing, fantasy elements, and a perfect mix of tears and laughter."
            },
            {
                id: 2,
                title: "Toradora!",
                premise: "Ryuuji Takasu is a gentle soul with a intimidating face, making him look like a delinquent. Taiga Aisaka is a tiny, fierce girl known as the \"Palmtop Tiger.\" After a fateful encounter, they discover they each have a crush on the other's best friend. They form a pact to help each other win over their respective crushes, but as they spend more time together, their fiery bickering begins to mask deeper feelings.",
                whyMasterpiece: "Toradora! is the gold standard for the \"fake relationship turns real\" trope. The chemistry between Ryuuji and Taiga is electric. Their journey from comedic rivals to indispensable partners feels incredibly earned. The show is famous for its sharp comedy and its willingness to dive into the painful, messy, and vulnerable sides of love and family. The Christmas Eve episode is legendary in the anime community for its raw emotional power. It’s a story that understands that love isn't always about grand gestures; sometimes, it's about who is there to make you dinner when you're at your lowest.",
                watchIf: "\"Enemies to lovers,\" tsundere characters, hilarious banter, and stories that balance comedy with serious emotional weight."
            }
        ]
    },
    {
        category: "The Modern Masterpieces: Redefining Romance for a New Era",
        description: "These recent hits have taken the anime world by storm, bringing fresh perspectives and stunning animation to the genre.",
        items: [
            {
                id: 3,
                title: "Kaguya-sama: Love Is War",
                premise: "At the prestigious Shuchiin Academy, two geniuses sit at the top of the student council: Miyuki Shirogane, the president, and Kaguya Shinomiya, the vice-president. Everyone expects them to be the perfect couple. There's just one problem: they are both too proud to admit they have feelings for the other. They see confession as a sign of defeat. Thus begins a psychological war of elaborate schemes, mind games, and strategic plots to make the other person confess first.",
                whyMasterpiece: "This anime is a comedic tour de force. The narrator is a character in himself, turning every small interaction into a high-stakes battle of wits. The over-the-top direction and brilliant voice acting make it one of the funniest anime of the last decade. But beneath the hilarious facade is a genuinely sweet and developing romance. You slowly see these two brilliant, emotionally stunted individuals learn to be vulnerable with each other. The movie, Love Is War: Ultra Romantic, is a cinematic triumph that pays off years of built-up tension in the most spectacular way.",
                watchIf: "Hilarious, high-concept comedies, intelligent characters, and a slow-burn romance that is incredibly rewarding."
            },
            {
                id: 4,
                title: "Horimiya",
                premise: "On the surface, Kyoko Hori is a bright, popular, and perfect high school girl. Izumi Miyamura is a quiet, glasses-wearing loner who seems to blend into the background. But after school, their roles reverse. Hori is a homebody who takes care of her younger brother, while Miyamura reveals a secret side covered in tattoos and piercings. When they accidentally discover each other's hidden identities, an unlikely friendship forms that quickly deepens into something more.",
                whyMasterpiece: "In a genre often filled with will-they-won't-they tension that lasts for seasons, Horimiya is a breath of fresh air. The main couple gets together relatively early, and the series shifts its focus to the beauty of an established, healthy relationship. It’s a celebration of the small, intimate moments: studying together, meeting each other's parents, and simply enjoying each other's company. The chemistry between Hori and Miyamura is palpable and incredibly wholesome. It’s a story that argues true love is about being loved for your true, complete self—piercings, scars, and all.",
                watchIf: "Wholesome, low-drama relationships, characters with hidden depths, and stories about being your authentic self."
            }
        ]
    },
    {
        category: "The Rollercoasters of Emotion: For When You Need a Good Cry",
        description: "Sometimes, you just need a story that wrings your heart out. These anime are beautiful, poignant, and guaranteed to leave a lasting impression.",
        items: [
            {
                id: 5,
                title: "Your Lie in April",
                premise: "Kosei Arima was a child piano prodigy, known as the \"Human Metronome\" for his precise playing. After the death of his abusive mother, he suffers a mental breakdown and can no longer hear the sound of his own piano. His world becomes monochrome. That is, until he meets a free-spirited violinist named Kaori Miyazono. Her chaotic and emotional playing style drags him, kicking and screaming, back into the world of music and color.",
                whyMasterpiece: "This anime is a symphony of emotion. The animation is stunning, with colors and visual metaphors that bring the music to life. The relationship between Kosei and Kaori is beautiful, tragic, and life-affirming. It’s a story about processing grief, finding your voice, and the transformative power of art and love. Be warned: the final few episodes are a devastating, soul-crushing, yet ultimately beautiful experience that will leave no eye dry. The soundtrack is an absolute must-listen.",
                watchIf: "Music, tragic romance, stunning visuals, and stories that explore themes of grief and healing."
            },
            {
                id: 6,
                title: "Clannad: After Story",
                premise: "You cannot start with After Story. This is the second season to Clannad, which itself is a heartfelt story about Tomoya Okazaki, a delinquent with a strained relationship with his father, helping several girls in his school deal with their personal struggles, primarily the bubbly and mysterious Nagisa Furukawa. After Story picks up after they graduate, focusing on their life together as a couple, facing the immense challenges of adulthood, careers, family, and unimaginable loss.",
                whyMasterpiece: "Clannad is good. Clannad: After Story is legendary. It is arguably the most emotionally impactful romance anime ever made. It transcends the high school setting to tell a raw, powerful, and profoundly human story about the burdens and blessings of family. It deals with themes of sacrifice, fatherhood, and the resilience needed to move forward after tragedy. The \"Dango Family\" song will never sound the same again. This is not just a romance; it's a life story, and it's an emotional journey every serious anime fan should take at least once.",
                watchIf: "Stories about family and adulthood, emotional devastation, and narratives that follow characters over a long period of their lives. Just remember to watch Clannad first!"
            }
        ]
    },
    {
        category: "The Wholesome and Healing: Comfort Food for the Soul",
        description: "Not all romance needs to be dramatic. These shows are like a warm hug—sweet, gentle, and guaranteed to put a smile on your face.",
        items: [
            {
                id: 7,
                title: "My Love Story!! (Ore Monogatari!!)",
                premise: "Takeo Goda is a giant, muscular high school student with a heart of gold. Unfortunately, his intimidating appearance and the fact that his best friend, Makoto Sunakawa, is the handsome, charming school heartthrob, means that every girl he likes ends up falling for Suna instead. That is, until he saves a shy, cute girl named Rinko Yamato from a harasser on a train. To his utter disbelief, Yamato doesn't fall for Suna—she falls head over heels for him.",
                whyMasterpiece: "This anime is pure, unfiltered joy. Takeo is one of the most genuinely kind and wholesome protagonists in existence. The romance is devoid of the usual misunderstandings and drama; it's about two people who are just overwhelmingly in love and supportive of each other. The real love story is as much about the incredible friendship between Takeo and Suna as it is about the central romance. It’s funny, heartwarming, and will restore your faith in humanity.",
                watchIf: "Giant teddy bear protagonists, zero unnecessary drama, incredibly supportive friendships, and diabetes-level sweetness."
            },
            {
                id: 8,
                title: "Wotakoi: Love is Hard for Otaku",
                premise: "Narumi Momose is a closet fujoshi (a female otaku who loves boys' love media) who has always hidden her hobbies from her partners. After starting a new job, she runs into her childhood friend, Hirotaka Nifuji, a handsome and capable gamer. Realizing they are both hardcore otaku, Hirotaka immediately suggests they date, arguing it would be easier than dating a \"normie.\" Thus begins a surprisingly mature and functional relationship between two working adults who understand each other's weird passions.",
                whyMasterpiece: "Wotakoi is a love letter to adult otaku. It’s refreshing to see a romance about people in their mid-20s navigating work-life balance and relationships. The humor is sharp and relatable for anyone with a niche hobby. The central couple is stable, communicative, and adorable, proving that shared interests are a powerful foundation for love. The supporting couples are equally charming, making for a well-rounded and hilarious cast.",
                watchIf: "Adult protagonists, office romances, otaku culture, and healthy, low-drama relationships."
            }
        ]
    },
    {
        category: "The Fantasy and Supernatural: Love Beyond Our World",
        description: "When you mix romance with magic, sci-fi, or the supernatural, you get some of the most unique and captivating stories in the genre.",
        items: [
            {
                id: 9,
                title: "Yona of the Dawn",
                premise: "Princess Yona lives a sheltered and luxurious life in the palace, doting on her father and harboring a crush on her cousin, Soo-won. Her perfect world shatters on her 16th birthday when Soo-won brutally murders her father to seize the throne. Forced to flee with only her loyal bodyguard, Son Hak, Yona must embark on a quest to find the four legendary dragon warriors to survive and eventually reclaim her kingdom.",
                whyMasterpiece: "This is a romance woven into the fabric of an epic fantasy adventure. Yona’s character development is among the best in all of anime. She transforms from a spoiled, crying princess into a brave, determined, and inspiring leader. The slow-burn romance between her and Hak is filled with intense loyalty, pining, and undeniable chemistry. While the anime only covers the beginning of the manga, it's a thrilling journey that will have you immediately reaching for the source material to see their relationship and quest continue.",
                watchIf: "Strong female leads, fantasy adventures, epic quests, and slow-burn romance with a loyal bodyguard."
            },
            {
                id: 10,
                title: "Kamisama Kiss",
                premise: "High schooler Nanami Momozono finds herself homeless and destitute after her father abandons her. After saving a mysterious man from a dog, he offers her his \"home\" as thanks. That home turns out to be a dilapidated shrine, and the man was a land god. Nanami accidentally inherits his divinity and becomes the new local deity. As a human god, she must now contend with yokai (spirits) and a snarky, powerful fox familiar named Tomoe, who wants nothing to do with her.",
                whyMasterpiece: "This is a quintessential \"grumpy x sunshine\" supernatural romance. The dynamic between the optimistic, clumsy Nanami and the arrogant, centuries-old Tomoe is hilarious and endlessly entertaining. Their relationship develops from one of reluctant servitude to a deep, protective, and passionate bond. The show is filled with beautiful Japanese folklore, laugh-out-loud moments, and a romance that feels both epic and deeply personal. The OVAs provide a perfect, satisfying conclusion to their story.",
                watchIf: "Supernatural settings, fox boys, \"grumpy x sunshine\" dynamics, and female protagonists who grow into their power."
            }
        ]
    }
];

export default function BestRomanceAnime() {
    return (
        <div className="space-y-8">
            {/* Article Header */}
            <div className="mb-8">
                <Badge className="mb-4 bg-pink-600">Ultimate Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    The Best Romance Anime of All Time
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>November 30, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>15 min read</span>
                    </div>
                    <span>By Anime Blog Team</span>
                </div>
            </div>

            <Separator className="my-8" />

            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    <strong>Is there anything better than getting completely lost in a great love story?</strong>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    The butterflies of a first kiss, the agony of a heartbreaking confession, the warmth of a supportive partnership—romance anime has a magical way of making us feel it all.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    But with hundreds of series out there, where do you even begin? You might be looking for a feel-good comfort watch, a tearjerker that will leave you sobbing, or a slow-burn that makes you scream at the screen. Fear not, fellow romantic! We’ve curated the ultimate list of the best romance anime of all time, categorized to help you find your perfect match.
                </p>
                <p className="text-lg font-semibold mt-4">Grab your tissues and your favorite cozy blanket; we’re about to dive into the worlds of love, laughter, and happily-ever-afters.</p>
            </div>

            {/* What Makes a Romance Anime "The Best"? */}
            <Card className="bg-secondary/20 mb-12">
                <CardHeader>
                    <CardTitle className="text-2xl">What Makes a Romance Anime "The Best"?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Before we jump in, let's talk about what we're looking for. A "best of all time" romance anime isn't just about a couple getting together. It's about:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Chemistry:</strong> Do the characters feel real? Do their interactions make your heart skip a beat?</li>
                        <li><strong>Emotional Impact:</strong> Does it make you feel something deeply—whether it's joy, sadness, or hopeful anticipation?</li>
                        <li><strong>Storytelling:</strong> Is the plot engaging beyond the central romance? Does it have compelling conflicts and satisfying resolutions?</li>
                        <li><strong>Lasting Appeal:</strong> Is it a show you think about long after the final credits roll? Is it one you'll want to rewatch?</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Anime List by Category */}
            <div className="space-y-12">
                {animeList.map((category, catIndex) => (
                    <div key={catIndex}>
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-pink-600 dark:text-pink-400">{category.category}</h2>
                        <p className="text-lg text-muted-foreground mb-8">{category.description}</p>
                        <div className="space-y-8">
                            {category.items.map((anime) => (
                                <Card key={anime.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-pink-500">
                                    <CardHeader className="bg-muted/50 pb-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-2xl mb-2">{anime.title}</CardTitle>
                                            </div>
                                            <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6 space-y-6">
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                                The Premise
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {anime.premise}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                                Why It's a Masterpiece
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {anime.whyMasterpiece}
                                            </p>
                                        </div>
                                        <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg">
                                            <p className="font-medium text-pink-700 dark:text-pink-300">
                                                Watch if you like: <span className="font-normal text-foreground">{anime.watchIf}</span>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Conclusion */}
            <Card className="mt-12 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
                <CardHeader>
                    <CardTitle className="text-3xl">How to Choose Your Next Romance Anime Binge</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        With so many amazing options, your next step is to listen to your heart. What are you in the mood for?
                    </p>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">Cry</span>
                            <span>Go for <strong>Your Lie in April</strong> or <strong>Clannad: After Story</strong>.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">Laugh</span>
                            <span>Start with <strong>Kaguya-sama: Love Is War</strong> or <strong>My Love Story!!</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">Complete</span>
                            <span><strong>Fruits Basket (2019)</strong> and <strong>Kamisama Kiss</strong> are perfect.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-bold">Wholesome</span>
                            <span>You can't go wrong with <strong>Horimiya</strong> or <strong>Wotakoi</strong>.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">Epic</span>
                            <span><strong>Yona of the Dawn</strong> is your best bet.</span>
                        </li>
                    </ul>
                    <p className="text-lg font-medium">
                        The world of romance anime is vast and wonderful. Pick one that calls to you, press play, and let yourself get swept away.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
