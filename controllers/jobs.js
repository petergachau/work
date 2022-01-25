const getAllJobs=(req,res)=>{
    res.send('get all jobs')
  }
  const getJob=(req,res)=>{
    res.send('get a job')
  }
  const createJob=(req,res)=>{
    res.send('create a job')
  }
  
  const updateJob=(req,res)=>{
    res.send('update a job')
  }
  const deleteJob=(req,res)=>{
    res.send('delete a job')
  }
  
  module.exports={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    
  }