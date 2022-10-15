import React from 'react';
import MOCKS from '../mocks/moks'

const Js1 = () => {


    return (
        <div className={'table'}>
            <table>
                <tbody>
                <tr>
                    <td>id</td>
                    <td>event_id</td>
                    <td>event_date</td>
                    <td>ticket_adult_price</td>
                    <td>ticket_adult_quantity</td>
                    <td>ticket_kid_price</td>
                    <td>ticket_kid_quantity</td>
                    <td>barcode</td>
                    <td>equal_price</td>
                    <td>created</td>
                    <td>special</td>
                </tr>
                {MOCKS.map(i => {
                    let barcode = []
                    if (i.ticket_kid_quantity > 1 || i.ticket_adult_quantity > 1) {
                        for (let a = 1; a < i.ticket_adult_quantity + i.ticket_kid_quantity; a++) {
                            barcode.push(i.barcode + a - 1)
                        }
                    } else {
                        barcode.push(i.barcode)
                    }

                    return <tr key={i.id}>
                        <td>
                            {i.id}
                        </td>
                        <td>
                            {i.event_id}
                        </td>
                        <td>
                            {i.event_date}
                        </td>
                        <td>
                            {i.ticket_adult_price}
                        </td>
                        <td>
                            {i.ticket_kid_quantity}
                        </td>
                        <td>
                            {i.ticket_kid_price}
                        </td>
                        <td>
                            {i.ticket_kid_quantity}
                        </td>
                        <td>
                            {barcode.map(a => {
                                return <p key={a}>{a}</p>
                            })}
                        </td>
                        <td>
                            {i.equal_price}
                        </td>
                        <td>
                            {i.created}
                        </td>
                        <td>
                            {i.special? i.special : 'false'}
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Js1;
