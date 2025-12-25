import { Loader2 } from "lucide-react";

export default function ProductLoader() {
  return (
    <div className="h-screen flex justify-center items-center gap-2">
        <Loader2 className="animate-spin transition-all duration-700 ease-in" />
        <h1>Loading<span className="animate-pulse">...</span></h1>
    </div>
  )
}
