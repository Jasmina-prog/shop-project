import { Fragment } from "react"
import './Table.css'
export function Table(props){
    return(
    <Fragment>
    
        <tr>
            <td><p>{props.data.title}</p></td>
            <td><p>{props.data.price}</p></td>
        </tr>
    
</Fragment>

    )
}