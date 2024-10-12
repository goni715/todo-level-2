import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "../../redux/hook/hook";
import { addTodo } from "../../redux/features/todo/todoSlice";


const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      title: task,
      description,
    }
    dispatch(addTodo(newTodo));
  }


    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary-gradient text-xl font-semibold">
              Add todo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
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
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
};

export default AddTodoModal;