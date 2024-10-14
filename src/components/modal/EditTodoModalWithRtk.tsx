import { FormEvent } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hook";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { SetDescription, SetEditModalOpenWithRtk, SetPriority, SetTitle } from "../../redux/features/todo/todoSlice";


const EditTodoModalWithRtk = () => {
  const {editModalOpenWithRtk, id, title, description, priority } = useAppSelector((state)=>state.todo);
  const dispatch = useAppDispatch();


  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    const updatedTodo = {
      id,
      title,
      description,
      priority,
    }
   
  }


    return (
      <>
        <Dialog open={editModalOpenWithRtk} onOpenChange={()=>dispatch(SetEditModalOpenWithRtk(false))}>   
          <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
              <DialogDescription>
                Edit your tasks that you want to change
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">
                    Task
                  </Label>
                  <Input
                    value={title}
                    onChange={(e) => dispatch(SetTitle(e.target.value))}
                    id="task"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="des" className="text-right">
                    Description
                  </Label>
                  <Input
                     value={description}
                     onChange={(e) => dispatch(SetDescription(e.target.value))}
                    id="des"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">
                    Priority
                  </Label>
                  <Select value={priority} onValueChange={(val) => dispatch(SetPriority(val))} required>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a priority" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      <SelectGroup>
                        <SelectLabel>Priority</SelectLabel>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" className="bg-red-500">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
};

export default EditTodoModalWithRtk;