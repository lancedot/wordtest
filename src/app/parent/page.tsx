import { ParentDashboard } from "@/components/ParentDashboard";
import { getAllWords } from "@/lib/content-store";

export default function ParentPage() {
  return <ParentDashboard words={getAllWords()} />;
}
