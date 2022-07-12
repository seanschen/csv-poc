import './App.css';
import {flatfileImporter} from "@flatfile/sdk";
import OneSchemaImporter from "@oneschema/react"
import { useState } from "react"

const divStyle = {
    margin: "2px",
    border: '1px solid black',
    textAlign: "center",
    padding: "5px",
    height: "5%",
    width: "25%"
};
const oneSchemaStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const importer = flatfileImporter("");

    const onSuccess = (data) => {
        // TODO handle success
    }

    const onCancel = () => {
        // TODO handle cancel
    }

    const onError = (message) => {
        // TODO handle error
    }


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
                <button onClick={() => setIsOpen(true)}>Import</button>
            </div>
            <OneSchemaImporter
                /* managing state from your application */
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                /* required config values */
                clientId="9bc874db-13b8-46ea-a642-7cafbfc5b6f7"
                userJwt="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiPFVTRVJfSUQ-IiwiaXNzIjoiOWJjODc0ZGItMTNiOC00NmVhLWE2NDItN2NhZmJmYzViNmY3In0.ljfztcF94hlz-0xoIJvLCNP5jRz7rFLTaoNC-BvOBoQ"
                templateKey="employee_metadata"
                /* optional config values */
                blockImportIfErrors={true}
                devMode={true}
                style={oneSchemaStyle}
                /* handling results */
                onSuccess={onSuccess}
                onCancel={onCancel}
                onError={onError}
            />
        </div>
    );
}

export default App;