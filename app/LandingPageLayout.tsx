import Header from "@/components/navbar/Header";
import Providers from "./providers";
import Footer from "@/components/navbar/Footer";

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

