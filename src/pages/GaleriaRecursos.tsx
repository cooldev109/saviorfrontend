import {
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  {
    icon: HomeIcon,
    label: "Home",
    active: true,
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
    active: false,
  },
  {
    icon: ShoppingCartIcon,
    label: "Market",
    active: false,
  },
];

const filterButtons = [
  { label: "Mais vistos", color: "bg-[#147d6f]" },
  { label: "Geral", color: "bg-[#26cdb7]" },
  { label: "Recentes", color: "bg-[#26cdb7]" },
];

// Column data - each column has its own cards
const columns = [
  {
    filterButton: filterButtons[0],
    cards: [
      {
        height: "h-[400px] md:h-[450px] lg:h-[534px]",
        hasPin: false,
        hasExpand: false,
      },
    ],
  },
  {
    filterButton: filterButtons[1],
    cards: [
      {
        height: "h-[350px] md:h-[380px] lg:h-[420px]",
        hasPin: true,
        hasExpand: true,
      },
      {
        height: "h-[120px] md:h-[130px] lg:h-[146px]",
        hasPin: false,
        hasExpand: false,
        isBottom: true,
      },
    ],
  },
  {
    filterButton: filterButtons[1],
    cards: [
      {
        height: "h-[350px] md:h-[380px] lg:h-[420px]",
        hasPin: true,
        hasExpand: true,
      },
    ],
  },
  {
    filterButton: filterButtons[2],
    cards: [
      {
        height: "h-[350px] md:h-[380px] lg:h-[420px]",
        hasPin: true,
        hasExpand: true,
      },
      {
        height: "h-[120px] md:h-[130px] lg:h-[146px]",
        hasPin: false,
        hasExpand: false,
        isBottom: true,
      },
    ],
  },
  {
    filterButton: filterButtons[2],
    cards: [
      {
        height: "h-[400px] md:h-[450px] lg:h-[534px]",
        hasPin: false,
        hasExpand: false,
      },
    ],
  },
];

export const GaleriaRecursos = (): JSX.Element => {
  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(../figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0" />

      {/* Avatar - Overlapping header */}
      <div className="relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 flex justify-center z-10">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border-4 border-solid border-[#fcf8f2] object-cover rounded-full"
          alt="Primary account"
          src="/figmaAssets/primary-account.png"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 lg:pb-8">
        {/* Responsive Columns Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-6 lg:mt-8">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col min-w-[280px] max-w-[320px] sm:min-w-[300px] sm:max-w-[340px] md:min-w-[200px] md:max-w-[260px] lg:min-w-[220px] lg:max-w-[280px] xl:min-w-[240px] xl:max-w-[300px] flex-1"
              style={{ flexBasis: "calc(100% - 2rem)" }}
            >
              {/* Sticky Filter Button at Top of Column */}
              <div className="sticky top-0 z-20 bg-[#fcf8f2] pb-4">
                <Button
                  variant="default"
                  className={`h-[23px] px-4 ${column.filterButton.color} hover:${column.filterButton.color}/90 rounded-[5px] w-auto`}
                >
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-[#fcf8f2] text-xs tracking-[-0.30px]">
                    {column.filterButton.label}
                  </span>
                </Button>
              </div>

              {/* Cards in Column */}
              <div className="flex flex-col gap-4">
                {column.cards.map((card, cardIndex) => (
                  <Card
                    key={cardIndex}
                    className={`w-full ${card.height} bg-${
                      card.isBottom ? "transparent" : "[#dfe3e6]"
                    } rounded-2xl border-0 ${
                      card.hasPin ? "overflow-hidden" : ""
                    }`}
                  >
                    <CardContent
                      className={`p-0 relative w-full h-full ${
                        card.isBottom ? "flex items-end" : ""
                      }`}
                    >
                      {card.isBottom ? (
                        <div className="w-full h-[calc(100%-10px)] bg-[#dfe3e6] rounded-2xl" />
                      ) : (
                        <>
                          {card.hasPin && (
                            <>
                              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34px] h-[38px] bg-blue-active rounded-[16.83px/19.13px] border-[3px] border-solid border-[#fcf8f2]" />
                              <img
                                className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-3.5"
                                alt="Polygon"
                                src="/figmaAssets/polygon-2.svg"
                              />
                            </>
                          )}
                          {card.hasExpand && (
                            <img
                              className="absolute bottom-4 right-4 w-[34px] h-[34px] object-cover"
                              alt="Image"
                              src="/figmaAssets/image-96.png"
                            />
                          )}
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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
