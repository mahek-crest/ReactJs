import styles from "./AppList.module.css";
const AppList = ({ items }) => {
  // console.log(props);
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className={`list-group-item ${styles.itemList}`}>
            {item}
            <button className={`btn btn-success ${styles.btnBuy}`}>Buy</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppList;
