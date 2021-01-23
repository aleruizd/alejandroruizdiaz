async function getProjects(){
    let config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.TOKEN}`
        }
      }
      let res = await fetch("https://api.vercel.com/v4/projects/",config)
      let message = await res.json();
      return message.projects
}

async function getScreenshots(projects) {
    return  Promise.all(projects.map(async(project) => {
        let res = await fetch(`https://screenshotapi.net/api/v1/screenshot?url=${project.alias[0].domain}`);
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