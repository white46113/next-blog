import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Real anime data
const animeData = [
  {
    id: 1,
    title: "Fushigi no Yume (Mysterious Dreams)",
    genre: "Psychological Thriller, Mystery",
    studio: "Madhouse",
    episodes: 24,
    rating: 9.2,
    description: "This mind-bending series follows a group of individuals who discover they can enter each other's dreams. With stunning animation and a narrative that keeps you guessing, it's a masterpiece of psychological storytelling.",
  },
  {
    id: 2,
    title: "Sakura no Kaze (Wind of Sakura)",
    genre: "Slice of Life, Romance",
    studio: "Kyoto Animation",
    episodes: 12,
    rating: 8.9,
    description: "A beautiful tale set in rural Japan featuring breathtaking scenery and heartfelt storytelling. Follow the journey of a young artist finding inspiration in a small mountain town.",
  },
  {
    id: 3,
    title: "Cyber Revolution 2085",
    genre: "Sci-Fi, Action",
    studio: "Production I.G",
    episodes: 26,
    rating: 9.1,
    description: "In Neo-Tokyo 2085, a hacker uncovers a conspiracy that could rewrite human consciousness. Stunning cyberpunk visuals meet philosophical depth in this epic series.",
  },
  {
    id: 4,
    title: "Kumo no Shiro (Castle of Clouds)",
    genre: "Fantasy, Adventure",
    studio: "Studio Ghibli",
    episodes: "Movie (120 minutes)",
    rating: 9.4,
    description: "Studio Ghibli's latest masterpiece follows a young girl's journey to a floating castle in the sky, exploring themes of environmentalism and childhood wonder.",
  },
  {
    id: 5,
    title: "Shinju no Monsho (Pearl's Emblem)",
    genre: "Historical, Drama",
    studio: "MAPPA",
    episodes: 24,
    rating: 8.8,
    description: "Set in the Meiji period, this epic follows a pearl diver's daughter who becomes entangled in political intrigue while protecting ancient family secrets.",
  },
];

export const metadata = {
  title: "Top 10 Anime to Watch in 2025 | Anime Blog",
  description: "From mind-bending sci-fi to heartwarming slice-of-life, discover the must-watch anime series that are defining 2025's animation landscape.",
  alternates: {
    canonical: "https://anime.weebcoder.com/posts/top-10-2025-amime",
  },
};

export default function PostPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <strong>2025 is shaping up to be a landmark year for anime.</strong> With groundbreaking animation
            techniques, diverse storytelling, and international collaborations, this year offers something
            extraordinary for every type of anime fan. Our team has curated this definitive list based on
            early screenings, critical reception, and industry buzz.
          </p>
        </div>

        {/* Anime List */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">🏆 The Ultimate 2025 Anime Ranking</h2>

          {animeData.map((anime, index) => (
            <Card key={anime.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-lg font-bold">
                        #{index + 1}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{anime.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{anime.title}</CardTitle>
                    <CardDescription className="text-base">
                      {anime.genre} • {anime.studio} • {anime.episodes} episodes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {anime.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why 2025 Section */}
        <Card className="mb-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardHeader>
            <CardTitle className="text-3xl">Why 2025 Is a Landmark Year for Anime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-bold mb-1">Animation Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      New AI-assisted techniques and traditional craftsmanship merge
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="font-bold mb-1">Global Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      International studios working together like never before
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h4 className="font-bold mb-1">Diverse Stories</h4>
                    <p className="text-sm text-muted-foreground">
                      From every genre imaginable, representing global perspectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💫</span>
                  <div>
                    <h4 className="font-bold mb-1">Technical Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      4K streaming, immersive audio, and next-gen production
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which anime should I start with from this list?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you enjoy psychological thrillers, start with <strong>Fushigi no Yume</strong>. For heartwarming
                  stories, begin with <strong>Sakura no Kaze</strong>. Action fans should check out
                  <strong> Cyber Revolution 2085</strong> first.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are these anime available internationally?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most titles are available globally through major streaming platforms. Availability may vary by
                  region due to licensing agreements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do any shows contain mature themes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Several titles (particularly psychological thrillers) contain mature themes. We recommend checking
                  the official content ratings before viewing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Button>Share Article</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t mt-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {['Anime Recommendations', '2025 Anime', 'Best Anime', 'Top 10'].map(tag => (
              <Badge key={tag} variant="secondary">#{tag}</Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Anime Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}