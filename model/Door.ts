export default class DoorModel {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #opened: boolean;

  constructor(number: number, hasGift: boolean = false, selected: boolean = false, opened: boolean = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#opened = opened;
  }

  get number(): number {
    return this.#number;
  }

  get hasGift(): boolean {
    return this.#hasGift;
  }

  get selected(): boolean {
    return this.#selected;
  }

  get opened(): boolean {
    return this.#opened;
  }

  get closed(): boolean {
    return !this.#opened;
  }

  unmarked(): DoorModel {
    const selection: boolean = false;
    return new DoorModel(this.number, this.#hasGift, selection, this.opened);
  }

  chancgeSelection(): DoorModel {
    const selection: boolean = !this.selected;
    return new DoorModel(this.number, this.#hasGift, selection, this.opened);
  }

  openDoor(): DoorModel {
    const open: boolean = true;
    return new DoorModel(this.number, this.#hasGift, this.selected, open);
  }
}
