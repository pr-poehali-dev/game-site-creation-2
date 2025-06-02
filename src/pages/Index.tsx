import GameNavigation from "@/components/GameNavigation";
import HeroSection from "@/components/HeroSection";
import FeaturedGames from "@/components/FeaturedGames";
import Leaderboard from "@/components/Leaderboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <GameNavigation />
      <HeroSection />
      <FeaturedGames />
      <Leaderboard />
    </div>
  );
};

export default Index;
