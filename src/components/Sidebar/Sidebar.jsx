import {
    Box,
    Text,
} from '@mantine/core';
import { NavLink } from 'react-router'
import classes from './Sidebar.module.css';
import { IoHome } from 'react-icons/io5'

const collections = [
    {
        icon: <IoHome/>,
        label: 'Home',
        link: '/'
    },
    {
        icon: <IoHome/>,
        label: 'Dissolved Oxygen',
        link: "/do-details"
    },
    {
        icon: <IoHome/>,
        label: 'Potential of Hydrogen(pH)',
        link: '/ph-details'
    },
    {
        icon: <IoHome/>,
        label: 'Salinity',
        link: '/sal-details'
    },
    {
        icon: <IoHome/>,
        label: 'Temperature',
        link: '/temp-details'
    },
    {
        icon: <IoHome/>,
        label: 'Total Dissolved Solids',
        link: '/tds-details'
    },
];

export default function Sidebar() {

    const collectionLinks = collections.map((collection) => (
        <NavLink
            to={collection.link}
            key={collection.label}
            className={classes.collectionLink}
        >
            <Box component="span" fz={16}>
                {collection.icon}
            </Box>{' '}
            {collection.label}
        </NavLink>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.section}>
                <Text size="xs" fw={600} c="dimmed">
                    Pages
                </Text>
                <div className={classes.collections}>{collectionLinks}</div>
            </div>
        </nav>
    );
}