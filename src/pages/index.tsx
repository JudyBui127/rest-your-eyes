import Head from 'next/head';
import MainTimer from '@/views/main-timer';
import Layout from '@/common/layout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Rest Your Eyes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/eye.ico" />
      </Head>
      <Layout>
        <MainTimer />
      </Layout>
    </>
  )
}
