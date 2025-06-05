import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../LoginPage"
import MainLayout from "../../Layout/MainLayout";


function Approuter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {/* <Route index element={<PostPage />} /> */}
                {/* <Route path="register" element={<RegisterPage/>}/> */}
                <Route path="login" element={<LoginPage/>}/>
                {/* <Route path="Create" element={<CreatePostPage/>}/> */}
            </Route>
        </Routes>
    </BrowserRouter>


}
export default Approuter;