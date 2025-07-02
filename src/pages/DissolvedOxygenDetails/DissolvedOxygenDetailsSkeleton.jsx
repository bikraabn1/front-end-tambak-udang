import React from 'react'
import { Paper, Text, ScrollArea, Table, Skeleton } from '@mantine/core'

const DissolvedOxygenDetailsSkeleton = () => {
  return (
    <>
      <div className='h-[72.75vh]'>
        <h2 className='font-semibold mb-5 text-xl text-white'>Dissolved Oxygen</h2>
        <div className="grid md:grid-cols-2 mb-12 gap-5">
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={10} weight={500}>
              Dissolved Oxygen Trend
            </Text>
            <Skeleton h="91%" radius="md"/>
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
                    <Table.Th className='w-full flex justify-end'>Dissolved Oxygen</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Table.Tr key={i}>
                      <Table.Td>{i + 1}</Table.Td>
                      <Table.Td className='text-end'>Load</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </div>
      </div>

      <h2 className='font-semibold text-xl mt-25 mb-5 text-white'>Indicator</h2>
      <div className='bg-zinc-800 p-2 flex items-center justify-center rounded md'>
        <Table stripped={true} withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Dissolved Oxygen Rate</Table.Th>
              <Table.Th>Impact on Shrimp</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th>5-7 mg/L</Table.Th>
              <Table.Th>Optimal range (best growth and health)</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>4 mg/L</Table.Th>
              <Table.Th>Minimum survival level (slow growth)</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>&gt;7 mg/L</Table.Th>
              <Table.Th>May cause stress to shrimp</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&lt;4</Table.Td>
              <Table.Td><strong>Dangerous!</strong> (risk of mass mortality)</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&lt;3</Table.Td>
              <Table.Td><strong>Critical emergency!</strong> (immediate aeration needed)</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <h2 className='font-semibold text-xl my-5 text-white'>What is Dissolved Oxygen?</h2>
      <p className='bg-zinc-800 rounded-sm p-2'>
        <span className='m-5'></span><strong>Dissolved oxygen (DO)</strong> refers to the concentration of oxygen gas that is present in a liquid, most commonly water, and is not chemically bonded to other elements. It's a crucial indicator of water quality and is essential for the survival of aquatic organisms.
      </p>
    </>
  )
}

export default DissolvedOxygenDetailsSkeleton
