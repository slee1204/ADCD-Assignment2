import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import benjerry from "../data/bj_product.json";

import { useState, useEffect } from 'react'

export default function BJ() {

  const [bjlist, setBjlist] = useState([]);

  useEffect(() => {
    console.log (bjlist)
  }, [bjlist])

  return (
    <>
      <Head>
        <title>Ben & Jerry's Icecream</title>
        <meta name="author" content="Sue Lee"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar">
        <Link href="/"> &lt;&nbsp;Home </Link>
        <Link href="/haagen_dazs">Haagen Dazs &nbsp;&gt;</Link>
      </nav>

      <div className="container">

        <div className="header">
          <h1>Ben & Jerry's Icecream</h1>
          <h3>Click the image to add it to your list!</h3>
        </div>

        <h2>My List</h2>
        <div className="lists">
            
            {bjlist.map((item, index) => {
              return (
                <p key={index} className="list">
                {item}
                </p>
              )
            }
            )}
          
        </div>

          <div className="grid">
            {benjerry.map((bj, index) => {
              return (
                <div className="items" key={index} 
                  onClick={ ()=>{
                    if(bjlist.includes(bj.name)){
                      alert("This item is already added")
                    } else {
                    setBjlist([bj.name, ...bjlist])
                    }}}
                >
                  <Image
                    src={bj.picture}
                    alt={bj.name}
                    width={200}
                    height={200}
                  />
                  <h3>{bj.name}</h3>
                  <p>{bj.subhead}</p>
                  <p> <span>&#9733;</span> {bj.rating}</p>
                </div>
              );
            })}
          </div>

        

      </div>
    </>
  );
}