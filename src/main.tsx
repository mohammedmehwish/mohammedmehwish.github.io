import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in portfolio:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#070b19', color: '#00f0ff', fontFamily: 'monospace', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>SYSTEM RECOVERY INITIALIZED</h2>
          <p style={{ color: '#94a3b8', marginBottom: '24px' }}>An unexpected interface event was intercepted.</p>
          <pre style={{ background: '#0f172a', padding: '16px', borderRadius: '8px', border: '1px solid rgba(0,240,255,0.3)', color: '#f43f5e', maxWidth: '600px', overflowX: 'auto', marginBottom: '24px', textAlign: 'left' }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '12px 24px', background: '#00f0ff', color: '#070b19', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'monospace' }}
          >
            REBOOT SYSTEM (RELOAD)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

