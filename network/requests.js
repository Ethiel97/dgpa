import { API_BASE_URL } from "../utils";

async function getProjects() {
    let req = await fetch(`${API_BASE_URL}/projects`);

    let res = await req.json();
    return res;
}

async function getProject(id) {
    let req = await fetch(`${API_BASE_URL}/projects/${id}`);

    let res = await req.json();
    return res;
}

async function getProjectsWithFetch() {
    let res = await fetcher(`${API_BASE_URL}/projects`);
    return res;
}

async function updateProject(id, { title, description, previewImage, demoLink, creator, techStackTags, repository }) {
    let req = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, previewImage, demoLink, creator, techStackTags, repository })
    });

    let res = await req.json();
    return res;
}


async function createProject({ title, description, previewImage, demoLink, creator, techStackTags, repository }) {
    let req = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            previewImage,
            demoLink,
            creator,
            techStackTags,
            repository
        })
    });

    let res = await req.json();
    return res;
}


const fetcher = (...args) => fetch(...args).then(res => res.json());

export {
    getProjects,
    createProject,
    getProject,
    updateProject,
    getProjectsWithFetch
};