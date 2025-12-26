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
      <h3>Итого:</h3>
      {!isEmpty ? (
        <div>
          <p>Выбрано:</p>
          <ul>
            {selectedServices.map(({ title, id, price }) => (
              <li key={id}>{`${title} - ₽${price}`}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Пока ничего не выбрано</p>
          <p>Добавьте услуги из списка выше</p>
        </div>
      )}
      <div>Сумма:{`${!isEmpty ? totalSum : 0}`}</div>
      <div>
        <Button type="button" variant="primary">
          Оформить
        </Button>
        <Button type="button" variant="secondary" onClick={handleClear}>
          Очистить
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
