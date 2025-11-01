// props :- protities :- Read only
// we not change change 
// props :- one component to another data pass
// props :- class and function

import React from "react";
import ClassProps from "./ClassProps";
import FunProps from "./FunProps";

function Mainprops(){
    return(
            <div>

            <div className="container">
                <h1 className='bg-info'>Hello props Class compoenent</h1>
                <div className="row">
                    <ClassProps title="car 1" desc="Hello this car 1 " img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*j51ne*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NDg2JGo0OCRsMCRoMA.." />
                    <ClassProps title="car 2" desc="Hello this car 2 " img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?_gl=1*1c18995*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NTU0JGo2MCRsMCRoMA.." />
                    <ClassProps title="car 3" desc="Hello this car 3" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1ptazxp*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NjA0JGoxMCRsMCRoMA.." />
                    <ClassProps title="car 1" desc="Hello this car 1 " img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*j51ne*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NDg2JGo0OCRsMCRoMA.." />
                    <ClassProps title="car 2" desc="Hello this car 2 " img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?_gl=1*1c18995*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NTU0JGo2MCRsMCRoMA.." />
                    <ClassProps title="car 3" desc="Hello this car 3" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1ptazxp*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NjA0JGoxMCRsMCRoMA.." />
                </div>

            </div>

            <div className="container mt-5">
                <h1 className='bg-success'>Hello props Function component</h1>
                <div className="row">
                    <FunProps title="car 1" desc="hello car 1" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?_gl=1*1c18995*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NTU0JGo2MCRsMCRoMA.." />
                    <FunProps title="car 2" desc="hello car 2" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*j51ne*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NDg2JGo0OCRsMCRoMA.." />
                    <FunProps title="car 3" desc="hello car 3" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1ptazxp*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NjA0JGoxMCRsMCRoMA.." />
                    <FunProps title="car 1" desc="hello car 1" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?_gl=1*1c18995*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NTU0JGo2MCRsMCRoMA.." />
                    <FunProps title="car 2" desc="hello car 2" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*j51ne*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NDg2JGo0OCRsMCRoMA.." />
                    <FunProps title="car 3" desc="hello car 3" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1ptazxp*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTg5NTY0NzQkbzIyJGcxJHQxNzU4OTU2NjA0JGoxMCRsMCRoMA.." />
                </div>
            </div>
        </div>
    )
}

export default Mainprops