import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Chart from '../../components/Chart'
import { Paper, Text, ScrollArea, Table } from '@mantine/core'
// import TemperatureDetailsSkeleton from './TemperatureDetailsSkeleton'

const TemperatureDetails = () => {
  const { data } = useContext(DataContext)

  // if (!data || data.length < 10) {
  //   return <TemperatureDetailsSkeleton />;
  // }

  const dataForChart = data.slice(-10)

  return (
    <>
      <div className='h-[72.75vh]'>
        <h2 className='font-semibold mb-5 text-xl text-white'>Temperature</h2>
        <div className="grid md:grid-cols-2 mb-12 gap-5">
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={10} weight={500}>
              Temperature Trend
            </Text>
            <Chart data={dataForChart} dataKey="temp" />
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
                    <Table.Th className='w-full flex justify-end'>Temperature</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {dataForChart.map((item, i) => (
                    <Table.Tr key={i}>
                      <Table.Td>{i + 1}</Table.Td>
                      <Table.Td className='text-end'>{item.temp}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </div>
      </div>

      <h2 className='font-semibold text-xl mt-25 mb-5 text-white'>What is Temperature?</h2>
      <p className='bg-zinc-800 rounded-sm p-2'>
        <span className='m-5'></span><strong>Temperature </strong> is a physical quantity that quantitatively expresses the attribute of hotness or coldness. Temperature is measured with a thermometer.

      </p>
      <h2 className='font-semibold text-xl my-5 text-white'>Indicator</h2>
      <div className='bg-zinc-800 p-2 flex items-center justify-center rounded md'>
        <Table stripped withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Temperature Rate(Celcius)</Table.Th>
              <Table.Th>Impact on Shrimp</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th>25&deg; - 33&deg;</Table.Th>
              <Table.Th>Optimal range (best growth and health)</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>&gt;32&deg;</Table.Th>
              <Table.Th><strong>Dangerous!</strong> (Risk of oxygen depletion and stress)</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&lt;25&deg;</Table.Td>
              <Table.Td><strong>Dangerous!</strong> (Shrimp become inactive, stop eating)</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </>
  )
}

export default TemperatureDetails
