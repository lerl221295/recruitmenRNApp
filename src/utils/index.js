/* eslint-disable react/destructuring-assignment */

/**
 * Descarga de de datos usando Fetch
 *
 * @param  {*}       url     URL para solicitar datos
 * @param  {*}       options opciones del Request
 * @return {Promise}         Fetch promise
 */
export const fetchData = (url, options) => {
    const fetchRequest = new Request(url,
      Object.assign({}, options || {}, {credentials: 'omit'}));

    return fetch(fetchRequest)
        .then((response) => {
            if (!response.ok) {
                return response.json()
                    .then((result) => {
                        let message = result.message || result['error-message'] || result.details;

                        if (result.code) {
                            message = `${message}\n (Code: ${result.code})`;
                        }

                        throw Error(
                            message,
                            {
                                status: response.status,
                                statusText: response.statusText,
                                result
                            }
                        );
                    });
            }

            return response.json()
                .then((result) => ({ result }));
        });
};