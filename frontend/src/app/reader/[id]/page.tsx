import { getPrayer } from "@/lib/api";
import ReaderClient from "@/components/reader/ReaderClient";

export default async function ReaderPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const prayer = await getPrayer(id).catch(() => null);

  if (!prayer) return <div>Prayer not found</div>;

  return <ReaderClient prayer={prayer} />;
}
