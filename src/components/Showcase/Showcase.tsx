import React from "react";
import "./Showcase.css";
import Title from "../Title/Title";
import Card from "./Card/Card";

const cards = [
  {
    icon: (
      <svg
        width="32.000000"
        height="29.000000"
        viewBox="0 0 32 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <path
          id="Vector"
          d="M15.99 2.21C9.01 -3.89 0.14 1.47 0 8.74C-0.04 10.59 0.49 12.39 1.56 14.06L8.46 14.06L9.68 12.01C10.04 11.42 10.9 11.4 11.28 11.99L13.87 16.06L17.64 8.09C17.97 7.4 18.95 7.38 19.31 8.05L22.55 14.06L30.41 14.06C36.24 4.95 24.72 -5.43 15.99 2.21Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M21.16 15.44L18.54 10.57L14.83 18.4C14.52 19.06 13.59 19.12 13.2 18.5L10.51 14.28L9.79 15.48C9.62 15.76 9.32 15.93 8.99 15.93L3.04 15.93C3.23 16.13 2.24 15.14 15.33 28.16C15.69 28.52 16.28 28.52 16.65 28.16C29.54 15.34 28.75 16.13 28.93 15.93L21.99 15.93C21.64 15.93 21.32 15.74 21.16 15.44Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
    ),
    title: "Online Appoinment",
  },
  {
    icon: (
      <svg
        width="29.000000"
        height="32.000000"
        viewBox="0 0 29 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M8.25 20.58L8.25 23.5C8.25 28.15 12.03 32 16.68 32C21.33 32 25.12 28.15 25.12 23.5L25.12 22.46C27.26 22.03 28.87 20.13 28.87 17.87C28.87 15.29 26.77 13.18 24.18 13.18C21.6 13.18 19.5 15.29 19.5 17.87C19.5 20.13 21.11 22.03 23.25 22.46L23.25 23.5C23.25 27.11 20.3 30.12 16.68 30.12C13.06 30.12 10.12 27.11 10.12 23.5L10.12 20.58C13.95 19.88 18.36 15.13 19.13 10.61C19.63 7.64 18.39 5.27 15.75 4.08L15.75 2.81C15.75 1.26 14.48 0 12.93 0C11.38 0 10.12 1.26 10.12 2.81C10.12 4.36 11.38 5.62 12.93 5.62L14.6 5.62C16.75 6.42 17.66 8.03 17.28 10.3C16.62 14.2 12.23 18.81 9.18 18.81C5.77 18.81 1.02 13.39 0.99 9.37C0.98 7.58 1.92 6.3 3.74 5.62L5.43 5.62C6.98 5.62 8.25 4.36 8.25 2.81C8.25 1.26 6.98 0 5.43 0C3.88 0 2.62 1.26 2.62 2.81L2.62 4.07C0.37 5.08 -0.88 6.97 -0.88 9.37C-0.87 14.07 4 19.8 8.25 20.58ZM23.25 16.93L25.12 16.93L25.12 18.81L23.25 18.81L23.25 16.93Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
    ),
    title: "Emergency Case",
  },
  {
    icon: (
      <svg
        width="32.000000"
        height="32.000000"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="clip1_145">
            <rect
              id="005-medical-history"
              width="32.000000"
              height="32.000000"
              fill="white"
              fillOpacity="0"
            />
          </clipPath>
        </defs>
        <rect
          id="005-medical-history"
          width="32.000000"
          height="32.000000"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        <g clip-path="url(#clip1_145)">
          <path
            id="Vector"
            d="M6.34 32L25.65 32C26.79 32 27.75 31.12 27.75 30.04L27.75 6.62C27.75 5.54 26.79 4.66 25.65 4.66L22.46 4.66L22.46 6.44C22.47 6.75 22.22 7.01 21.91 7.02L10.04 7.02C9.72 7.01 9.47 6.76 9.46 6.44L9.46 4.66L6.34 4.66C5.19 4.66 4.24 5.54 4.24 6.62L4.24 30.04C4.24 31.12 5.19 32 6.34 32ZM10.64 14.05C10.64 13.74 10.89 13.49 11.19 13.49L14.05 13.49L14.05 10.64C14.05 10.33 14.3 10.08 14.6 10.08L17.39 10.08C17.69 10.08 17.94 10.33 17.94 10.64L17.94 13.49L20.79 13.49C21.1 13.49 21.35 13.74 21.35 14.05L21.35 16.83C21.35 17.14 21.1 17.39 20.79 17.39L17.94 17.39L17.94 20.24C17.94 20.55 17.69 20.8 17.39 20.8L14.6 20.8C14.3 20.8 14.05 20.55 14.05 20.24L14.05 17.39L11.19 17.39C10.89 17.39 10.64 17.14 10.64 16.83L10.64 14.05ZM10.87 23.65L21.12 23.65C21.43 23.65 21.68 23.9 21.68 24.2C21.68 24.51 21.43 24.76 21.12 24.76L10.87 24.76C10.56 24.76 10.31 24.51 10.31 24.2C10.31 23.9 10.56 23.65 10.87 23.65ZM8.78 26.43L23.21 26.43C23.52 26.43 23.77 26.68 23.77 26.99C23.77 27.29 23.52 27.54 23.21 27.54L8.78 27.54C8.47 27.54 8.22 27.29 8.22 26.99C8.22 26.68 8.47 26.43 8.78 26.43Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M21.35 2.15L18.75 2.15C18.49 2.15 18.26 1.97 18.2 1.71C17.99 0.72 17.04 0 15.96 0L15.95 0C14.89 -0.01 13.97 0.71 13.71 1.73C13.64 1.98 13.42 2.15 13.17 2.15L10.57 2.15L10.57 5.91L21.35 5.91L21.35 2.15Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M15.16 16.83L15.16 19.68L16.83 19.68L16.83 16.83C16.83 16.52 17.08 16.27 17.39 16.27L20.24 16.27L20.24 14.6L17.39 14.6C17.08 14.6 16.83 14.35 16.83 14.05L16.83 11.2L15.16 11.2L15.16 14.05C15.16 14.35 14.91 14.6 14.6 14.6L11.75 14.6L11.75 16.27L14.6 16.27C14.91 16.27 15.16 16.52 15.16 16.83Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </g>
      </svg>
    ),
    title: "Cancer Care",
  },
];

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container flex flex-col gap-20">
        <div className="relative">
          <div className="flex flex-col gap-9">
            <Title
              types="showcase"
              header="Join Us"
              headline="A Great Place to Receive Care"
              subHeadline="Medical Recover is most focused in helping you 
            discover your most beauiful smile"
            />
            <div className="flex gap-3">
              <button>Get Quote Now</button>
              <button>Learn More</button>
            </div>
          </div>
          <img
            src="/imgs/showcase-doctor.svg"
            alt=""
            className="absolute bottom-1/3 translate-y-1/2 right-0 h-[700px] w-[60%] object-cover object-top"
          />
        </div>
        <div className="showcase-cards relative">
          {cards.map((card) => {
            return <Card icon={card.icon} title={card.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
