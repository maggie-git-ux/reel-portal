import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <div className="w-full max-w-6xl mx-auto px-4 py-4">
      {children}
    </div>
  </div>
);

export default DashboardLayout;
