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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const badges = [
  { color: "bg-[#172b73]", icon: "/figmaAssets/image-64.png" },
  { color: "bg-[#19c734]", text: "C" },
  { color: "bg-[#fedf01]", text: "C.S" },
  { color: "bg-[#172b73]", icon: "/figmaAssets/image-65.png" },
  { color: "bg-[#19c734]", hasVector: true },
  { color: "bg-[#fedf01]", hasStars: true },
];

const chatMessages = [
  { name: "Daniela", message: "Oiii, tudo bem??" },
  { name: "Daniela", message: "Oiii, tudo bem??" },
  { name: "Adriana", message: "Oiii, tudo bem??" },
];

const postEngagement = [
  { icon: MessageCircleIcon, count: "2", color: "text-black" },
  { icon: Repeat2Icon, count: "2", color: "text-black" },
  { icon: HeartIcon, count: "15", color: "text-[#ce395f]", filled: true },
  { icon: Share2Icon, count: "", color: "text-black" },
];

export const TelaPrinciapal = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[180px] sm:h-[200px] md:h-[240px] lg:h-[284px] [background:url(../figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0" />

      {/* Avatar - Overlapping header */}
      <div className="relative -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-16 flex justify-center z-10">
        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-solid border-[#fcf8f2]">
          <AvatarImage
            src="/figmaAssets/primary-account-1.png"
            alt="Primary account"
            className="object-cover"
          />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        {/* Grid Container for Desktop 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mt-6">

          {/* Left Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-2 xl:col-span-2">
            <div className="sticky top-6">
              <img
                className="w-full aspect-[372/501] object-cover rounded-2xl"
                alt="Rectangle"
                src="/figmaAssets/rectangle-84.svg"
              />
            </div>
          </aside>

          {/* Main Center Column */}
          <main className="lg:col-span-6 xl:col-span-6 flex flex-col items-center">
            {/* Title */}
            <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl tracking-[-0.30px] leading-[normal] whitespace-nowrap text-center mb-6">
              <span className="text-[#147d6f] tracking-[-0.14px]">Savior: </span>
              <span className="text-black tracking-[-0.14px]">Ana Júlia</span>
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center mb-4 w-full max-w-lg">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={`w-16 h-8 sm:w-[70px] sm:h-[30px] md:w-[86px] md:h-[35px] ${badge.color} rounded-[5px] flex items-center justify-center hover:${badge.color}`}
                >
                  {badge.icon && (
                    <img
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
                      alt="Badge icon"
                      src={badge.icon}
                    />
                  )}
                  {badge.text && (
                    <span className="[font-family:'Poppins',Helvetica] font-bold text-black text-xs md:text-sm tracking-[1.25px]">
                      {badge.text}
                    </span>
                  )}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center mb-6 w-full max-w-md">
              <Button className="flex-1 max-w-[180px] sm:max-w-[200px] md:max-w-[238px] h-[37px] bg-[#147d6f] rounded-[25px] hover:bg-[#147d6f]/90">
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base sm:text-lg md:text-xl">
                  Seguir
                </span>
              </Button>
              <Button className="w-[80px] sm:w-[90px] md:w-[100px] h-[35px] bg-[#147d6f] rounded-[5px] hover:bg-[#147d6f]/90 flex items-center justify-center">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30.7px] md:h-[30.7px] object-cover"
                  alt="Action icon"
                  src="/figmaAssets/image-31.png"
                />
              </Button>
            </div>

            {/* Post Content Card */}
            <Card className="bg-[#fcf8f2] border-0 w-full max-w-2xl">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-[#fcf8f2] flex-shrink-0">
                    <AvatarImage src="/figmaAssets/primary-account-1.png" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm md:text-base">____</span>
                      <span className="font-semibold text-sm md:text-base">S.Ch</span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex items-center gap-0.5">
                        <div className="w-1 h-0.5 bg-black" />
                        <div className="w-1 h-0.5 bg-black" />
                        <div className="w-1 h-0.5 bg-black" />
                      </div>
                      <img src="/figmaAssets/image-96.png" className="w-3.5 h-3.5 sm:w-4 sm:h-4" alt="icon" />
                    </div>

                    <Separator className="h-0.5 md:h-1 bg-[#147d6f] mb-3" />

                    <div className="flex items-center gap-1.5 mb-3">
                      <img src="/figmaAssets/image-93.png" className="w-3.5 h-3.5 sm:w-4 sm:h-4" alt="icon" />
                      <img src="/figmaAssets/image-76.png" className="w-3.5 h-3.5 sm:w-4 sm:h-4" alt="icon" />
                      <img src="/figmaAssets/image-77.png" className="w-3 h-3 sm:w-3.5 sm:h-3.5" alt="icon" />
                      <img src="/figmaAssets/image-86.png" className="w-3.5 h-3.5 sm:w-4 sm:h-4" alt="icon" />
                    </div>

                    <div className="bg-gray-200 w-full aspect-video rounded mb-3" />
                    <div className="bg-gray-200 w-full h-14 sm:h-16 rounded mb-3" />

                    <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                      {postEngagement.map((item, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color}`} />
                          {item.count && <span className={`text-xs ${item.color}`}>{item.count}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
            <div className="sticky top-6 space-y-4">
              {/* Placeholder box */}
              <div className="w-full aspect-[372/248] bg-[#d9d9d9] rounded-[20px]" />

              {/* Ecochat Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl xl:text-2xl">
                    Ecochat
                  </h2>
                  <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
                    <SearchIcon className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex flex-col gap-4">
                  {chatMessages.map((chat, index) => (
                    <Card
                      key={index}
                      className="bg-[#75db85] rounded-[20px] border-0 overflow-hidden cursor-pointer hover:bg-[#75db85]/90 transition-colors"
                    >
                      <CardContent className="p-3 flex items-center gap-3">
                        <Avatar className="w-14 h-14 xl:w-16 xl:h-16 flex-shrink-0">
                          <AvatarImage src="/figmaAssets/user---usercircle.svg" alt={chat.name} />
                          <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#090a0a] text-lg xl:text-xl truncate">
                            {chat.name}
                          </p>
                          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#646462] text-sm xl:text-base truncate">
                            {chat.message}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </aside>
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
