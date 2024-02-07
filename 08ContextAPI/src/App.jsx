// import { useState } from "react";
// import "./App.css";
// import { ThemeProvider } from "./context/Theme";

import { useState } from "react";

// function App() {
//   const [themeMode, setThememode] = useState("Light");

//   return (
//     <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
//       <h1>hello</h1>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             {/* theme */}
//           </div>
//           <div className="w-full max-w-sm mx-auto">{/* card */}</div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

const App = () => {
  const [value, setValue] = useState("0");

  const handleBtn = () => {
    setValue((value) => (value = "1"));
  };

  return (
    <>
      <h1>hello</h1>
      <p>{value}</p>
      <button onClick={handleBtn}>click</button>
    </>
  );
};

export default App;
