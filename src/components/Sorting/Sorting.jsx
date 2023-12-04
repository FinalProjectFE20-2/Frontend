import { useState } from 'react';
import Dropdown from 'react-dropdown';
import styles from './Sorting.module.scss';
import 'react-dropdown/style.css';

export default function Sorting({ onSortPrices }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSortChange = selectedOption => {
    setSelectedOption(selectedOption);
    onSortPrices(selectedOption.value);
  };

  const options = [
    { value: 'ascending', label: 'За зростанням ціни' },
    { value: 'descending', label: 'За зменшенням ціни' },
  ];

  return (
    <div className={styles.sorting}>
      <span className={styles.subtitle}>Сортувати: </span>
      <Dropdown
        controlClassName={styles.myControlClassName}
        arrowClosed={<span className={styles.arrowClosed} />}
        arrowOpen={<span className={styles.arrowOpen} />}
        menuClassName={styles.myMenuClassName}
        options={options}
        onChange={handleSortChange}
        value={selectedOption}
        placeholder="Оберіть сортування"
      />
    </div>
  );
}
