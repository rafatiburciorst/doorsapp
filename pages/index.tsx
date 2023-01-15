import Link from "next/link";
import Card from "../components/Card";
import styles from "../styles/Form.module.css";
import NumberInput from "../components/NumberInput";
import { useState } from "react";
export default function Form() {
  const [qtdDoors, SetQtdDoors] = useState(3);
  const [hasGift, setHasGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Mont Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Qtd portas?"
            value={qtdDoors}
            onChange={(newQtdDoors: number) => SetQtdDoors(newQtdDoors)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com presente?"
            value={hasGift}
            onChange={(newDoorHasGift: number) => setHasGift(newDoorHasGift)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${qtdDoors}/${hasGift}`} className={styles.a}>
            <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
