const service = {}

service.get = async (type) => {

    return fetch(`https://glamping.webmcdm.dk/${type}`).then((response) => response.json()).catch((error) => console.log(error));

}

export default service;