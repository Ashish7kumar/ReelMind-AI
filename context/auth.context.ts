import { createContext,useState } from "react";
interface AuthContextType {
  user: any;
}
export const AuthContext=createContext<AuthContextType | undefined>(undefined);
