import {
  HeartIcon,
  HomeIcon,
  MessageCircleIcon,
  Repeat2Icon,
  SearchIcon,
  Share2Icon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { icon: HomeIcon, label: "Home", active: true },
  { icon: UsersIcon, label: "Comunidade", active: false },
  { icon: SearchIcon, label: "Explorar", active: false },
  { icon: TrendingUpIcon, label: "Desafios", active: false },
  { icon: ShoppingCartIcon, label: "Market", active: false },
];

// Game card data - simplified to just index
const gameCards = Array.from({ length: 11 }, (_, i) => ({
  id: i,
  title: "Games 1#",
}));

const postEngagement = [
  { icon: MessageCircleIcon, count: "2", color: "text-black" },
  { icon: Repeat2Icon, count: "2", color: "text-black" },
  { icon: HeartIcon, count: "15", color: "text-[#ce395f]", filled: true },
  { icon: Share2Icon, count: "", color: "text-black" },
];

export const GamesDesktop = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[284px] [background:url(../figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0" />

      {/* Avatar - Overlapping header */}
      <div className="relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 flex justify-center z-10">
        <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border-4 border-solid border-[#fcf8f2]">
          <AvatarImage
            src="/figmaAssets/primary-account.png"
            alt="Primary account"
            className="object-cover"
          />
        </Avatar>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        {/* Title Section */}
        <div className="flex flex-col items-center mt-6 mb-6 lg:mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full justify-center">
            {/* Back Button - Left on Desktop */}
            <Button className="w-[80px] h-[40px] sm:w-[90px] sm:h-[44px] lg:w-[98px] lg:h-[46px] bg-[#147d6f] rounded-[5px] hover:bg-[#147d6f]/90 flex items-center justify-center order-2 lg:order-1">
              <img
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[35px] lg:h-[35px] object-cover"
                alt="Back"
                src="/figmaAssets/image-31.png"
              />
            </Button>

            {/* Title */}
            <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-[#147d6f] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-center tracking-[-0.30px] leading-[normal] whitespace-nowrap order-1 lg:order-2">
              Games
            </h1>

            {/* Note - Right on Desktop */}
            <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#147d6f] text-sm sm:text-base md:text-lg lg:text-2xl text-center tracking-[-0.30px] leading-[normal] order-3 max-w-[280px] lg:max-w-[344px]">
              *Games will be added gradually
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
          {gameCards.map((game) => (
            <Card
              key={game.id}
              className="bg-transparent border-0 w-full"
            >
              <CardContent className="p-0">
                {/* Game Image Placeholder */}
                <div className="w-full aspect-[2/1] bg-[#d9d9d9] rounded mb-3" />

                {/* Game Title */}
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#147d6f] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.30px] leading-[normal] mb-3">
                  {game.title}
                </h3>

                {/* Engagement Stats */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                  {postEngagement.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color}`} />
                      {item.count && (
                        <span className={`text-xs ${item.color}`}>
                          {item.count}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Mobile/Tablet */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#fcf8f2] border-t border-gray-200 z-50 safe-area-inset-bottom">
        <div className="flex items-center justify-around py-3 px-2 safe-area-inset-x">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`flex flex-col items-center justify-center gap-1 h-auto p-2 ${
                item.active ? "text-x-11" : "text-darker-gray opacity-70"
              }`}
            >
              <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-text-footer text-[10px] md:text-xs">
                {item.label}
              </span>
              {item.active && <div className="w-[17px] h-[1.25px] bg-current mt-0.5" />}
            </Button>
          ))}
        </div>
      </nav>

      {/* Desktop Navigation - Bottom positioned */}
      <nav className="hidden lg:flex justify-center items-center gap-8 py-6 bg-[#fcf8f2] border-t border-gray-100">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`flex flex-col items-center justify-center gap-1 h-auto p-3 ${
              item.active ? "" : "opacity-70"
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="font-text-footer text-xs">
              {item.label}
            </span>
            {item.active && <Separator className="w-[17px] h-[1.25px] mt-0.5 bg-x-11" />}
          </Button>
        ))}
      </nav>
    </div>
  );
};
