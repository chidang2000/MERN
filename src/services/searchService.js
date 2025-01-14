import httpRequest from '../untils/httpRequest';

const searchService = {
    searchByName: async (query) => {
        try {
            const res = await httpRequest.get('search', {
                params: {
                    q: query,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },
};

export default searchService;
