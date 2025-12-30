# Temperature Converter
This is a simple ReactJS Application which converts Celcius to Fahrenheit or Celcius to Kelvin or Fahrenheit to Kelvin and Vice Versa.

## Functionality
The user will enter the temperature and select the temperature type from the dropdown given. After setting the input values, the user will press the convert button and he will get the result on the screen.

## UI
- Input field for the user to enter the temperature value.
- Dropdown menu to select the temperature type.
- Another dropdown to select the target temperature.
- Convert button to trigger the temperature conversion.
- Display area to show the conversion result.

## Temperature Types
- Celcius 
- Fahrenheit
- Kelvin

## Formulas
1. Fahrenheit to Celcius
    `°C = (°F - 32) * 9/5`
2. Fahrenheit to Kelvin
    `K = (°F + 459.67) * (5/9)`
3. Celcius to Fahrenheit
    `°F = (°C * (9/5)) + 32`
4. Celcius to Kelvin
    `K = °C + 273.15`
5. Kelvin to Celcius
    `°C = K - 273.15`;
6. Kelvin to Fahrenheit
    `°F = (K * (9/5)) - 459.17`

## Tech Stack
- React + Vite
- TailwindCSS

## Components used
- Main.jsx
- App.jsx

## Setup
- Start by creating a new Vite project setup.
- Then install all its packages and dependencies
- Install tailwindcss and @tailwindcss/vite via npm
- Add @tailwindcss/vite plugin to your vite configuration
- Add an @import to your CSS file that imports Tailwind CSS 
- Run your build process with npm run dev 

### Commands
- npm create vite@latest
- npm install
- npm install tailwindcss @tailwindcss/vite
- npm run dev
