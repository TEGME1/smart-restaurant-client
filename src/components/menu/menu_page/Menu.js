import HeaderDiv from '../menu_components/HeaderDiv'
import AccordionMenu from '../menu_components/AccordionMenu';
import Footer from '../../landing/landing_components/Footer';
import "./Menu.css";
import { Button } from '@chakra-ui/react';
import { NavLink as Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchType, typeSelector } from '../../../features/types/typeSlice';
import { useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
export default function Menu() {

    const typeStatus = useSelector(state => state.types.status)
    const dispatch = useDispatch()


    useEffect(() => {
        typeStatus !== 'succeeded' && dispatch(fetchType())
    }, [])


    const types = useSelector(typeSelector)
    return (
        <div className='page-container'>
            <div>
                <HeaderDiv />
                {
                    typeStatus === 'loading' ? <Spinner /> :
                        (
                            <>
                                <AccordionMenu types={types} />
                                <Link to="/cart">
                                    <Button flex="1" colorScheme='blackAlpha' width="80%" height="3.5rem">
                                        <div className='Menu-view-outer'>
                                            <div className='Menu-view-text-outer'>
                                                <label className='Menu-view-text'>View Cart</label>
                                            </div>
                                        </div>
                                    </Button>
                                </Link>
                            </>
                        )
                }
            </div>
            <Footer />
        </div>
    );
}