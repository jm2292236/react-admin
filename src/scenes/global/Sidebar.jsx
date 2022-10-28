import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutLinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutLinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutLinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutLinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutLinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutLinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutLinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutLinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutLinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutLinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutLinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutLinedIcon from '@mui/icons-material/MapOutlined'

// To generate a MenuItem for each Item in the sidebar
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div style={{height: '30px'}}>
        <MenuItem 
            active={selected === title} 
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
        </div>
    )
}

const SectionTitle = ({title}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box height='15px'>
        <Typography
            variant='h6'
            color={colors.grey[300]}
            sx={{m: '15px 0 5px 20px'}}
        >
            {title}
        </Typography>
        </Box>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    // will override the pro-sidebar background
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    // will override the pro-sidebar background
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    {/* Logo and Menu Icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutLinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    ADMIN
                                </Typography>

                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutLinedIcon />
                                </IconButton>
                            </Box>
                        )

                        }
                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box mb='25px' border='solid'>
                            <Box display='flex' justifyContent='center' alignItems='center' border='solid'>
                                <img 
                                    alt='profile-user'
                                    width='100px'
                                    height='100px'
                                    src={'../../assets/esme.jpg'}
                                    style={{cursor: 'pointer', borderRadius: '50%'}}
                                />
                            </Box>

                            <Box textAlign='center'>
                                <Typography 
                                    variant='h3' 
                                    color={colors.grey[100]}
                                    fontWeight='bold'
                                    sx={{m: '10px 0 0 0' }}
                                >
                                    Jaime Montes de Oca
                                </Typography>
                                
                                <Typography
                                    variant='h5'
                                    color={colors.greenAccent[500]}
                                >
                                    VP Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu items */}
                    <Box pl={isCollapsed ? undefined : '10%'} border='dotted'>
                        <Item 
                            title='Dashboard'
                            to='/'
                            icon={<HomeOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <SectionTitle title={'Data'} />

                        <Item 
                            title='Manage Team'
                            to='/team'
                            icon={<PeopleOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            height='5px'
                            title='Contacts'
                            to='/contacts'
                            icon={<ContactsOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Invoices Balances'
                            to='/invoices'
                            icon={<ReceiptOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <SectionTitle title={'Pages'} />

                        <Item 
                            title='Profile Form'
                            to='/form'
                            icon={<PersonOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Calendar'
                            to='/calendar'
                            icon={<CalendarTodayOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='FAQ'
                            to='/faq'
                            icon={<HelpOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <SectionTitle title={'Charts'} />

                        <Item 
                            title='Bar Chart'
                            to='/bar'
                            icon={<BarChartOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Pie Chart'
                            to='/pie'
                            icon={<PieChartOutlineOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Line Chart'
                            to='/line'
                            icon={<TimelineOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Geography Chart'
                            to='/geography'
                            icon={<MapOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar
