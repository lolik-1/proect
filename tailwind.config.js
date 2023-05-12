/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "buttonColor" : "#EF7F04",
      "buttonColorHover" :"#3B3A63",
      "bginput" : "#e5e7eb",
      "black" : "#000000",
      "white" : "#ffffff",
      "blue" : "#4B67AF",
    },
    backgroundImage: {
      'hero': "url('../public/img/back.png')",
      'cards' : "url('../public/img/Cardsbg1.png')",
      'cards2' : "url('../public/img/Cardsbg2.png')",
      'cards3' : "url('../public/img/Cardsbg3.png')",
      'cards4' : "url('../public/img/Cardsbg4.png')",
      'compan' : "url('../public/img/Compan.png')",
    
    },
   
   
  
  },
  plugins: [],
}