import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';



const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCointries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCointries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCointries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;