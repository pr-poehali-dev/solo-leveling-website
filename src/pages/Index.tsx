import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const teamStats = {
    rank: "#5",
    winRate: "78%",
    totalMatches: 142,
    championships: 3
  };

  const players = [
    {
      name: "ArcaneStorm",
      position: "Carry",
      role: "Position 1",
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg",
      bestHeroes: ["Phantom Assassin", "Anti-Mage", "Faceless Void"],
      kda: "2.8",
      winRate: "82%"
    },
    {
      name: "ShadowBlade",
      position: "Mid",
      role: "Position 2", 
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg",
      bestHeroes: ["Invoker", "Shadow Fiend", "Pudge"],
      kda: "3.2",
      winRate: "76%"
    },
    {
      name: "IronWill",
      position: "Offlane",
      role: "Position 3",
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg", 
      bestHeroes: ["Axe", "Tidehunter", "Mars"],
      kda: "2.1",
      winRate: "74%"
    },
    {
      name: "GuardianAngel", 
      position: "Support",
      role: "Position 4",
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg",
      bestHeroes: ["Crystal Maiden", "Dazzle", "Rubick"],
      kda: "1.8",
      winRate: "80%"
    },
    {
      name: "VoidWalker",
      position: "Hard Support", 
      role: "Position 5",
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg",
      bestHeroes: ["Warlock", "Witch Doctor", "Oracle"],
      kda: "1.5", 
      winRate: "85%"
    }
  ];

  const recentMatches = [
    {
      opponent: "Team Spirit",
      result: "Победа",
      score: "2-1",
      date: "25 Июл",
      tournament: "DPC League"
    },
    {
      opponent: "OG Esports", 
      result: "Победа",
      score: "2-0",
      date: "23 Июл",
      tournament: "Major Qualifier"
    },
    {
      opponent: "Team Liquid",
      result: "Поражение", 
      score: "1-2",
      date: "21 Июл",
      tournament: "DPC League"
    },
    {
      opponent: "TSM",
      result: "Победа",
      score: "2-0", 
      date: "19 Июл",
      tournament: "Minor Cup"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/img/aad69913-5df5-4289-a94b-92fa00e9e1fa.jpg" alt="Solo Leveling" className="w-12 h-12 rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-primary">Solo Leveling</h1>
                <p className="text-muted-foreground">Professional Dota 2 Team</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{teamStats.rank}</div>
                <div className="text-sm text-muted-foreground">World Rank</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{teamStats.winRate}</div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* About Team */}
        <section className="mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Icon name="Users" size={24} />
                О команде
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                Solo Leveling — профессиональная киберспортивная команда по Dota 2, основанная в 2022 году. 
                Мы стремимся к вершинам мирового киберспорта, сочетая индивидуальное мастерство каждого игрока 
                с безупречной командной игрой. Наша философия основана на постоянном совершенствовании и 
                преодолении любых препятствий на пути к победе.
              </p>
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">{teamStats.totalMatches}</div>
                  <div className="text-sm text-muted-foreground">Сыграно матчей</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">{teamStats.championships}</div>
                  <div className="text-sm text-muted-foreground">Чемпионства</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">{teamStats.winRate}</div>
                  <div className="text-sm text-muted-foreground">Процент побед</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">{teamStats.rank}</div>
                  <div className="text-sm text-muted-foreground">Место в рейтинге</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Roster */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <Icon name="Gamepad2" size={32} />
            Состав команды
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {players.map((player, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader className="pb-3">
                  <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden">
                    <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-center text-primary text-lg">{player.name}</CardTitle>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">{player.role}</Badge>
                    <p className="text-sm text-muted-foreground mt-1">{player.position}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Лучшие герои:</h4>
                      <div className="space-y-1">
                        {player.bestHeroes.map((hero, heroIndex) => (
                          <Badge key={heroIndex} variant="outline" className="text-xs mr-1">
                            {hero}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center p-2 bg-secondary rounded">
                        <div className="font-bold text-primary">{player.kda}</div>
                        <div className="text-muted-foreground">KDA</div>
                      </div>
                      <div className="text-center p-2 bg-secondary rounded">
                        <div className="font-bold text-primary">{player.winRate}</div>
                        <div className="text-muted-foreground">Win Rate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Matches */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <Icon name="Trophy" size={32} />
            Последние матчи
          </h2>
          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <div className="space-y-0">
                {recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-6 border-b border-border last:border-b-0 hover:bg-secondary transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${match.result === 'Победа' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <div>
                        <div className="font-semibold text-primary">vs {match.opponent}</div>
                        <div className="text-sm text-muted-foreground">{match.tournament}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold ${match.result === 'Победа' ? 'text-green-500' : 'text-red-500'}`}>
                        {match.result}
                      </div>
                      <div className="text-sm text-muted-foreground">{match.score}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                      <Button variant="ghost" size="sm">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src="/img/aad69913-5df5-4289-a94b-92fa00e9e1fa.jpg" alt="Solo Leveling" className="w-8 h-8 rounded" />
              <span className="text-xl font-bold text-primary">Solo Leveling</span>
            </div>
            <p className="text-muted-foreground">© 2024 Solo Leveling Esports Team. Все права защищены.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Button variant="ghost" size="sm">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Twitch" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;