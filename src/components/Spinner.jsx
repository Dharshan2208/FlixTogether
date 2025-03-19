import '/src/styles/index.css';

export default function Spinner() {
  return (
    <div className="custom-spinner" role="status">
      <svg
        className="spinner-circle"
        width="32" 
        height="32"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="#AB8BFF" // Deeper blue
          strokeWidth="3"
          strokeDasharray="75 100"
          strokeDashoffset="0"
        />
      </svg>
      <span className="sr-only"></span>
    </div>
  );
}