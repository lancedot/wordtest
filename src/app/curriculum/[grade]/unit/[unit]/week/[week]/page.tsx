import { WeekDashboard } from "@/components/WeekDashboard";
import {
  getAllWeeks,
  getSynonymCardById,
  getWeekByRoute,
  getWordsForWeek
} from "@/lib/content-store";
import { notFound } from "next/navigation";

type WeekPageProps = {
  params: Promise<{
    grade: string;
    unit: string;
    week: string;
  }>;
};

export default async function WeekPage({ params }: WeekPageProps) {
  const resolvedParams = await params;
  const week = getWeekByRoute(
    Number(resolvedParams.grade),
    Number(resolvedParams.unit),
    Number(resolvedParams.week)
  );

  if (!week) {
    notFound();
  }

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

  return <WeekDashboard week={week} words={words} cards={cards} allWeeks={getAllWeeks()} />;
}
