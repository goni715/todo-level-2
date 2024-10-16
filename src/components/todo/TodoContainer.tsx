import { useAppSelector } from "../../redux/hook/hook";
import AddTodoModal from "../modal/AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
  const { todos } = useAppSelector((state)=>state.todo);


  
    return (
      <>
        <div>
          <div className="flex justify-between mb-5">
            <AddTodoModal />
            <TodoFilter />
          </div>
          <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
            <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
              {todos?.map((item, i) => (
                <TodoCard key={i.toString()} {...item}/>
              ))}
              {todos?.length === 0 && (
                  <div className="bg-white text-2xl font-bold flex justify-center items-center rounded-md">
                    <p>There is no task pending</p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </>
    );
};

export default TodoContainer;