import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
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

export const ReunioGestoDesktop = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0">
        {/* Logo in Header - Top Right */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-[81px] right-4 sm:right-6 md:right-8 lg:right-[14px]">
          <img
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-[113px] object-cover"
            alt="Logo SAVIOR VERTICAL"
            src="/figmaAssets/logo-savior-vertical-4.png"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-8 relative">
          {/* Left Sidebar - Profile & Info */}
          <aside className="lg:col-span-3 xl:col-span-2 order-2 lg:order-1">
            <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
              {/* Avatar */}
              <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-16 flex justify-center lg:justify-start w-full">
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
              <div className="flex items-center justify-center bg-[#147d6f] rounded-[5px] h-[23px] w-full max-w-[150px]">
                <img
                  className="w-[23px] h-[23px] object-cover"
                  alt="Status indicator"
                  src="/figmaAssets/image-31.png"
                />
              </div>

              {/* Meeting Info */}
              <div className="w-full [font-family:'Poppins',Helvetica] text-[#147d6f] text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-[normal]">
                <div className="space-y-1">
                  <div>
                    <span className="font-bold">Date:</span><br />
                    <span className="font-medium"> 00/00/0000</span>
                  </div>
                  <div>
                    <span className="font-bold">Time:</span><br />
                    <span className="font-medium"> 00:00</span>
                  </div>
                  <div>
                    <span className="font-bold">Number of participants:</span><br />
                    <span className="font-medium"> 6</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Center Column - Meeting Session */}
          <section className="lg:col-span-6 xl:col-span-7 flex flex-col items-center order-1 lg:order-2">
            {/* Title Section */}
            <div className="flex flex-col items-center gap-4 md:gap-[19px] w-full max-w-md mb-8 md:mb-[47px]">
              <div className="flex flex-col items-center justify-center gap-3 md:gap-4 w-full">
                <h1 className="font-semibold text-x-11 text-xl sm:text-2xl md:text-3xl lg:text-2xl [font-family:'Poppins',Helvetica] text-center tracking-[0] leading-[normal]">
                  Meeting session
                </h1>

                <div className="flex items-center justify-center gap-6 md:gap-[39px] w-full">
                  <Badge className="h-[34px] sm:h-[38px] px-4 sm:px-[15px] bg-verde-claro rounded-xl hover:bg-verde-claro">
                    <span className="font-button font-[number:var(--button-font-weight)] text-x-11 text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                      FRIENDS
                    </span>
                  </Badge>
                </div>
              </div>

              <Separator className="w-full" />
            </div>

            {/* Description Section */}
            <div className="flex flex-col items-center justify-center gap-3 md:gap-4 w-[80%] mb-4 md:mb-[20px]">
              <h2 className="[font-family:'Poppins',Helvetica] font-medium text-x-11 text-sm sm:text-base text-center tracking-[0] leading-[normal]">
                Description
              </h2>

              <Card className="w-full bg-transparent border-0 shadow-none">
                <CardContent className="p-0">
                  <button className="flex items-center justify-center w-full h-[60px] sm:h-[68px] bg-[#e8f5e9] rounded-[10px] hover:bg-[#e8f5e9]/80 transition-colors">
                    <PlusIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#147d6f]" />
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Meeting Details */}
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-[59px] w-[80%]">
              {/* Meeting Theme */}
              <Card className="w-full bg-transparent border-0 shadow-none">
                <CardContent className="p-0 relative">
                  <img
                    className="w-full h-[60px] sm:h-[68px] md:h-[72px] rounded-[20px] object-cover"
                    alt="Meeting Theme"
                    src="/figmaAssets/image-59-1.png"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 font-medium text-x-12 text-sm sm:text-base [font-family:'Poppins',Helvetica] text-center tracking-[0] leading-[normal]">
                    Meeting Theme
                  </div>
                </CardContent>
              </Card>

              {/* Meeting Date */}
              <Card className="w-full bg-transparent border-0 shadow-none">
                <CardContent className="p-0 relative">
                  <img
                    className="w-full h-[60px] sm:h-[68px] md:h-[72px] rounded-[20px] object-cover"
                    alt="Meeting Date"
                    src="/figmaAssets/image-59.png"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 [font-family:'Poppins',Helvetica] font-medium text-x-12 text-sm sm:text-base text-center tracking-[0] leading-[normal]">
                    Mon,&nbsp;&nbsp;14 may 2025
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Open In Button */}
            <div className="flex justify-center mt-12 md:mt-16 lg:mt-[75px]">
              <Button className="h-[34px] sm:h-[38px] px-4 sm:px-[15px] bg-x-11 rounded-xl hover:bg-x-11/90">
                <span className="font-button font-[number:var(--button-font-weight)] text-x-1 text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                  OPEN IN
                </span>
              </Button>
            </div>
          </section>

          {/* Right Sidebar - Placeholder */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-3 order-3">
            <div className="absolute top-1 sm:top-2 md:top-3 lg:top-[12px] right-4 sm:right-6 md:right-8 lg:right-[14px]">
              <img
                className="w-16 h-auto sm:w-20 md:w-24 lg:w-[113px] object-cover"
                alt="Logo SAVIOR VERTICAL"
                src="/figmaAssets/logo-savior-vertical-4.png"
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 lg:mt-12">
              {/* Placeholder Box */}
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
              className={`flex flex-col items-center justify-center gap-1 h-auto p-2 ${item.active ? "text-x-11" : "text-darker-gray opacity-70"
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
            className={`flex flex-col items-center justify-center gap-1 h-auto p-3 ${item.active ? "" : "opacity-70"
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
