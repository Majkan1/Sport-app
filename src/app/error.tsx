"use client";

export default function Error({error,reset,}: {error: Error;reset: () => void;}) {
  return (
    <div role="alert" className="flex min-h-screen items-center justify-center bg-white">
      <div className="max-w-md mx-auto px-6 py-10 bg-white rounded-lg shadow-sm border-l-4 border-red-500 text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-red-600 mb-1">Oops!</h2>
          <p className="text-slate-600 text-sm">Something went wrong</p>
        </div>
        <div className="mb-6 p-3 bg-red-50 rounded-lg">
          <p className="text-red-700 font-semibold text-xs">{error.message || 'An unexpected error occurred'}</p>
        </div>
        <button 
          onClick={reset}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm"
        >
          🔄 Try again
        </button>
      </div>
    </div>
  );
}
