type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, pageCount, onPageChange }: PaginationProps) => {
  return (
    <div className="join">
      {pageCount > 1 && (
        <div className="flex justify-center gap-5">
          <button
            className="btn btn-primary"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onPageChange(page + 1)}
            disabled={page === pageCount - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
