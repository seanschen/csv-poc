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
    const userJwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiPFVTRVJfSUQ-IiwiaXNzIjoiOWJjODc0ZGItMTNiOC00NmVhLWE2NDItN2NhZmJmYzViNmY3In0.ljfztcF94hlz-0xoIJvLCNP5jRz7rFLTaoNC-BvOBoQ";
    const webhookKey = 'sean-local';

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