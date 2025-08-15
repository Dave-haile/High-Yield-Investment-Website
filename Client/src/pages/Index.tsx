import PitchDeckHero from "@/components/PitchDeckHero";
import PitchDeckIntroduction from "@/components/PitchDeckIntroduction";
import PithDeckProblemStatment from "@/components/PithDeckProblemStatment";
import PitchDeckInnovation from "@/components/PitchDeckInnovation";
import PitchDeckService from "@/components/PitchDeckService";
import MarketSizeSection from "@/components/MarketSizeSection";
import CompetitiveAdvantagesSection from "@/components/CompetitiveAdvantagesSection";
import TractionSection from "@/components/TractionSection";
import RevenueModelSection from "@/components/RevenueModelSection";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import UseOfFundsSection from "@/components/UseOfFundsSection";
import ReferralProgram from "@/components/ReferralProgram";
import BenefitsReferralProgram from "@/components/BenefitsReferralProgram";
const Index = () => {
  return (
    <div>
      <PitchDeckHero />
      <PitchDeckIntroduction/>
      <PithDeckProblemStatment/>
      <PitchDeckInnovation/>
      <PitchDeckService/>
      <ReferralProgram/>
      <BenefitsReferralProgram/>
      <MarketSizeSection/>
      <CompetitiveAdvantagesSection/>
      <TractionSection/>
      <RevenueModelSection/>
      <AccomplishmentsSection/>
      <UseOfFundsSection/>
    </div>
    
  )
  
};

export default Index;
