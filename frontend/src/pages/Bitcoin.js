'use client'

import Image from 'next/image'
import React, { useEffect } from 'react';
import { API_URL } from '../config';
import axios from 'axios'
import styles from './page.module.css'
import BottomCard from '@/cmponents/bottomcard';
// import './page.css'
// import { Container, Input, Row, Col } from 'react-bootstrap';
const instance = axios.create({timeout:5000})

function Bitcoin() {
    const [data, setData] = React.useState(null);
    const [condition, setCondition] = React.useState(false);
    useEffect(() => {
        setCondition(false)
        const handleRequest = async () => {
            try {
              var result = await axios.get(`${API_URL}/bitcoin`);
              if (typeof result.data.data != "string") {
                setData(result.data.data);
                setCondition(true);
              } else {
                await axios.get(result.data.data).then((re) => {
                  setData(re);
                  setCondition(true);
                });
              }
            } catch (error) {
              window.alert(" error ocurs");
            }
          };
        handleRequest()
    }, [])

    return (
      <main className={styles.main}>
          <div className={styles.description}>
              <a href='/'><p>Go to home</p></a>
          </div>
          <div className={styles.center}  >
            <a href="#" rel="noopener noreferrer" className={styles.card}>
              <h2>
                  Bitcoin Price <span className='text-red-500'>-&gt;{condition ? data.data.bpi.USD.rate :<i className="fas fa-heart text-blue-500">'Loading...'</i>  }</span>
              </h2>
              <p className='flex justify-center items-center'>USD:rate</p>
            </a>
          </div>
          <BottomCard />
      </main>
    )
}


export default Bitcoin;