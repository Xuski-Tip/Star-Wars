import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from "classnames"
import Loader from "./img/Loader.svg"
import LoaderWhite from "./img/Loader-white.svg"
import LoaderBlue from "./img/Loader-blue.svg"
import styles from './UiLoading.module.css';

const UiLoading = ({theme = 'white', isShadow=true, classes}) => {
    const [loaderIcon, setLoaderIcon] = useState(null)
    useEffect(()=> {
        switch (theme) {
            case 'black': setLoaderIcon(Loader); break;
            case 'white': setLoaderIcon(LoaderWhite); break;
            case 'blue': setLoaderIcon(LoaderBlue); break;

            default: setLoaderIcon(LoaderWhite)
        }
    }, [])
    return (
        <>
        <img className={cn(styles.loader, isShadow && styles.shadow, classes)} 
        src={loaderIcon} 
        alt="Loader" />
        </>
    )
}



UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
}

export default UiLoading;