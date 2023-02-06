import axios from "axios";

const getPlanes = async () => {
    const planes = await axios.get('/api/planes');

    return planes.data
}

const getPlane = async (id) => {
    const plane = await axios.get(`/api/planes/${id}`);

    return plane.data
}

const creatPlane = async (planeDate) => {
    const plane = await axios.post(`/api/planes`, planeDate);

    return plane.data
}

const planesService = {
    getPlanes, getPlane, creatPlane
}

export default planesService;