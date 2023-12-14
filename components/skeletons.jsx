
export function CardSkeleton() {
    return (
        <div className="skeleton w-32 h-32"></div>
    )
}

export function CardsSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
        </>
    )

}