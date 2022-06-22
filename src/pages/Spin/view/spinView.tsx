import React from "react";

interface SpinBoxVAProps {
    value?:any,
    multi?:any,
    SpinBoxProps?:any,
    multipleProps?:any,

}


const SpinBoxView:React.FC<any> = ({value, multi, SpinBoxProps, multipleProps} : SpinBoxVAProps): JSX.Element => (
    <>
        <div style={{margin:'200px' ,marginLeft:'300px'}}>
            <h2> PLUS && MINUS</h2>
            <button onClick={SpinBoxProps.onDecrease} style={{width:'40px',height:'40px', marginRight:'5px'}}> -</button>
            <span style={{fontSize:'30px'}}>{value}</span>
            {/*<button onClick={SpinBoxProps.onIncrease} style={{width:'40px',height:'40px', marginLeft:'5px'}}> +</button>*/}
            <button disabled={SpinBoxProps.disableIncrease} onClick={SpinBoxProps.onIncrease} style={{width:'40px',height:'40px', marginLeft:'5px'}}> +</button>
        </div>

        <div style={{margin:'300px'}}>
            <h2> MULTIPLE && DIVID</h2>
            <button onClick={multipleProps.onDivide} style={{width:'40px',height:'40px', marginRight:'5px'}}> / </button>
            <span style={{fontSize:'30px'}}>{multi}</span>
            <button onClick={multipleProps.onMulti} style={{width:'40px',height:'40px', marginLeft:'5px'}}> * </button>
        </div>
    </>
)

export default  SpinBoxView;
