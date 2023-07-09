type ModalOptions = {
  title: string;
  id: number;
  value: string;
};

export type ModalContentType = {
  defaultOption?: string;
  modalSubTitle?: string;
  modalOptions?: ModalOptions[];
  currentFilter?: string;
  filterHandler?: (value: string) => void;
  currentTab?: number;
};

