import { useState } from "react";

 
 
 function Main_home () {



     let [main_career, setMain_career] = useState(0);
     let [group_list, setGroup_list] = useState(["그룹 리스트 정보 넣어야함 "]);
     {/* 리스트 그룹 이름 */}
     let [group_name,setGroup_name]=useState(0);

    {/* 모임 지역 */}
    let [zone,setzone]=useState(0);

    {/* 모집 인원 */}
    let [people, setPeople]=useState(0);

    {/* 리스트 태그 */}
    let [tag,setTag] = useState(0);


    return (
       <div>
        <div className="Main_banner">
            <img alt="#"  src="#"><a href="#"></a></img>
        </div>

         
        <div className="Main_career" href="#">
          직장인을 위한 커리어 업 모임 확인해 보세요 :)
          <span onClick={()=>{setMain_career(커리어 업 모임 상세페이지 함수 만들어야함)}}> 오른쪽 가르키는 화살표 </span>
       </div>
       <div className="Group_list" href="#">
        {  group_list.map(fanction(group_list,i){
            return ( 
                
                <div className="Main_list" href="">
            
                <img alt="#" src="/">//이미지 어떻게 변수?//</img>

                    <h3>{setGroup_name}</h3>
                    <p>{setzone}|모집{setPeople}</p>
                    <p>#{setTag}</p>

                
            

        </div>

            );
        })

        }
       </div>




       </div>
    

    );
 }


 function Group_list () {

 {/* 리스트 그룹 이름 */}
let [group_name,setGroup_name]=useState(0);

 {/* 모임 지역 */}
let [zone,setzone]=useState(0);

 {/* 모집 인원 */}
let [people, setPeople]=useState(0);

 {/* 리스트 태그 */}
 let [tag,setTag] = useState(0);

    return(
        <div className="Main_list" href="">
            
                <img alt="#" src="/">//이미지 어떻게 변수?//</img>

                    <h3>{setGroup_name}</h3>
                    <p>{setzone}|모집{setPeople}</p>
                    <p>#{setTag}</p>

                
            

        </div>

    );
 }



 export default Main_home;