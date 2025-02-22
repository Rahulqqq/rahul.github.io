import "./Skills.scss";

const skills = [
    { name: 'Java', type: 'framework', weight: 5 },
    { name: 'Spring-Boot', type: 'framework', weight: 3 },
    { name: 'mySQL', type: 'tool', weight: 4 },
    { name: 'React', type: 'framework', weight: 5 },
    { name: 'Express', type: 'framework', weight: 3 },
    { name: 'BitBucket', type: 'tool', weight: 4 },
    { name: 'React-Bootstrap', type: 'framework', weight: 3 },
    { name: 'AWS', type: 'tool', weight: 4 },
    { name: 'EJS', type: 'framework', weight: 3 },
    { name: 'Unix', type: 'tool', weight: 3 },
    { name: 'APIs', type: 'framework', weight: 3 },
    { name: 'JavaScript', type: 'language', weight: 4 },
    { name: 'Node', type: 'framework', weight: 4 },
    { name: 'DOM', type: 'language', weight: 5 },
    // { name: 'Mockito', type: 'framework', weight: 3 },
    
    { name: 'jQuery', type: 'framework', weight: 3 },
    { name: 'Mongoose', type: 'framework', weight: 3 },
    { name: 'Python', type: 'language', weight: 4 },
    { name: 'MongoDB', type: 'framework', weight: 4 },
    { name: 'Pytest', type: 'framework', weight: 3 },
]

export function Skills() {
    return (
        <section className="card neumorphism-card-big">
            <h1 className="title">Skills</h1>
            <div id="skills">
                {/* <input type="radio" id="all" name="filter" checked />
                <label class="filter-button neumorphism-button" for="all">All</label>
                <input type="radio" id="language" name="filter" />
                <label class="filter-button neumorphism-button" for="language">Languages</label>
                <input type="radio" id="framework" name="filter" />
                <label class="filter-button neumorphism-button" for="framework">Frameworks</label>
                <input type="radio" id="tool" name="filter" />
                <label class="filter-button neumorphism-button" for="tool">Tools</label> */}
                {
                    skills.map((item, i) => 
                        (<div key={i} skill-type={item.type} skill-weight={item.weight} data-aos="zoom-in">
                            {item.name}
                        </div>)
                    )
                }
            </div>
        </section>
    )
}