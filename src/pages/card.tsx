const card1=()=>{
    let message:string="This my my first component arrow function in next.js";
    return(

        <div>
            <h1 className="text-red-800">
                {message}
            </h1>
        </div>
    )
}
// nextjs component
export const card2=()=>{
    let message:string="This my second arrow function with component in next.js";
   
   return(<div>
        <h2 className="text-blue-700">
            {message}</h2>
    </div>

)}
// export default card1;
export default card2;
// ab hum home page par yh card component show karayain gay