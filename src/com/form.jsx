function Form({setList, item, setItem, edit, setEdit}){
    function submit(e){
        e.preventDefault();
        if(item == ''){
            return
        }
        if(!edit.bool){
            setList((currentList)=>{
                return [
                    ...currentList, 
                    {'content': item, 'checked': false, 'key': crypto.randomUUID()}
                ]
            });
        }else{
            setList((prev)=>{
                let modified = prev.filter(element=>{return element.key == edit.key})[0];
                let array=[];
                prev.forEach(element => {
                    if(element.key != edit.key){
                        array.push(element);
                    }else{
                        array.push({'content': item, 'checked': modified.checked, 'key': modified.key})
                    }
                });
                return array
            });
            setEdit({bool: false, key: ''});
        }
        setItem('');
    }
    return(
        <>
            <form className='justify-between flex items-center w-full'>
                <input type="text" placeholder='New task' value={item} onChange={e=>{setItem(e.target.value)}} className='text-2xl bg-transparent placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'/>
                <button onClick={e=>{submit(e)}} type="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-xl'>Add</button>
            </form>
        </>
    )
}

export default Form;