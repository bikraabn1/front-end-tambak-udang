import {
    Box,
    Text,
} from '@mantine/core';
import { NavLink } from 'react-router'
import classes from './Sidebar.module.css';
import { IoHome } from 'react-icons/io5'
import { SiOxygen } from "react-icons/si";
import { IoIosWater } from "react-icons/io";
import { CgGlassAlt } from "react-icons/cg";
import { TbTemperatureSun } from "react-icons/tb";
import { MdWater } from "react-icons/md";
import { useLocation } from 'react-router-dom'

const collections = [
    {
        icon: <IoHome/>,
        label: 'Home',
        link: '/'
    },
    {
        icon: <SiOxygen/>,
        label: 'Dissolved Oxygen',
        link: "/do-details"
    },
    {
        icon: <IoIosWater />,
        label: 'Potential of Hydrogen(pH)',
        link: '/ph-details'
    },
    {
        icon: <CgGlassAlt />,
        label: 'Salinity',
        link: '/sal-details'
    },
    {
        icon: <TbTemperatureSun />,
        label: 'Temperature',
        link: '/temp-details'
    },
    {
        icon: <MdWater/>,
        label: 'Total Dissolved Solids',
        link: '/tds-details'
    },
];

export default function Sidebar() {
    const pathname = useLocation()
    console.log(pathname)

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