import AboutMe from "./components/about-me";
import Experiences from "./components/experiences";
import Landing from "./components/landing";

export default function Home() {
  return (
    <div className="items-center justify-items-center overflow-y-auto">
      <Landing />
      <AboutMe />
      <Experiences />
    </div>
  );
}
