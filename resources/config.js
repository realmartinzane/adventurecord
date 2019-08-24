let api_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'https://adventurecord.dev/api/';
        break;
    case 'production':
        api_url = 'https://adventurecord.com/api/';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}