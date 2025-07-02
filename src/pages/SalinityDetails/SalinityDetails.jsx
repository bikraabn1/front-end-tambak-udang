import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Chart from '../../components/Chart'
import { Paper, Text, ScrollArea, Table } from '@mantine/core'
// import SalinityDetailsSkeleton from './SalinityDetailsSkeleton'

const SalinityDetails = () => {
  const { data } = useContext(DataContext)

  // if (!data || data.length < 10) {
  //   return <SalinityDetailsSkeleton />;
  // }

  const dataForChart = data.slice(-10)

  return (
    <>
      <div className='h-[72.75vh]'>
        <h2 className='font-semibold mb-5 text-xl text-white'>Salinity</h2>
        <div className="grid md:grid-cols-2 mb-12 gap-5">
          <Paper p="md" radius="md" withBorder className="h-full">
            <Text size="lg" mb={10} weight={500}>
              Salinity Trend
            </Text>
            <Chart data={dataForChart} dataKey="sal" domain={[0, 50]}/>
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
                    <Table.Th className='w-full flex justify-end'>Salinity</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {dataForChart.map((item, i) => (
                    <Table.Tr key={i}>
                      <Table.Td>{i + 1}</Table.Td>
                      <Table.Td className='text-end'>{item.sal}</Table.Td>
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
        <Table stripped withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Salinity Rate</Table.Th>
              <Table.Th>Impact on Shrimp</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th>&lt; 1</Table.Th>
              <Table.Th><strong>Dangerous / Freshwater</strong>. While Vannamei can tolerate very low salinities (even freshwater with proper mineral supplementation and gradual acclimation), prolonged exposure or sudden changes can cause severe osmoregulation stress, poor growth, and high mortality. Requires very careful management and mineral balance.</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>1 - 4</Table.Th>
              <Table.Th><strong>Very Low Salinity</strong>. Possible for cultivation, but growth might be significantly reduced. Requires careful acclimation and sufficient supplementation of essential minerals (K, Ca, Mg) to prevent osmoregulation issues and mortality. Increased susceptibility to certain diseases.</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>5 - 9</Table.Th>
              <Table.Th><strong>Low Brackish / Sub-optimal</strong>. Acceptable for cultivation, and some studies even show good performance. However, growth may still be slightly less than in optimal ranges. Good management of mineral balance is still important.</Table.Th>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>10 - 25</Table.Td>
              <Table.Td><strong>Optimal Range.</strong> Considered ideal for excellent growth, survival, and feed conversion ratio (FCR) for Vannamei shrimp. This range allows efficient osmoregulation with minimal energy expenditure.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>26 - 35</Table.Td>
              <Table.Td><strong>High Brackish / Seawater. </strong> Still very good for Vannamei, as they are naturally marine species. Growth and health are generally excellent. Some studies even suggest slightly higher salinities (e.g., 30-36 ppt) might be optimal for certain growth parameters.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&gt;35 - 40</Table.Td>
              <Table.Td><strong>Very High Salinity.</strong> Shrimp can survive, but prolonged exposure may lead to increased energy expenditure for osmoregulation, potentially affecting growth rate and increasing stress.</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>&gt;40</Table.Td>
              <Table.Td><strong>Dangerous / Extremely High Salinity. </strong> Causes significant physiological stress, reduced growth, and can lead to mass mortality. Inhibits enzyme activity and makes shrimp more susceptible to disease.</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <h2 className='font-semibold text-xl my-5 text-white'>What is Salinity?</h2>
      <p className='bg-zinc-800 rounded-sm p-2'>
        <span className='m-5'></span><strong>Salinity </strong> refers to the concentration of oxygen gas that is present in a liquid, most commonly water, and is not chemically bonded to other elements. It's a crucial indicator of water quality and is essential for the survival of aquatic organisms.
      </p>
    </>
  )
}

export default SalinityDetails
