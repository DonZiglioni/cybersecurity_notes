import Link from 'next/link';
import { BackgroundBoxes } from '@/components/ui/BackgroundBoxes';
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <BackgroundBoxes />
    </main>
  );
}
