import PropTypes from "prop-types";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux"; 
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";

import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import UiLoading from "@ui/UiLoading";
import styles from "./PersonPage.module.css";
import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms")
);
const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setPersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false)
  const storeDate = useSelector(state => state.favoriteReducer)
  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false)
      setPersonId(id)
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.skin_color },
          { title: "Skin Color", data: res.hair_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setErrorApi(false);
        res.films.length && setPersonFilms(res.films);
        setPersonPhoto(getPeopleImage(id));
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack></PersonLinkBack>
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            setPersonFavorite={setPersonFavorite}
            personFavorite={personFavorite}
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
          ></PersonPhoto>
          {personInfo && <PersonInfo personInfo={personInfo}></PersonInfo>}

          {personFilms && (
            <Suspense fallback={<UiLoading></UiLoading>}>
              <PersonFilms personFilms={personFilms}></PersonFilms>
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};
PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match: PropTypes.object,
};

export default withErrorApi(PersonPage);
