import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Bienvenido a mi PWA 🚀</h1>
      <p>Esta es una Progressive Web App básica creada con Vite + React + TS.</p>
      <button onClick={() => alert("¡PWA funcionando!")}>
        Probar acción
      </button>
    </div>
  );
}

export default App;
