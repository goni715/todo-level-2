import { useGetTodosQuery } from "../../redux/features/api/api";
import { useAppSelector } from "../../redux/hook/hook";
import AddTodoModalWithRtk from "../modal/AddTodoModalWithRtk";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
  const { filterPriority } = useAppSelector((state)=>state.todo);
  const { data, isLoading } = useGetTodosQuery(filterPriority);
  const todos = data?.data;

  // cache behavior-advanced
  //pollingInterval = data refetching after 1000 ms
  //const { data, isLoading } = useGetTodosQuery(undefined, {pollingInterval: 10000});

  //refetchOnMountOrArgChange = data refetching after component onMount
  //const { data, isLoading } = useGetTodosQuery(undefined, {refetchOnMountOrArgChange: true});


  if(isLoading){
    return <p>Loading...</p>
  }

  
    return (
      <>
        <div>
          <div className="flex justify-between mb-5">
            <AddTodoModalWithRtk />
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