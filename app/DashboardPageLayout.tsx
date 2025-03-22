import Header from "@/components/navbar/dashboard-navbar/header";
import Providers from "./providers";
import SidebarNav from "@/components/navbar/dashboard-navbar/sidebar-nav";

export default function DashboardPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <div className="flex"> 
                <div className="hidden lg:block">
                    <SidebarNav />       
                </div>          
                <div className="flex-1">
                    <Header />
                    {children}
                </div>
            </div>
        </Providers>
    )
}
