import React, {useEffect} from 'react';
import {useDispatch, useSelectore} from 'react-redux';
import {setSomethingEffect} from '../redux/effects/effects'

function HomePage(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSomethingEffect())
    }, [])
    return (
        <div>
            HomePage
        </div>
    );
}

export default HomePage;