import React from 'react';
import { useParams } from 'react-router-dom'
import Slideshow from '../landing_components/Slideshow';
import Header from '../landing_components/Header';
import Body from '../landing_components/Body';
import Footer from '../landing_components/Footer';
import "./Landing.css";
import { useEffect } from 'react';


export default function Landing({setTable, setDinein}) {

    const {table} = useParams()
    useEffect(() =>{
        setTable(table)
    }, [])

    return (
        <div className='page-conatainer'>
            <div>
                <Header setDinein={setDinein}/>
                <Slideshow/>
                <Body/>
            </div>
            <Footer/>
        </div>
    );
}
