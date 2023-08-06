"use client";

import React, {
    useEffect
} from "react";
import {
    API_URL
} from "../config";
import axios from "axios";
import styles from "./page.module.css";
import BottomCard from "@/cmponents/bottomcard";

function Activity() {
  const [data, setData] = React.useState(null);
  const [condition, setCondition] = React.useState(false);
  useEffect(() => {
    setCondition(false);
    const handleRequest = async () => {
      try {
        var result = await axios.get(`${API_URL}/activity`);
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
    handleRequest();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/">
          <p> Go to home </p>
        </a>
      </div>
      <div className={styles.center}>
        <a href="#" rel="noopener noreferrer" className={styles.card}>
          <div>
            <h2>
              Activity
              <span>
               
                -&gt;
                {condition ? (
                  data.data.activity
                ) : (
                  <i className="fas fa-heart text-blue-500"> 'Loading...' </i>
                )}
              </span>
            </h2>
            <p className="flex justify-center items-center"> activity </p>
          </div>
        </a>
      </div>
      <BottomCard />
    </main>
  );
}

export default Activity;