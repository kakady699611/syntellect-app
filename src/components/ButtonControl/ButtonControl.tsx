import './ButtonControl.css'

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { observer } from 'mobx-react';
import React from 'react';
import store from '../../store/ButtonControlStore';

@observer
export default class ButtonControl extends React.Component {
    render() {
        const firstBlock = () => {
            return (
                <div className='button-control_first-block'>
                    <TextField
                        value={store.textField1}
                        onChange={(v: any) => store.setTextField1(v.target.value)}
                    />
                    <Button
                        className='button-control__clear'
                        variant='contained'
                        color='error'
                        onClick={() => store.clearTextField1()}
                    >
                        {'Clear field'}
                    </Button>
                    <Button variant='contained' color='success' onClick={() => store.helloWorld()}>
                        {'Hello world!'}
                    </Button>
                </div>
            );
        }

        const secondBlock = () => {
            return (
                <div className='button-control_second-block'>
                    <Button variant='contained' color='error' onClick={() => store.showNumber()}>
                        {'Show a number'}
                    </Button>
                    <TextField
                        value={store.textField2}
                        onChange={(v: any) => store.setTextField2(v.target.value)}
                    />
                    <Button variant='contained' color='success' onClick={() => store.showString()}>
                        {'Show a string'}
                    </Button>
                </div>
            );
        }

        return(
            <>
                <h1 style={{ textAlign: 'center' }}>Контрол с кнопками</h1>
                <div className='button-control'>
                    {firstBlock()}
                    {secondBlock()}
                </div>
            </>
        );
    }
}
