async function getProjects(perPage){
      let res = await fetch(`https://api.github.com/users/${process.env.USER}/repos${perPage ? `?per_page=${perPage}` : ''}`)
      return await res.json();
}

async function getScreenshots(projects) {
    return  Promise.all(projects.map(async(project) => {
        let res = await fetch(`https://screenshotapi.net/api/v1/screenshot?url=${project.homepage}`);
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