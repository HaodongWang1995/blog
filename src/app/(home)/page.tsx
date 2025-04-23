"use client"
import Button from "@/components/Button";
import { useEffect, useState } from "react";
const slogan = 'A developer by trade, fueled by travel, healed by animals, dreaming of a simple life in a complicated world.'

export default function Home() {
  const [counter, setCounter] = useState(0);
  let handleSetCounter = ()=>{
    setCounter(
    (val)=>{
      return ++val 
    }
  )}
  return (
    <div>
      {slogan}
      <Button label="btn" onClick={handleSetCounter}></Button>
      counter: {counter}
    </div>
  );
}
