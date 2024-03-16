/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linearBlue: {
          1: "#1B5AA8",
          2: "#4F7BB0",
          3: "#96B5DC",
        },
        linearOrange:{
          100 : "#FDAC3D" ,
          200 : "#ED912A" , 
        }
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens:{
        'tablet' : {'min': '769px' , 'max' : '1024px'},
        'mobile' : {'max' : '768px'} , 
        'tablet' : {'min': '769px' , 'max' : '1024px'}
      }
    },
  },
  plugins: [],
};
