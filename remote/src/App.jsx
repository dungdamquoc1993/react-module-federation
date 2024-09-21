import { useEffect } from "react";
import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  useEffect(() => {
    console.log(`Remote App mounted`);
  }, []);
  
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/unity-event.loader.js",
    dataUrl: "/Build/unity-event.data.unityweb",
    frameworkUrl: "/Build/unity-event.framework.js.unityweb",
    codeUrl: "/Build/unity-event.wasm.unityweb",
  });

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <div className="card">
        <h2>Unity WebGL</h2>
        <Unity unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default App;
