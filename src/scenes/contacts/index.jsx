import React from 'react'
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useTheme } from '@mui/material'

import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'


const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    // These are the columns to be displayed in the DataGrid,
    // the field names must match the field names in the data source
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID',
            flex: 0.5,
        },
        { 
            field: 'registrarId', 
            headerName: 'Registrar ID',
        },
        { 
            field: 'name', 
            headerName: 'Name', 
            flex: 1, 
            // this is a css class name to style the column
            cellClassName: 'name-column-cell',
        },
        { 
            field: 'age', 
            headerName: 'Age', 
            type: 'number', 
            headerAlign: 'left', 
            align: 'left',
        },
        { 
            field: 'phone', 
            headerName: 'Phone number', 
            flex: 1,
        },
        { 
            field: 'email', 
            headerName: 'Email', 
            flex: 1,
        },
        { 
            field: 'address', 
            headerName: 'Address', 
            flex: 1,
        },
        { 
            field: 'city', 
            headerName: 'City', 
            flex: 1,
        },
        { 
            field: 'zipCode', 
            headerName: 'Zipcode', 
            flex: 1,
        },
        { 
            field: 'myField',
            headerName: 'Wage/hr',
            flex: 1,
            renderCell: () => ((Math.random() * 100).toFixed(2))
        },
    ]

    return (
        <Box m='20px'>
            <Header title='CONTACTS' subtitle='List of Contacts for Future Reference' />

            <Box m='40px 0 0 0' height='75vh' sx={{
                // These are class names in the MUI DataGrid
                '& .MuiDataGrid-root': {
                    border: 'none',
                },
                '& .MuiDataGrid-cell': {
                    borderBottom: 'none',
                },
                // This class name was defined in the columns above
                '& .name-column-cell': {
                    color: colors.greenAccent[300],
                },
                '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: colors.blueAccent[700],
                    borderBotton: 'none'
                },
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor: colors.primary[400],
                },
                '& .MuiDataGrid-footerContainer': {
                    backgroundColor: colors.blueAccent[700],
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    color: `${colors.grey[100]} !important`,
                },
            }}>
                <DataGrid 
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>

    )
}

export default Contact
