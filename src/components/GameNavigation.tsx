import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GameNavigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-white">
              🎮{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GameZone
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-slate-700"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-slate-700"
              >
                Игры
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-slate-700"
              >
                Турниры
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-slate-700"
              >
                Сообщество
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            >
              <Icon name="Search" size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            >
              <Icon name="Bell" size={20} />
            </Button>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6">
              <Icon name="User" className="mr-2" size={18} />
              Профиль
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GameNavigation;
