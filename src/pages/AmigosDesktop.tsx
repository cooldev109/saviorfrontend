import {
  CheckIcon,
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const friendsData = [
  { id: 1, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 2, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 3, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 4, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 5, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 6, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 7, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 8, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 9, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
  { id: 10, name: "Amigo A", image: "/figmaAssets/frame-67-9.png" },
];

const requestsData = [
  {
    id: 1,
    name: "Nome Pessoa",
    location: "São Paulo - SP",
    avatar: "/figmaAssets/primary-account-3.png",
  },
  {
    id: 2,
    name: "Nome Pessoa",
    location: "São Paulo - SP",
    avatar: "/figmaAssets/primary-account-3.png",
  },
  {
    id: 3,
    name: "Nome Pessoa",
    location: "São Paulo - SP",
    avatar: "/figmaAssets/primary-account-3.png",
  },
  {
    id: 4,
    name: "Nome Pessoa",
    location: "São Paulo - SP",
    avatar: "/figmaAssets/primary-account-3.png",
  },
];

const navigationItems = [
  { icon: HomeIcon, label: "Home", active: false },
  { icon: UsersIcon, label: "Comunidade", active: false },
  { icon: SearchIcon, label: "Explorar", active: false },
  { icon: TrendingUpIcon, label: "Desafios", active: false },
  { icon: ShoppingCartIcon, label: "Market", active: true },
];

export const AmigosDesktop = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState<"amigos" | "comunidades">(
    "amigos",
  );

  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0">
        {/* Logo in Header */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-[81px] right-4 sm:right-6 md:right-8 lg:right-[14px]">
          <img
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-[113px] object-cover"
            alt="Logo SAVIOR VERTICAL"
            src="/figmaAssets/logo-savior-vertical-2.png"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-6 mt-8 lg:mt-12">
              <div className="w-full aspect-[276/654] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </aside>

          {/* Main Center Column */}
          <section className="lg:col-span-8 flex flex-col">
            {/* Title Section */}
            <div className="flex flex-col items-center gap-4 w-full mb-6 md:mb-8">
              <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-x-11 text-xl sm:text-2xl md:text-3xl lg:text-2xl text-center tracking-[0] leading-[normal]">
                Amigos e Comunidades
              </h1>

              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[39px] w-full max-w-md justify-center">
                <Button
                  onClick={() => setActiveTab("amigos")}
                  className={`h-[34px] sm:h-[38px] w-[90px] sm:w-[103px] rounded-xl font-button font-[number:var(--button-font-weight)] text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)] ${
                    activeTab === "amigos"
                      ? "bg-x-11 text-x-1 hover:bg-x-11/90"
                      : "bg-verde-claro text-x-11 hover:bg-verde-claro/80"
                  }`}
                >
                  AMIGOS
                </Button>

                <Button
                  onClick={() => setActiveTab("comunidades")}
                  className={`h-[34px] sm:h-[38px] px-3 sm:px-[15px] rounded-xl font-button font-[number:var(--button-font-weight)] text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)] ${
                    activeTab === "comunidades"
                      ? "bg-x-11 text-x-1 hover:bg-x-11/90"
                      : "bg-verde-claro text-x-11 hover:bg-verde-claro/80"
                  }`}
                >
                  COMUNIDADES
                </Button>
              </div>

              <img
                className="w-full max-w-sm h-px object-cover"
                alt="Line"
                src="/figmaAssets/line-4.svg"
              />
            </div>

            {/* Search Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-1.5 sm:py-2 w-full rounded-[10px] border border-solid border-[#8a918e] mb-6 md:mb-8">
              <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-darker-gray text-sm sm:text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                Pesquise por amigos e contatos
              </span>
              <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-darker-gray flex-shrink-0" />
            </div>

            {/* Friends Section */}
            <div className="flex flex-col gap-4 mb-6 md:mb-8">
              <div className="flex items-center justify-between w-full">
                <h2 className="[font-family:'Poppins',Helvetica] font-medium text-x-11 text-sm sm:text-base tracking-[0] leading-[normal]">
                  Seus Amigos
                </h2>
                <button className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs text-center tracking-[0.50px] leading-[18px] hover:underline">
                  Ver tudo
                </button>
              </div>

              <ScrollArea className="w-full">
                <div className="flex items-center gap-4 sm:gap-6 pb-4">
                  {friendsData.map((friend) => (
                    <button
                      key={friend.id}
                      className="inline-flex flex-col items-center justify-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl [background:url(/figmaAssets/frame-67-9.png)_50%_50%_/_cover]" />
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                        {friend.name}
                      </span>
                    </button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            {/* Select More Friends Button */}
            <div className="flex justify-center mb-6 md:mb-8">
              <Button className="w-full max-w-[223px] h-[34px] sm:h-[38px] bg-x-11 text-x-1 rounded-xl font-button font-[number:var(--button-font-weight)] text-xs sm:text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)] hover:bg-x-11/90">
                SELECIONE + AMIGOS
              </Button>
            </div>

            {/* Friend Requests Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between w-full">
                <h2 className="[font-family:'Poppins',Helvetica] font-medium text-x-11 text-sm sm:text-base tracking-[0] leading-[normal]">
                  Suas Solicitações
                </h2>
                <button className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs text-center tracking-[0.50px] leading-[18px] hover:underline">
                  Ver tudo
                </button>
              </div>

              <div className="flex flex-col items-center gap-3 w-full">
                {requestsData.map((request) => (
                  <Card
                    key={request.id}
                    className="w-full h-[64px] sm:h-[68px] bg-app-background rounded-2xl border-[0.5px] border-solid border-[#8a918e]"
                  >
                    <CardContent className="flex items-center justify-between px-2 sm:px-3 py-2 sm:py-3.5 h-full">
                      <div className="inline-flex items-start justify-center gap-2 sm:gap-3">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-verde-claro rounded-[50px] p-2">
                          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 -m-3 sm:-m-[14px] border-2 sm:border-4 border-solid border-[#fcf8f2]">
                            <AvatarImage src={request.avatar} alt={request.name} />
                            <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>

                        <div className="flex flex-col w-[100px] sm:w-[110px] items-start">
                          <span className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-x-12 text-sm sm:text-base tracking-[0] leading-[normal] truncate">
                            {request.name}
                          </span>
                          <span className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-sage-9 text-xs tracking-[0] leading-[normal] truncate">
                            {request.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 sm:gap-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-5 h-5 sm:w-6 sm:h-6 p-0 hover:opacity-70"
                          aria-label="Rejeitar solicitação"
                        >
                          <XIcon className="w-5 h-5 sm:w-6 sm:h-6 text-darker-gray" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-5 h-5 sm:w-6 sm:h-6 p-0 hover:opacity-70"
                          aria-label="Aceitar solicitação"
                        >
                          <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-darker-gray" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-6 mt-8 lg:mt-12">
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
              {item.active && (
                <img
                  className="w-5 h-[1.25px] mt-0.5"
                  alt="Active indicator"
                  src="/figmaAssets/line-7.svg"
                />
              )}
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
            {item.active && (
              <img
                className="w-5 h-[1.25px] mt-0.5"
                alt="Active indicator"
                src="/figmaAssets/line-7.svg"
              />
            )}
          </Button>
        ))}
      </nav>
    </div>
  );
};
