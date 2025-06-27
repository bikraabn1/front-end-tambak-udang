import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Chart from '../../components/Chart'
import { Paper, Text, ScrollArea, Table } from '@mantine/core'

const DissolvedOxygenDetails = () => {
  const { data } = useContext(DataContext)

  const dataForChart = data.slice(-10)
  return (
    <>
      <div className='h-[72.75vh]'>
        <h2 className='font-semibold mb-5 text-xl text-white'>Dissolved Oxygen</h2>
        <div className="grid md:grid-cols-2 mb-12 gap-5">
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={10} weight={500}>
              Dissolved Oxygen Trend
            </Text>
            <Chart data={dataForChart} dataKey="doValue" />
          </Paper>
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={15} weight={700}>
              Latest Measurements
            </Text>
            <ScrollArea>
              <Table striped withTableBorder>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>No</Table.Th>
                    <Table.Th>Total Dissolved Solids</Table.Th>
                    <Table.Th>Potential of Hydrogen (pH)</Table.Th>
                    <Table.Th>Salinity</Table.Th>
                    <Table.Th>Temperature</Table.Th>
                    <Table.Th>Dissolved Oxygen</Table.Th>
                    <Table.Th>Color</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {dataForChart.map((item, i) => (
                    <Table.Tr key={i}>
                      <Table.Td>{i + 1}</Table.Td>
                      <Table.Td>{item.tds}</Table.Td>
                      <Table.Td>{item.ph}</Table.Td>
                      <Table.Td>{item.sal}</Table.Td>
                      <Table.Td>{item.temp}</Table.Td>
                      <Table.Td>{item.doValue}</Table.Td>
                      <Table.Td>
                        <div
                          className="rounded-full w-6 h-6 mx-auto border border-white"
                          style={{ backgroundColor: `#${item.color}` }}
                        ></div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </div>
      </div>
      <h2 className='font-semibold text-xl mt-25 mb-5 text-white'>What is Dissolved Oxygen?</h2>
      <p className='bg-zinc-700 rounded-sm p-2'>
        <span className='m-5'></span>Dissolved oxygen (DO) refers to the concentration of oxygen gas that is present in a liquid, most commonly water, and is not chemically bonded to other elements. It's a crucial indicator of water quality and is essential for the survival of aquatic organisms.
      </p>
    </>
  )
}

export default DissolvedOxygenDetails
