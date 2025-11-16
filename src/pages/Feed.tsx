import {
  HeartIcon,
  HomeIcon,
  ImageIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  Repeat2Icon,
  SearchIcon,
  Share2Icon,
  ShoppingCartIcon,
  SmileIcon,
  TrendingUpIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { icon: HomeIcon, label: "Home", active: true },
  { icon: UsersIcon, label: "Comunidade", active: false },
  { icon: SearchIcon, label: "Explorar", active: false },
  { icon: TrendingUpIcon, label: "Desafios", active: false },
  { icon: ShoppingCartIcon, label: "Market", active: false },
];

const friendSuggestions = [
  { name: "Renata", image: "/figmaAssets/primary-account-15.png" },
  { name: "Isabela", image: "/figmaAssets/primary-account-15.png" },
  { name: "Clara", image: "/figmaAssets/primary-account-15.png" },
  { name: "Lara", image: "/figmaAssets/primary-account-15.png" },
  { name: "Lara", image: "/figmaAssets/primary-account-15.png" },
  { name: "Lara", image: "/figmaAssets/primary-account-15.png" },
  { name: "Lara", image: "/figmaAssets/primary-account-15.png" },
  { name: "Lara", image: "/figmaAssets/primary-account-15.png" },
  { name: "Lara", image: "/figmaAssets/primary-account-15.png" },
  { name: "Lara", image: "/figmaAssets/primary-account-15.png" },
];

const feedPosts = [
  {
    id: 1,
    author: "N.Ch",
    avatar: "/figmaAssets/primary-account-15.png",
    content:
      "Feliz Ano Novo! Espero que esse seja um ano cheio de positividade e de mudanças que beneficiem o meio ambiente !",
    hashtags: "#anonovo #celebração",
    views: "109 views",
    comments: 2,
    retweets: 2,
    likes: 15,
  },
  {
    id: 2,
    author: "N.Ch",
    avatar: "/figmaAssets/primary-account-15.png",
    content:
      "Feliz Ano Novo! Espero que esse seja um ano cheio de positividade e de mudanças que beneficiem o meio ambiente !",
    hashtags: "",
    views: "",
    comments: 2,
    retweets: 2,
    likes: 15,
  },
];

const chatMessages = [
  {
    name: "Daniela",
    message: "Oiii, tudo bem??",
    avatar: "/figmaAssets/user---usercircle.svg",
  },
  {
    name: "Daniela",
    message: "Oiii, tudo bem??",
    avatar: "/figmaAssets/user---usercircle.svg",
  },
  {
    name: "Adriana",
    message: "Oiii, tudo bem??",
    avatar: "/figmaAssets/user---usercircle.svg",
  },
];

