"use client";

import Image from "next/image";
import React, {
    useEffect
} from "react";
import {
    API_URL
} from "../config";
import axios from "axios";
import styles from "./page.module.css";
import BottomCard from "@/cmponents/bottomcard";

function Catfact() {
  const [data, setData] = React.useState(null);
  const [condition, setCondition] = React.useState(false);

  useEffect(() => {
    setCondition(false);
    const handleRequest = async () => {
      try {
        var result = await axios.get(`${API_URL}/catfact`);
        if (typeof result.data.data != "string") {
          setData(JSON.stringify(result.data.fact));
          setCondition(true);
        } else {
          await axios.get(result.data.data).then((re) => {
            setData(JSON.stringify(re.data.fact));
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
        <div>
          <a href="#" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.card}>
              <h2>
                Cat fact
                <span>
                  -&gt;
                  {condition ? (
                    data
                  ) : (
                    <i className="fas fa-heart text-blue-500"> 'Loading...' </i>
                  )}
                </span>
              </h2>
            </div>
          </a>
        </div>
      </div>
      <BottomCard />
    </main>
  );
}

export default Catfact;