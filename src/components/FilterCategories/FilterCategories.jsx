import styles from './FilterCategories.module.scss';

export default function FilterCategories({
  categories,
  filteredCategories,
  setFilteredCategories,
}) {
  const restoreFilter = () => {
    setFilteredCategories([]);
  };

  const filterProducts = category => {
    setFilteredCategories(
      filteredCategories.includes(category)
        ? filteredCategories.filter(item => item !== category)
        : [...filteredCategories, category],
    );
  };

  return (
    <>
      <div
        className={`${!filteredCategories.length ? styles.highlighted : ''}`}
        onClick={() => restoreFilter()}>
        <div className={styles.allDishes}>Всі страви</div>
      </div>
      {categories.map(item => (
        <div className={styles.inputBlock} key={item}>
          <input
            id={item}
            type="checkbox"
            value={item}
            checked={filteredCategories.includes(item)}
            onChange={() => filterProducts(item)}
            className={styles.input}
          />
          <label
            htmlFor={item}
            className={`${styles.label} ${
              filteredCategories.includes(item) ? styles.isActive : ''
            }`}>
            {item}
          </label>
        </div>
      ))}
    </>
  );
}