export const Feed = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] min-h-screen w-full flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[180px] sm:h-[200px] md:h-[240px] lg:h-[284px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0" />

      {/* Avatar - Overlapping header */}
      <div className="relative -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-16 flex justify-center z-10">
        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-solid border-[#fcf8f2]">
          <AvatarImage
            src="/figmaAssets/primary-account-12.png"
            alt="Profile"
            className="object-cover"
          />
          <AvatarFallback>NC</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content Area - Grid Layout */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mt-6">
          {/* Left Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <div className="sticky top-6 flex flex-col gap-4">
              <Button
                variant="link"
                className="text-[#147d6f] font-semibold text-xl lg:text-2xl h-auto p-0 justify-start hover:no-underline"
              >
                + Configuração +
              </Button>
              <div className="w-full aspect-[300/381] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </aside>

          {/* Main Center Column */}
          <section className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4 md:gap-6">
            {/* Friend Suggestions Card */}
            <Card className="bg-app-background border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 border-b">
                  <img
                    className="w-5 h-5 md:w-[25px] md:h-[25px] object-cover"
                    alt="Icon"
                    src="/figmaAssets/image-70.png"
                  />
                  <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-sm md:text-[15px] tracking-[-0.30px]">
                    Sugestão de amigos
                  </h2>
                </div>
                <ScrollArea className="w-full">
                  <div className="flex gap-2 p-3 md:p-4">
                    {friendSuggestions.map((friend, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[82px]"
                      >
                        <div className="w-[70px] h-[75px] sm:w-20 sm:h-[83px] bg-sage-6 rounded-[15px] flex flex-col items-center justify-center gap-1 p-2">
                          <Avatar className="w-8 h-8 sm:w-9 sm:h-9 border-2 sm:border-4 border-[#fcf8f2]">
                            <AvatarImage src={friend.image} alt={friend.name} />
                            <AvatarFallback>{friend.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="[font-family:'Poppins',Helvetica] font-semibold text-bold-text text-[10px] sm:text-xs tracking-[-0.30px] text-center">
                            {friend.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Feed Posts */}
            <div className="flex flex-col gap-4 md:gap-6">
              {feedPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-[#fcf8f2] border-none shadow-none"
                >
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-[62px] md:h-[62px] border-2 sm:border-4 border-[#fcf8f2] flex-shrink-0">
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback>{post.author}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="[font-family:'Poppins',Helvetica] font-semibold text-bold-text text-sm sm:text-base tracking-[-0.30px]">
                            {post.author}
                          </span>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <img
                              className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-cover"
                              alt="Badge"
                              src="/figmaAssets/image-84.png"
                            />
                            <img
                              className="w-4 h-4 sm:w-[19px] sm:h-[19px] object-cover"
                              alt="Badge"
                              src="/figmaAssets/image-80.png"
                            />
                            <img
                              className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px] object-cover"
                              alt="Badge"
                              src="/figmaAssets/image-81.png"
                            />
                            <img
                              className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-cover"
                              alt="Badge"
                              src="/figmaAssets/image-87.png"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5 sm:h-6 sm:w-6"
                            >
                              <MoreHorizontalIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                        </div>
                        <Separator className="h-1 md:h-[5px] bg-black mb-3 md:mb-4" />
                        <div className="bg-[#fcf8f2] rounded-[5px] border border-solid border-black p-3 md:p-4 mb-3 md:mb-4">
                          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#172b73] text-sm md:text-base tracking-[-0.30px] leading-[18px] md:leading-[20.5px] mb-2">
                            {post.content}
                          </p>
                          {post.hashtags && (
                            <p className="[font-family:'Poppins',Helvetica] font-normal text-x-11 text-sm md:text-base tracking-[-0.30px] leading-[18px] md:leading-[20.5px] mb-2">
                              {post.hashtags}
                            </p>
                          )}
                          {post.views && (
                            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs md:text-sm tracking-[-0.20px] leading-[18px] md:leading-[20.5px]">
                              {post.views}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-auto w-auto p-0"
                          >
                            <img
                              className="w-5 h-5 sm:w-[25px] sm:h-[25px] object-cover"
                              alt="Image"
                              src="/figmaAssets/image-70.png"
                            />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-auto w-auto p-0"
                          >
                            <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-auto w-auto p-0"
                          >
                            <VideoIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-auto w-auto p-0"
                          >
                            <SmileIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
                          <Button variant="ghost" className="h-auto p-0 gap-1 hover:bg-transparent">
                            <MessageCircleIcon className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px]" />
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[-0.30px]">
                              {post.comments}
                            </span>
                          </Button>
                          <Button variant="ghost" className="h-auto p-0 gap-1 hover:bg-transparent">
                            <Repeat2Icon className="w-4 h-3 sm:w-[18px] sm:h-3" />
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[-0.30px]">
                              {post.retweets}
                            </span>
                          </Button>
                          <Button variant="ghost" className="h-auto p-0 gap-1 hover:bg-transparent">
                            <HeartIcon className="w-3.5 h-3 sm:w-[15px] sm:h-3.5 fill-[#ce395f] text-[#ce395f]" />
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#ce395f] text-xs tracking-[-0.30px]">
                              {post.likes}
                            </span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-auto w-auto p-0 hover:bg-transparent"
                          >
                            <Share2Icon className="w-3.5 h-3.5 sm:w-[15.25px] sm:h-[14.8px]" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
            <div className="sticky top-6 space-y-4 lg:space-y-6">
              {/* Placeholder box */}
              <div className="w-full aspect-[372/248] bg-[#d9d9d9] rounded-[20px]" />

              {/* Ecochat Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl xl:text-2xl">
                    Ecochat
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
                      <SearchIcon className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-auto w-auto p-0"
                    >
                      <MoreHorizontalIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {chatMessages.map((chat, index) => (
                    <Card
                      key={index}
                      className="bg-[#75db85] rounded-[20px] border-0 overflow-hidden cursor-pointer hover:bg-[#75db85]/90 transition-colors"
                    >
                      <CardContent className="p-3 flex items-center gap-3">
                        <Avatar className="w-14 h-14 xl:w-16 xl:h-16 flex-shrink-0">
                          <AvatarImage src={chat.avatar} alt={chat.name} />
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
