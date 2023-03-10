import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import haagen from "../data/hd_product.json";
import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import LoadingAnimation from '../public/melting.json'

export default function HD() {

  const [hdlist, setHdlist] = useState([]);

  useEffect(() => {
    console.log (hdlist)
  }, [hdlist])

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
        <title>Haagen Dazs Icecream</title>
        <meta name="author" content="Sue Lee"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar">
        <Link href="/">Home </Link>
        <Link href="/benNjerry">Ben & Jerry's</Link>
      </nav>

      <div className="container">

        <div className="header">
          <h1>Haagen Dazs Icecream</h1>
          <h3>Click the image to add it to your list!</h3>
        </div>

        <h2>My List</h2>
        <div className="lists">
            
            {hdlist.map((item, index) => {
              return (
                <p key={index} className="list">
                {item}
                </p>
              )
            }
            )}
          
        </div>

          <div className="grid">
            {haagen.map((hd, index) => {
              return (
                <div className="items" key={index} 
                  onClick={ ()=>{
                    if(hdlist.includes(hd.name)){
                      alert("This item is already added")
                    } else {
                    setHdlist([hd.name, ...hdlist])
                    }}}
                >
                  <Image
                    src={hd.picture}
                    alt={hd.name}
                    width={200}
                    height={200}
                  />
                  <h3>{hd.name}</h3>
                  <p>{hd.subhead}</p>
                  <p> <span>&#9733;</span> {hd.rating}</p>
                </div>
              );
            })}
          </div>

        

      </div>
    </>
  );
}
