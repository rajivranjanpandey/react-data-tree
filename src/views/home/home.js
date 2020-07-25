import React, { Component } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import TodoItem from '../../components/todo-item';

export default class Home extends Component {
    componentDidMount() {
        this.props.getList();
    }
    render() {
        const list = this.props.storedList ? this.props.storedList.toJS() : null;
        return (
            <>
                {
                    list ?
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Completed</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list.map((item) => (
                                        <TodoItem key={item.id} item={item} />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <p>Fetching List</p>
                }
            </>

        )
    }
}
