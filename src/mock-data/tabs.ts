export const tabs = [
  {
    id: 1,
    title: "Резюме та відгуки",
    content: false,
    modal: false,
    modalContent: {},
  },
  {
    id: 2,
    title: "Події",
    content: true,
    modal: true,
    modalContent: {
      defaultOption: "Всі",
      modalSubTitle: "Фільтри подій",
      modalOptions: [
        { title: "Всі", value: "all", id: 1 },
        { title: "Коментарі", value: "comments", id: 2 },
      ],
    },
  },
  {
    id: 3,
    title: "Ще проходить · 2",
    content: false,
    modal: false,
    modalContent: {},
  },
];
