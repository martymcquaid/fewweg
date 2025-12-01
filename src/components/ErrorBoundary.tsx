import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: Error; info?: React.ErrorInfo };

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    // Update state so the next render shows a fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log the error to an external service here
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Premium-looking fallback UI
      return (
        <div className="p-8 md:p-12 text-center bg-gradient-to-br from-red-50 to-pink-50 min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto rounded-2xl p-6 bg-white shadow-2xl border border-red-100">
            <h2 className="text-2xl font-bold text-red-700 mb-2">Something went wrong</h2>
            <p className="text-sm text-slate-600 mb-4">
              An unexpected error occurred while rendering this page. Our team has been alerted and a refresh may help.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow hover:scale-105 transition-transform"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;