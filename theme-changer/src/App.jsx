import { useTheme } from "./theme";

function App() {
   const { theme, switchTheme } = useTheme();

   return (
      <div
         style={{
            backgroundColor: "var(--background)",
            color: "var(--text)",
            minHeight: "100vh",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}
      >
         <h1>Current Theme: {theme}</h1>
         <p>Select a theme to see the colors change.</p>

         {/* Color Boxes */}
         <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            {["primary", "secondary", "background", "text"].map((color) => (
               <div
                  key={color}
                  style={{
                     backgroundColor: `var(--${color})`,
                     color:
                        color === "text" ? "var(--background)" : "var(--text)",
                     width: "100px",
                     height: "100px",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     borderRadius: "8px",
                     border: "1px solid #ddd",
                     fontWeight: "bold",
                  }}
               >
                  {color}
               </div>
            ))}
         </div>

         {/* Theme Switch Buttons */}
         <div style={{ marginTop: "20px" }}>
            {["light", "dark", "blue", "green"].map((t) => (
               <button
                  key={t}
                  style={{
                     backgroundColor: "var(--primary)",
                     color: "var(--text)",
                     padding: "10px 15px",
                     margin: "5px",
                     border: "none",
                     borderRadius: "5px",
                     cursor: "pointer",
                  }}
                  onClick={() => switchTheme(t)}
               >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
               </button>
            ))}
         </div>
      </div>
   );
}

export default App;
