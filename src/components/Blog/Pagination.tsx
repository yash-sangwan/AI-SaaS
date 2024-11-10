import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-4 mt-12">
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`}
          className="px-4 py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
        >
          Previous
        </Link>
      )}
      
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={page === 1 ? '/blog' : `/blog/${page}`}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors
              ${currentPage === page 
                ? 'bg-blue-500 text-white' 
                : 'bg-white bg-opacity-10 hover:bg-opacity-20'
              }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={`/blog/${currentPage + 1}`}
          className="px-4 py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
        >
          Next
        </Link>
      )}
    </div>
  )
}