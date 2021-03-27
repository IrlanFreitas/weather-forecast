import React, { useState, useEffect } from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    const [latLong, setLatLong] = useState({})
    const [place, setPlace] = useState('')

    useEffect(() => {
        console.log(latLong)
    }, [latLong])

    const handleSelect = value => {
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => setLatLong(latLng))
            .catch(error => console.error('Error', error));
    };

    const onError = (status, clearSuggestions) => {
        console.log('Google Maps API returned error with status: ', status)
        clearSuggestions()
    }

    return (
        <>
            <PlacesAutocomplete
                value={place}
                onChange={value => setPlace(value)}
                onSelect={handleSelect}
                nError={onError}
                searchOptions={{
                    types: ['(regions)'],

                }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <Autocomplete
                        id="country-select-demo"
                        style={{ width: 300 }}
                        options={suggestions}
                        classes={{
                            option: classes.option,
                        }}
                        loading={loading}
                        loadingText="Pesquisando..."
                        noOptionsText="Não encontrado"
                        autoHighlight
                        getOptionLabel={(option) => option.description || ""}
                        renderOption={(option) => option?.description}
                        // value={address}
                        onChange={(event, value) => {
                            handleSelect(value.description)
                            // setAddress(value.description);
                        }}
                        inputValue={address}
                        onInputChange={(event, newInputValue) => {
                            setAddress(newInputValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Escolha uma cidade"
                                variant="outlined"
                                {...getInputProps()}
                            />
                        )}
                    />

                )}
            </PlacesAutocomplete>
        </>
    )
}
