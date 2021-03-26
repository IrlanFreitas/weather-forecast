import React, { useState } from 'react'
// import { countries } from "../utils/countries";
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { cities } from '../data/city.js'
// import CityContext from '../context/city.jsx'

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});
export default function FilterCities() {
    const classes = useStyles()
    const [address, setAddress] = useState('')

    const handleSelect = value => {
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    return (
        <>
            <PlacesAutocomplete
                value={address}
                onChange={value => setAddress(value)}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <>
                        {/* <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div> */}
                        {/* {console.log(...getInputProps())}
                        {console.log(...getSuggestionItemProps())} */}

                        <Autocomplete
                            id="country-select-demo"
                            style={{ width: 300 }}
                            // value={address}
                            options={suggestions}
                            clearOnEscape
                            classes={{
                                option: classes.option,
                            }}
                            loading={loading}
                            loadingText="Pesquisando..."
                            noOptionsText="Não encontrado"
                            autoHighlight
                            getOptionLabel={(option) => option.description}
                            renderOption={(option) => option.description}
                            // onChange={(value) => { console.log(value) }}
                            openOnFocus
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Escolha uma cidade"
                                    variant="outlined"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                        ...getInputProps()
                                    }}
                                />
                            )}
                        />
                    </>
                )}
            </PlacesAutocomplete>

            {address}
        </>
    )
}
