import {
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const navigationItems = [
  {
    icon: HomeIcon,
    label: "Home",
    active: false,
  },
  {
    icon: UsersIcon,
    label: "Comunidade",
    active: false,
  },
  {
    icon: SearchIcon,
    label: "Explorar",
    active: false,
  },
  {
    icon: TrendingUpIcon,
    label: "Desafios",
    active: true,
  },
  {
    icon: ShoppingCartIcon,
    label: "Market",
    active: false,
  },
];

export const DesafiosEvoluo = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0">
        {/* Logo */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-[33px] right-4 sm:right-6 md:right-8 lg:right-[123px]">
          <img
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-[113px] object-cover"
            alt="Logo SAVIOR VERTICAL"
            src="/figmaAssets/logo-savior-vertical-2.png"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-4 pb-20 lg:pb-4">
        {/* Avatar - Overlapping Header */}
        <div className="relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 z-10">
          <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 sm:border-4 border-[#fcf8f2]">
            <AvatarImage
              src="/figmaAssets/primary-account.png"
              alt="Primary account"
            />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
        </div>

        {/* Title */}
        <h1 className="mt-4 sm:mt-6 font-['Poppins',Helvetica] font-semibold text-[#147d6f] text-2xl sm:text-3xl lg:text-[32px] tracking-[0] leading-[normal]">
          Challenges
        </h1>

        {/* Content Grid */}
        <div className="relative w-full max-w-[1827px] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-[93px]">
          {/* Left Mascot Card - Desktop only */}
          <Card className="hidden lg:block lg:col-span-3 xl:col-span-2 h-[400px] lg:h-[500px] xl:h-[589px] bg-[#cbe9d4] rounded-[20px] border-0 shadow-none overflow-hidden">
            <CardContent className="p-0 h-full flex items-center justify-center">
              <img
                className="w-full max-w-[340px] h-auto object-cover"
                alt="Mascote"
                src="/figmaAssets/mascote--1--1.png"
              />
            </CardContent>
          </Card>

          {/* Center Content */}
          <div className="lg:col-span-9 xl:col-span-8 flex flex-col gap-4">
            {/* Frequency Label */}
            <div className="font-['Inter',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[normal]">
              Frequency
            </div>

            {/* Frequency Chart Card */}
            <Card className="w-full h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[370px] bg-[#e8f5e9] rounded-2xl border-0 shadow-none overflow-hidden">
              <CardContent className="p-4 sm:p-6 h-full relative">
                {/* Chart Image */}
                <div className="relative w-full h-[calc(100%-30px)]">
                  <img
                    className="absolute inset-0 w-full h-full object-contain"
                    alt="Frequency Chart"
                    src="/figmaAssets/image.png"
                  />
                </div>

                {/* X-axis Labels */}
                <div className="absolute bottom-2 left-4 right-4 font-['Inter',Helvetica] font-semibold text-[6px] sm:text-[7px] tracking-[0] leading-[normal] text-black overflow-hidden whitespace-nowrap text-ellipsis">
                  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
                  150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260,
                  270, 280, 290, 300, 310, 320, 330, 340, 350, 360
                </div>

                {/* Add Button - Top Right */}
                <img
                  className="absolute top-0 right-1 w-1 h-[30px]"
                  alt="Add text button"
                  src="/figmaAssets/add-text-button.png"
                />
              </CardContent>
            </Card>

            {/* Placeholder Card - Hidden on mobile */}
            <Card className="hidden sm:block w-full h-[100px] lg:h-[129px] bg-[#d9d9d9] opacity-20 rounded-[20px] border-0 shadow-none mt-8 lg:mt-[72px]">
              <CardContent className="p-0 h-full" />
            </Card>

            {/* Stats/Notes - Hidden on mobile */}
            <div className="hidden sm:block mt-4 font-['Poppins',Helvetica] font-normal text-black text-[8px] tracking-[0.25px] leading-[20px]">
              -<br />-<br />-<br />-
            </div>
          </div>

          {/* Right Placeholder Card - Desktop only */}
          <Card className="hidden lg:block lg:col-span-3 xl:col-span-2 h-[400px] lg:h-[500px] xl:h-[589px] bg-[#d9d9d9] rounded-[20px] border-0 shadow-none">
            <CardContent className="p-0 h-full" />
          </Card>
        </div>

        {/* Mobile Mascot - Display below chart on mobile */}
        <div className="lg:hidden mt-8 w-full max-w-[300px]">
          <Card className="w-full h-[350px] bg-[#cbe9d4] rounded-[20px] border-0 shadow-none overflow-hidden">
            <CardContent className="p-0 h-full flex items-center justify-center">
              <img
                className="w-full max-w-[280px] h-auto object-cover"
                alt="Mascote"
                src="/figmaAssets/mascote--1--1.png"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Navigation - Fixed Bottom */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 w-full h-[68px] bg-app-background rounded-[12px_12px_0px_0px] border-t border-[#8a918e] shadow-[0px_-1px_2px_#0000001a] z-50">
        <div className="flex items-center justify-between px-4 py-[13px] h-full">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="inline-flex flex-col items-center justify-center gap-0.5 min-w-[29px] hover:opacity-70 transition-opacity"
              >
                <Icon
                  className={`w-6 h-6 ${item.active ? "text-x-11" : "text-darker-gray"}`}
                />
                <span
                  className={`font-text-footer font-[number:var(--text-footer-font-weight)] text-[length:var(--text-footer-font-size)] tracking-[var(--text-footer-letter-spacing)] leading-[var(--text-footer-line-height)] whitespace-nowrap [font-style:var(--text-footer-font-style)] ${item.active ? "text-x-11" : "text-darker-gray"}`}
                >
                  {item.label}
                </span>
                {item.active && (
                  <div className="w-6 h-[1.25px] bg-x-11 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation - Static Bottom */}
      <nav className="hidden lg:flex items-center justify-center gap-[28px] py-4">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="inline-flex flex-col items-center justify-center gap-1 hover:opacity-70 transition-opacity"
            >
              <Icon
                className={`w-6 h-6 ${item.active ? "text-x-11" : "text-darker-gray"}`}
              />
              <span
                className={`font-text-footer font-[number:var(--text-footer-font-weight)] text-[length:var(--text-footer-font-size)] tracking-[var(--text-footer-letter-spacing)] leading-[var(--text-footer-line-height)] whitespace-nowrap [font-style:var(--text-footer-font-style)] ${item.active ? "text-x-11" : "text-darker-gray"}`}
              >
                {item.label}
              </span>
              {item.active && (
                <div className="w-6 h-[1.25px] bg-x-11 mt-0.5" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
