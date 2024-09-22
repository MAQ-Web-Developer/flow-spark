"use client";

import { use, useEffect, useState } from "react";
import { Button } from "../Button";
import { IconButtons } from "../IconButtons";
import { ArrowLeft } from "@/app/icons/ArrowLeft";
import { ArrowRight1 } from "@/app/icons/ArrowRight1";

import ImageSlider from "../ImageSlider";

export default function Slider() {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(3);
  const [sliderNumber, setSliderNumber] = useState(1);

  const [step, setStep] = useState(1);

  useEffect(() => {
    const intervalTime = (second * 1000) / 100; // Calculate interval time based on seconds
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          setCount(0);
          setStep(step + 1);

          clearInterval(interval); // Clear interval when count reaches 100
          return prevCount;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [count]);

  useEffect(() => {
    setCount(0);

    if (step > 5) {
      setStep(1);
    }
  }, [step]);

  useEffect(() => {}, []);

  return (
    <div className="flex w-[1064px] items-center justify-between p-16 relative flex-[0_0_auto] bg-primary-100 rounded-[20px] overflow-hidden">
      <div className="flex flex-col w-[415px] items-start gap-8 relative">
        <div className="relative w-fit mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-neutral-800 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] whitespace-nowrap [font-style:var(--heading-h2-font-style)]">
          FlowSpark features <div>{/* Display the count */}</div>
        </div>
        <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
          {[1, 2, 3, 4, 5].map((number) => (
            <div
              key={number}
              className="inline-flex items-center gap-4 rounded-[1px] relative flex-[0_0_auto] cursor-pointer"
              onClick={() => {
                setSliderNumber(number);
                setCount(0);
              }}
            >
              <div>
                <img
                  className="relative w-1 h-12"
                  alt="Line"
                  src="/img/line-19-4.svg"
                />
                <div
                  className="absolute top-0 left-0 w-1 rounded-[1px] bg-[#32baae] "
                  style={{
                    height: `${sliderNumber === number ? "100" : "0"}%`,
                  }}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-normal-heavy font-[number:var(--body-normal-heavy-font-weight)] text-neutral-800 text-[length:var(--body-normal-heavy-font-size)] tracking-[var(--body-normal-heavy-letter-spacing)] leading-[var(--body-normal-heavy-line-height)] whitespace-nowrap [font-style:var(--body-normal-heavy-font-style)]">
                  {number === 1 && "Effortless interface"}
                  {number === 2 && "Seamless connections"}
                  {number === 3 && "Tailored experience"}
                  {number === 4 && "All-in-One platform"}
                  {number === 5 && "Smart insights"}
                </div>
                <div className="relative w-fit font-body-normal font-[number:var(--body-normal-font-weight)] text-neutral-800 text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                  {number === 1 && "Simplify your marketing"}
                  {number === 2 && "Total sync with your tools"}
                  {number === 3 && "Customise with ease"}
                  {number === 4 && "Unified marketing mastery"}
                  {number === 5 && "AI-powered marketing intelligence"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[415px] items-start gap-6 relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-neutral-800 text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
            Experience simplicity with our user-friendly interface, designed
            for&nbsp;&nbsp;effortless navigation. Transform complex tasks into
            simple actions,&nbsp;&nbsp;enhancing productivity and strategic
            focus. Enjoy a seamless experience&nbsp;&nbsp;that drives results
            and optimizes your marketing efforts efficiently.
          </p>
        </div>
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <Button
            className="!flex-[0_0_auto]"
            divClassName=""
            label="See more features"
            leadingIcon={false}
            size="regular"
            state="default"
            trailingIcon={false}
            type="outline"
          />
        </div>
      </div>
      <div className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
        {sliderNumber == 1 && (
          <ImageSlider setCount={setCount} count={count}>
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=1"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=2"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=3"
            />
          </ImageSlider>
        )}
        {sliderNumber == 2 && (
          <ImageSlider setCount={setCount} count={count}>
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=4"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=5"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=6"
            />
          </ImageSlider>
        )}
        {sliderNumber == 3 && (
          <ImageSlider setCount={setCount} count={count}>
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=7"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=8"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=9"
            />
          </ImageSlider>
        )}
        {sliderNumber == 4 && (
          <ImageSlider setCount={setCount} count={count}>
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=10"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=11"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=12"
            />
          </ImageSlider>
        )}
        {sliderNumber == 5 && (
          <ImageSlider setCount={setCount} count={count}>
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=13"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=14"
            />
            <img
              className="relative w-[460px] h-[460px]"
              alt="Image placeholder"
              src="https://picsum.photos/460?random=15"
            />
          </ImageSlider>
        )}

        <div className="w-1/2 relative">
          <div className="relative self-stretch w-full h-2 bg-[#32baae33] rounded" />
          <div
            className="absolute  h-2 top-[0px] left-0 bg-primary-400 rounded"
            style={{ width: `${count}%    ` }}
          />
        </div>
      </div>
    </div>
  );
}
