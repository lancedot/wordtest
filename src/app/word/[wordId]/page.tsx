import { WordDetailView } from "@/components/WordDetailView";
import { getAllWords, getSynonymCardsForWord, getWordById } from "@/lib/content-store";
import { notFound } from "next/navigation";

type WordPageProps = {
  params: Promise<{
    wordId: string;
  }>;
};

export default async function WordPage({ params }: WordPageProps) {
  const resolvedParams = await params;
  const word = getWordById(resolvedParams.wordId);

  if (!word) {
    notFound();
  }

  return (
    <WordDetailView
      word={word}
      cards={getSynonymCardsForWord(word.id)}
      lookupWords={getAllWords()}
    />
  );
}
