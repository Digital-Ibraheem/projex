declare module 'react-select-country-list' {
    import { OptionsType } from 'react-select';
    
    export default function countryList(): {
        getData: () => OptionsType;
    };
} 