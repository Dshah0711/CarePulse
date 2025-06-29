"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the access key from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessKey");
    }
    
    // Redirect to home page
    router.push("/");
  };

  return (
    <Button 
      onClick={handleLogout} 
      variant="outline"
      className="flex items-center gap-2"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={16} 
        height={16} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
      </svg>
      Logout
    </Button>
  );
};