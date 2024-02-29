import React, { useEffect, useState } from 'react'
import { Box, Center, Flex, Heading, Progress } from '@chakra-ui/react'
import { useQuestionStore, useScoreStore } from '../controller/ZustandStore'
import Answers from '../components/Answers'
import { useNavigate } from 'react-router-dom'
const Question = () => {
  const navigae = useNavigate()
  const [time, setTime] = useState(30)
  const [timeDisplay, updateDisplay] = useState(100)
  const { questions } = useQuestionStore()
  const { addPoint } = useScoreStore()
  const [index, updateIndex] = useState(0)
  const next = (isit) => {
    setTime(30)
    if (isit === "true") {
      addPoint()
    }
    if (index < 19) {
      updateIndex(index + 1)
    }
    else {
      navigae('/end')
    }
  }
  const startTimer = () =>{
    let timer = setInterval(() => {
      setTime((time) => {
        if (time <= 0) {
          clearInterval(timer);
          return 0;
        } else {
          return time - 0.5};
      });
    }, 500);
  }
  useEffect(()=>{
    updateDisplay(time/30*100)
    if(time <= 0){
      next()
    }
  },[time])
  useEffect(() => {
    if (questions.length > 0) {
        startTimer()
    }
    else {
      navigae('/')
    }
  }, [])
  return (
    <>
      <Flex borderRadius={9} p={4} flexWrap='wrap' minWidth="90%" width='fit-content' height="fit-content" gap='24px' justifyContent='space-evenly' bg='#393E46'>
        <Box borderRadius={6} p={3} w={600} h='fit-content' bg='#00ADB5' textAlign='center'>
          <Center>
            <Heading color='#EEEEEE'> {questions.length ? questions[index].question.toString().replaceAll("&quot;", '"').replaceAll("&#039;", "'") : "something went wrong no question loaded"}</Heading>
          </Center>
        </Box>
        <Flex flexWrap='wrap' width="100%" gap='24px' justifyContent='space-evenly'>
          <Answers question={questions[index]} onClick={next} />
        </Flex>
        <Progress colorScheme='purple' width={400} value={timeDisplay} />
      </Flex>
    </>
  )
}

export default Question