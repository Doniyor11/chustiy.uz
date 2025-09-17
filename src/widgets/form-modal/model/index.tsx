import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IFormModalStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
  openModal: false,
}

export const useFormModalStore = create<IFormModalStore>()(
  devtools((set) => ({
    ...initialState,
    setOpenModal: (e) => {
      set({ openModal: e })
    },
  })),
)
