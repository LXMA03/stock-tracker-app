// Every layout will accept children as a type
import Header from "@/components/Header";

const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <main className="min-h-screen text-gray-400">
            <Header />

            <div className="container py-10">
                {/* Display all children */}
                {children}
            </div>
        </main>
    )
}

export default Layout;