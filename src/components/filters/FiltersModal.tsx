import { ModalContentType } from "../../types/modal";

const FiltersModal = ({
  modalSubTitle,
  modalOptions,
  filterHandler,
  currentFilter,
}: ModalContentType) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute bg-[#fff] left-0 top-5 py-4 px-5 w-[270px] rounded shadow-[0_0_20px_0_rgba(0,0,0,0.25)] cursor-auto"
    >
      <span className="size-[15px] text-[#6B7886] font-[600]">
        {modalSubTitle}
      </span>
      <ul>
        {modalOptions?.map((option) => (
          <li
            key={option.id}
            className="text-[#2C3F52] size-[17px] font-[400] flex items-center gap-2 w-fit"
          >
            <input
              id={option.value}
              type="radio"
              name="filter"
              value={option.value}
              checked={currentFilter === option.title}
              className="w-4 h-4 cursor-pointer "
              onChange={() => filterHandler?.(option.title)}
            />
            <label className="cursor-pointer" htmlFor={option.value}>
              {option.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersModal;
