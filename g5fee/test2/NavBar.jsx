import { useAuthStore } from "./useAuthStore"
function Nav1() {
    return null;
}
function Nav2() {
    return null;
}
export function NavBar() {
    const login = useAuthStore((state) => state.isLoggedIn);
    return (
        <>
            <div className="bh5" style={{ borderBottom: "1px solid silver" }}>
                {login ? <Nav1 /> : <Nav2 />}
            </div>
        </>
    )
}