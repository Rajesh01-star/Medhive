import image1 from "../../public/images/image1.jpg";
import image2 from "../../public/images/image2.jpg";
import image3 from "../../public/images/image3.jpg";
import image4 from "../../public/images/image4.jpg";
import image5 from "../../public/images/image5.jpg";
import image6 from "../../public/images/image6.jpg";
import image7 from "../../public/images/image7.jpg";


const images = [
  {
    link: image1,
    name: "first",
  },
  {
    link: image2,
    name: "second",
  },
  {
    link: image3,
    name: "third",
  },
  {
    link: image4,
    name: "fourth",
  },
  {
    link: image5,
    name: "fifth",
  },
  {
    link: image6,
    name: "sixth",
  },
  {
    link: image7,
    name: "seventh",
  },
];

export default images;
// let data;

// const fetchData = async () => {
//   try {
//     const response = await fetch('http://localhost:3001/hosp');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     data = await response.json();
//     console.log('Data from localhost:3001/hosp:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// export {fetchData}



  