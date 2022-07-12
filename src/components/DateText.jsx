import { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  background: linear-gradient(#333 10%, #111 50%, #333 50% 60%, #111 100%) padding-box, linear-gradient(#888 0%, #000 50%, #888 100%) border-box;
  border: 0.5px solid transparent;
`
const Text = styled.div`
  background: linear-gradient(#aaa 20%, #fff, #aaa, #fff, #aaa 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Line = styled.div`
  background: linear-gradient(#444, #000 10%, #000 90%, #444);
`

const Clip = styled.div`
  background: linear-gradient(#fff 20%, #666 70%, #aaa) padding-box, linear-gradient(#000, #000) border-box;
  border: 1px solid transparent;
  `

export default function DateText() {
  const [{year, month, date, hours, minutes, seconds, day}, setDate] = useState(getNow());
  const time = [...(hours + minutes + seconds)];
  console.log(time);
  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(getNow());
    }, 1000);
    return () => {
      clearInterval(dateInterval);
    }
  }, [])

  return (
    <div className="m-4 p-4 bg-neutral-800 rounded-md w-min">
      <div className="text-gray-200">
        <div className="flex justify-between">
          <div>
            {year}-{month}-{date}
          </div>
          <div>
            {day}
          </div>
        </div>
        <div className="flex justify-center m-4">
          {time.map((number, index) => (
            <div className="flex items-center">
              <div className="flex items-center mx-1 border-solid border-2 border-black rounded-md bg-black">
                <Box className="relative flex justify-center items-center rounded-md bg-contain w-18 h-28">
                  <Text className="text-center text-8xl font-semibold w-full h-full">
                    {number}
                  </Text>
                  <div className="absolute flex items-center w-full">
                    <Clip className="absolute w-2 h-4 top-auto bottom-auto z-40"></Clip>
                    <Line className="absolute top-auto bottom-auto z-30 bg-black w-full h-0.75"></Line>
                    <Clip className="absolute w-2 h-4 top-auto bottom-auto z-40 right-0"></Clip>
                  </div>
                </Box>
              </div>
              { (index % 2 === 1 && index !== 5) &&
                <div className="text-5xl">
                  <span className="text-center align-super font-semibold">:</span>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getNow() {
  const date = new Date();
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  const now = {
    year: fitDigit(date.getFullYear()),
    month: fitDigit(date.getMonth() + 1),
    date: fitDigit(date.getDate()),
    hours: fitDigit(date.getHours()),
    minutes: fitDigit(date.getMinutes()),
    seconds: fitDigit(date.getSeconds().toString()),
    day: day[date.getDay()],
  }
  return now;

  function fitDigit(number) {
    return ("0" + number.toString()).slice(-2);
  }
}