import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Start from './pages/Start'
import Question from './pages/Suestion'
import End from './pages/End'
import theme from './components/theme'
const App = () => {
  return (
    <ChakraProvider theme={theme}>
       <BrowserRouter>
        <Routes >
          <Route path='/' element={<Layout/>}>
            <Route index element={<Start/>}/>
            <Route path='/game' element={<Question/>}/>
            <Route path='/end' element={<End/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
    </ChakraProvider>
  )
}

export default App