import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      title: "Космическая Одиссея",
      category: "Экшен",
      rating: 4.8,
      players: "12.5K",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
      description: "Эпическое космическое приключение с потрясающей графикой",
    },
    {
      id: 2,
      title: "Мистический Лабиринт",
      category: "Головоломка",
      rating: 4.6,
      players: "8.2K",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      description: "Решай загадки в волшебном мире полном тайн",
    },
    {
      id: 3,
      title: "Битва Героев",
      category: "Стратегия",
      rating: 4.9,
      players: "25.1K",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      description: "Командуй армией и завоевывай новые территории",
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Популярные игры
          </h2>
          <p className="text-xl text-gray-400">
            Открой для себя самые захватывающие игры
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card
              key={game.id}
              className="bg-slate-700/50 border-slate-600 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {game.category}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-white text-xl">
                  {game.title}
                </CardTitle>
                <p className="text-gray-400 text-sm">{game.description}</p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={18}
                    />
                    <span className="text-white font-semibold">
                      {game.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">{game.players}</span>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg">
                  <Icon name="GamePad2" className="mr-2" size={18} />
                  Играть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
