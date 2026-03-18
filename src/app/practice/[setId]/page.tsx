import { PracticeSession } from "@/components/PracticeSession";
import {
  getAllWeeks,
  getCurrentWeek,
  getSynonymCardById,
  getWordsForWeek
} from "@/lib/content-store";
import { getStudySetDescription } from "@/lib/curriculum";

type PracticePageProps = {
  params: Promise<{
    setId: string;
  }>;
};

export default async function PracticePage({ params }: PracticePageProps) {
  const resolvedParams = await params;
  const week =
    resolvedParams.setId === "today"
      ? getCurrentWeek()
      : getAllWeeks().find((entry) => entry.id === resolvedParams.setId) ?? getCurrentWeek();
  const words = getWordsForWeek(week.id);
  const cards = week.wordIds
    .flatMap((wordId) => {
      return (words.find((entry) => entry.id === wordId)?.synonymCardIds ?? [])
        .map((cardId) => getSynonymCardById(cardId))
        .filter((value) => value !== undefined);
    })
    .filter((value, index, allValues) => {
      return allValues.findIndex((entry) => entry.id === value.id) === index;
    });

  return (
    <PracticeSession
      week={week}
      allWeeks={getAllWeeks()}
      words={words}
      cards={cards}
      title={`${week.title} 练习`}
      description={getStudySetDescription(week)}
    />
  );
}
