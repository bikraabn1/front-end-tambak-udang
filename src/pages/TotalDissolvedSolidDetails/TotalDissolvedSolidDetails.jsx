import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Chart from '../../components/Chart'
import { Paper, Text, ScrollArea, Table } from '@mantine/core'
import TotalDissolvedSolidSkeleton from './TotalDissolvedSolidSkeleton'

const TotalDissolvedSolidDetails = () => {
  const { data } = useContext(DataContext)

  if (!data || data.length < 5) {
    return <TotalDissolvedSolidSkeleton />;
  }

  const dataForChart = data.slice(-10)

  return (
    <>
      <div className='md:h-full lg:h-[72.75vh]'>
        <h2 className='font-semibold mb-5 text-xl text-white'>Total Dissolved Solid</h2>
        <div className="grid md:grid-cols-2 mb-12 gap-5">
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={10} weight={500}>
              Total Dissolved Solid Trend
            </Text>
            <Chart data={dataForChart} dataKey="tds" stroke='#D50B8B'/>
          </Paper>
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={15} weight={700}>
              Latest Measurements
            </Text>
            <ScrollArea>
              <Table striped={true} withTableBorder>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>No</Table.Th>
                    <Table.Th className='w-full flex justify-end'>Total Dissolved Solid</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {dataForChart.map((item, i) => (
                    <Table.Tr key={i}>
                      <Table.Td>{i + 1}</Table.Td>
                      <Table.Td className='text-end'>{item.tds}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </div>
      </div>

      <h2 className='font-semibold text-xl mt-20 mb-5 text-white'>Indicator</h2>
      <div className='bg-zinc-800 p-2 flex items-center justify-center rounded md'>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Total Dissolved Solid Rate</Table.Th>
              <Table.Th>Impact on Shrimp</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>&lt; 5,000 (or &gt; 5 ppt)</Table.Td>
              <Table.Td><strong>Dangerous!</strong> (Too low for intensive farming without special treatment). Can lead to osmoregulation problems, slow growth, and increased mortality. Requires supplementation of essential minerals.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>5,000 - 9,999 (or 5 - &gt;10 ppt)</Table.Td>
              <Table.Td>Low Brackish - Fair. Shrimp can survive, but growth may not be as optimal as in higher salinity. Requires good water management and mineral monitoring.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>10,000 - 35,000 (or 10 - 35 ppt)</Table.Td>
              <Table.Td>Optimal Range (Ideal Brackish - Seawater). Best conditions for optimal growth and health of Vannamei shrimp. Allows for efficient osmoregulation.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&gt; 35,000 - 40,000 (or &lt; 35 - 40 ppt)</Table.Td>
              <Table.Td>Quite High. Shrimp can still tolerate, but may experience some stress. Growth might be slightly inhibited, and energy requirements for osmoregulation increase.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&gt; 40,000 (or &gt; 40 ppt)</Table.Td>
              <Table.Td><strong>Potentially Dangerous! (Too high)</strong>. Causes significant stress to shrimp, inhibits growth, and increases the risk of disease and mortality.</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <h2 className='font-semibold text-xl my-5 text-white'>What is Total Dissolved Solid?</h2>
      <p className='bg-zinc-800 rounded-sm p-2'>
        <span className='m-5'></span><strong>Total Dissolved Solid </strong> refers to the concentration of oxygen gas that is present in a liquid, most commonly water, and is not chemically bonded to other elements. It's a crucial indicator of water quality and is essential for the survival of aquatic organisms.
      </p>
    </>
  )
}

export default TotalDissolvedSolidDetails
