import React from 'react'
import { Paper, Text, ScrollArea, Table, Skeleton } from '@mantine/core'

const DissolvedOxygenDetailsSkeleton = () => {
  return (
    <>
      <div className='md:h-full lg:h-[72.75vh]'>
        <h2 className='font-semibold mb-5 text-xl text-white'>Dissolved Oxygen</h2>
        <div className="grid md:grid-cols-2 mb-12 gap-5">
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={10} weight={500}>
              Dissolved Oxygen Trend
            </Text>
            <Skeleton h="91%" radius="md" />
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

      <h2 className='font-semibold text-xl mt-20 mb-5 text-white'>Indicator</h2>
      <div className='bg-zinc-800 p-2 flex items-center justify-center rounded md'>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Dissolved Oxygen Rate</Table.Th>
              <Table.Th>Impact on Shrimp</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>5-7 mg/L</Table.Td>
              <Table.Td><strong>Optimal range</strong> (best growth and health)</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>4 mg/L</Table.Td>
              <Table.Td><strong>Minimum survival level</strong> (slow growth)</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&gt;7 mg/L</Table.Td>
              <Table.Td><strong>Potentially Dangerous</strong> May cause stress to shrimp</Table.Td>
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
        <span className='m-5'></span><strong>Dissolved oxygen (DO)</strong> refers to the amount of gaseous oxygen molecules (O2) that are dissolved in water, and it is one of the most critical water quality parameters for aquatic life, including shrimp. This oxygen is vital for the respiration of most aquatic organisms, where they use it to convert food into energy. Adequate DO levels indicate a healthy aquatic ecosystem, whereas low (hypoxia) or extremely low (anoxia) DO levels can lead to stress, stunted growth, and even mass mortality in aquatic organisms like shrimp, as their ability to breathe and their metabolism become severely impaired.
      </p>
    </>
  )
}

export default DissolvedOxygenDetailsSkeleton
