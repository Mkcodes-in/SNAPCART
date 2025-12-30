import { Card, CardContent } from "./ui/card";

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden animate-pulse">
      <div className="aspect-square bg-muted" />
      <CardContent className="p-5">
        <div className="h-4 bg-muted rounded mb-2" />
        <div className="h-3 bg-muted rounded mb-4 w-3/4" />
        <div className="h-3 bg-muted rounded mb-2" />
        <div className="h-3 bg-muted rounded mb-4 w-1/2" />
        <div className="h-6 bg-muted rounded w-1/3" />
      </CardContent>
    </Card>
  )
}