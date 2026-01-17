export default function Loading() {
  return (
    <div className="max-w-360 mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
          >
            {/* Image Skeleton */}
            <div className="h-54 w-full rounded-t-xl bg-gray-200 dark:bg-gray-800" />

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Category */}
              <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded" />

              {/* Name */}
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />

              {/* Price */}
              <div className="h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded" />

              {/* Buttons */}
              <div className="flex gap-2 pt-2">
                <div className="h-10 flex-1 bg-gray-200 dark:bg-gray-800 rounded-lg" />
                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
