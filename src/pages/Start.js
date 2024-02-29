import { Box, Flex, Heading, Center, Button,Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import Request from '../controller/RequestAxios.js'
import { useQuestionStore, useScoreStore } from '../controller/ZustandStore.js'
import { useNavigate } from 'react-router-dom'
const Start = () => {
  const { setQuestions, clearQuestions } = useQuestionStore()
  const { resetPoint } = useScoreStore()
  const [loading, isLoading] = useState(false)
  const navigae = useNavigate()
  const goon = async () => {
    clearQuestions()
    isLoading(true)
    resetPoint()
    Request().then(e => {
      setQuestions(e)
      navigae('/game')
      isLoading(false)
    }).catch(e => { console.log(e) })
  }
  return (
    <>
      <Flex borderRadius={9} p={4} flexWrap='wrap' width="90%" height="fit-content" gap='24px' justifyContent='space-evenly' bg='#393E46'>
        <Box borderRadius={6} p={4} w={500} h="200px" bg='#00ADB5' textAlign='center' >
          <Center>
            <Heading color='#EEEEEE'>Computer Science Trivia</Heading>
          </Center>
        </Box>
        {loading ? <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> :
          <Button onClick={goon} w={300} h={100} bg='#222831'>
            <Center>
              <Heading color='#EEEEEE'>Start</Heading>
            </Center>
          </Button>

        }

      </Flex>
    </>
  )
}

export default Start