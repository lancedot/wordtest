import { HomeDashboard } from "@/components/HomeDashboard";
import { getAllWeeks, getAllWords, getCurrentWeek } from "@/lib/content-store";

export default function HomePage() {
  const week = getCurrentWeek();
  const weeks = getAllWeeks();
  const words = getAllWords();

  return <HomeDashboard week={week} words={words} weeks={weeks} />;
}
