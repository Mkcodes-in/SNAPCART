import { Card, CardContent } from "../ui/card";

export function ProductCardSke() {
  return (
    <Card className="overflow-hidden animate-pulse">
      {/* Image */}
      <div className="aspect-square bg-muted" />

      <CardContent className="p-5 space-y-4">
        {/* Title */}
        <div className="h-5 w-3/4 bg-muted rounded" />

        {/* Description */}
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />

        {/* Price */}
        <div className="h-6 w-1/3 bg-muted rounded" />

        {/* Button */}
        <div className="h-10 w-full bg-muted rounded" />
      </CardContent>
    </Card>
  );
}