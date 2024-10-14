import { FormEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useAddTodoMutation } from "../../redux/features/api/api";


const AddTodoModalWithRtk = () => {
  const [open, setOpen] = useState(false)
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [addTodo, {isLoading, isSuccess}] = useAddTodoMutation();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      title: task,
      description,
      priority,
    }
    addTodo(newTodo);
  }


  //close modal after creating todo
  useEffect(()=> {
    if(isSuccess){
        setOpen(false);
    }
  },[isSuccess])





    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={()=>setOpen(true)} className="bg-primary-gradient text-xl font-semibold">
              Add todo
            </Button>
          </DialogTrigger>        
          <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>
                Add your tasks that you want to finish
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">
                    Task
                  </Label>
                  <Input
                    onChange={(e) => setTask(e.target.value)}
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
                    onChange={(e) => setDescription(e.target.value)}
                    id="des"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="des" className="text-right">
                    Priority
                  </Label>
                  <Select onValueChange={(val)=> setPriority(val)} required>
                    <SelectTrigger className="col-span-3">
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
                <Button type="submit">{isLoading ? "Processing..." : "Save Todo"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
};

export default AddTodoModalWithRtk;