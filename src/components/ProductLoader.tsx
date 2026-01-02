import { ProductCardSkeleton } from "./Loader";
import { Card, CardContent } from "./ui/card";

export default function ProductLoader() {
  return (
    <div className="h-screen flex flex-col justify-start gap-2 max-w-7xl mx-auto">
      <Card className="w-full h-90 rounded-2xl py-12 group transition-all animate-pulse">
        <CardContent>
          <h1 className="max-w-2xl mt-8 bg-muted rounded h-14 py-2 ml-14"></h1>
          <p className="max-w-2xl mt-8 bg-muted rounded h-8 py-2 ml-14"></p>
          <button className="px-18 py-4 mt-8 bg-muted rounded h-14 ml-14"></button>
        </CardContent>
      </Card>
      <ProductCardSkeleton />
    </div>
  )
}
