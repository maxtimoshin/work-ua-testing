import { ModalContentType } from "./modal";

export type TabNavItemProps = {
  id: number;
  title: string;
  currentTab: number;
  tabHandler: (value: number) => void;
  modal?: boolean;
  modalContent?: ModalContentType;
};
