import './ProductTable.css'
import { Fragment } from 'react'
import { Table } from './Table'
const productData = [
    {price: '$3.10', stocked: true, title:'Shaftoli'},
    {price: '$3.40', stocked: true, title:'Gilos'},
    {price: '$1.80', stocked: true, title:'Nok'},
    {price: '$2.00', stocked: true, title:'Sut'},
    {price: '$1.50', stocked: true, title:'Olma sharbati'},
    {price: '$0.30', stocked: true, title:'Mineral suv'}

]
export function ProductTable(){
    return(
        <Fragment>
            <table>
                <tr>
                    <th>Nomi</th>
                    <th>Narxi</th>
                </tr>

            {
    productData.map((value, index) =>{
        return(      
            <Table data = {value} key ={index}/>
            )})
        }
        </table>
        </Fragment>
    )
}





