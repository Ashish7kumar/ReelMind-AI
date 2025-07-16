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
import { Gem, HomeIcon, LucideFileVideo, Search, WalletCards } from "lucide-react"
import { title } from "process"
import { usePathname } from "next/navigation"
import { useAuthContext } from "@/app/themeProvider"
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
    const context=useAuthContext();
    if(!context)
    {
        throw Error('No Context');
    }
    const {user}=context;
    const path=usePathname();
  return (
   <Sidebar
  
>

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
    ReelMind <span className="text-purple-700">AI</span>
  </h2>
  
</div>
<h2 className="text-lg text-gray-400 text-center mt-2">AI Short Video Generator</h2>
</div>

      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent>
        <SidebarGroup />
        <div className="mx-3 mt-8">
            <Link href={'/create-new-video'}>
            <Button className="w-full bg-purple-500 hover:bg-purple-700 cursor-pointer">Create New Video</Button>
        </Link>
        </div>
        <SidebarMenu >
          {sidebarItems.map((menu)=>(
            <SidebarMenuItem key={menu.url} className="mt-2 mx-3">
  <SidebarMenuButton
    isActive={menu.url === path}
    className={`p-5 rounded-md flex items-center gap-4 transition-colors duration-200 ${
      menu.url === path
        ? "!bg-purple-200 !text-purple-700"
        : "hover:text-purple-700 hover:bg-violet-100 text-black"
    }`}
  >
    <Link href={menu.url} className="flex items-center gap-4 w-full">
      <menu.icon className="w-5 h-5" />
      <span className="text-inherit">{menu.title}</span>
    </Link>
  </SidebarMenuButton>
</SidebarMenuItem>

          ))}
        </SidebarMenu>
</SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent> 
      <SidebarFooter>
        <div className='p-5 border rounded-lg mb-6 bg-purple-500 text-white'>
            <div className="flex items-center justify-between">
            <Gem/>
            <h2>{user?.credits} Credit{user?.credits >= 1 ? 's' : ''} Left</h2>

            </div>
            <Button className="w-full mt-3 bg-white text-black hover:text-purple-500 hover:bg-purple-100 cursor-pointer">Buy More Credits</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}