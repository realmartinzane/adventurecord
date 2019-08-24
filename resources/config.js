let api_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'http://adventurecord.test/api/v1';
        break;
    case 'production':
        api_url = 'http://adventurecord.com/api/v1';
        break;
}

export const ADV_CONFIG = {
    API_URL: api_url,
}