import EducationPage from "./education/page";
import Projects from "./projects/page";
import SkillsPage from "./skills/page";
import WorkHistoryPage from "./work-history/page";

export default function Home() {
  return (
    <div >
      <Projects/>
      <WorkHistoryPage/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <SkillsPage/>
      <EducationPage/>
    </div>
  );
}
