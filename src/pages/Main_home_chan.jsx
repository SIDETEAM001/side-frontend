import { useState } from "react";

 
 
 function Main_home () {



     let [main_career, setMain_career] = useState(0);


    return (
       <div>
        <div className="Main_banner">
            <img alt="#"  src="#"><a href="#"></a></img>
        </div>

         
        <div className="Main_career" href="#">
          직장인을 위한 커리어 업 모임 확인해 보세요 :)
          <span onClick={()=>{setMain_career(커리어 업 모임 상세페이지 함수 만들어야함)}}> > </span>
       </div>
       <div className="Group_list" href="#">
        <ul>
            <li></li>
        </ul>
       </div>




       </div>
    

    );
 }

 {/* 리스트 그룹 이름 */}
let [group_name,setGroup_name]=useState(0);

 {/* 모임 지역 */}
let[zone,setzone]=useState(0);

 {/* 모집 인원 */}
let[]

 function Group_list () {

    return(
        <div className="Main_list" href="">
            <ul>
                <li>

                </li>
            </ul>

        </div>

    );
 }



 export default Main_home;