import { FormEvent, useEffect } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hook";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { SetEditModalOpenWithRtk, SetUpdatedData, TProperty } from "../../redux/features/todo/todoSlice";
import { useUpdateTodoMutation } from "../../redux/features/api/api";


const EditTodoModalWithRtk = () => {
  const {editModalOpenWithRtk, updatedData: { title, description, priority}, todoId  } = useAppSelector((state)=>state.todo);
  const dispatch = useAppDispatch();
  const [updateTodo, {isLoading, isSuccess}] = useUpdateTodoMutation();


  const handleChange = (property:TProperty, value:string) => {
    dispatch(SetUpdatedData({property, value}))
  }


  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    updateTodo({
      id:todoId,
      data:{ 
        title,
        description,
        priority
      }
    }) 
  }

    //close modal after updating todo
    useEffect(()=> {
      if(isSuccess){
          dispatch(SetEditModalOpenWithRtk(false))
      }
    },[isSuccess, dispatch])





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
                    onChange={(e) => handleChange('title', e.target.value)}
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
                     onChange={(e) => handleChange('description', e.target.value)}
                    id="des"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">
                    Priority
                  </Label>
                  <Select value={priority} onValueChange={(val) => handleChange('priority', val)} required>
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
                <Button disabled={isLoading} type="submit" className="disabled:cursor-not-allowed">{isLoading ? 'Processing...' : "Save Chnages"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
};

export default EditTodoModalWithRtk;