import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { SidebarGroupContent ,SidebarMenu} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { HomeIcon, LucideFileVideo, Search, WalletCards } from "lucide-react"
import { title } from "process"
const sidebarItems=[
    {
        title:'Home',
        url:'/dashboard',
        icon:HomeIcon
    },
    {
        title:'Create New Video',
        url:'/create-new-video',
        icon:LucideFileVideo
    },
    {
        title:'Explore',
        url:'/explore',
        icon:Search
    },
    {
        title:'Billing',
        url:'/billing',
        icon:WalletCards
    }
]
export function AppSidebar() {
  return (
    <Sidebar className="bg-purple-700">
      <SidebarHeader>
        <div>
        <div className="flex items-center gap-3 w-full mt-5">
           
  <Image
    src="/logo3.png"
    alt="logo"
    width={60}
    height={60}
    className="rounded-md"
  />
  <h2 className="text-3xl font-extrabold tracking-tight text-[#333333] font-sans">
    ReelMind <span className="text-purple-500">AI</span>
  </h2>
  
</div>
<h2 className="text-lg text-gray-400 text-center mt-2">AI Short Video Generator</h2>
</div>

      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent>
        <SidebarGroup />
        <div className="mx-5 mt-8">
            <Button className="w-full">Create New Video</Button>
        </div>
        <SidebarMenu >
          {sidebarItems.map((menu)=>(
             <SidebarMenuItem key={menu.url} className="mt-3">
                <SidebarMenuButton className="p-5">
                <Link href={menu?.url} className="flex items-center gap-4 p-3">
                <menu.icon/>
                
                <span>{menu.title}</span></Link>
            </SidebarMenuButton>
             </SidebarMenuItem>
          ))}
        </SidebarMenu>
</SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent> 
      <SidebarFooter />
    </Sidebar>
  )
}