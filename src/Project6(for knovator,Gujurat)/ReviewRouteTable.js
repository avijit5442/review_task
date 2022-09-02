import { BrowserRouter, Route, Routes } from "react-router-dom";
import GiveReviews from "./GiveReviews";
import Reviews from "./Reviews";

export default function ReviewRouteTable(){
    return(
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<GiveReviews/>}/>
            <Route path="/givereview" element={<GiveReviews/>}/>
            <Route path="/reviews" element={<Reviews/>}/>
         </Routes>
        </BrowserRouter>
        </>
    )
}