import './App.css';
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
    const [isBenchmarksOpen, setIsBenchmarksOpen] = useState(false)
    const [isCapTableOpen, setIsCapTableOpen] = useState(false)
    const [isPerformanceOpen, setIsPerformanceOpen] = useState(false)
    const [isPayrollOpen, setIsPayrollOpen] = useState(false)
    const [isEmploymentMetadataOpen, setIsEmploymentMetadataOpen] = useState(false)

    const clientId = "9bc874db-13b8-46ea-a642-7cafbfc5b6f7";
    const userJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5YmM4NzRkYi0xM2I4LTQ2ZWEtYTY0Mi03Y2FmYmZjNWI2ZjciLCJ1c2VyX2lkIjoiYWJjMTIzIiwiY29tcGFueUlkIjoyLCJpYXQiOjE2NjIwMTc1OTUsImV4cCI6MjY2MzAxNzU5NX0.hcddKtI30S7iOzcRjYYMs6KejOpnJ5YDy4mO7__ecSo";
    const webhookKey = "dev";

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
                <p>Benchmarks</p>
                <button onClick={() => setIsBenchmarksOpen(true)}>Import</button>
            </div>
            <OneSchemaImporter
                /* managing state from your application */
                isOpen={isBenchmarksOpen}
                onRequestClose={() => setIsBenchmarksOpen(false)}
                /* required config values */
                clientId={clientId}
                userJwt={userJwt}
                templateKey="benchmarks"
                /* optional config values */
                webhookKey={webhookKey}
                config={{
                    blockImportIfErrors: true,
                }}
                style={oneSchemaStyle}
                /* handling results */
                onSuccess={onSuccess}
                onCancel={onCancel}
                onError={onError}
            />
            <div style={divStyle}>
                <p>Cap Table</p>
                <button onClick={() => setIsCapTableOpen(true)}>Import</button>
            </div>
            <OneSchemaImporter
                /* managing state from your application */
                isOpen={isCapTableOpen}
                onRequestClose={() => setIsCapTableOpen(false)}
                /* required config values */
                clientId={clientId}
                userJwt={userJwt}
                templateKey="cap_table"
                /* optional config values */
                webhookKey={webhookKey}
                config={{
                    blockImportIfErrors: true,
                }}
                style={oneSchemaStyle}
                /* handling results */
                onSuccess={onSuccess}
                onCancel={onCancel}
                onError={onError}
            />
            <div style={divStyle}>
                <p>Performance</p>
                <button onClick={() => setIsPerformanceOpen(true)}>Import</button>
            </div>
            <OneSchemaImporter
                /* managing state from your application */
                isOpen={isPerformanceOpen}
                onRequestClose={() => setIsPerformanceOpen(false)}
                /* required config values */
                clientId={clientId}
                userJwt={userJwt}
                templateKey="performance"
                /* optional config values */
                webhookKey={webhookKey}
                config={{
                    blockImportIfErrors: true,
                }}
                style={oneSchemaStyle}
                /* handling results */
                onSuccess={onSuccess}
                onCancel={onCancel}
                onError={onError}
            />
            <div style={divStyle}>
                <p>Payroll</p>
                <button onClick={() => setIsPayrollOpen(true)}>Import</button>
            </div>
            <OneSchemaImporter
                /* managing state from your application */
                isOpen={isPayrollOpen}
                onRequestClose={() => setIsPayrollOpen(false)}
                /* required config values */
                clientId={clientId}
                userJwt={userJwt}
                templateKey="payroll"
                /* optional config values */
                webhookKey={webhookKey}
                config={{
                    blockImportIfErrors: true,
                }}
                style={oneSchemaStyle}
                /* handling results */
                onSuccess={onSuccess}
                onCancel={onCancel}
                onError={onError}
            />
            <div style={divStyle}>
                <p>Employment Data</p>
                <button onClick={() => setIsEmploymentMetadataOpen(true)}>Import</button>
            </div>
            <OneSchemaImporter
                /* managing state from your application */
                isOpen={isEmploymentMetadataOpen}
                onRequestClose={() => setIsEmploymentMetadataOpen(false)}
                /* required config values */
                clientId={clientId}
                userJwt={userJwt}
                templateKey="employment_data"
                /* optional config values */
                webhookKey={webhookKey}
                config={{
                    blockImportIfErrors: true,
                }}
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