import {
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
  ArrowLeftIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

const participantCards = [
  { bgColor: "bg-[#147d6f]", label: "Savior" },
  { bgColor: "bg-[#75db85]", label: "Savior" },
  { bgColor: "bg-[#147d6f]", label: "Savior" },
  { bgColor: "bg-[#75db85]", label: "Savior" },
  { bgColor: "bg-[#147d6f]", label: "Savior" },
  { bgColor: "bg-[#75db85]", label: "Savior" },
];

const paginationDots = [0, 1, 2, 3, 4, 5];

export const ReunioTelaDesktop = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0" />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 relative">
          {/* Left Sidebar - Profile & Info */}
          <aside className="lg:col-span-3 xl:col-span-2 order-2 lg:order-1">
            <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
              {/* Avatar */}
              <div className="relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 flex justify-center lg:justify-start w-full">
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border-4 border-solid border-[#fcf8f2]">
                  <AvatarImage
                    src="/figmaAssets/primary-account.png"
                    alt="Primary account"
                    className="object-cover"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>

              {/* Back Button */}
              <Badge className="w-full max-w-[150px] h-[23px] bg-[#147d6f] hover:bg-[#147d6f] rounded-[5px] flex items-center justify-center cursor-pointer">
                <img
                  className="w-[23px] h-[23px] object-cover"
                  alt="Back"
                  src="/figmaAssets/image-31.png"
                />
              </Badge>

              {/* Meeting Info */}
              <div className="w-full [font-family:'Poppins',Helvetica] text-[#147d6f] text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-[normal]">
                <div className="space-y-1">
                  <div>
                    <span className="font-bold">Date:</span>
                    <span className="font-medium"> 00/00/0000</span>
                  </div>
                  <div>
                    <span className="font-bold">Time:</span>
                    <span className="font-medium"> 00:00</span>
                  </div>
                  <div>
                    <span className="font-bold">Number of participants:</span>
                    <span className="font-medium"> 6</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Center Column - Video Room */}
          <section className="lg:col-span-6 xl:col-span-7 flex flex-col items-center gap-4 md:gap-6 order-1 lg:order-2">
            {/* Title */}
            <div className="flex w-full items-center justify-center bg-[#fcf8f2] pt-4 md:pt-6 pb-2 md:pb-1.5 px-4 md:px-[22px]">
              <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-x-11 text-xl sm:text-2xl md:text-3xl lg:text-[32px] tracking-[0] leading-[normal]">
                Video room
              </h1>
            </div>

            {/* Video Display */}
            <div className="w-full aspect-video rounded overflow-hidden bg-gray-200">
              <img
                className="w-full h-full object-cover"
                alt="Video room content"
                src="/figmaAssets/video-room-waterfall.png"
              />
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {paginationDots.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === 0 ? "bg-[#147d6f]" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Right Sidebar - Participants */}
          <aside className="lg:col-span-3 xl:col-span-3 order-3">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              {/* Logo - Desktop Only */}
              <div className="hidden lg:flex justify-end">
                <img
                  className="w-20 h-auto md:w-24 lg:w-[113px] object-cover"
                  alt="Logo SAVIOR VERTICAL"
                  src="/figmaAssets/logo-savior-vertical-4.png"
                />
              </div>

              {/* Presentation Title */}
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg sm:text-xl md:text-2xl text-center tracking-[0.50px] leading-7 md:leading-9">
                Apresentação (Savior 2)
              </h2>

              {/* Participant Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-[55px]">
                {participantCards.map((card, index) => (
                  <Card
                    key={index}
                    className={`w-full aspect-[171/202] ${card.bgColor} rounded-[10px] border border-solid border-black`}
                  >
                    <CardContent className="flex items-end justify-center h-full p-3 md:pb-4">
                      <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xs text-center tracking-[0.50px] leading-[18px]">
                        {card.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
