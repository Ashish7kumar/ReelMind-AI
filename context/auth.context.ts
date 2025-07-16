import { createContext,useState } from "react";
import AuthContextType from "@/types/authContext.type";
export const AuthContext=createContext<AuthContextType | null>(null);
