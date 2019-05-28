import { fetchData } from '../utils';

/**
 * API Services
 *
 * @export
 * @class BackendService
 */
class BackendService {
  constructor(config) {
    // INFO: config de la URL de la API, la opción por la variable window es en caso
    // de que Kubernetes setee las vars despues del build que ya usa el process.env
    this.apiURL = config.API_URL;

    this.getData = this.getData.bind(this);

    this.getCandidates = () => this.getData('/candidates');
    this.getTechnologies = () => this.getData('/technologies');
  }

  /**
   * Service call
   *
   * @returns {Promise} Respuesta del endpoint
   * @memberof BackendService
   */
  
  getData(path) {
    const options = {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    };

    return fetchData(`${this.apiURL + path}`, options);
  }

}

export default new BackendService({API_URL: 'https://welcome.dropboy.io'});
