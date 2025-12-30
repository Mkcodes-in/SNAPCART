import type { ReviewProps } from "@/types/product"
import { Star } from "lucide-react"

export default function CustomerReview({ review }: ReviewProps) {

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-bold mb-6 px-2">
                Customer Reviews ({review.length})
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {review.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        {/* Rating */}
                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(item.rating) ? "fill-yellow-500 text-yellow-500" : "fill-gray-50 text-gray-200"}`}
                                />
                            ))}
                        </div>

                        {/* Comment */}
                        <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                            "{item.comment}"
                        </p>

                        {/* Divider */}
                        <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                        {/* User Info */}
                        <div className="flex items-center justify-between">
                            <div className="h-10 w-10 bg-gray-950 rounded-full flex items-center justify-center text-white font-semibold">
                                {item.reviewerName.charAt(0)}
                            </div>
                            <p className="text-sm font-semibold text-gray-900">
                                {item.reviewerName}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
