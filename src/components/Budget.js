import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const alertType = budget > 20000 ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>
                <tr>
                    <td>Budget: {currency}{<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>}</td>
                </tr>
                
            </span>
        </div>
    );
};
export default Budget;
