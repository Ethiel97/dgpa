import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { getProjects, getProject } from '../network/requests';

const Projects: NextPage = ({ projects }) => {

    return (
        <div>

            <section className="py-20 2xl:py-40 bg-blue-50 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="mb-20 text-center">
                        <span className="text-lg text-blue-500 font-bold">What's new here</span>
                        <h2 className="mt-8 text-6xl lg:text-7xl font-bold font-heading">Latest Projects</h2>
                    </div>
                    <div className="flex flex-wrap -mx-5">

                        {
                            //loop through the projects and display them
                            projects.map((project: any) => {
                                return (
                                    <div className="w-full md:w-1/2 lg:w-1/4 p-5" key={project.id}>
                                        <div className="relative h-52">
                                            <a href="#">
                                                <img className="w-full h-full object-cover object-top" src={project.previewImage} alt="" />
                                            </a>
                                            <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                                                <p className="text-xl font-bold">{
                                                    // extract day number from the date string in timestamp
                                                    project.createdAt.split('T')[0].split('-')[2]

                                                    // project.createdAt.split('-')[1]
                                                }</p>
                                                <p className="text-xs uppercase text-gray-300">{
                                                    //extract month from the date string in timestamp and display corresponding month name
                                                    project.createdAt.split('T')[0].split('-')[1]



                                                }</p>
                                            </div>
                                        </div>
                                        <div className="pt-10 pb-14 px-5 bg-white rounded-b-lg">
                                            <a className="inline-block mb-6 py-1 bg-white font-bold rounded-xl text-blue-500" href={project.demoLink}>View project</a>
                                            <a href="#">
                                                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                                                <p className="text-lg text-gray-300" style={
                                                    {
                                                        overflow: 'hidden',
                                                        display: '-webkit-box',
                                                        textOverflow: 'ellipsis',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: '2',
                                                        boxOrient: 'vertical'
                                                    }
                                                } >{project.description}.</p>

                                                {
                                                    project.techStackTags.length > 0 && project?.techStackTags.map((tag: any, index: number) => {
                                                        return (
                                                            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full mt-2 mr-2"
                                                                key={index}>{tag}
                                                            </span>
                                                        )
                                                    }
                                                    )
                                                }
                                            </a>
                                            <div className="my-12"></div>
                                            <p className='mt-3 font-bold'>
                                                <span className="text-gray-500">By {project.creator}</span>
                                            </p>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>

                    {/* <div className="mt-14 lg:mt-20 text-center">
                        <a className="inline-block py-5 px-12 mr-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold transition duration-200" href="#">See all</a>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Projects


//write get data from api and pass it to the component as props using getServerSideProps

export async function getServerSideProps(context: any) {

    let params = context.params;

    let projects = await getProjects();

    console.log("PROJECTS", projects);


    /* projects = projects.sort((a: any, b: any) => {
        return Number(b.id) - Number(a.id)
    }
    ) */


    return {
        props: {
            projects: [
                ...projects,
            ]
        }
    }
}

//we should develop an admin panel to review projects before showing them on the web app
//we should also be able to add new projects to the web app




