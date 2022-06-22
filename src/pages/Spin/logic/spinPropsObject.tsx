import React, {useEffect, useState} from "react";
import SpinBoxView from '../view/spinView'
import VAC from "react-vac";


interface SpinBoxVAProps {
    value?:any,
    multi?:any,
    SpinBoxProps?:any,
    multipleProps?:any,
}
//g
const SpinBox = () =>{
    const [ value, setValue ] = useState(0);
    const [ multi, setMulti ] = useState(0);
    const SpinBoxProps = {
        value,
        disableIncrease : value > 5,
        onDecrease: () => {
            setValue(Math.max(value - 1,0))
            console.log('1 뺀다 ~~')
        },
        onIncrease: () => {
            setValue(value + 1)
            console.log('1 더한다 ~~')
        },
    }

    const multipleProps = {
        multi,
        onMulti: () => {
            setMulti(multi + 3)
            console.log(' 3 곱하기 ')
        },
        onDivide: () => {
            setMulti(Math.max(multi - 3,0))
            console.log(' 3 나누기 ')
        },
    }
    const SpinBoxVAProps : SpinBoxVAProps = {
        value:value,
        multi:multi,
        SpinBoxProps:SpinBoxProps,
        multipleProps:multipleProps,

    }
    useEffect(()=>{
        console.log(value)
    },[value])
    useEffect(()=>{
        console.log(multi)
    },[multi])


    // 이부분에서 JSX를 VAC로 교체
    return <SpinBoxView {...SpinBoxVAProps} />

    // return <VAC name="CIC-DEVELOP" data={SpinBoxProps} />
}
export default SpinBox
