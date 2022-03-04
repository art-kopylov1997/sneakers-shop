import styles from "../UI/SearchInput/SearchInput.module.scss";

export const RemoveIcon = () => (
  <svg
    className={styles.buttonRemove}
    fill="none"
    height="26"
    viewBox="0 0 26 26"
    width="26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
      stroke="#C7BBBB"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M9 9.5L16.7 17.3"
      stroke="#C7BBBB"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M16.7 9.5L9 17.3"
      stroke="#C7BBBB"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);
