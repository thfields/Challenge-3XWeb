import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ListTask from "./pages/TaskList";
import NotFound from "./components/NotFound";
import TaskDetails from "./pages/TaskDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}>                                  
                    <Route index element={<Home/>}/> 
                    <Route path="tasks" element={<ListTask/>}/> 
                    <Route path="tasks/:id" element={<TaskDetails/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;