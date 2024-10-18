import React, { useState, useEffect } from 'react';
import FetchApi from '../API/FetchApi';

const SkillForm = () => {
    const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillRange, setSkillRange] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [newSkillsArr, setNewSkillsArr] = useState({name: '', range: ''})

  const [skillBtn, setSkillBtn] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await FetchApi.getSkills();
        setSkills(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }    


  const skillClickBtn = () => {
    setSkillBtn((prevState) => !prevState);
  };

  const handleAddSkill = () => {
    if (!skillName) {
      setError('Skill name is required');
      return;
    }

    const newSkill = { name: skillName, range: skillRange };

    setSkills([...skills, newSkill]);
    FetchApi.postSkills(skillName, skillRange);
    setSkillName('');
    setSkillRange('');
    setError('');
  };

  return (
    <section className="skills-section">
        <div className='skills-title'> 
        <h2>Skills</h2> 
        <button onClick={skillClickBtn} className='skills-edit-btn'><img src="../image/edit-svgrepo-com.svg" alt="" />Edit</button>
        </div>
    
       {skillBtn ?
             <div className="skill-form" >
             <div className="input-group">
               <label>Skill name:</label>
               <input
                 type="text"
                 value={skillName}
                 onChange={(e) => setSkillName(e.target.value)}
                 placeholder="Enter skill name"
               />
               {error && <p className="error">{error}</p>}
             </div>
             <div className="input-group">
               <label>Skill range:</label>
               <input
                 type="text"
                 value={skillRange}
                 onChange={(e) => setSkillRange(e.target.value)}
                 placeholder="Enter skill range"
               />
             </div>
             <button onClick={handleAddSkill} className="add-skill-btn">Add Skill</button>
           </div>
        : 
        <></>
        }
       { skills.length == 0 ? 
        <div className="skill-item"><span>Not skills</span></div>
      : 
      <div className="skills-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <span>{skill.name}</span>
          <div className="skill-bar">
            <div
              className="skill-range"
              style={{ width: `${skill.range}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
      }
    </section>
  );
};

export default SkillForm;