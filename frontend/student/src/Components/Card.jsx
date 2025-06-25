export const Card = ({ children, className }) => (
    <div className={`rounded-lg shadow-md p-4 bg-gray-800 border border-gray-700 ${className}`}>
      {children}
    </div>
  );
  
export const CardContent = ({ children }) => <div>{children}</div>;
  