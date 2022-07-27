import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Chat from "../components/Chat"
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot, useRecoilValue } from 'recoil';

const Home: NextPage = () => {

  return (
    <div className='bg-gray-300 h-screen flex flex-row'>
      <RecoilRoot>
        <SessionProvider>
          <Header />
          <Chat />
        </SessionProvider>
      </RecoilRoot>
    </div>
  )
}

export default Home
