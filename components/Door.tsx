import DoorModel from "../model/Door";
import styles from "../styles/Door.module.css";
import Gift from "./Gift";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = (props: DoorProps) => {
  const door = props.value;
  const selected = door.selected && !door.opened ? styles.selected : "";

  const changeSelection = (e): void => props.onChange(door.chancgeSelection());
  const open = (e): void => {
    e.stopPropagation();
    props.onChange(door.openDoor());
  };

  function renderDor(): JSX.Element {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.handle} onClick={open}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${selected}`}>
        {door.closed ? renderDor() : door.hasGift ? <Gift /> : false}
      </div>
      <div className={styles.ground}></div>
    </div>
  );
};

export default Door;
