import React, { useEffect, useState } from 'react'
import { useScoreStore } from '../controller/ZustandStore'
import { Box, Flex, Heading, Center, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const End = () => {
  const [passed, isPass] = useState(false)
  const { score } = useScoreStore()
  const navigae = useNavigate()
  useEffect(() => {
    if (score >= 15) {
      isPass(true)
    }
  }, [])
  return (
    <>
      <Flex borderRadius={9} p={4} flexWrap='wrap' width="90%" height="fit-content" gap='24px' justifyContent='space-evenly' bg='#393E46'>
        <Box borderRadius={6} p={4} w={500} minHeight="200px" h='fit-content' bg='#00ADB5' textAlign='center' >
          {passed ? <Heading color='#416D19'>Congrats You Passed!!!</Heading> : <Heading color='#9B4444'>unfortunately you failed!</Heading>}
          <Center>
            <Heading color='#EEEEEE'>You Scored</Heading>
          </Center>
          <Heading color='#211C6A'>{score}/20</Heading>
        </Box>
        <Button onClick={e=>{navigae('/')}} minWidth={300} w='fit-content' h={100} bg='#222831'>
            <Center>
              <Heading color='#EEEEEE'>Go Back to start!</Heading>
            </Center>
          </Button>
      </Flex>
    </>
  )
}

export default End