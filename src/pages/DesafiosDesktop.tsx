import {
  ArrowLeftIcon,
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const themesData = [
  "LIGHT POLLUTION",
  "NOISE POLLUTION",
  "VISUAL POLLUTION",
  "SOIL POLLUTION",
  "WATER AND OCEAN POLLUTION",
  "AIR POLLUTION",
  "THERMAL POLLUTION",
  "RADIOACTIVE POLLUTION",
  "ENERGY SOURCES",
  "NON-RENEWABLE",
  "OIL AND DERIVATIVES",
  "NATURAL GAS",
  "MINERAL COAL",
  "RENEWABLES",
  "BIOGAS",
];

const navigationItems = [
  { icon: HomeIcon, label: "Home", active: false },
  { icon: UsersIcon, label: "Comunidade", active: false },
  { icon: SearchIcon, label: "Explorar", active: false },
  { icon: TrendingUpIcon, label: "Desafios", active: true },
  { icon: ShoppingCartIcon, label: "Market", active: false },
];

const challengesContent = `LIGHT POLLUTION

Explain and raise awareness about what light pollution is and its impacts. Include scientific articles and relevant details. Provide examples.

Review, study, share, debate, and/or propose changes to the legislation in your country, state, or municipality. Compare with laws from other countries. Should the current legislation be modified? What would your proposal be?

Identify and record occurrences of light pollution. Specify the date and time.

Request authorization and record in video or audio a polite conversation with your local government, or the responsible entity, in your city. Present the evidence and demand action.

Record a video of yourself replacing old lighting fixtures with LED lamps. Attention: There is a correct and safe way to do this without the risk of electric shock. Research beforehand!

Question traditional habits: Reconsider Christmas celebration standards. Excessive lighting goes beyond energy consumption issues, also interfering, for example, with the life cycle of insects. Discuss and propose suggestions.

Regarding the previous item: What measure would characterize an excess of artificial light in Christmas decorations?

Raise awareness about the effects of artificial light on bird migration and other living beings. Also mention the harm to human health.

Identify and publish images of poorly designed streetlights or those that pose a risk to safety and/or the environment. Study and teach how to identify them.

Encourage the use of warm yellow light instead of blue light. Explain the reasons. You may record a video of yourself making this change. Once again: Pay attention to safety issues.

Create or share brands and lighting products designed to prevent light from scattering toward the sky. If you wish, record a video of yourself installing light shields on your fixtures.

Install, promote, and share sensors for lighting fixtures to avoid unnecessary lighting.


NOISE POLLUTION

13) Raise awareness about what noise pollution is and all its consequences.

14) How to help reduce this pollution in green areas? Take an action. Birds have had to chirp louder and louder to communicate.

15) Share and advertise economical and silent vehicles.

16) Monitor noise pollution in green and/or urban areas. Take a noise meter with you. Record and report the date and location of the occurrence. Inform the competent authorities if necessary.

17) Noise control on beaches or at street parties: Record yourself explaining why, where, and when noise control should be applied. The goal is awareness. Clarify the harmful effects.

18) Propose an action during a concert, festival, event, etc.

19) Encourage your city to implement a legislation requiring sound barriers in construction areas. Present a proposal.

20) Install soundproofing material in your home, school, or workplace and record the process.

21) Study, understand, and disseminate what the ideal limits of decibels would be according to location or time.

22) Discuss and disseminate how transportation should be managed to reduce urban noise.

23) Draw attention to the importance of noise regulations in industries.

24) Study and propose/disseminate non-governmental solutions.


VISUAL POLLUTION

25) Define what visual pollution is.

26) Identify and record the main visual pollution sites in your city.

27) Review, study, share, debate, and/or propose changes to relevant legislation in your country, state, or municipality.

28) Encourage, participate in, or disseminate events that promote the clean-up of urban areas free from visual pollution.

29) Present a proposal for reducing visual pollution in your city to the city government, responsible entity, or appropriate authorities.

30) Debate the amount of advertising in your city. Set up a committee or group for this purpose. Record videos. Hold virtual or in-person meetings.

31) Discuss the effects of visual pollution on wildlife and ecosystems.

32) Raise awareness about visual pollution in natural areas, such as parks and beaches.

33) Create artistic interventions in areas with visual pollution to raise awareness.

34) Study the relationship between visual pollution and mental health.

35) Propose the creation of green areas to offset visual pollution in cities.

36) Explain how "urban beautification" can help reduce visual pollution.


SOIL POLLUTION

37) Explain what soil pollution is and its main causes.

38) Identify and record areas affected by soil pollution in your community.

39) Study and disseminate appropriate techniques for soil recovery.

40) Promote the practice of composting as an alternative to reduce organic waste.

41) Raise awareness about the risks of using pesticides and chemical fertilizers.

42) Review and debate local legislation on soil pollution.

43) Encourage the use of organic agricultural practices.

44) Study and explain how mining affects soil quality.

45) Promote actions to prevent soil erosion.

46) Create awareness campaigns about proper solid waste disposal.

47) Discuss the impact of microplastics on soil.

48) Encourage the planting of native vegetation to protect the soil.


WATER AND OCEAN POLLUTION

49) Define what water and ocean pollution is.

50) Identify and record pollution sources in rivers, lakes, or coastal areas near you.

51) Promote actions to clean up water bodies.

52) Study and disseminate the impacts of water pollution on marine life.

53) Raise awareness about the risks of consuming polluted water.

54) Encourage the use of biodegradable cleaning products.

55) Discuss the problem of plastic islands in the oceans.

56) Study and share techniques for treating polluted water.

57) Promote the reduction of single-use plastics.

58) Create awareness campaigns about the importance of preserving water sources.

59) Debate current legislation on water pollution.

60) Encourage participation in beach or river clean-up programs.


AIR POLLUTION

61) Explain what air pollution is and its causes.

62) Monitor and record air quality in your city.

63) Promote the use of sustainable transport such as bicycles and public transportation.

64) Study and disseminate the health impacts of air pollution.

65) Encourage the planting of trees and vegetation to improve air quality.

66) Discuss industrial pollution and propose mitigation measures.

67) Raise awareness about the importance of reducing vehicle emissions.

68) Promote the use of clean and renewable energy.

69) Study and share techniques to reduce indoor air pollution.

70) Create campaigns against the burning of waste.

71) Debate air pollution legislation and propose improvements.

72) Encourage the adoption of environmental filters in industries.


THERMAL POLLUTION

73) Define what thermal pollution is.

74) Identify thermal pollution sources in your region.

75) Study the impacts of thermal pollution on aquatic ecosystems.

76) Promote the use of thermal energy technologies that minimize pollution.

77) Raise awareness about the effects of discharging hot water into rivers and seas.

78) Discuss local legislation on thermal pollution.

79) Encourage industries to adopt heat recycling systems.

80) Study and disseminate cooling techniques that minimize environmental impact.

81) Create awareness campaigns about thermal pollution.

82) Debate the impact of climate change on thermal pollution.

83) Promote the use of passive cooling systems in buildings.

84) Encourage research into sustainable thermal technologies.


RADIOACTIVE POLLUTION

85) Explain what radioactive pollution is and its risks.

86) Study and disseminate the impacts of nuclear accidents.

87) Raise awareness about safe radioactive waste disposal.

88) Debate the use of nuclear energy and its implications.

89) Identify areas affected by radioactive pollution.

90) Promote the adoption of strict safety standards in nuclear facilities.

91) Study and share detection techniques for radioactive contamination.

92) Create awareness campaigns about the risks of radioactive pollution.

93) Discuss international legislation on radioactive waste.

94) Encourage research into safer alternatives to nuclear energy.

95) Study the long-term effects of radioactive pollution on health.

96) Promote transparency regarding nuclear operations and incidents.


ENERGY SOURCES

97) Explain the difference between renewable and non-renewable energy sources.

98) Study and disseminate the environmental impacts of different energy sources.

99) Promote the use of renewable energy in your community.

100) Create awareness campaigns about energy efficiency.

101) Debate current energy policies in your country.

102) Encourage the installation of solar panels in homes and businesses.

103) Study and share energy storage techniques.

104) Discuss the role of wind energy in sustainability.

105) Raise awareness about the importance of reducing energy consumption.

106) Promote the use of clean energy in industries.

107) Study the potential of hydroelectric energy.

108) Encourage research into new renewable energy sources.


NON-RENEWABLE

109) Explain what non-renewable energy sources are.

110) Study the environmental impacts of oil extraction.

111) Debate the future of fossil fuels.

112) Raise awareness about the environmental costs of non-renewable energy.

113) Promote energy transition to renewable sources.

114) Study and disseminate the effects of coal mining.

115) Discuss the geopolitics of oil and natural gas.

116) Encourage the reduction of dependence on non-renewable sources.

117) Study the impacts of natural gas exploitation.

118) Create campaigns against the expansion of fossil fuel infrastructure.

119) Debate subsidies for non-renewable energy industries.

120) Promote divestment from non-renewable energy companies.


OIL AND DERIVATIVES

121) Explain what oil is and its uses.

122) Study the environmental impacts of oil spills.

123) Raise awareness about the risks of offshore drilling.

124) Debate the dependence on oil in modern society.

125) Promote alternatives to petroleum-based products.

126) Study and disseminate refining techniques and their impacts.

127) Create campaigns against the expansion of oil exploration.

128) Discuss the role of oil companies in climate change.

129) Encourage the reduction of plastic consumption derived from oil.

130) Study the effects of oil extraction on local communities.

131) Debate international policies on oil trade.

132) Promote transparency in the oil industry.


NATURAL GAS

133) Explain what natural gas is and its uses.

134) Study the environmental impacts of gas extraction.

135) Debate the role of natural gas in energy transition.

136) Raise awareness about the risks of fracking.

137) Promote cleaner alternatives to natural gas.

138) Study and disseminate gas pipeline infrastructure and its impacts.

139) Create campaigns for responsible gas consumption.

140) Discuss international policies on natural gas.

141) Encourage the reduction of methane emissions.

142) Study the effects of gas extraction on ecosystems.

143) Debate subsidies for the gas industry.

144) Promote investment in renewable energy instead of gas.


MINERAL COAL

145) Explain what mineral coal is and its uses.

146) Study the environmental impacts of coal mining.

147) Debate the future of coal in the energy matrix.

148) Raise awareness about the health effects of coal burning.

149) Promote alternatives to coal energy.

150) Study and disseminate the effects of coal mining on communities.

151) Create campaigns against the construction of new coal plants.

152) Discuss international policies on coal.

153) Encourage the closure of existing coal plants.

154) Study the impacts of coal ash disposal.

155) Debate subsidies for the coal industry.

156) Promote a just transition for coal industry workers.


RENEWABLES

157) Explain what renewable energies are.

158) Study the benefits of renewable energy sources.

159) Promote the use of solar energy in your community.

160) Debate current renewable energy policies.

161) Raise awareness about the importance of energy transition.

162) Study and disseminate wind energy technologies.

163) Create campaigns for the adoption of clean energy.

164) Discuss the role of hydroelectric energy in sustainability.

165) Encourage investment in renewable energy research.

166) Study the potential of geothermal energy.

167) Debate subsidies for renewable energy industries.

168) Promote community solar and wind projects.


BIOGAS

169) Explain what biogas is and how it is produced.

170) Study the environmental benefits of biogas.

171) Promote the use of biogas in your community.

172) Debate policies to encourage biogas production.

173) Raise awareness about biogas as a renewable energy source.

174) Study and disseminate biogas production techniques.

175) Create campaigns for the adoption of biogas technologies.

176) Discuss the role of biogas in waste management.

177) Encourage investment in biogas infrastructure.

178) Study the potential of biogas in agriculture.

179) Debate subsidies for biogas projects.

180) Promote the use of biogas in public transportation.`;

export const DesafiosDesktop = (): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = React.useState<string | null>(null);

  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[190px] [background:url(/figmaAssets/frame-294.png)_50%_50%_/_cover] flex-shrink-0">
        {/* Logo */}
        <div className="absolute top-2 sm:top-4 md:top-6 lg:top-[-27px] right-2 sm:right-4 md:right-6 lg:right-[10px]">
          <img
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-[113px] object-cover"
            alt="Logo SAVIOR VERTICAL"
            src="/figmaAssets/logo-savior-vertical-2.png"
          />
        </div>

        {/* Avatar - Centered on mobile, positioned left on desktop */}
        <div className="absolute top-[60px] sm:top-[80px] md:top-[100px] lg:top-[33px] left-1/2 lg:left-[621px] -translate-x-1/2 lg:translate-x-0">
          <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 sm:border-4 border-[#fcf8f2]">
            <AvatarImage
              src="/figmaAssets/primary-account.png"
              alt="Primary account"
            />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
        </div>

        {/* Action buttons - Desktop only */}
        <div className="hidden lg:flex absolute top-[63px] left-[811px] items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-[84px] h-[84px] rounded-full bg-transparent hover:bg-transparent"
          >
            <img
              className="w-full h-full object-cover"
              alt="Search"
              src="/figmaAssets/image-58.png"
            />
          </Button>
          <Button className="w-[100px] h-10 bg-[#147d6f] hover:bg-[#147d6f]/90 rounded-[5px]">
            <img
              className="w-[30.33px] h-[30.33px] object-cover"
              alt="Icon"
              src="/figmaAssets/image-31.png"
            />
          </Button>
          <Button className="w-[262px] h-10 bg-[#147d6f] hover:bg-[#147d6f]/90 rounded-[5px]">
            <span className="font-['Poppins',Helvetica] font-bold text-[#fcf8f2] text-2xl">
              Evolution
            </span>
          </Button>
        </div>
      </header>

      {/* Mobile Action Buttons */}
      <div className="lg:hidden flex flex-col gap-3 px-4 pt-20 sm:pt-24 md:pt-28 pb-4">
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          >
            <SearchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-darker-gray" />
          </Button>
          <Button className="h-10 px-4 bg-[#147d6f] hover:bg-[#147d6f]/90 rounded-[5px]">
            <img
              className="w-6 h-6 object-cover"
              alt="Icon"
              src="/figmaAssets/image-31.png"
            />
          </Button>
          <Button className="flex-1 max-w-[200px] h-10 bg-[#147d6f] hover:bg-[#147d6f]/90 rounded-[5px]">
            <span className="font-['Poppins',Helvetica] font-bold text-[#fcf8f2] text-lg sm:text-xl">
              Evolution
            </span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row relative px-4 lg:px-0 pb-20 lg:pb-4">
        {/* Themes Sidebar */}
        <aside className="w-full lg:w-[400px] xl:w-[555px] lg:px-8 xl:px-[57px] py-4 lg:py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-['Poppins',Helvetica] font-medium text-[#147d6f] text-xl sm:text-2xl">
              Themes
            </h2>
            <Button
              variant="link"
              className="font-['Poppins',Helvetica] font-normal text-black text-sm sm:text-lg lg:text-xl p-0 h-auto hover:underline"
            >
              See more
            </Button>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-[-10px] top-[55px] w-[9px] h-[57px] bg-[#147d6f] rounded-[20px]" />
            <ScrollArea className="h-[300px] sm:h-[400px] lg:h-[570px]">
              <nav className="space-y-2">
                {themesData.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTheme(theme)}
                    className={`w-full text-left font-['Inter',Helvetica] font-medium text-base sm:text-xl lg:text-2xl leading-normal py-1 px-2 rounded transition-colors ${
                      selectedTheme === theme
                        ? "bg-verde-claro"
                        : "hover:bg-verde-claro/50"
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </aside>

        {/* Vertical Separator - Desktop only */}
        <Separator
          orientation="vertical"
          className="hidden lg:block w-3 h-[600px] lg:h-[700px] xl:h-[782px] bg-[#d9d9d9] mt-8"
        />

        {/* Horizontal Separator - Mobile only */}
        <Separator className="lg:hidden w-full my-4" />

        {/* Challenges Content */}
        <section className="flex-1 lg:px-8 xl:px-12 py-4 lg:py-8">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="font-['Poppins',Helvetica] font-medium text-[#147d6f] text-xl sm:text-2xl">
              Themes and Challenges
            </h2>
            <Button
              variant="link"
              className="font-['Poppins',Helvetica] font-normal text-black text-sm sm:text-lg lg:text-xl p-0 h-auto hover:underline"
            >
              See more
            </Button>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute right-0 top-[47px] w-[13px] h-[57px] bg-[#147d6f] rounded-[20px]" />
            <ScrollArea className="h-[500px] sm:h-[600px] lg:h-[calc(100vh-350px)] xl:h-[calc(100vh-400px)]">
              <div className="font-['Inter',Helvetica] font-bold text-black text-sm sm:text-lg lg:text-xl xl:text-2xl leading-normal whitespace-pre-line pr-4">
                {challengesContent}
              </div>
            </ScrollArea>
          </div>
        </section>
      </main>

      {/* Mobile Navigation - Fixed Bottom */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 w-full h-[68px] bg-app-background rounded-[12px_12px_0px_0px] border-t border-solid border-[#8a918e] shadow-[0px_-1px_2px_#0000001a] z-50">
        <div className="flex items-center justify-between px-4 py-[13px] h-full">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="inline-flex flex-col items-center justify-center gap-0 hover:opacity-70 transition-opacity"
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
                  <div className="w-5 h-[1.25px] bg-x-11 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation - Static Bottom */}
      <nav className="hidden lg:flex items-center justify-center gap-[28px] py-4 mt-4">
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
                <div className="w-[17px] h-[1.25px] bg-x-11 mt-0.5" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
