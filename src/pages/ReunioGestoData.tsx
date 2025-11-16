import {
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { icon: HomeIcon, label: "Home", active: true },
  { icon: UsersIcon, label: "Comunidade", active: false },
  { icon: SearchIcon, label: "Explorar", active: false },
  { icon: TrendingUpIcon, label: "Desafios", active: false },
  { icon: ShoppingCartIcon, label: "Market", active: false },
];

const meetingEntries = [
  { id: 1, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 2, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 3, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 4, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 5, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 6, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 7, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 8, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 9, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 10, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 11, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 12, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
  { id: 13, title: "Reunião de meio ambiente - Seg, 14 mai, 2025" },
];

export const ReunioGestoData = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0">
        {/* Logo - Desktop Only */}
        <div className="hidden lg:block absolute top-[60px] md:top-[70px] lg:top-[81px] right-4 md:right-8 lg:right-[14px]">
          <img
            className="w-20 h-auto md:w-24 lg:w-[113px] object-cover"
            alt="Logo SAVIOR VERTICAL"
            src="/figmaAssets/logo-savior-vertical-4.png"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 relative">
          {/* Left Sidebar - Profile & Badge */}
          <aside className="lg:col-span-3 xl:col-span-2 order-1">
            <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
              {/* Avatar with Badge */}
              <div className="relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 flex justify-center lg:justify-start w-full">
                <div className="relative">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border-4 border-solid border-[#fcf8f2]">
                    <AvatarImage
                      src="/figmaAssets/primary-account.png"
                      alt="Primary account"
                      className="object-cover"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>

                  {/* Badge below avatar */}
                  <Badge className="absolute top-[70px] sm:top-[88px] md:top-[105px] lg:top-[157px] left-1/2 -translate-x-1/2 lg:left-[-7px] lg:translate-x-0 w-[130px] sm:w-[150px] h-[21px] sm:h-[23px] bg-[#147d6f] rounded-[5px] flex items-center justify-center hover:bg-[#147d6f]">
                    <img
                      className="w-5 h-5 sm:w-[23px] sm:h-[23px] object-cover"
                      alt="Badge icon"
                      src="/figmaAssets/image-31.png"
                    />
                  </Badge>
                </div>
              </div>

              {/* Date/Time Info - Hidden on mobile, shown on lg+ */}
              <div className="hidden lg:block w-full [font-family:'Poppins',Helvetica] text-[#147d6f] text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-[normal] mt-8 lg:mt-12">
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

          {/* Main Center Column */}
          <section className="lg:col-span-9 xl:col-span-10 flex flex-col order-2">
            {/* Title Section */}
            <div className="flex flex-col items-center gap-4 md:gap-[19px] w-full mb-6 md:mb-8 lg:mb-12 mt-6 lg:mt-0">
              <h1 className="font-semibold text-x-11 text-xl sm:text-2xl md:text-3xl lg:text-2xl [font-family:'Poppins',Helvetica] text-center tracking-[0] leading-[normal]">
                Meeting session
              </h1>
              <Separator className="w-full max-w-xs" />
            </div>

            {/* Meeting List */}
            <div className="w-full bg-app-background rounded-lg p-4 md:p-6 lg:p-8">
              <ul className="flex flex-col w-full gap-3 sm:gap-3.5 list-disc pl-4 sm:pl-5 md:pl-6">
                {meetingEntries.map((entry) => (
                  <li
                    key={entry.id}
                    className="[font-family:'Poppins',Helvetica] font-semibold text-[#0b7365] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-[0] leading-[normal] break-words"
                  >
                    {entry.title}
                  </li>
                ))}
              </ul>
            </div>
          </section>
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
