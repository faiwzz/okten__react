import axios from "axios";

import {baseURL} from "../../constants/urls";

const spaceXService = axios.create({baseURL});

export {
    spaceXService
}