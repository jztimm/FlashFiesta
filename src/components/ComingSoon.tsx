import React from "react";

interface ComingSoonProps {
  // Props can be expanded as needed.
  message?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  message = "Stay tuned, something awesome is coming soon!",
}) => {
  return (
    <div className="flex-center min-h-screen w-full">
      <div className="max-w-5xl mx-auto px-5">
        <h1 className="h1-bold text-center">Coming Soon</h1>
        <p className="body-medium mt-5 text-center">{message}</p>
      </div>
    </div>
  );
};

export default ComingSoon;
