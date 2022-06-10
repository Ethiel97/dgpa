import type { NextPage } from 'next'
import { useState } from 'react'
import { createProject } from '../network/requests';
import { useRouter } from 'next/router'

const Submit: NextPage = () => {
    const router = useRouter();
    const [title, setTitle] = useState('My project')
    const [description, setDescription] = useState('Description')
    const [techStackTags, setTechStackTags] = useState('')
    const [previewImage, setPreviewImage] = useState('https://via.placeholder.com/300x200')
    const [demoLink, setDemoLink] = useState('https://www.google.com')
    const [repository, setRepository] = useState('https://github.com/ethiel97/dgpa')
    const [creator, setCreator] = useState('Ethiel Cohen')


    //write function to submit the form to the server by calling the API to create a new project
    async function submitForm() {
        // e.preventDefault();
        const data = {
            title,
            description,
            techStackTags,
            previewImage,
            demoLink,
            repository,
            creator
        }
        console.log(data);

        try {
            let response = await createProject(data);

            if (response) {
                router.push('/projects');
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <section className="py-20 2xl:py-40 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap items-center -mx-10">
                            <div className="w-full lg:w-1/2 px-10">
                                <div className="px-6 lg:px-20 py-12 lg:py-24 bg-white shadow-2xl rounded-lg">
                                    <form action="#">
                                        <h3 className="mb-10 text-2xl font-bold font-heading">Submit your project</h3>
                                        <div className="flex flex-col items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">

                                            <input value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder="Great project" />
                                        </div>
                                        <div className="flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">

                                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" placeholder="My project description" />
                                        </div>
                                        <div className="flex flex-col items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">

                                            <input value={creator} required onChange={(e) => setCreator(e.target.value)} className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder="Your name" />
                                        </div>
                                        <div className="flex flex-col items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">

                                            <input value={repository} onChange={(e) => setRepository(e.target.value)} required className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder="Repository link" />
                                        </div>
                                        <div className="flex flex-col items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">

                                            <input value={demoLink} onChange={(e) => setDemoLink(e.target.value)} required className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder="Repository link" />
                                        </div>
                                        <div className="flex flex-col items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">

                                            <input value={previewImage} onChange={(e) => setPreviewImage(e.target.value)} required className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="text" placeholder="Preview image link" />
                                        </div>


                                        <button onClick={submitForm} className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-10 mb-16 lg:mb-0 order-first lg:order-last">
                                <div className="max-w-md">
                                    <span className="text-lg text-blue-500 font-bold">Contribute</span>
                                    <h2 className="mt-8 mb-12 text-5xl font-bold font-heading">Fill this form and submit your project</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Submit;
