import {
  getAllWeeks,
  getAllWords,
  getCurrentWeek,
  getSynonymCardById,
} from "@/lib/content-store";
import { ReviewDashboard } from "@/components/ReviewDashboard";

export default function ReviewPage() {
  const week = getCurrentWeek();
  const allWords = getAllWords();
  const cards = allWords
    .flatMap((word) =>
      word.synonymCardIds
        .map((cardId) => getSynonymCardById(cardId))
        .filter((value) => value !== undefined)
    )
    .filter((value, index, allValues) => {
      return allValues.findIndex((entry) => entry.id === value.id) === index;
    });

  return <ReviewDashboard week={week} words={allWords} cards={cards} allWeeks={getAllWeeks()} />;
}
