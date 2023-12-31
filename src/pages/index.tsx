import {Header, Row} from 'src/components'
import Head from 'next/head'
import { useEffect } from 'react'
import { API_REQUEST } from '@/services/api.service'
import { GetServerSideProps } from 'next'

export default function Home(props: HomeProps): JSX.Element {
console.log(props);
  return (
    <div className='relative h-[200vh]'>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main>
    {/* Hero */}
    <section>
      {/* Row */}
      {/* BigRow */}
      {/* Row */}
      {/* BigRow */}
    </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const trending = await fetch(API_REQUEST.trending).then(res => res.json())
  if(!trending.results.length) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      trending,
    },
  };
};

interface HomeProps {
  message: any;
}