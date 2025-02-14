// Skeleton Loading Components
const shimmer = "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const CardSkeleton = () => (
    <div className={`${shimmer} border rounded-lg shadow-lg bg-gray-100 p-6 min-h-[260px] flex flex-col justify-between`}>

        {/* Placeholder for Title */}
        <div>
            <div className="h-7 w-3/4 bg-gray-300 rounded-md mb-3"></div>
            <div className="h-5 w-full bg-gray-200 rounded-md mb-3"></div>
            <div className="h-5 w-5/6 bg-gray-200 rounded-md mb-4"></div>
        </div>

        {/* Placeholder for Description */}
        <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded-md"></div>
            <div className="h-4 w-11/12 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
        </div>

        {/* User Info */}
        <div className="flex items-center mt-6">
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
                <div className="h-5 w-24 bg-gray-300 rounded-md mb-1"></div>
                <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
            </div>
        </div>

    </div>
);


const CardsSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </div>
);

export { CardsSkeleton }