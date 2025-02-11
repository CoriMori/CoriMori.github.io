import React, { useState } from 'react'
import FilterOption from './FilterOption';
import { ProjectData, PROJECT_TAGS } from '../Data/ProjectData';
import ProjectCard from './ProjectCard';

var projects = ProjectData;
var filterOptionsType = [];
var filterOptionsEngine = [];

const Filter = ({ projectUpdate }) => {
    const [filterOpen, setFilterOpen] = useState(false);
    return (
        <div className="filter-dropdown">
            <button className='btn-standard' onClick={() => { setFilterOpen(!filterOpen) }}>Filter</button>
            {
                filterOpen && (
                    <div className="dropdown">
                        <div className='flex flex-col gap-y-2 px-4 sm:px-6 pb-2'>
                            <h3>Project Type:</h3>
                            <FilterOption label={"Personal"} defaultValue={false} onChangeEvent={() => { HandleFilterCheck(filterOptionsType, PROJECT_TAGS.PERSONAL) }} />
                            <FilterOption label={"Professional"} defaultValue={false} onChangeEvent={() => { HandleFilterCheck(filterOptionsType, PROJECT_TAGS.PROFESSIONAL) }} />
                            <h3>Engine:</h3>
                            <FilterOption label={"Unreal Engine 5"} defaultValue={false} onChangeEvent={() => { HandleFilterCheck(filterOptionsEngine, PROJECT_TAGS.UE) }} />
                            <FilterOption label={"Phaser"} defaultValue={false} onChangeEvent={() => { HandleFilterCheck(filterOptionsEngine, PROJECT_TAGS.PHASER) }} />

                        </div>
                        <button className='apply-btn' onClick={() => { ContainsTag(projectUpdate) }}>Apply</button>
                    </div>
                )
            }
        </div>
    )
}

const HandleFilterCheck = (array, tag) => {
    if (array.includes(tag)) {
        let index = array.indexOf(tag);
        if (index > -1) {
            array.splice(index, 1);
        }
    } else {
        array.push(tag);
    }

    return array;
}

const ContainsTag = (projectUpdate) => {
    if (filterOptionsType.length == 0 && filterOptionsEngine == 0) {
        projectUpdate(ProjectData);
        return;
    }

    let tProjects = ProjectData;
    projects = [];

    if (filterOptionsEngine.length != 0 && filterOptionsType.length == 0) {
        FilterProjects(filterOptionsEngine, tProjects);
    } else if (filterOptionsType.length != 0 && filterOptionsEngine.length == 0) {
        FilterProjects(filterOptionsType, tProjects);
    } else {
        for (let i = 0; i < filterOptionsEngine.length; i++) {
            for (let t = 0; t < filterOptionsType.length; t++) {
                tProjects.forEach(p => {
                    if (p.tags.includes(filterOptionsEngine[i]) && p.tags.includes(filterOptionsType[t])) {
                        projects.push(p);
                    }
                });
            }
        }
    }
    projectUpdate(projects);
}

const FilterProjects = (filterArray, projectArray) => {
    for (let i = 0; i < filterArray.length; i++) {
        projectArray.forEach(p => {
            if (p.tags.includes(filterArray[i])) {
                projects.push(p);
            }
        });
    }
}


export default Filter;

