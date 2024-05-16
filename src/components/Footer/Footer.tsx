import "./Footer.css";
import call from "../public/Footer/Vector.png";
import dot from "../public/Footer/Vector (1).png";
import mail from "../public/Footer/Vector (2).png";

// Propsga mana bunga oxshagan data solsangiz boladi
const data = [
  {
    mainName: "Company Info",
    list: ["About Us", "About Us", "About Us", "About Us"],
  },
  {
    mainName: "Company Info",
    list: ["About Us", "About Us", "About Us", "About Us"],
  },
  {
    mainName: "Company Info",
    list: ["About Us", "About Us", "About Us", "About Us"],
  },
  {
    mainName: "Company Info",
    list: ["About Us", "About Us", "About Us", "About Us"],
  },
  {
    mainName: "Get In Touch",
    list: [
      <div>
        <div className="img">
          <img src={call} alt="" className="call" />
        </div>
        (480) 555-0103
      </div>,
      <div>
        <div className="img">
          <img src={dot} alt="" className="dot" />
        </div>
        4517 Washington Ave. Manchester, Kentucky 39495
      </div>,
      <div>
        <div className="img">
          <img src={mail} alt="" className="mail" />
        </div>
        debra.holt@example.com
      </div>,
    ],
  },
];

interface props {
  lists: any[];
}

//===================================================
// Hoxlasangiz props yoki data ishlatsa boladi
// Agar propsdan olsangiz layer page ga mana bularni import qili qoyish kerak
//                 ||
//                 \/
// import call from "../public/Footer/Vector.png";
// import dot from "../public/Footer/Vector (1).png";
// import mail from "../public/Footer/Vector (2).png";
// ===================================================
/* <Footer lists={data} /> */
//                                  /\
// Bu navbarni chaqirib olish uchun ||

