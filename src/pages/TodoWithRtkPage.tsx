import TodoContainer from "../components/TodoWithRtkQuery/TodoContainer";
import Container from "../components/ui/Container";
import Navbar from "../components/navbar/Navbar";

const TodoWithRtkPage = () => {
    return (
        <>
            <Navbar/>
             <Container> 
               <h1 className="text-center text-3xl font-semibold mb-10">My Todos with RTK Query</h1> 
               <TodoContainer/>
            </Container>
        </>
    );
};

export default TodoWithRtkPage;