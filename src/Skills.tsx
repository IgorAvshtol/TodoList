import React from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {AppRootStateType} from "./test-task/test-task";
// import {
//     addSkillAC,
//     changePurchaseStatusAC,
//     changeSkillTitleAC,
//     deleteSkillAC, filterPurchaseStatusAC,
//     SkillsType
// } from "./test-task/Skills-reducer";
// import "./Skills.css";
// import {EditableSpan} from "./EditableSpan";
// import {Checkbox} from "@material-ui/core";
//
//
// export const Skills = React.memo(function () {
//     console.log('llll');
//     const skillsOfRedux = useSelector<AppRootStateType, SkillsType>(state => state.skills)
//     console.log(skillsOfRedux);
//
//     const dispatch = useDispatch()
//
//
//     const deleteSkillFromRedux = (id: string) => {
//         dispatch(deleteSkillAC(id))
//     }
//
//     let [titleSkill, setTitleSkill] = useState("")
//
//     let [error, setError] = useState<string>("")
//
//
//     const addSkill = () => {
//         if (titleSkill.trim() !== "") {
//             dispatch(addSkillAC(titleSkill.trim()))
//             // addSkillFromRedux()
//             setTitleSkill("");
//         } else {
//             setError("Title is required");
//         }
//     }
//
//
//     const deleteSkill = (id: string) => {
//         deleteSkillFromRedux(id)
//     }
//
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setError("")
//         setTitleSkill(e.currentTarget.value)
//     }
//
//     const changeTaskTitle = (id: string, newTitle: string) => {
//         dispatch(changeSkillTitleAC(id, newTitle))
//     }
//
//     const changePurchaseStatus = (id: string, newStatus: boolean) => {
//         dispatch(changePurchaseStatusAC(id, newStatus))
//     }
//
//
//     const filterPurchaseStatus = () => {
//         dispatch(filterPurchaseStatusAC())
//     }
//
//     return (
//         <div>
//             <div>
//                 <b>Skills</b>: <input name={"Skill"} value={titleSkill}
//                                       onChange={onChangeHandler}
//                                       className={error ? "error" : ""}
//             />
//                 <button onClick={addSkill}>+</button>
//                 {error && <div className="error-message">{error}</div>}
//             </div>
//             <div>
//                 <button onClick={filterPurchaseStatus}>active</button>
//             </div>
//             <div>
//                 {
//                     skillsOfRedux.skills.map((s) => {
//                             const onTitleChangeHandler = (newValue: string) => {
//                                 changeTaskTitle(s.id, newValue);
//                             }
//                             const onPurchaseStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//                                 let newStatus = e.currentTarget.checked
//                                 changePurchaseStatus(s.id, newStatus);
//                             }
//                             if (s.skill) {
//                                 return <div key={s.id}>
//                                     <Checkbox
//                                         color="primary"
//                                         onChange={onPurchaseStatusChangeHandler}
//                                     />
//                                     <EditableSpan value={s.skill} onChange={onTitleChangeHandler}/>
//                                     <button onClick={() => deleteSkill(s.id)}>-</button>
//                                 </div>
//                             }
//                         }
//                     )
//                 }
//             </div>
//         </div>
//
//
//     )
// })