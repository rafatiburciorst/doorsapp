import { useEffect, useState } from "react";

import Door from "../../../components/Door";
import { createdDoors, updateDoors } from "../../../functions/doors";
import DoorModel from "../../../model/Door";
import styles from "../../../styles/Game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const Game = (props: Props) => {
  const router = useRouter();
  //const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  /*useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    const qtdValidDoors = doors > 3 && doors < 100;
    const hasValidGift = hasGift >= 1 && hasGift <= doors;
    setValid(qtdValidDoors && hasValidGift);
  }, [doors]);*/

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createdDoors(doors, hasGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door: DoorModel) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor: DoorModel) =>
            setDoors(updateDoors(doors, newDoor))
          }
        />
      );
    });
  }
  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.btn}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
