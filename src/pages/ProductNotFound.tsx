import type React from 'react';

type ErrorProps = {
    icon: React.ReactNode;
    heading: string;
    paragraph: string;
}

export default function ProductNotFound({ icon , heading, paragraph }: ErrorProps) {
    return (
       <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">

            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                {icon}
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
                {heading}
                {/* No products found */}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
                {paragraph}
                {/* Try adjusting your filters or search something else */}
            </p>
        </div>
    )
}
