import { UserModel } from "../postgres/postgres.js";

export const getAllEmp = async (req,res)=>{
    console.log(hello);
       
    try {
        const users = await UserModel.findAll();
        if(users.length == 0 ){
            return res.status(404).json({"error":"users not found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({"error":"internal server error"})
    }
}

export const getEmp = async (req,res)=>{

  const { id } = req.params;
  
  try {

    const emp = await UserModel.findOne({ where: { id } }); 

    if (emp) {
      return res.status(200).json(emp); 
    }

    return res.status(404).json({ message: "Employee not found" }); 

  } catch (e) {
    
    console.log(e);
    return res.status(500).json({ error: "Internal server error" }); 
    
  }
};

export const addEmp = async (req,res)=>{
    console.log(req.body);
    const {name, email, designation, empId} = req.body;
    try{
    const emp = await UserModel.findOne({where:{empId: String(empId)}})
    if (!emp){
    await UserModel.create(req.body);
    return res.status(201).json({
        message: "emp added successfully",
        data: req.body
      });
    }
    return res.status(200).json({message: "already found"})
    
    }catch(e){
    console.log(e)
    return res.status(500).json({"error":"internal server error"})
    }
}
    
export const updateEmp = async (req, res) => {
    console.log(req.body);
    const { id } = req.params; 
    const { name, email, designation, empId } = req.body; 
  
    try {
      const emp = await UserModel.findOne({ where: { id } });
      
      if (emp) {
        await emp.update(req.body);
        return res.status(200).json({
          message: "Employee updated successfully",
          data: req.body,
        });
      }
  
      return res.status(404).json({ message: "Employee not found" });
  
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const deleteEmp = async (req, res) => {
    const { id } = req.params; 
  
    try {
      const emp = await UserModel.findOne({ where: { id } });
      
      if (emp) {
        await emp.destroy(); 
        return res.status(200).json({
          message: "Employee deleted successfully",
        });
      }
  
      return res.status(404).json({ message: "Employee not found" });
  
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  
  
