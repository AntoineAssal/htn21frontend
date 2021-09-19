URL = "https://priceisthegoatbackend.herokuapp.com"

export const addDog = async (request) => {
    try {
        const apiRes = await fetch(`${BACKEND_URL}/dog/add`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(request)
        });
        return await apiRes.json(); i
    } catch (error) {
        throw error;
    }
}

export const getDog = async (id) => {
    try {
        const apiRes = await fetch(`${BACKEND_URL}/dog/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        return await apiRes.json();
    } catch (error) {
        throw error;
    }
}
