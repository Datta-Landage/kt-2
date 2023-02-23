import {create} from 'zustand'
const INITIAL_TODO=[
    {
      name: "Todo 1",
      isCompleted: false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      name: "Todo 2",
      isCompleted: false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
    {
      name: "Todo 3",
      isCompleted: false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
    {
      name: "Todo 4",
      isCompleted: false,
      disc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
  ]
interface IStore{
    todos:{
        name:string,
        isCompleted:boolean
    }[];
    input:string;
    setInput: (newInput:string) => void;
    addTodo: () => void



}

const useStore=create<IStore>((set) =>({
    todos:INITIAL_TODO,
    input: '',
    setInput: (newInput:string) => set({
        input:newInput
    }),
    addTodo: () => set((prev) => ({
        todos:[
            ...prev.todos,{
                name:prev.input,
                isCompleted:false
            }
        ],
        input : ''
    })),
   
   
   

}))

export {useStore}