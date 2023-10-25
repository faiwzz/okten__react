import {spaceXService} from "../spaceXService/spaceXService";

import {urls} from "../../constants/urls";

const launchService = {
    getAll: () => spaceXService.get(urls.launches)
}

export {
    launchService
}