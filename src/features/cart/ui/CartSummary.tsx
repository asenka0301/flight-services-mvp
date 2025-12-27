import styles from "./CartSummary.module.css";
import type { FC } from "react";
import type { Service } from "../../../ entities/services/model/ types";
import { Button } from "../../../shared/Button/Button";

type CartSummaryProps = {
  selectedServices: Service[];
  totalSum: number;
  handleClear: () => void;
};

const CartSummary: FC<CartSummaryProps> = ({ selectedServices, totalSum, handleClear }) => {
  const isEmpty = selectedServices.length === 0;
  return (
    <div className={styles.container}>
      <h3>Итого</h3>
      {!isEmpty ? (
        <div>
          <p>Выбрано:</p>
          <ul className={styles.lists}>
            {selectedServices.map(({ title, id, price }) => (
              <li key={id}>{`${title} - ₽${price}`}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.textWrapper}>
          <p>Пока ничего не выбрано</p>
          <p>Добавьте услуги из списка выше</p>
        </div>
      )}
      <div className={styles.line} />
      <div>
        Сумма:
        <span className={styles.sum}>{`${" "} ₽${!isEmpty ? totalSum.toFixed(2) : "0.00"}`}</span>
      </div>
      <div className={styles.btnWrapper}>
        <Button type="button" variant="primary" disabled={isEmpty}>
          Оформить
        </Button>
        {!isEmpty && (
          <Button type="button" variant="secondary" onClick={handleClear}>
            Очистить
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
