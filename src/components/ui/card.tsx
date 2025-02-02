import * as React from "react";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-md ${className}`}>{children}</div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b pb-2 mb-4">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold">{children}</h2>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
