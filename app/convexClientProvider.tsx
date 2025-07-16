"use client"
import React from "react";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import Provider from "./themeProvider";
  console.log(process.env.NEXT_PUBLIC_CONVEX_URL)
 const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const ConvexClientProvider = ({children}:{children:React.ReactNode}) => {
      
      
     
  return (
     <ConvexProvider client={convex}>
        <Provider>
    {children}
    </Provider>
    </ConvexProvider>
  )
}

export default ConvexClientProvider