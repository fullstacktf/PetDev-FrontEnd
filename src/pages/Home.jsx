import React from 'react'
import { InputSearchHomePage } from '../components/forms/InputSearchHomePage';
import LeafletMap from '../components/maps/LeafletMap';

export default class Home extends React.Component {

    render() {
        return (
            <div>
            <InputSearchHomePage />
            <LeafletMap/>
            </div>

        )
    }
}