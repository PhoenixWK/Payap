import Header from "@/components/navbar/landing_page-navbar/Header";
import Providers from "./providers";
import Footer from "@/components/navbar/landing_page-navbar/Footer";

export default function LandingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <div>
                <Header />
                    {children}
                <Footer />
            </div>
        </Providers>
    )
}

