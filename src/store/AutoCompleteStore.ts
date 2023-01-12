import { action, makeObservable, observable, runInAction } from 'mobx';
import { getCountryByName } from '../api/apiService';
import { CountryType } from '../components/AutocompleteControl/AutocompleteControl';
import { configure } from "mobx"

configure({
    enforceActions: "never",
});

class AutocompleteStore {

    constructor() {
        makeObservable(this, {
            setCountries1: action,
            setCountries2: action,
            autoCompleteCountries1: observable,
            autoCompleteCountries2: observable,

            setAutoCompleteTextField1: action,
            setAutoCompleteTextField2: action,
            autoCompleteTextField1: observable,
            autoCompleteTextField2: observable
        });
    }

    autoCompleteCountries1 = [] as CountryType[];
    autoCompleteCountries2 = [] as CountryType[];

    autoCompleteTextField1 = '' as string;
    autoCompleteTextField2 = '' as string;

    setCountries1(value: string) {
        getCountryByName(value).then(res => this.autoCompleteCountries1 = res);
    }

    setCountries2(value: string) {
        getCountryByName(value).then(res => this.autoCompleteCountries2 = res);
    }


    setAutoCompleteTextField1(value: string) {
        runInAction(() => {
            this.autoCompleteTextField1 = value;
            this.setCountries1(this.autoCompleteTextField1);
        });
    }

    setAutoCompleteTextField2(value: string) {
        runInAction(() => {
            this.autoCompleteTextField2 = value;
            this.setCountries2(this.autoCompleteTextField2);
        });
    }

}

export default new AutocompleteStore();
