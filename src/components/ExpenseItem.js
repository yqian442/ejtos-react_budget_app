import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <>
            <style type="text/css">
                {`
                .btn-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    width: 2rem;
                    height: 2rem;
                    font-size: 1rem;
                    border-radius: 30px;
                }
                .btn-container.increase {
                    background-color: #4eac5a; /* Custom increase button color */
                }
                .btn-container.increase:hover {
                    cursor: pointer;
                }
                .btn-container.decrease {
                    background-color: #b12519; /* Custom decrease button color */
                }
                .btn-container.decrease:hover {
                    cursor: pointer;
                }
                `}
            </style>

            <tr>
            <td>{props.name}</td>
            <td>{props.currency}{props.cost}</td>
            <td><button className="btn-container increase" onClick={event=> increaseAllocation(props.name)}>+</button></td>
            <td><button className="btn-container decrease" onClick={event=> decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
            </tr>
        </>
    );
};

export default ExpenseItem;
