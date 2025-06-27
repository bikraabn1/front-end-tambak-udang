import React from 'react';
import {
    SimpleGrid,
    Paper,
    Text,
    ScrollArea,
    Table,
    Skeleton,
} from '@mantine/core';

export default function DashboardSkeleton() {

    return (
        <div>
            <SimpleGrid cols={{ base: 2, sm: 2, md: 3, lg: 5 }} spacing="md">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Paper key={i} p="md" radius="md" withBorder>
                        <Skeleton h={60} radius="md" />
                    </Paper>
                ))}
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="md" mt="md" style={{ overflow: 'visible' }}>
                <Paper p="md" radius="md" withBorder h={320}>
                    <Text size="lg" weight={500} mb={6}>Dissolved Oxygen</Text>
                    <Skeleton h={250} radius="md" />
                </Paper>
                <Paper p="md" radius="md" withBorder h={320}>
                    <Text size="lg" weight={500} mb={6}>Potential of Hydrogen(pH)</Text>
                    <Skeleton h={250} radius="md" />
                </Paper>
                <Paper p="md" radius="md" withBorder h={320}>
                    <Text size="lg" weight={500} mb={6}>Salinity</Text>
                    <Skeleton h={250} radius="md" />
                </Paper>
                <Paper p="md" radius="md" withBorder h={320}>
                    <Text size="lg" weight={500} mb={6}>Temperature</Text>
                    <Skeleton h={250} radius="md" />
                </Paper>
                <Paper p="md" radius="md" withBorder h={320}>
                    <Text size="lg" weight={500} mb={6}>Total Dissolved Solids</Text>
                    <Skeleton h={250} radius="md" />
                </Paper>
            </SimpleGrid>

            <Paper mt="md" p="md" radius="md" withBorder>
                <Text size="lg" weight={500} mb="sm">Data Table</Text>
                <ScrollArea>
                    <Table striped highlightOnHover>
                        <thead>
                            <tr>
                                <th>Kolom 1</th>
                                <th>Kolom 2</th>
                                <th>Kolom 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <tr key={i}>
                                    <td>Baris {i + 1} - A</td>
                                    <td>Baris {i + 1} - B</td>
                                    <td>Baris {i + 1} - C</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ScrollArea>
            </Paper>
        </div>
    );
}