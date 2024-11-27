function List({list, setItem, setEdit, setList}){
    
    function removeItem(key){
        setList((prev)=>{
            let array = prev.filter(element=>{return element.key != key});
            return array;
        })
    }

    function editItemChecked(key){
        setList((prev)=>{
            let array = []
            prev.forEach(element => {
                if(element.key == key){
                    element.checked = !element.checked;
                    console.log(element)             
                }
                array.push(element);
            });
            return array;
        })

    }
    function editItemContent(key){
        const TARGET = list.filter(element=>{return element.key == key})[0];
        setItem(TARGET.content);
        setEdit({bool: true, key: key})
    }

    let htmlElement = list.map((element)=>{
        return (
          <div className='flex justify-between w-full' key={element.key}>
            <input type="checkbox" name="checker" defaultChecked={element.checked} onChange={()=>{editItemChecked(element.key)}}/>
            <li className='first-letter:uppercase'>{element.content}</li>
            <div>
                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-xl' onClick={()=>{editItemContent(element.key)}}>Modify</button>
                <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded text-xl' onClick={()=>{removeItem(element.key)}}>Delete</button>
            </div>
          </div>
        )
    })
    return(
        <ul className='flex flex-col items-start gap-3 text-2xl font-medium px-2 w-full'>
            {htmlElement}
        </ul>
    )
}

export default List;