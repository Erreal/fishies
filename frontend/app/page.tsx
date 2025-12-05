import Footer from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Рыбки</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Каталог аквариумных рыбок</p>
            <Link href="/fish" className="text-primary underline">
              Перейти →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Растения</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Каталог аквариумных растений</p>
            <Link href="/plants" className="text-primary underline">
              Перейти →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Виртуальный аквариум</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Создай свой аквариум и подбирай совместимых гидробионтов</p>
            <Link href="/aquarium" className="text-primary underline">
              Перейти →
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Калькуляторы</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Калькуляторы которые будут полезны при планировании и содержании аквариума</p>
            <Link href="/calcs" className="text-primary underline">
              Перейти →
            </Link>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
