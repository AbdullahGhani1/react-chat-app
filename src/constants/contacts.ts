import type { Contact } from "../types";

export const contactsData: { [key: string]: Contact[] } = {
  A: [
    { id: 1, name: "Alina", phone: "0923456784521", avatar: "A" },
    { id: 2, name: "Amna", phone: "0923456784521", avatar: "A" },
  ],
  B: [
    { id: 3, name: "Brown", phone: "0923456784521", avatar: "B" },
    { id: 4, name: "Ben", phone: "0923456784521", avatar: "B" },
  ],
  C: [
    { id: 5, name: "Cutting", phone: "0923456784521", avatar: "C" },
    { id: 6, name: "Caral", phone: "0923456784521", avatar: "C" },
  ],
};
