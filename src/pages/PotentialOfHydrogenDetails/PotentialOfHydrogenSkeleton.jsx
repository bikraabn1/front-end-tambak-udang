import React from 'react'
import { Paper, Text, ScrollArea, Table, Skeleton } from '@mantine/core'

const PotentialOfHydrogenSkeleton = () => {
  return (
    <>
      <div className='md:h-full lg:h-[72.75vh]'>
        <h2 className='font-semibold mb-5 text-xl text-white'>Potential of Hydrogen(pH)</h2>
        <div className="grid md:grid-cols-2 mb-12 gap-5">
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={10} weight={500}>
              Potential of Hydrogen(pH) Trend
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
                    <Table.Th className='w-full flex justify-end'>Potential of Hydrogen(pH)</Table.Th>
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
              <Table.Th>Potential Of Hydrogen Rate</Table.Th>
              <Table.Th>Impact on Shrimp</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>&lt;6.5</Table.Td>
              <Table.Td><strong>Highly Dangerous / Acidic</strong>. Causes severe stress, significant osmoregulation problems, and can lead to molting difficulties, weak shells, and direct mortality, especially in prolonged exposure. Inhibits beneficial bacteria.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>6.5 - 7.4</Table.Td>
              <Table.Td><strong>Sub-optimal / Slightly Acidic</strong>. Can lead to chronic stress, reduced growth rate, and increased susceptibility to diseases over time. Mineral availability for shell formation might be reduced.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>7.5 - 8.5</Table.Td>
              <Table.Td><strong>Optimal Range</strong>. Ideal for healthy growth, efficient osmoregulation, and strong immune function. Promotes good water quality and beneficial microbial activity. Daily fluctuation should ideally not exceed 0.5.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>8.6 - 9.0</Table.Td>
              <Table.Td><strong>Slightly Alkaline / High.</strong> Can cause stress, especially if prolonged. May increase the toxicity of ammonia (NH3) in the water, even if total ammonia nitrogen (TAN) levels are moderate. Can lead to reduced feed intake and growth.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&gt; 9.0</Table.Td>
              <Table.Td><strong>Dangerous / Highly Alkaline.</strong> Severe stress and direct toxicity. Greatly increases the toxicity of unionized ammonia (NH3), leading to gill damage, metabolic disturbances, and mass mortality. Inhibits proper functioning of various biological processes.</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <h2 className='font-semibold text-xl my-5 text-white'>What is Potential Of Hydrogen?</h2>
      <p className='bg-zinc-800 rounded-sm p-2'>
        <span className='m-5'></span><strong>Potential Of Hydrogen (pH)</strong> refers to the concentration of oxygen gas that is present in a liquid, most commonly water, and is not chemically bonded to other elements. It's a crucial indicator of water quality and is essential for the survival of aquatic organisms.
      </p>
    </>
  )
}

export default PotentialOfHydrogenSkeleton
