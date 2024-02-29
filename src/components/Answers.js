import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Answers = ({ question,onClick }) => {
    const [displayAnswers, setDisplay] = useState([])
    const loadArray = () => {
        let arr = []
        arr.push({ answer: question.correct_answer, correct: true })
        question.incorrect_answers.map(e => {
            arr.push({ answer: e, correct: false })
        })
        arr = shuffle(arr)
        setDisplay(arr)
    }

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    useEffect(() => {
        if (question)
            loadArray()
    }, [question])

    return (
        <>
            {displayAnswers.length > 0 ? displayAnswers.map((e,i) => (
                <Button key={i} width='fit-content' minWidth={200} height='fit-content' minHeight={50} value={e.correct} onClick={e=>{onClick(e.target.value)}}>{e.answer.toString().replaceAll("&#039;", "'").replaceAll("&quot;", '"')}</Button>
            )) : <div>loading</div>}
        </>
    )
}

export default Answers