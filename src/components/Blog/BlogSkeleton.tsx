export default function BlogSkeleton() {
    return (
      <div className="space-y-12">
        <div className="h-10 bg-white bg-opacity-5 rounded w-3/4 animate-pulse" />
        
        <div className="space-y-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white bg-opacity-5 rounded-lg overflow-hidden">
              <div className="h-48 sm:h-64 bg-white bg-opacity-10 animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-white bg-opacity-10 rounded w-1/4 animate-pulse" />
                  <div className="h-4 bg-white bg-opacity-10 rounded w-1/4 animate-pulse" />
                </div>
                <div className="h-6 bg-white bg-opacity-10 rounded w-3/4 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-white bg-opacity-10 rounded animate-pulse" />
                  <div className="h-4 bg-white bg-opacity-10 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-center items-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-10 h-10 bg-white bg-opacity-10 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    )
  }