import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import {
  SimpleGrid,
  Paper,
  Text,
  ScrollArea,
  Table,
} from '@mantine/core';
import Chart from '../../components/Chart';
import DashboardSkeleton from './DashboardSkeleton';

export default function Dashboard() {
  const { data } = useContext(DataContext)

  if (!data || data.length < 10) {
    return <DashboardSkeleton />;
  }

  const dataForStats = data.slice(-1)
  const dataForChart = data.slice(-10)
  return (
    <div>
      <h3 className='font-semibold mb-5'>Stats</h3>
      <SimpleGrid cols={{ base: 2, sm: 2, md: 3, lg: 6 }} spacing="md">
        <Paper p="md" radius="md" withBorder>
          <Text size="sm" weight={500} mb={6}>Dissolved Oxygen</Text>
          <h3 className='text-center py-3'>{dataForStats[0].doValue}</h3>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Text size="sm" weight={500} mb={6}>Potential of Hydrogen(pH)</Text>
          <h3 className='text-center py-3'>{dataForStats[0].ph}</h3>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Text size="sm" weight={500} mb={6}>Salinity</Text>
          <h3 className='text-center py-3'>{dataForStats[0].sal}</h3>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Text size="sm" weight={500} mb={6}>Temperature</Text>
          <h3 className='text-center py-3'>{dataForStats[0].temp}</h3>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Text size="sm" weight={500} mb={6}>Total Dissolved Solids</Text>
          <h3 className='text-center py-3'>{dataForStats[0].tds}</h3>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Text size="sm" weight={500} mb={6}>Color</Text>
          <div className={`h-10 w-10 mx-auto mt-2 rounded-full`} style={{ backgroundColor: `#${dataForStats[0].color}` }}></div>
        </Paper>
      </SimpleGrid>

      <h3 className='col-span-3 mt-5 font-semibold'>Charts</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[320px] gap-5 mt-5'>
        <Paper p="md" radius="md" withBorder h="100%">
          <Text size="lg" weight={500} mb={6}>Dissolved Oxygen</Text>
          <Chart data={dataForChart} dataKey="doValue" domain={[0, 14]}/>
        </Paper>

        <Paper p="md" radius="md" withBorder h="100%">
          <Text size="lg" weight={500} mb={6}>Potential of Hydrogen(pH)</Text>
          <Chart data={dataForChart} dataKey="ph" domain={[0, 10]}/>
        </Paper>
        <Paper p="md" radius="md" withBorder h="100%">
          <Text size="lg" weight={500} mb={6}>Salinity</Text>
          <Chart data={dataForChart} dataKey="sal" domain={[0, 50]}/>
        </Paper>
        <Paper p="md" radius="md" withBorder h="100%">
          <Text size="lg" weight={500} mb={6}>Temperature</Text>
          <Chart data={dataForChart} dataKey="temp" domain={[0, 40]}/>
        </Paper>
        <Paper p="md" radius="md" withBorder h="100%">
          <Text size="lg" weight={500} mb={6}>Total Dissolved Solids</Text>
          <Chart data={dataForChart} dataKey="tds" domain={[0, 35000]}/>
        </Paper>
      </div>

      <h3 className='mt-5 font-semibold'>Data Table</h3>
      <Paper mt="md" p="md" radius="md" withBorder>
        <Text size="lg" weight={500} mb="sm">Stats Table</Text>
        <ScrollArea>
          <Table striped withTableBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>No</Table.Th>
                <Table.Th>Total Dissolve Solids</Table.Th>
                <Table.Th>Potential of Hydrogen(pH)</Table.Th>
                <Table.Th>Salinity</Table.Th>
                <Table.Th>Temperature</Table.Th>
                <Table.Th>Dissolved Oxygen</Table.Th>
                <Table.Th>Color</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {dataForChart.map((data, i) => (
              <Table.Tr key={i}>
                <Table.Td>{i + 1}</Table.Td>
                <Table.Td>{data.tds}</Table.Td>
                <Table.Td>{data.ph}</Table.Td>
                <Table.Td>{data.sal}</Table.Td>
                <Table.Td>{data.temp}</Table.Td>
                <Table.Td>{data.doValue}</Table.Td>
                <Table.Td>
                  <div className={`rounded-full w-5 h-5`} style={{ backgroundColor: `#${data.color}` }}></div>
                </Table.Td>
              </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Paper>
    </div>
  );
}