import TodoContainer from "../components/TodoWithRtkQuery/TodoContainer";
import Container from "../components/ui/Container";

const TodoWithRtkPage = () => {
    return (
        <>
             <Container>
               <h1 className="text-center text-3xl font-semibold my-10">My Todos with RTK Query</h1> 
               <TodoContainer/>
           </Container>
        </>
    );
};

export default TodoWithRtkPage;