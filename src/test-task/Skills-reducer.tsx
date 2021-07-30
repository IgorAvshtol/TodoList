import React from 'react';
import {v1} from "uuid";


export type SkillType = {
    id: string
    skill: string
    status: boolean
}

export type SkillsType = {
    skills: Array<SkillType>
}

const initialState: SkillsType = {
    skills:
        [
            {id: v1(), skill: "", status: true}
        ]
}

export const skillsReducer = (state: SkillsType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-SKILL': {
            return {
                ...state,
                skills: [...state.skills, {id: v1(), skill: action.skill, status: false}]
            }
        }
        case 'DELETE-SKILL': {
            return {
                ...state,
                skills: [...state.skills.filter((s) => s.id !== action.skillId)]
            }
        }
        case 'CHANGE-SKILL-TITLE': {
            let tasks = {...state};
            let task = tasks.skills.find(t => t.id === action.skillId);
            if (task) {
                task.skill = action.newTitle;
            }
            return {...state};
        }
        case 'CHANGE-PURCHASE-STATUS': {
            let tasks = {...state};
            let task = tasks.skills.find(t => t.id === action.purchaseId);
            if (task) {
                task.status = action.newStatus;
            }
            return {...state};
        }
        case 'FILTER-PURCHASE-STATUS': {
            return {
                ...state,
                skills: [...state.skills.filter((s) => s.status === true)]
            }
        }
        default:
            return state;

    }
}

type ActionsType = AddSkillActionType | DeleteSkillActionType | ChangeSkillActionType | ChangePurchaseStatusActionType | FilterPurchaseStatusActionType

export type AddSkillActionType = {
    type: 'ADD-SKILL'
    skill: string
}

export type DeleteSkillActionType = {
    type: 'DELETE-SKILL'
    skillId: string
}

export type ChangeSkillActionType = {
    type: 'CHANGE-SKILL-TITLE'
    skillId: string
    newTitle: string
}

export type ChangePurchaseStatusActionType = {
    type: 'CHANGE-PURCHASE-STATUS'
    purchaseId: string
    newStatus: boolean
}

export type FilterPurchaseStatusActionType = {
    type: 'FILTER-PURCHASE-STATUS'

}


export const addSkillAC = (skill: string): AddSkillActionType => {
    return {type: 'ADD-SKILL', skill}
}

export const deleteSkillAC = (skillId: string): DeleteSkillActionType => {
    return {type: 'DELETE-SKILL', skillId}
}

export const changeSkillTitleAC = (skillId: string, newTitle: string): ChangeSkillActionType => {
    return {type: 'CHANGE-SKILL-TITLE', skillId, newTitle}
}

export const changePurchaseStatusAC = (purchaseId: string, newStatus: boolean): ChangePurchaseStatusActionType => {
    return {type: 'CHANGE-PURCHASE-STATUS', purchaseId, newStatus}
}

export const filterPurchaseStatusAC = () => {
    return {type: 'FILTER-PURCHASE-STATUS'}
}