export interface IInitialState {
  openModal: boolean
}

export interface IFormModalStore extends IInitialState {
  setOpenModal: (openModal: boolean) => void
}
