import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
    { key: 'hr', value: 'hr', flag: 'hr', text: 'Croatia' },
    { key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic' },
    { key: 'fi', value: 'fi', flag: 'fi', text: 'Finland' },
    { key:  'fr', value: 'fr', flag: 'fr', text: 'France' },
    { key: 'de', value: 'de', flag: 'de', text: 'Germany' },
    { key: 'is', value: 'is', flag: 'is', text: 'Iceland' },
    { key: 'it', value: 'it', flag: 'it', text: 'Italy' },
    { key: 'lu', value: 'lu', flag: 'lu', text: 'Luxemburgo' },
    { key: 'mt', value: 'mt', flag: 'mt', text: 'Malta' },
    { key: 'mc', value: 'mc', flag: 'mc', text: 'Monaco' },
    { key: 'nl', value: 'nl', flag: 'nl', text: 'Netherlands' },
    { key: 'pl', value: 'pl', flag: 'pl', text: 'Poland' },
    { key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal' },
    { key: 'ro', value: 'ro', flag: 'ro', text: 'Romania' },
    { key: 'gb sct', value: 'sgb sct', flag: 'gb sct', text: 'Scotland' },
    { key: 'si', value: 'si', flag: 'si', text: 'Slovenia' },
    { key: 'es', value: 'es', flag: 'es', text: 'Spain' }
    

]
const DropdownCountry = () => (
        <Dropdown
          style= {{marginBottom: '15px'}}
          className="flags"
          placeholder='Seleccione su País' fluid search selection options={countryOptions}
        />
      )
      
      export default DropdownCountry

function newFunction() {
    return 'dz';
}
