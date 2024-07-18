import {
  Pagination as Pagin,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router-dom";

type PaginationPreps = {
  total: number;
};

const Pagination = ({ total }: PaginationPreps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage: number =
    searchParams.get("page") !== null ? Number(searchParams.get("page")) : 1;

  function handlePrev() {
    if (currentPage === 1) return;
    searchParams.set("page", `${currentPage - 1}`);
    setSearchParams(searchParams);
  }

  function handleNext() {
    if (currentPage == total) return;
    searchParams.set("page", `${currentPage + 1}`);
    setSearchParams(searchParams);
  }

  function handleToPage(page: number) {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }

  function getPaginationButtons(totalPages: number, currentPage: number) {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
    const endPage = Math.min(totalPages, startPage + 4);
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }
    return buttons;
  }
  console.log(total);

  const buttons = getPaginationButtons(total, currentPage);

  if (total === 0) return null;

  return (
    <Pagin>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrev}
            className={`cursor-pointer select-none ${
              currentPage === 1 && "cursor-not-allowed"
            }`}
          />
        </PaginationItem>
        {buttons.map((i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handleToPage(i)}
              isActive={i === currentPage}
              className={`cursor-pointer select-none ${
                i === currentPage && "cursor-not-allowed"
              }`}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            className={`cursor-pointer select-none ${
              currentPage === total && "cursor-not-allowed"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagin>
  );
};

export default Pagination;
