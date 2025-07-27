import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

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
      winRate: "82%",
      gamesPlayed: 124,
      avgGPM: 645,
      description: "Основной керри команды с невероятной фарм-скоростью и позиционированием в поздней игре."
    },
    {
      name: "ShadowBlade",
      position: "Mid",
      role: "Position 2", 
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg",
      bestHeroes: ["Invoker", "Shadow Fiend", "Pudge"],
      kda: "3.2",
      winRate: "76%",
      gamesPlayed: 118,
      avgGPM: 612,
      description: "Мидлейнер с отличным пониманием игры и способностью контролировать темп матча."
    },
    {
      name: "IronWill",
      position: "Offlane",
      role: "Position 3",
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg", 
      bestHeroes: ["Axe", "Tidehunter", "Mars"],
      kda: "2.1",
      winRate: "74%",
      gamesPlayed: 131,
      avgGPM: 445,
      description: "Танк команды, который создает пространство и инициирует командные сражения."
    },
    {
      name: "GuardianAngel", 
      position: "Support",
      role: "Position 4",
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg",
      bestHeroes: ["Crystal Maiden", "Dazzle", "Rubick"],
      kda: "1.8",
      winRate: "80%",
      gamesPlayed: 127,
      avgGPM: 312,
      description: "Роумер с отличным вижном карты и способностью поддерживать союзников."
    },
    {
      name: "VoidWalker",
      position: "Hard Support", 
      role: "Position 5",
      avatar: "/img/79cac956-454b-42c0-9be1-31d190690c86.jpg",
      bestHeroes: ["Warlock", "Witch Doctor", "Oracle"],
      kda: "1.5", 
      winRate: "85%",
      gamesPlayed: 135,
      avgGPM: 285,
      description: "Хард саппорт с невероятным игровым чутьем и умением спасать союзников."
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
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-effect border-b border-blue-500/30 lightning-effect">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/img/aad69913-5df5-4289-a94b-92fa00e9e1fa.jpg" alt="Solo Leveling" className="w-16 h-16 rounded-2xl fire-glow" />
              <div>
                <h1 className="text-3xl font-bold text-blue-400 drop-shadow-lg">Solo Leveling</h1>
                <p className="text-blue-200/80">Professional Dota 2 Team</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 fire-glow">{teamStats.rank}</div>
                <div className="text-sm text-blue-200/60">World Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{teamStats.winRate}</div>
                <div className="text-sm text-blue-200/60">Win Rate</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* About Team */}
        <section className="mb-16">
          <Card className="glass-card rounded-3xl border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-3 text-2xl">
                <Icon name="Users" size={28} />
                О команде
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-200 leading-relaxed text-lg mb-8">
                Solo Leveling — профессиональная киберспортивная команда по Dota 2, основанная в 2022 году. 
                Мы стремимся к вершинам мирового киберспорта, сочетая индивидуальное мастерство каждого игрока 
                с безупречной командной игрой. Наша философия основана на постоянном совершенствовании и 
                преодолении любых препятствий на пути к победе.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 glass-effect rounded-2xl lightning-effect">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{teamStats.totalMatches}</div>
                  <div className="text-sm text-blue-200/70">Сыграно матчей</div>
                </div>
                <div className="text-center p-6 glass-effect rounded-2xl fire-glow">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{teamStats.championships}</div>
                  <div className="text-sm text-blue-200/70">Чемпионства</div>
                </div>
                <div className="text-center p-6 glass-effect rounded-2xl">
                  <div className="text-3xl font-bold text-green-400 mb-2">{teamStats.winRate}</div>
                  <div className="text-sm text-blue-200/70">Процент побед</div>
                </div>
                <div className="text-center p-6 glass-effect rounded-2xl fire-glow">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{teamStats.rank}</div>
                  <div className="text-sm text-blue-200/70">Место в рейтинге</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Roster */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-3">
            <Icon name="Gamepad2" size={36} />
            Состав команды
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {players.map((player, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="glass-card rounded-3xl border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 cursor-pointer lightning-effect">
                    <CardHeader className="pb-3">
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-blue-400/50">
                        <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-center text-blue-300 text-lg">{player.name}</CardTitle>
                      <div className="text-center">
                        <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-400/30">
                          {player.role}
                        </Badge>
                        <p className="text-sm text-blue-200/70 mt-2">{player.position}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 glass-effect rounded-xl">
                            <div className="font-bold text-yellow-400">{player.kda}</div>
                            <div className="text-blue-200/60">KDA</div>
                          </div>
                          <div className="p-2 glass-effect rounded-xl">
                            <div className="font-bold text-green-400">{player.winRate}</div>
                            <div className="text-blue-200/60">Win Rate</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="glass-card border-blue-500/30 rounded-3xl max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-blue-400 text-xl flex items-center gap-2">
                      <Icon name="User" size={24} />
                      Профиль игрока
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-blue-400/50">
                        <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-300 mb-2">{player.name}</h3>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                        {player.position} • {player.role}
                      </Badge>
                    </div>
                    
                    <div className="glass-effect p-4 rounded-2xl">
                      <p className="text-slate-200 text-sm leading-relaxed">{player.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Лучшие герои:</h4>
                      <div className="flex flex-wrap gap-2">
                        {player.bestHeroes.map((hero, heroIndex) => (
                          <Badge key={heroIndex} variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                            {hero}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-effect p-4 rounded-2xl text-center">
                        <div className="text-2xl font-bold text-yellow-400">{player.gamesPlayed}</div>
                        <div className="text-sm text-blue-200/70">Игр сыграно</div>
                      </div>
                      <div className="glass-effect p-4 rounded-2xl text-center">
                        <div className="text-2xl font-bold text-green-400">{player.avgGPM}</div>
                        <div className="text-sm text-blue-200/70">Средний GPM</div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Recent Matches */}
        <section>
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-3">
            <Icon name="Trophy" size={36} />
            Последние матчи
          </h2>
          <Card className="glass-card rounded-3xl border-blue-500/30">
            <CardContent className="p-0">
              <div className="space-y-0">
                {recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-6 border-b border-blue-500/20 last:border-b-0 hover:bg-blue-500/10 transition-all duration-300 first:rounded-t-3xl last:rounded-b-3xl lightning-effect">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${match.result === 'Победа' ? 'bg-green-500 fire-glow' : 'bg-red-500'}`}></div>
                      <div>
                        <div className="font-semibold text-blue-300 text-lg">vs {match.opponent}</div>
                        <div className="text-sm text-blue-200/70">{match.tournament}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-lg ${match.result === 'Победа' ? 'text-green-400' : 'text-red-400'}`}>
                        {match.result}
                      </div>
                      <div className="text-sm text-blue-200/70">{match.score}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-200/70 mb-2">{match.date}</div>
                      <Button variant="ghost" size="sm" className="glass-effect rounded-xl border-blue-400/30 hover:bg-blue-500/20">
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
      <footer className="glass-effect border-t border-blue-500/30 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src="/img/aad69913-5df5-4289-a94b-92fa00e9e1fa.jpg" alt="Solo Leveling" className="w-10 h-10 rounded-xl fire-glow" />
              <span className="text-xl font-bold text-blue-400">Solo Leveling</span>
            </div>
            <p className="text-blue-200/70">© 2024 Solo Leveling Esports Team. Все права защищены.</p>
            <div className="flex justify-center space-x-4 mt-6">
              <Button variant="ghost" size="sm" className="glass-effect rounded-xl border-blue-400/30 hover:bg-blue-500/20">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="glass-effect rounded-xl border-blue-400/30 hover:bg-blue-500/20">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="glass-effect rounded-xl border-blue-400/30 hover:bg-blue-500/20">
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