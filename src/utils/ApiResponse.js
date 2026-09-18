class ApiResponse{
  constructor(statusCode,data,message="Success"){
    this.statusCode=data
    this.data=message
    this.success=statusCode<400
    
  }
}