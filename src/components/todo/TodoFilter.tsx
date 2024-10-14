import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hook";
import { FilterTodos } from "../../redux/features/todo/todoSlice";


const TodoFilter = () => {
  const { filterPriority } = useAppSelector((state)=>state.todo);
  const dispatch = useAppDispatch()




    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Button className="bg-primary-gradient text-xl font-semibold">Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={filterPriority}
              onValueChange={(val)=>dispatch(FilterTodos(val))}
            >
              <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="medium">
                Medium
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
};

export default TodoFilter;