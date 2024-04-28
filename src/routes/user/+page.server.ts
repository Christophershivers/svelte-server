import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        title: "test",
        text: "other test",
        mail: "dfjokfk"
    };
}) satisfies PageServerLoad;