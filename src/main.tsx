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
    console.error('Portfolio error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#ffffff', color: '#1e293b', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '12px', fontWeight: 700 }}>Something went wrong</h2>
          <p style={{ color: '#64748b', marginBottom: '24px', maxWidth: '400px' }}>An unexpected error occurred while loading the portfolio. Please try refreshing the page.</p>
          <pre style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#ef4444', maxWidth: '600px', overflowX: 'auto', marginBottom: '24px', textAlign: 'left', fontSize: '13px' }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '12px 24px', background: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}
          >
            Refresh Page
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
