import {  Center, Container, Flex} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <Container>
          <Flex h='100vh' justifyContent='center'>
            <Center>
              <Outlet />
            </Center>
          </Flex>
        </Container>
    </>
  )
}

export default Layout