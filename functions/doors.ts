import DoorModel from "../model/Door";

export function createdDoors(qtd: number, doorHasGift: number): DoorModel[] {
    return Array.from({ length: qtd }, (_: any, i: number) => {
        const number = i + 1
        const hasGitf = number === doorHasGift;
        return new DoorModel(number, hasGitf);
    })
}


export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map((currentDoor: DoorModel) => {
        const asModified = currentDoor.number === modifiedDoor.number
        if (asModified) {
            return modifiedDoor;
        } else {
            return modifiedDoor.opened ? currentDoor : currentDoor.unmarked()
        }
    })
}