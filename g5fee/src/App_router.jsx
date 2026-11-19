import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { Home} from ".pages/Home";
import { About } from ".pages/About";
import { Contact } from ".pages/Contact";
import { Dashboard } from ".pages/Dashboard";
function PageNotFound() {
    return (
        <div 
        className="fyc"
        style={{color:"orange",minHeight:"calc(100dvh - 5rem )"}}>
            <h2>404 Page Not Found</h2>
            <p className="fs2">The page you are looking for does not exist.</p>
            <link to="/" className="fs2" style={{fontWeight:"bold"}}
            >Go back to Home
            </link>
        </div>
    );
}
export function RRD() {
    return (
        <BrowserRouter>
        <nav
        className="bg1 fxc"
        style ={{
            height: "5rem",
        }}
        >
            <link to="/">Home</link>
            <link to="/about">About</link>
            <Link to="/dboard">Dashboard</Link>
        </nav>
        <main className="p2" style={{ height: "calc(100dvh - 5rem"}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dboard" element={<Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
        </BrowserRouter>
    );
}   
                