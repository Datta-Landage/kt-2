import {create} from 'zustand'
import {persist} from 'zustand/middleware'
const INITIAL_TODO=[
    {
      name: "Fried rice",
      isCompleted: false,
      isTime:false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      name: "chicken",
      isCompleted: false,
      isTime:false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
    {
      name: "Tandoori",
      isTime:false,
      isCompleted: false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
    {
      name: "curry",
      isTime:false,
      isCompleted: false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
  ]
interface IStore{
    todos:{
        name:string,
        isCompleted:boolean
        isTime:boolean
    }[];
    input:string;
    setInput: (newInput:string) => void;
    addTodo: () => void



}

const useStore=create(
  persist<IStore>(
    (set) => ({
      todos:INITIAL_TODO,
      input: '',
      setInput: (newInput:string) => set({
          input:newInput
      }),
      addTodo: () => set((prev) => ({
          todos:[
              ...prev.todos,{
                  name:prev.input,
                  isCompleted:false,
                  isTime:false
              }
          ],
          input : ''
      })),
    }),
    {
      name:'todo-store'
    }

  )
)

export {useStore}