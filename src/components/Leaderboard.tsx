import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Leaderboard = () => {
  const players = [
    { rank: 1, name: "DragonSlayer", score: 156420, avatar: "🐉", trend: "up" },
    { rank: 2, name: "StarHunter", score: 142380, avatar: "⭐", trend: "up" },
    {
      rank: 3,
      name: "ShadowMaster",
      score: 138750,
      avatar: "🌙",
      trend: "down",
    },
    { rank: 4, name: "FirePhoenix", score: 135210, avatar: "🔥", trend: "up" },
    { rank: 5, name: "IceWizard", score: 132890, avatar: "❄️", trend: "same" },
    { rank: 6, name: "ThunderBolt", score: 128640, avatar: "⚡", trend: "up" },
    { rank: 7, name: "NightRaven", score: 125370, avatar: "🦅", trend: "down" },
    { rank: 8, name: "GoldenEagle", score: 122150, avatar: "🦅", trend: "up" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Icon name="Crown" className="text-yellow-400" size={24} />;
      case 2:
        return <Icon name="Medal" className="text-gray-400" size={20} />;
      case 3:
        return <Icon name="Award" className="text-orange-400" size={20} />;
      default:
        return <span className="text-gray-500 font-bold">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <Icon name="TrendingUp" className="text-green-400" size={16} />;
      case "down":
        return <Icon name="TrendingDown" className="text-red-400" size={16} />;
      default:
        return <Icon name="Minus" className="text-gray-400" size={16} />;
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Таблица лидеров
          </h2>
          <p className="text-xl text-gray-400">Лучшие игроки этого месяца</p>
        </div>

        <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="text-white text-2xl flex items-center gap-3">
              <Icon name="Trophy" className="text-purple-400" />
              Топ игроков
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <div className="space-y-1">
              {players.map((player, index) => (
                <div
                  key={player.rank}
                  className={`flex items-center justify-between p-4 hover:bg-slate-700/50 transition-all duration-200 ${
                    index < 3
                      ? "bg-gradient-to-r from-purple-900/20 to-transparent"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12">
                      {getRankIcon(player.rank)}
                    </div>

                    <div className="text-3xl">{player.avatar}</div>

                    <div>
                      <div className="text-white font-semibold text-lg">
                        {player.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Активный игрок
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-white font-bold text-xl">
                        {player.score.toLocaleString()}
                      </div>
                      <div className="text-gray-400 text-sm">очков</div>
                    </div>

                    <div className="flex items-center">
                      {getTrendIcon(player.trend)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Leaderboard;
