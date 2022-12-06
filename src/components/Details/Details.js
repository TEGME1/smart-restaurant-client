import React, { useState } from 'react';
import '../Details/Details.css';
import { Button, } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  // useDisclosure,
  AlertDialogCloseButton
} from '@chakra-ui/react';
// import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { NavLink as Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Added
import Dbill from '../Details_bill/Dbill.js';//Added


export default function Details({ name, phone, setName, setPhone }) {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");

  const handleopen = () => {
    if (isOpen)
      setopen(false);
    else
      setopen(true);
  }
  const [isOpen, setopen] = useState(false)
  // console.log({this.state.first})

  return (
    <div className="Details-outer">
      <div className='Details-inner'>
        <Link to="/cart">
          <div className="Details-back-to-cart">
            <ArrowBackIcon w={10} h={10} />
            <label className='Cart-back-option-content'>View Cart</label>
          </div>
        </Link>
        <div className='Details-input-outer'>
          <div className='Details-input-left'>
            <div className='Details-input-text-outer'>
              <label className='Details-input-text'>
                Name :
                {/* {props.hsh} */}
                {/* {username} */}
              </label>
            </div>

            <div className='Details-input-text-outer'>
              <label className='Details-input-text'>
                Mobile :
              </label>
            </div>
          </div>

          <div className='Details-input-right'>
            <div className='Details-input-text-outer'>
              <Input
                border="2px solid black"
                placeholder='Input Name Here'
                value={name}
                onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='Details-input-text-outer'>
              <Input type='tel'
                border="2px solid black"
                placeholder='Input Phone No Here'
                value={phone}
                onChange={(e) => { setPhone(e.target.value) }} />
            </div>

          </div>
        </div>
        <div className='Card-items-button'>
          <Button rightIcon={<ArrowForwardIcon />}
            colorScheme='blackAlpha'
            padding='2%'
            borderRadius='1rem'
            borderTopRightRadius='0'
            borderTopLeftRadius='0'
            width='100%'
            height='3rem'
            fontSize='1.75rem'
            onClick={handleopen}>
            Place Order
          </Button>
        </div>

      </div>

      <AlertDialog
        motionPreset='slideInBottom'
        onClose={handleopen}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Confirm Order?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <div className='Details-dialog-box'>
              <label>Are you sure you want to confirm the order</label>
              <hr className='Details-hr' />
              <Dbill />
              <hr className='Details-hr' />
            </div>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={handleopen}>
              No
            </Button>
            <Link to="/order-confirm">
              <Button colorScheme='red' ml={3}>
                Yes
              </Button>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
