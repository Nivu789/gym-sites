import SampleBanner from "@/components/SampleBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Timetable from "@/components/Timetable";
import Plans from "@/components/Plans";
import Trainers from "@/components/Trainers";
import TrialForm from "@/components/TrialForm";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <SampleBanner />
      <Header />
      <main>
        <Hero />
        <Programs />
        <Timetable />
        <Plans />
        <Trainers />
        <TrialForm />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
