import {
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { icon: HomeIcon, label: "Home", active: true },
  { icon: UsersIcon, label: "Comunidade", active: false },
  { icon: SearchIcon, label: "Explorar", active: false },
  { icon: TrendingUpIcon, label: "Desafios", active: false },
  { icon: ShoppingCartIcon, label: "Market", active: false },
];

const contentCards = [
  { row: 0, col: 0, hasProgress: false, progressHeight: "" },
  { row: 0, col: 1, hasProgress: true, progressHeight: "h-16 md:h-20" },
  { row: 0, col: 2, hasProgress: false, progressHeight: "" },
  { row: 0, col: 3, hasProgress: false, progressHeight: "" },
  { row: 1, col: 0, hasProgress: false, progressHeight: "" },
  { row: 1, col: 1, hasProgress: false, progressHeight: "" },
  { row: 1, col: 2, hasProgress: true, progressHeight: "h-16 md:h-20" },
  { row: 1, col: 3, hasProgress: false, progressHeight: "" },
  { row: 2, col: 0, hasProgress: false, progressHeight: "" },
  { row: 2, col: 1, hasProgress: false, progressHeight: "" },
  { row: 2, col: 2, hasProgress: false, progressHeight: "" },
  { row: 2, col: 3, hasProgress: true, progressHeight: "h-16 md:h-20" },
];

const socialIcons = [
  {
    src: "/figmaAssets/comment-stroke-icon.svg",
    alt: "Comment stroke icon",
    width: "w-3 sm:w-[13px]",
    height: "h-3.5 sm:h-[15px]",
  },
  {
    src: "/figmaAssets/retweet-stroke-icon.svg",
    alt: "Retweet stroke icon",
    width: "w-3.5 sm:w-4",
    height: "h-2.5 sm:h-3",
  },
  {
    src: "/figmaAssets/heart-solid-icon.svg",
    alt: "Heart solid icon",
    width: "w-3 sm:w-[13px]",
    height: "h-3 sm:h-3.5",
  },
  {
    src: "/figmaAssets/share-stroke-icon-.svg",
    alt: "Share stroke icon",
    width: "w-3 sm:w-[13px]",
    height: "h-3.5 sm:h-[15px]",
  },
];

export const ProblemasDesktop = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0" />

      {/* Avatar - Overlapping header */}
      <div className="relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 flex justify-center z-10">
        <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border-4 border-solid border-[#fcf8f2]">
          <AvatarImage
            src="/figmaAssets/primary-account.png"
            alt="Primary account"
            className="object-cover"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        {/* Title Section */}
        <section className="mt-8 md:mt-12 lg:mt-[61px] mb-6 md:mb-8 flex flex-col items-center">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-x-11 text-xl sm:text-2xl md:text-3xl lg:text-2xl text-center tracking-[0] leading-[normal] mb-3 md:mb-[9px]">
            Debate coletivo
          </h1>

          {/* Action Buttons Row */}
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[113px] mb-2 relative">
            <div className="w-[45px] h-[21px] sm:w-[49px] sm:h-[23px] bg-[#147d6f] rounded-[5px]" />
            <Button className="w-[45px] h-[21px] sm:w-[49px] sm:h-[23px] bg-[#147d6f] rounded-[5px] p-0 hover:bg-[#147d6f]/90 flex items-center justify-center">
              <img
                className="w-4 h-4 sm:w-[17.5px] sm:h-[17.5px] object-cover"
                alt="Back"
                src="/figmaAssets/image-31.png"
              />
            </Button>

            {/* Forward Icon - Positioned absolutely */}
            <ChevronRightIcon className="absolute -top-8 left-1/2 translate-x-8 sm:translate-x-12 md:translate-x-16 lg:translate-x-[74px] w-5 h-5 sm:w-6 sm:h-6 text-[#147d6f]" />
          </div>

          <Separator className="w-[280px] sm:w-[328px] h-px bg-gray-300" />
        </section>

        {/* Tabs Section */}
        <div className="flex justify-center mb-6 md:mb-8 lg:mb-[9px]">
          <Tabs defaultValue="problema" className="w-full max-w-md">
            <TabsList className="bg-transparent gap-2 md:gap-[7px] h-auto p-0 w-full grid grid-cols-3">
              <TabsTrigger
                value="problema"
                className="w-full h-[34px] sm:h-[38px] bg-[#147d6f] rounded-xl data-[state=active]:bg-[#147d6f] hover:bg-[#147d6f]/90 px-3 sm:px-[15px] py-2 sm:py-[11px]"
              >
                <span className="font-button font-[number:var(--button-font-weight)] text-app-background text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                  PROBLEMA
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="solucao"
                className="w-full h-[34px] sm:h-[38px] bg-[#147d6f] rounded-xl data-[state=active]:bg-[#147d6f] hover:bg-[#147d6f]/90 px-3 sm:px-[15px] py-2 sm:py-[11px]"
              >
                <span className="font-button font-[number:var(--button-font-weight)] text-app-background text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                  SOLUÇÃO
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="sugestao"
                className="w-full h-[34px] sm:h-[38px] bg-[#147d6f] rounded-xl data-[state=active]:bg-[#147d6f] hover:bg-[#147d6f]/90 px-3 sm:px-[15px] py-2 sm:py-[11px]"
              >
                <span className="font-button font-[number:var(--button-font-weight)] text-app-background text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                  SUGESTÃO
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Content Grid with Sidebars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-6">
              <div className="w-full aspect-[276/654] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </aside>

          {/* Main Content - Cards Grid */}
          <section className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-x-[55px] lg:gap-y-[25px]">
              {contentCards.map((card, index) => (
                <div key={index} className="relative flex justify-center">
                  {card.hasProgress && (
                    <div
                      className={`absolute -left-2 sm:-left-3 lg:-left-[17px] top-10 sm:top-12 lg:top-[53px] w-4 sm:w-[18px] ${card.progressHeight} bg-[#147d6f] rounded-[20px]`}
                    />
                  )}
                  <Card className="w-full max-w-[200px] h-[140px] sm:h-[150px] md:h-[163px] bg-[#dfe3e6] rounded-2xl border-0">
                    <CardContent className="p-0 h-full flex flex-col justify-end pb-2 sm:pb-3 md:pb-[11px] px-1.5 sm:px-2 md:px-[6px]">
                      <div className="flex items-center justify-between">
                        {socialIcons.map((icon, iconIndex) => (
                          <Button
                            key={iconIndex}
                            variant="ghost"
                            size="icon"
                            className="h-auto w-auto p-0 hover:bg-transparent"
                          >
                            <img
                              className={`${icon.width} ${icon.height}`}
                              alt={icon.alt}
                              src={icon.src}
                            />
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Right Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-6">
              <div className="w-full aspect-[276/654] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </aside>
        </div>
      </main>

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
