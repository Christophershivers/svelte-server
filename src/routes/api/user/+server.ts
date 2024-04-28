import { json } from '@sveltejs/kit';
import type { RequestHandler, RequestEvent } from './$types';

export const GET: RequestHandler = async (e: RequestEvent) => {
    return json(
        {parameter: "test"}
    )
}