const Footer = ({ lists }: props) => {
  return (
    <div className="footer font-sans">
      <div className="top">
        {/* Agar static bolsa bu boladi tepada datani ozgartirsa boladi ==> */}
        {data.map((e, i) => (
          <div key={i} className="list">
            <h2>{e.mainName}</h2>
            {e.list.map((l: any) => (
              <a href="#">{l}</a>
            ))}
          </div>
        ))}

        {/* <===================================> */}
        {/* Agar props ishlatmoqchi bolsangiz ==> */}
        {/* <===================================> */}
        {/* {lists.map((e, i) => (
          <div key={i} className='list'>
            <h2>{e.mainName}</h2>
            {e.list.map((l: any) => (
              <a href='#'>{l}</a>
            ))}
          </div>
        ))} */}
      </div>
      <div className="bottom">
        <h3>Made With Love By Figmaland All Right Reserved </h3>
        <div className="social">
          <a href="#">
            <svg
              width="23.000000"
              height="23.000000"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M22.5 11.57C22.5 5.17 17.35 0 11 0C4.64 0 -0.5 5.17 -0.5 11.57C-0.5 17.34 3.7 22.13 9.2 23L9.2 14.91L6.28 14.91L6.28 11.57L9.2 11.57L9.2 9.02C9.2 6.12 10.92 4.52 13.54 4.52C14.8 4.52 16.12 4.74 16.12 4.74L16.12 7.59L14.67 7.59C13.24 7.59 12.79 8.48 12.79 9.4L12.79 11.57L15.98 11.57L15.47 14.91L12.79 14.91L12.79 22.99C18.29 22.13 22.5 17.34 22.5 11.57Z"
                fill="#FF685B"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="22.000000"
              height="22.000000"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M10.5 0C7.51 0 7.13 0.01 5.96 0.06C4.79 0.12 3.99 0.3 3.29 0.57C2.56 0.85 1.89 1.28 1.34 1.84C0.78 2.39 0.35 3.06 0.07 3.79C-0.2 4.49 -0.39 5.29 -0.44 6.46C-0.49 7.63 -0.5 8.01 -0.5 11C-0.5 13.98 -0.49 14.36 -0.44 15.53C-0.38 16.7 -0.2 17.5 0.07 18.2C0.35 18.92 0.73 19.54 1.34 20.15C1.95 20.76 2.57 21.14 3.29 21.42C3.99 21.69 4.79 21.88 5.96 21.93C7.13 21.98 7.51 22 10.5 22C13.48 22 13.86 21.98 15.03 21.93C16.2 21.87 17 21.69 17.7 21.42C18.44 21.14 19.1 20.71 19.65 20.15C20.26 19.54 20.64 18.92 20.92 18.2C21.19 17.5 21.37 16.7 21.43 15.53C21.48 14.36 21.5 13.98 21.5 11C21.5 8.01 21.48 7.63 21.43 6.46C21.37 5.29 21.19 4.49 20.92 3.79C20.64 3.06 20.21 2.39 19.65 1.84C19.1 1.28 18.43 0.85 17.7 0.57C17 0.3 16.2 0.11 15.03 0.06C13.85 0.01 13.48 0 10.49 0L10.5 0L10.5 0ZM9.51 1.98L10.5 1.98C13.43 1.98 13.78 1.99 14.94 2.04C16.01 2.09 16.6 2.27 16.98 2.42C17.5 2.62 17.86 2.86 18.25 3.24C18.63 3.63 18.87 3.99 19.07 4.51C19.22 4.89 19.4 5.48 19.45 6.55C19.5 7.71 19.51 8.06 19.51 10.99C19.51 13.93 19.5 14.28 19.45 15.44C19.4 16.51 19.22 17.09 19.07 17.48C18.89 17.96 18.61 18.39 18.25 18.74C17.86 19.13 17.5 19.36 16.98 19.56C16.6 19.72 16.01 19.89 14.94 19.94C13.78 20 13.43 20.01 10.5 20.01C7.56 20.01 7.21 20 6.05 19.94C4.98 19.89 4.4 19.72 4.01 19.56C3.53 19.39 3.1 19.11 2.74 18.74C2.38 18.39 2.1 17.95 1.92 17.48C1.77 17.09 1.59 16.51 1.54 15.43C1.49 14.28 1.48 13.93 1.48 10.99C1.48 8.05 1.49 7.71 1.54 6.55C1.59 5.47 1.77 4.89 1.92 4.5C2.12 3.99 2.36 3.62 2.74 3.24C3.13 2.85 3.5 2.62 4.01 2.42C4.4 2.27 4.98 2.09 6.05 2.04C7.07 1.99 7.46 1.98 9.51 1.98L9.51 1.98ZM16.37 3.8C16.19 3.8 16.02 3.84 15.86 3.9C15.7 3.97 15.56 4.07 15.43 4.19C15.31 4.31 15.21 4.46 15.15 4.62C15.08 4.78 15.05 4.95 15.05 5.12C15.05 5.3 15.08 5.47 15.15 5.63C15.21 5.79 15.31 5.93 15.43 6.06C15.56 6.18 15.7 6.28 15.86 6.34C16.02 6.41 16.19 6.44 16.37 6.44C16.72 6.44 17.05 6.3 17.3 6.06C17.55 5.81 17.69 5.47 17.69 5.12C17.69 4.77 17.55 4.44 17.3 4.19C17.05 3.94 16.72 3.8 16.37 3.8ZM10.5 5.35C9.75 5.33 9 5.47 8.31 5.75C7.61 6.03 6.98 6.44 6.44 6.97C5.91 7.5 5.49 8.12 5.2 8.81C4.91 9.5 4.76 10.25 4.76 11C4.76 11.75 4.91 12.49 5.2 13.18C5.49 13.87 5.91 14.5 6.44 15.02C6.98 15.55 7.61 15.96 8.31 16.24C9 16.52 9.75 16.66 10.5 16.64C11.98 16.62 13.39 16.02 14.43 14.96C15.47 13.9 16.06 12.48 16.06 11C16.06 9.51 15.47 8.09 14.43 7.03C13.39 5.98 11.98 5.37 10.5 5.35ZM10.5 7.33C11.47 7.33 12.4 7.71 13.09 8.4C13.78 9.09 14.16 10.02 14.16 11C14.16 11.97 13.78 12.9 13.09 13.59C12.4 14.28 11.47 14.66 10.5 14.66C9.52 14.66 8.59 14.28 7.9 13.59C7.22 12.9 6.83 11.97 6.83 11C6.83 10.02 7.22 9.09 7.9 8.4C8.59 7.71 9.52 7.33 10.5 7.33Z"
                fill="#FF685B"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="22.000000"
              height="18.000000"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M6.41 18C14.71 18 19.25 11.07 19.25 5.07C19.25 4.88 19.25 4.68 19.24 4.49C20.13 3.84 20.89 3.04 21.5 2.13C20.67 2.5 19.79 2.74 18.9 2.85C19.84 2.28 20.55 1.39 20.89 0.33C20 0.86 19.03 1.23 18.02 1.43C17.34 0.7 16.44 0.22 15.46 0.06C14.48 -0.11 13.47 0.06 12.59 0.53C11.72 1 11.02 1.75 10.61 2.67C10.2 3.58 10.1 4.6 10.32 5.58C8.53 5.49 6.77 5.02 5.17 4.2C3.57 3.38 2.15 2.23 1.02 0.83C0.44 1.83 0.27 3.01 0.53 4.14C0.79 5.27 1.46 6.25 2.42 6.9C1.7 6.87 1 6.68 0.37 6.33L0.37 6.39C0.38 7.44 0.74 8.46 1.4 9.27C2.06 10.08 2.97 10.64 3.99 10.85C3.61 10.96 3.21 11.01 2.8 11.01C2.52 11.01 2.24 10.98 1.96 10.93C2.25 11.83 2.81 12.62 3.57 13.19C4.32 13.75 5.24 14.06 6.18 14.08C4.58 15.35 2.6 16.03 0.57 16.03C0.21 16.03 -0.15 16.01 -0.5 15.97C1.56 17.29 3.96 18 6.41 18Z"
                fill="#FF685B"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
