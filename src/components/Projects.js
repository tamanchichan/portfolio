import React, { useEffect, useState } from "react";

// Uses ASP.NET Core Web API, Hosted/Deployed on Render
let url = "https://asp-dot-net-core-web-api-projects.onrender.com/api/projects";

// Uses GitHub API
// let url = "https://api.github.com/users/tamanchichan/repos";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch(url, { method: "GET" })
    //         .then(response => response.json())
    //         .then(data => {
    //             setProjects(data);
    //         })
    //         .catch(error => console.error("Error fetching projects:", error));
    // }, []);

    // using async
    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch(url, { method: "GET" });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json()

                setProjects(data);
            }
            catch (error) {
                console.error("Error fetching projects:", error)
            }
            finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                {loading ? (
                    <p>Loading Projects. . .</p>
                ) : (
                    projects.map(project => (
                        <div className="project" key={project.id}>
                            <h3>
                                <a href={project.demoUrl ? project.demoUrl : project.githubUrl} target="_blank">
                                    {project.name}
                                </a>
                            </h3>
                            {project.descriptions.map((description, index) => (
                                <p key={index}>{description}</p>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Projects;