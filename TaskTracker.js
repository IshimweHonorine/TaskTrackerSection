
const AddTask= (props) => {
    const params=params() 
    
    const [formData,setFormData] =useState({
        taskdescription:"",
        taskstatus:""
    })


    const handleSubmit=(event)=>{
        event.preventDefault()
        props.AddTask(formData,params.id);
        props.fetchAllTask(params.id);
        props.fetchCompletedTask(params.id);
        props.fetchNonCompletedTask(params.id);

    }



  return (
    <div>
        <div>
            <h1 Class='Task'>Task Tracker</h1>

            <AiOutlineClose size={20} Class='' onClick={()=>props?.setOpenModel(!props?.openModel)}/>
        </div>
        <form Class='relative px-4 py-2' onSubmit={(e)=>handleSubmit(e)}>
            {props?.data?.AddTask?.success?<p>{props?.data?.AddTask?.resp?.data?.message}</p>
            :
            <p Class={` ${props?.data?.AddTask?.error} `}>{props?.data?.AddTask?.error?.response?.data?.message}</p>}
            <div Class="mb-4">
                <label Class="">Task name <span Class="text-[red]">*</span></label>
                <input type="text" value={formData.taskdescription} 
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        taskdescription:e.target.value
                    })
                }}
                />
            </div>

            <div Class="mb-4">
                <label>Status</label>
                <input type="text" value={formData.taskstatus} 
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        taskstatus:e.target.value
                    })
                }}
                />
            </div>     

           
            <div>
                <button type='submit' size='sm' Class={` ${props?.data?.AddTask?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.AddTask?.loading? true : false}>
                    {props?.data?.AddTask?.loading?<p Class="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} Class=""/>Submit</p>:'Add Task'}
                </button>
            </div>
        </form>
    </div>
  )
}


const mapState=(data)=>({
    data:data
});

export default connect(mapState,{
    AddTask,
    fetchAllTask,
    fetchCompletedTask,
    fetchNonCompletedTask
}) (AddTask)