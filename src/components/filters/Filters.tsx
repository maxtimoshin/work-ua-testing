import FiltersArrow from "../../assets/filters-arrow.svg";
import FiltersModal from "./FiltersModal";
import { ModalContentType } from "../../types/modal";
import { useEffect, useRef, useState } from "react";

const Filters = ({
  defaultOption,
  modalSubTitle,
  modalOptions,
  currentTab,
}: ModalContentType) => {
  const [currentFilter, setCurrentFilter] = useState<string>(defaultOption!);
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);

  const filtersRef = useRef<HTMLDivElement>(null);

  const filtersVisibleHandler = () => {
    setFiltersVisible(!filtersVisible);
  };

  const filterHandler = (filter: string) => {
    setCurrentFilter(filter);
    setFiltersVisible(false);
  };

  useEffect(() => {
    function closeFilters(e: MouseEvent) {
      if (e.target !== filtersRef.current) {
        setFiltersVisible(false);
      }
    }
    document.body.addEventListener("click", closeFilters);

    return () => document.body.removeEventListener("click", closeFilters);
  }, []);

  return (
    <div
      className={`ml-1 text-[#00A1F1] flex hover:underline relative cursor-pointer ${currentTab !== 2 ? 'pointer-events-none': ''}`}
      onClick={() => filtersVisibleHandler()}
      ref={filtersRef}
    >
      {currentFilter}
      <img
        className={`ml-1 ${filtersVisible ? "rotate-180" : ""}`}
        src={FiltersArrow}
        width={16}
        height={16}
        alt=""
      />
      {filtersVisible ? (
        <FiltersModal
          modalSubTitle={modalSubTitle}
          modalOptions={modalOptions}
          filterHandler={filterHandler}
          currentFilter={currentFilter}
        />
      ) : null}
    </div>
  );
};

export default Filters;
