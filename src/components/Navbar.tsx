import Button from "./Button";

export default function Navbar(){
    return (
        <div className="border-b p-2">
            <div className="flex justify-between max-w-screen-xl mx-auto">
                <div className="text-2xl font-bold">
                    CodeWar
                </div>
                <div>
                    <Button onClick={()=>{
                        window.location.href = "https://github.com/abhinayjangde/codeside";
                    }} >Open Source</Button>
                    <Button onClick={()=>{
                        window.location.href = "https://www.youtube.com/@abhinayjangde";
                    }} >YouTube</Button>
                </div>
            </div>
        </div>
    );
}