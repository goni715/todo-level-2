import Navbar from "../components/navbar/Navbar";
import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";



const TodoPage = () => {
    return (
        <>
        <Navbar/>
           <Container>
               <h1 className="text-center text-3xl font-semibold mb-10">My Todos</h1> 
               <TodoContainer/>
           </Container>
        </>
    );
};

export default TodoPage;