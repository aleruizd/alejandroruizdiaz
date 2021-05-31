async function getProjects(perPage){
    let res = await fetch(`https://api.github.com/users/${process.env.USER}/repos${perPage ? `?per_page=${perPage}` : ''}`)
    return await res.json();
}

async function getScreenshots(projects) {
    return  Promise.all(projects.map(async(project) => {
        let res = await fetch(`https://api.apiflash.com/v1/urltoimage?access_key=${process.env.SCREEN_TOKEN}&url=${project.homepage}&response_type=json`);
        return({
            ...project,
            image: await res.json()
        })
    }))
}

export {
    getProjects,
    getScreenshots
}