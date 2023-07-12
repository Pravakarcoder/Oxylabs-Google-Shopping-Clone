function NotFound() {
    return (
       <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="text-4xl font-bold"> Whoops...</h1>
        <h2 className="font-extralight animate-pulse">
            It looks like the Product could not be found
        </h2>
       </div>
    )
  }
  
  export default NotFound