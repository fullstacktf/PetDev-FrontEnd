import React from 'react'
import { InputSearchHomePage } from '../components/forms/InputSearchHomePage';
import MainMap from '../components/maps/MainMap';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <InputSearchHomePage />
                <MainMap />

            </div>
        )

    }
}