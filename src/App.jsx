import React, { useState } from 'react'
import Filter from './Components/Filter'
import Header from './Components/Header'
import ProjectCard from './Components/ProjectCard'
import { ProjectData } from './Data/ProjectData'
import AboutLayout from './Components/AboutLayout'

const App = () => {
  const [isAboutVisible, showAboutSection] = useState(false);
  const [isProjectsVisible, showProjectSection] = useState(false);
  const [isDefaultNameVisible, setDefaultName] = useState(true);
  const [projects, setProjects] = useState(ProjectData);
  const HandleClickAbout = () => {
    showAboutSection(true);
    showProjectSection(false);
    setDefaultName(false);
  }

  const HandleClickProject = () => {
    showProjectSection(true);
    showAboutSection(false);
    setDefaultName(false);
  }

  return (
    <main>
      <div className='bg'>
        <Header onClickAbout={() => HandleClickAbout()} onClickProject={() => HandleClickProject()} />
        <div className='wrapper'>
          <NameAndTitle isDefault={isDefaultNameVisible} />
          <div className='flex flex-col'>
            {isProjectsVisible && (
              <section className='all-cards'>
                <Filter projectUpdate={setProjects} />
                <ul>
                  {projects.map((d) => {
                    return <ProjectCard key={d.projectName} projectData={d} />
                  })}
                </ul>
              </section>
            )
            }
            {
              isAboutVisible && (
                <section className='bg-white p-10 rounded-2xl'>
                  <AboutLayout />
                </section>
              )
            }
          </div>
        </div>

      </div>
    </main>
  )
}

const NameAndTitle = ({ isDefault }) => {
  if (!isDefault) {
    return (
      <div className='pt-20 pb-10'>
        <h1 className='text-shadow'>Cori Mori</h1>
        <h2 className='text-shadow'>Game Developer</h2>
      </div>
    )
  }
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='pb-20'>
        <h1 className='text-shadow'>Cori Mori</h1>
        <h2 className='text-shadow'>Game Developer</h2>
      </div>
    </div>
  )
}

export default App