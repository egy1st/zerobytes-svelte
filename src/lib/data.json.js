import { client } from '$lib/contentfulClient';

export async function get() {
    // get all blogs from Contentful
    const projects = await client.getEntries({
        content_type: 'project'
    });

    if (projects) {
        return {
            status: 200,
            body: {
                projects
            }
        };
    }

    return {
        status: 404
    };
}



