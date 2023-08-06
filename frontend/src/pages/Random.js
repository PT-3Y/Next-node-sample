"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { API_URL } from "../config";
import styles from "./page.module.css";
import axios from "axios";
import BottomCard from "@/cmponents/bottomcard";

// import { Container, Input, Row, Col } from 'react-bootstrap';

function Random() {
  const [data, setData] = React.useState(null);
  const [condition, setCondition] = React.useState(false);

  useEffect(() => {
    setCondition(false);
    const handleRequest = async () => {
      try {
        var result = await axios.get(`${API_URL}/random`);
        console.log(result,'================')
        await axios.get(result.data.data).then((re) => {
          setData(re.data.message);
          setCondition(true);
        });
      } catch (error) {
        window.alert(" error ocurs");
      }
    };

    handleRequest();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/">
          <p>Go to home</p>
        </a>
      </div>

      <div className={styles.center}>
        { condition?<img
          className={styles.logo}
          src={data ? data : ""}
          alt="Dog"
          width={200}
          height={100}
          priority
          style={{ borderRadius: "10%" }}
        />:<i className="fas fa-heart text-blue-500">'Loading...'</i>}
      </div>

      <BottomCard />
    </main>
  );
}

export default Random;
