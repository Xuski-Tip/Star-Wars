import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UiButton from "@ui/UiButton";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getRerource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => {
    getRerource(nextPage);
  };
  const handleChangePrev = () => {
    getRerource(prevPage);
  };
  return (
    <>
      <div className={styles.container}>
        <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
            <UiButton
              text="Previous"
              onClick={handleChangePrev}
              disabled={!prevPage}
            >

            </UiButton>
        </Link>
        <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
            <UiButton
            text="Next"
            onClick={handleChangeNext}
            disabled={!nextPage}
            >
          </UiButton>
        </Link>
      </div>
    </>
  );
};

PeopleNavigation.propTypes = {
  getRerource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
