import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'

export default function TodoItem(props) {
    const { item } = props;
    const [completed, changeCompleted] = React.useState(item.completed);
    return (
        <TableRow key={item.id}>
            <TableCell component="th" scope="row">
                {item.title}
            </TableCell>
            <TableCell align="right" onClick={() => changeCompleted(!completed)}>{completed ? 'YES' : 'NO'}</TableCell>

        </TableRow>
    )
}
