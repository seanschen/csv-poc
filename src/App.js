import './App.css';
import {flatfileImporter} from "@flatfile/sdk";

const divStyle = {
    margin: "2px",
    border: '1px solid black',
    textAlign: "center",
    padding: "5px",
    height: "5%",
    width: "25%"
};

function App() {
    const importer = flatfileImporter("");

    return (
        <div className="App">
            <div style={divStyle}>
                <p>
                    Flatfile
                </p>
                <button onClick={async () => {
                    await importer.__unsafeGenerateToken({
                        privateKey: "sDHtbqUJ8uPDHeubK1ErAQXktf0tlZTHVYxpU0FAQ4s89jBbmOgniCUdL8gfzX7S",
                        embedId: "c9f7b192-6903-4244-8f7e-ae8c6e33a4aa",
                        endUserEmail: "sean@comprehensive.io",
                    });
                    await importer.launch()
                }}>Import Data
                </button>
            </div>
            <div style={divStyle}>
                <p>Dromo</p>
                <a href="https://l0blc.csb.app/">Link to Embedded Widget</a>
            </div>
            <div style={divStyle}>
                <p>OneSchema</p>
                <a href="https://www.loom.com/share/379ff48b08244c93a8791292846160c7">Link to Demo Video</a>
            </div>
        </div>
    );
}

export default App;