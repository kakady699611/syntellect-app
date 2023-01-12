import './AutocompleteControl.css';

import { Autocomplete, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { observer } from "mobx-react";
import React from 'react';
import store from '../../store/AutoCompleteStore';

export type CountryType = {
    name: string;
    fullName: string;
    flag: string;
}

@observer
export default class AutocompleteControl extends React.Component {

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Контрол со странами</h1>
                <Autocomplete
                    className='auto-control'
                    id="auto-complete-control-1"
                    sx={{ width: 500 }}
                    options={store.autoCompleteCountries1.slice(0, 3) as CountryType[]}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={option.flag}
                            alt=""
                        />
                        {option.name} {option.fullName}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        value={store.setAutoCompleteTextField1}
                        onChange={(v: any) => store.setAutoCompleteTextField1(v.target.value)}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps,
                        }}
                        />
                    )}
                />
                <Autocomplete
                    className='auto-control'
                    id="auto-complete-control-2"
                    sx={{ width: 500 }}
                    options={store.autoCompleteCountries2.slice(0, 5) as CountryType[]}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={option.flag}
                            alt=""
                        />
                        {option.name} {option.fullName}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        value={store.setAutoCompleteTextField2}
                        onChange={(v: any) => store.setAutoCompleteTextField2(v.target.value)}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps,
                        }}
                        />
                    )}
                />
            </>
        );
    }

}
