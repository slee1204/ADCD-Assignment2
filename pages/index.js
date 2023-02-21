import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import LoadingAnimation from '../public/melting.json'

export default function Home() {


  //loading state for lottie and playwright test
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 1000);
  }, [])


  if (loading){
    return (
      <div className="lottie">
        <Lottie 
          style={{width:200, height:200}} 
          animationData={LoadingAnimation}
          loop={true} />
      </div>
    )
  }


  return (
    <>
      <Head>
        <title>Find Icecream</title>
        <meta name="author" content="Sue Lee" />
        <meta name="description" content="See different flavours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container landing'>
        
        <div className="header">
          <h1>Find a variety of Icecream flavours!</h1>
        </div>
        <div className='main'>
          <Link href="/benNjerry" className='btn'>
            Ben & Jerry's Icecream
          </Link>
          <Link href="/haagen_dazs" className='btn'>
            Haagen Dazs Icecream
          </Link>
        </div>
      </div>
    </>
  )
}
